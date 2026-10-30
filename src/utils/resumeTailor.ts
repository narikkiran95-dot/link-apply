import { Job, UserProfile, TailoredResume } from "@/types/job";

/**
 * Intelligent AI Resume Tailoring Engine:
 * Dynamically adapts the candidate's profile, highlights, and keywords
 * to match the exact requirements, contract model (C2C vs W2), and tech stack of each job.
 */
export function generateTailoredResume(job: Job, profile: UserProfile): TailoredResume {
  const isMainframe = job.domain === "Mainframe" || job.skills.some(s => 
    ["COBOL", "JCL", "DB2", "CICS", "VSAM", "z/OS", "Assembler"].includes(s)
  );

  const isC2C = job.contractType === "C2C" || job.c2cEligible;
  const c2cPrefix = isC2C ? "C2C Principal Consultant" : "Senior Specialist";

  // 1. Generate customized headline
  let tailoredHeadline = "";
  if (isMainframe) {
    tailoredHeadline = `${c2cPrefix} | Mainframe Enterprise Systems (COBOL, JCL, DB2, CICS, z/OS) · Available for ${job.company}`;
  } else {
    tailoredHeadline = `${c2cPrefix} | Modern Software Architecture & Distributed Cloud Systems · Tailored for ${job.company}`;
  }

  // 2. Formulate prioritized skill sets (putting matching skills first)
  const prioritizedSkills = [
    ...job.skills.filter(s => profile.skills.includes(s)),
    ...job.skills.filter(s => !profile.skills.includes(s)),
    ...profile.skills.filter(s => !job.skills.includes(s)).slice(0, 4)
  ];

  // 3. Tailor the Executive Summary to the exact job & C2C status
  let tailoredSummary = "";
  if (isMainframe) {
    tailoredSummary = `Results-oriented Senior Mainframe Consultant with ${profile.yearsExperience}+ years of hands-on expertise architecting, maintaining, and modernizing critical enterprise legacy infrastructure. Deep specialization in ${job.skills.slice(0, 4).join(", ")}, high-throughput batch scheduling, and low-latency transactional processing. ${isC2C ? `Operating through incorporation (${profile.c2cEntityName || "Independent LLC"}) with immediate availability for nationwide C2C contracts.` : ""}`;
  } else {
    tailoredSummary = `Accomplished Full Stack & Cloud Consultant with ${profile.yearsExperience}+ years designing high-availability web services, event-driven architectures, and modern reactive interfaces. Proven success implementing ${job.skills.slice(0, 4).join(", ")} under high scalability standards. ${isC2C ? `Available for Corp-to-Corp (C2C) engagement with clean contract execution.` : ""}`;
  }

  // 4. Generate custom tailored achievements addressing the job's responsibilities
  const highlightedAchievements: string[] = [];
  if (isMainframe) {
    highlightedAchievements.push(
      `Optimized ${job.skills.includes("DB2") ? "DB2 on z/OS SQL queries and cursors" : "core database access patterns"}, reducing nightly batch runtimes by 38% for enterprise transaction pipelines.`,
      `Engineered fault-tolerant ${job.skills.includes("COBOL") ? "COBOL" : "enterprise"} programs processing 10M+ daily transactions under 99.999% SLA standards.`,
      `Managed end-to-end ${job.skills.includes("CICS") ? "CICS online transaction regions" : "real-time messaging integration"} ensuring sub-second response times for distributed consumer services.`,
      `Spearheaded mainframe modernization and hybrid cloud interfaces incorporating modern automated CI/CD and automated test harnesses.`
    );
  } else {
    highlightedAchievements.push(
      `Architected microservices handling 25M+ monthly requests utilizing ${job.skills.slice(0, 2).join(" & ")}, achieving sub-100ms latency.`,
      `Led modular component architecture that reduced customer onboarding drop-off by 24% while enforcing strict accessibility and performance benchmarks.`,
      `Integrated secure automated deployment pipelines with zero-downtime canary rollouts.`,
      `Spearheaded technical design sessions and mentored cross-functional engineering teams.`
    );
  }

  // 5. Build tailored file name
  const cleanName = profile.fullName.replace(/\s+/g, "_");
  const cleanCompany = job.company.replace(/[^a-zA-Z0-9]/g, "");
  const contractTag = isC2C ? "C2C" : "Direct";
  const fileName = `${cleanName}_${cleanCompany}_${contractTag}_Tailored_Resume.pdf`;

  const c2cNote = isC2C 
    ? `Applying on C2C (Corp-to-Corp) via verified business entity (${profile.c2cEntityName || "Incorporated Consultant"}). Available for immediate start at market standard contract rates ($85 - $115+/hr).` 
    : undefined;

  return {
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    fileName,
    tailoredHeadline,
    tailoredSummary,
    primarySkills: prioritizedSkills.slice(0, 8),
    highlightedAchievements,
    c2cNote
  };
}
