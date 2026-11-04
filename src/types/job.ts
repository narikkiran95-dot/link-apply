export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship";
  contractType?: "C2C" | "W2" | "Full-time" | "1099";
  c2cEligible?: boolean;
  domain?: "Mainframe" | "Cloud/Full Stack" | "AI/Data" | "DevOps";
  experienceLevel: "Entry level" | "Mid-Senior level" | "Director" | "Associate" | "Executive";
  salary: string;
  hourlyRate?: string;
  postedAgo: string;
  applicantsCount: number;
  easyApply: boolean;
  matchScore: number; // percentage match with user profile
  description: string;
  skills: string[];
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  aboutCompany: string;
  recruiter: {
    name: string;
    role: string;
    avatar: string;
    connectionDegree: "1st" | "2nd" | "3rd";
  };
}

export interface WorkExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  environment: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface SkillCategoryItem {
  category: string;
  skills: string;
}

export interface TailoredResume {
  jobId: string;
  jobTitle: string;
  company: string;
  fileName: string;
  tailoredHeadline: string;
  tailoredSummary: string;
  primarySkills: string[];
  highlightedAchievements: string[];
  workExperience?: WorkExperienceItem[];
  education?: EducationItem[];
  skillCategories?: SkillCategoryItem[];
  hoganAlignment?: string[];
  c2cNote?: string;
}

export interface UserProfile {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  currentTitle: string;
  currentCompany: string;
  yearsExperience: number;
  primaryDomain: "Mainframe" | "Full Stack" | "DevOps";
  skills: string[];
  skillCategories?: SkillCategoryItem[];
  hoganAlignment?: string[];
  workExperience?: WorkExperienceItem[];
  educationList?: EducationItem[];
  education: string;
  summary: string;
  resumeFileName: string;
  resumeFileSize?: string;
  resumeLastUpdated?: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  c2cEntityName?: string; // e.g. "Apex Enterprise Consulting LLC"
  taxId?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  contractType?: string;
  appliedAt: string;
  status: "Applied" | "Reviewing" | "Interviewing" | "Offer" | "Rejected";
  method: "Easy Apply" | "External" | "Auto-Apply Agent";
  resumeUsed: string;
  tailoredResume?: TailoredResume;
  notes?: string;
  screeningAnswers?: Record<string, string>;
}

export interface AutoApplyConfig {
  isActive: boolean;
  targetTitles: string[];
  locations: string[];
  workplaceTypes: string[];
  minSalary: number;
  maxApplicationsPerDay: number;
  matchThresholdPercent: number;
  customCoverNote: string;
  c2cOnly: boolean;
  autoTailorResume: boolean;
  domainFilter: "all" | "Mainframe" | "Cloud/Full Stack";
  minHourlyRateC2C: number;
}

export interface RecruiterMessage {
  id: string;
  sender: "user" | "recruiter";
  text: string;
  timestamp: string;
  attachment?: string;
}
