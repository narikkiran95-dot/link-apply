import { NextResponse } from "next/server";
import { mockJobs, initialApplications, initialUserProfile } from "@/data/mockJobs";
import { JobApplication, AutoApplyConfig, TailoredResume } from "@/types/job";
import { generateTailoredResume } from "@/utils/resumeTailor";

// In-memory application store (shared across session requests)
let applications: JobApplication[] = [...initialApplications];
let userProfile = { ...initialUserProfile };

let autoApplyConfig: AutoApplyConfig = {
  isActive: true,
  targetTitles: ["Hogan IDS", "Mainframe Developer", "COBOL", "CICS", "DB2", "z/OS Consultant"],
  locations: ["Remote", "Columbus, OH", "Boston, MA", "Charlotte, NC"],
  workplaceTypes: ["Remote"],
  minSalary: 185000,
  maxApplicationsPerDay: 5,
  matchThresholdPercent: 85,
  customCoverNote: "Hi there! I am reaching out as a Senior Mainframe Developer with approximately 10 years of experience across banking and financial enterprise transaction processing, including hands-on Hogan IDS (DDA/TDA deposit processing), Enterprise COBOL, DB2, JCL, and CICS. Available immediately for C2C engagement through my verified business entity.",
  c2cOnly: true,
  autoTailorResume: true,
  domainFilter: "Mainframe",
  minHourlyRateC2C: 95
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";
  const workplaceType = searchParams.get("workplaceType") || "";
  const experienceLevel = searchParams.get("experienceLevel") || "";
  const easyApplyOnly = searchParams.get("easyApply") === "true";
  const c2cOnly = searchParams.get("c2cOnly") === "true";
  const domain = searchParams.get("domain") || "all";

  let filtered = mockJobs.filter(job => {
    if (c2cOnly && !(job.contractType === "C2C" || job.c2cEligible)) {
      return false;
    }
    if (domain !== "all" && job.domain !== domain) {
      return false;
    }
    if (q) {
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchSkill = job.skills.some((s: string) => s.toLowerCase().includes(q));
      const matchDomain = (job.domain || "").toLowerCase().includes(q);
      if (!matchTitle && !matchCompany && !matchSkill && !matchDomain) return false;
    }
    if (location) {
      if (!job.location.toLowerCase().includes(location)) return false;
    }
    if (workplaceType && workplaceType !== "all") {
      if (job.workplaceType !== workplaceType) return false;
    }
    if (experienceLevel && experienceLevel !== "all") {
      if (job.experienceLevel !== experienceLevel) return false;
    }
    if (easyApplyOnly && !job.easyApply) {
      return false;
    }
    return true;
  });

  return NextResponse.json({
    jobs: filtered,
    totalCount: filtered.length,
    applications,
    userProfile,
    autoApplyConfig
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === "apply") {
      const { jobId, screeningAnswers, notes, customResume, method = "Easy Apply", tailoredResume } = body;
      const targetJob = mockJobs.find(j => j.id === jobId);

      if (!targetJob) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }

      // Check if already applied
      const existing = applications.find(a => a.jobId === jobId);
      if (existing) {
        return NextResponse.json({ error: "Already applied to this job" }, { status: 400 });
      }

      const effectiveTailoredResume = tailoredResume || generateTailoredResume(targetJob, userProfile);

      const newApp: JobApplication = {
        id: `app-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        jobId: targetJob.id,
        jobTitle: targetJob.title,
        company: targetJob.company,
        companyLogo: targetJob.companyLogo,
        location: targetJob.location,
        salary: targetJob.salary,
        contractType: targetJob.contractType,
        appliedAt: "Just now",
        status: "Applied",
        method: method,
        resumeUsed: effectiveTailoredResume.fileName || customResume || userProfile.resumeFileName,
        tailoredResume: effectiveTailoredResume,
        notes: notes || `Submitted customized C2C application for ${targetJob.company} with tailored resume.`,
        screeningAnswers: screeningAnswers || {}
      };

      // Put at start of applications list
      applications.unshift(newApp);

      return NextResponse.json({
        success: true,
        application: newApp,
        totalApplications: applications.length
      });
    }

    if (action === "preview-tailor") {
      const { jobId } = body;
      const targetJob = mockJobs.find(j => j.id === jobId);
      if (!targetJob) return NextResponse.json({ error: "Job not found" }, { status: 404 });
      const tailored = generateTailoredResume(targetJob, userProfile);
      return NextResponse.json({ success: true, tailoredResume: tailored });
    }

    if (action === "update-profile") {
      const { profile } = body;
      userProfile = { ...userProfile, ...profile };
      return NextResponse.json({ success: true, profile: userProfile });
    }

    if (action === "update-auto-apply") {
      const { config } = body;
      autoApplyConfig = { ...autoApplyConfig, ...config };
      return NextResponse.json({ success: true, config: autoApplyConfig });
    }

    if (action === "run-auto-apply-batch") {
      // Find matching jobs that user hasn't applied to yet
      const appliedJobIds = new Set(applications.map(a => a.jobId));
      const candidates = mockJobs.filter(job => {
        if (appliedJobIds.has(job.id)) return false;
        if (!job.easyApply) return false;
        if (job.matchScore < (autoApplyConfig.matchThresholdPercent || 80)) return false;
        if (autoApplyConfig.c2cOnly && !(job.contractType === "C2C" || job.c2cEligible)) return false;
        if (autoApplyConfig.domainFilter && autoApplyConfig.domainFilter !== "all" && job.domain !== autoApplyConfig.domainFilter) return false;
        return true;
      });

      const appliedNow: JobApplication[] = [];
      const batchLimit = Math.min(candidates.length, autoApplyConfig.maxApplicationsPerDay || 5);

      for (let i = 0; i < batchLimit; i++) {
        const targetJob = candidates[i];
        const tailored = generateTailoredResume(targetJob, userProfile);

        const newApp: JobApplication = {
          id: `app-auto-${Date.now()}-${i}`,
          jobId: targetJob.id,
          jobTitle: targetJob.title,
          company: targetJob.company,
          companyLogo: targetJob.companyLogo,
          location: targetJob.location,
          salary: targetJob.salary,
          contractType: targetJob.contractType,
          appliedAt: "Just now (AI Agent)",
          status: "Applied",
          method: "Auto-Apply Agent",
          resumeUsed: tailored.fileName,
          tailoredResume: tailored,
          notes: `Auto-Applied on C2C basis with custom tailored resume (${tailored.fileName}). Highlighted skills: ${tailored.primarySkills.slice(0, 4).join(", ")}. Corp LLC entity: ${userProfile.c2cEntityName || "Apex Consulting LLC"}.`
        };
        applications.unshift(newApp);
        appliedNow.push(newApp);
      }

      return NextResponse.json({
        success: true,
        appliedCount: appliedNow.length,
        newApplications: appliedNow,
        allApplications: applications
      });
    }

    if (action === "withdraw-application") {
      const { applicationId } = body;
      applications = applications.filter(a => a.id !== applicationId);
      return NextResponse.json({ success: true, applications });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
