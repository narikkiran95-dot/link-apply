import { NextResponse } from "next/server";
import { mockJobs, initialApplications, initialUserProfile } from "@/data/mockJobs";
import { JobApplication, AutoApplyConfig } from "@/types/job";

// In-memory application store (shared across session requests)
let applications: JobApplication[] = [...initialApplications];
let userProfile = { ...initialUserProfile };

let autoApplyConfig: AutoApplyConfig = {
  isActive: false,
  targetTitles: ["Full Stack", "Frontend", "Backend", "Software Engineer"],
  locations: ["San Francisco, CA", "Remote", "New York, NY"],
  workplaceTypes: ["Remote", "Hybrid"],
  minSalary: 150000,
  maxApplicationsPerDay: 10,
  matchThresholdPercent: 85,
  customCoverNote: "Hi there! I am very excited about this role and how my 6+ years of full-stack engineering and cloud systems experience align with your team's mission."
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";
  const workplaceType = searchParams.get("workplaceType") || "";
  const experienceLevel = searchParams.get("experienceLevel") || "";
  const easyApplyOnly = searchParams.get("easyApply") === "true";

  let filtered = mockJobs.filter(job => {
    if (q) {
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchSkill = job.skills.some((s: string) => s.toLowerCase().includes(q));
      if (!matchTitle && !matchCompany && !matchSkill) return false;
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
      const { jobId, screeningAnswers, notes, customResume, method = "Easy Apply" } = body;
      const targetJob = mockJobs.find(j => j.id === jobId);

      if (!targetJob) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }

      // Check if already applied
      const existing = applications.find(a => a.jobId === jobId);
      if (existing) {
        return NextResponse.json({ error: "Already applied to this job" }, { status: 400 });
      }

      const newApp: JobApplication = {
        id: `app-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        jobId: targetJob.id,
        jobTitle: targetJob.title,
        company: targetJob.company,
        companyLogo: targetJob.companyLogo,
        location: targetJob.location,
        salary: targetJob.salary,
        appliedAt: "Just now",
        status: "Applied",
        method: method,
        resumeUsed: customResume || userProfile.resumeFileName,
        notes: notes || "Submitted application via LinkedIn Easy Apply with full profile details.",
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
        return true;
      });

      const appliedNow: JobApplication[] = [];
      const batchLimit = Math.min(candidates.length, autoApplyConfig.maxApplicationsPerDay || 5);

      for (let i = 0; i < batchLimit; i++) {
        const targetJob = candidates[i];
        const newApp: JobApplication = {
          id: `app-auto-${Date.now()}-${i}`,
          jobId: targetJob.id,
          jobTitle: targetJob.title,
          company: targetJob.company,
          companyLogo: targetJob.companyLogo,
          location: targetJob.location,
          salary: targetJob.salary,
          appliedAt: "Just now (AI Agent)",
          status: "Applied",
          method: "Auto-Apply Agent",
          resumeUsed: userProfile.resumeFileName,
          notes: `Applied automatically via AI Auto-Apply Bot (Match Score: ${targetJob.matchScore}%). Verified contact, experience, and custom pitch note.`
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
