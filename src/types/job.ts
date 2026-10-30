export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship";
  experienceLevel: "Entry level" | "Mid-Senior level" | "Director" | "Associate" | "Executive";
  salary: string;
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

export interface UserProfile {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  currentTitle: string;
  currentCompany: string;
  yearsExperience: number;
  skills: string[];
  education: string;
  summary: string;
  resumeFileName: string;
  portfolioUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  appliedAt: string;
  status: "Applied" | "Reviewing" | "Interviewing" | "Offer" | "Rejected";
  method: "Easy Apply" | "External" | "Auto-Apply Agent";
  resumeUsed: string;
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
}
