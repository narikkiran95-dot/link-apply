import { Job, UserProfile, JobApplication } from "@/types/job";
import { 
  generateTailoredResume, 
  defaultWorkExperience, 
  defaultEducation, 
  defaultSkillCategories, 
  defaultHoganAlignment 
} from "@/utils/resumeTailor";

export const initialUserProfile: UserProfile = {
  fullName: "KIRAN K INDURI",
  headline: "Senior Mainframe Developer | Hogan IDS | COBOL, DB2, JCL",
  email: "narik.kiran95@gmail.com",
  phone: "+1 (770) 695-7976",
  location: "United States (Available Nationwide 100% Remote C2C)",
  currentTitle: "Senior Mainframe Developer",
  currentCompany: "Citi Bank",
  yearsExperience: 10,
  primaryDomain: "Mainframe",
  skills: [
    "Hogan IDS",
    "Enterprise COBOL",
    "DB2 for z/OS",
    "JCL",
    "CICS",
    "VSAM KSDS",
    "IBM z/OS",
    "DDA/TDA Deposit Processing",
    "Core Banking",
    "TSO/ISPF",
    "SDSF",
    "CA7",
    "Control-M",
    "File-AID",
    "Xpediter",
    "Abend-AID",
    "ChangeMan ZMF",
    "Endevor",
    "IBM z/OS Connect EE",
    "REST APIs",
    "JSON",
    "REXX",
    "Python",
    "IDCAMS",
    "DFSORT",
    "Easytrieve",
    "HLASM / Assembler"
  ],
  skillCategories: defaultSkillCategories,
  hoganAlignment: defaultHoganAlignment,
  workExperience: defaultWorkExperience,
  educationList: defaultEducation,
  education: "M.S. in Computer Science & Information Systems (Christian Brothers University, 2022) | B.Tech in Computer Science (JNTU, 2016)",
  summary: "Senior Mainframe Developer with approximately 10 years of experience developing, maintaining, testing, and supporting IBM mainframe applications across banking, financial services, and enterprise transaction processing. Hands-on Hogan IDS experience, including exposure to DDA/TDA deposit processing, supported by strong Enterprise COBOL, DB2, JCL, CICS, and VSAM skills. Experienced in translating business requirements into technical specifications, analyzing application dependencies, implementing batch and online enhancements, and resolving production incidents. Strong background in file processing, job flow analysis, embedded SQL, test-data preparation, reconciliation, and release support.",
  resumeFileName: "KIRAN_K_INDURI_Senior_Mainframe_Hogan_Master_Resume.pdf",
  resumeFileSize: "296 KB",
  resumeLastUpdated: "Updated today",
  portfolioUrl: "https://linkedin.com/in/kiran-k-induri",
  githubUrl: "https://github.com/narikkiran95-dot",
  linkedinUrl: "https://linkedin.com/in/kiran-k-induri",
  c2cEntityName: "Apex Enterprise Consulting LLC",
  taxId: "XX-XXX8921"
};

export const mockJobs: Job[] = [
  {
    id: "job-mf-citi",
    title: "Senior Mainframe Developer - Hogan IDS & DDA Deposit Core Banking (C2C Only)",
    company: "Citi Bank",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Atlanta, GA (100% Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$105 - $135/hr C2C ($215,000 - $280,000/yr equivalent)",
    hourlyRate: "$105 - $135/hr C2C",
    postedAgo: "1 hour ago",
    applicantsCount: 7,
    easyApply: true,
    matchScore: 99,
    description: "Citi Bank Global Technology is contracting a Senior Mainframe Developer on an immediate Corp-to-Corp (C2C) engagement. The role supports mission-critical Hogan IDS demand deposit (DDA) and time deposit (TDA) platforms, Enterprise COBOL enhancements, DB2 for z/OS embedded SQL, and JCL batch processing.",
    skills: ["Hogan IDS", "Enterprise COBOL", "DB2 for z/OS", "JCL", "CICS", "DDA/TDA Deposit Processing", "IBM z/OS", "CA7"],
    responsibilities: [
      "Maintain, enhance, and support Hogan IDS core banking transaction flows and deposit accounting logic.",
      "Analyze business requirements with analysts and operations stakeholders to design batch and online program modifications.",
      "Modify Enterprise COBOL programs, copybooks, DB2 objects, and CICS online components.",
      "Triage batch abends and production incidents using SDSF, File-AID, Xpediter, and Abend-AID.",
      "Interface legacy banking transactions with distributed microservices via IBM z/OS Connect EE and REST interfaces."
    ],
    qualifications: [
      "8+ years of dedicated Mainframe banking development with hands-on Hogan IDS exposure.",
      "Mastery of Enterprise COBOL, DB2 on z/OS, JCL cataloged procedures, VSAM, and CICS.",
      "Active US LLC entity in good standing for immediate C2C vendor onboarding."
    ],
    benefits: [
      "Top-tier hourly C2C compensation ($105 - $135/hr)",
      "Long-term engagement (12 months initial with annual renewals)",
      "100% remote flexibility with prompt vendor bi-weekly direct deposit"
    ],
    aboutCompany: "Citi Bank is one of the world's leading global financial institutions, serving millions of consumers, corporations, and institutional clients across the globe.",
    recruiter: {
      name: "Heather Sterling",
      role: "Lead VP of Core Banking & C2C Vendor Staffing @ Citi Bank",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-capitalone",
    title: "Senior Mainframe Systems Engineer - Batch & Online Processing (C2C Only)",
    company: "Capital One",
    companyLogo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    location: "Atlanta, GA (100% Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$95 - $125/hr C2C ($195,000 - $260,000/yr equivalent)",
    hourlyRate: "$95 - $125/hr C2C",
    postedAgo: "2 hours ago",
    applicantsCount: 11,
    easyApply: true,
    matchScore: 98,
    description: "Capital One is contracting an experienced Senior Mainframe Developer on a C2C basis for our retail banking transaction and account management platforms. You will engineer Enterprise COBOL batch routines, DB2 SQL queries, CICS transactions, and JCL cataloged procedures.",
    skills: ["Enterprise COBOL", "DB2 for z/OS", "JCL", "CICS", "VSAM KSDS", "CA7", "Python", "IBM z/OS"],
    responsibilities: [
      "Develop and enhance Enterprise COBOL and DB2 programs supporting retail banking transaction workflows.",
      "Analyze CA7 job runtimes and JCL execution to resolve batch-window bottlenecks.",
      "Create Python utilities for test-data generation and validation of COBOL copybook layouts.",
      "Support z/OS Connect EE REST interfaces linking mainframe data to distributed applications."
    ],
    qualifications: [
      "8+ years of Mainframe development experience in enterprise banking environments.",
      "Strong background in file processing, job dependency analysis, and Abend-AID/Xpediter debugging.",
      "Active C2C LLC business entity ready for immediate vendor contract execution."
    ],
    benefits: [
      "Guaranteed prompt vendor payment terms (Net-15 / Net-30)",
      "High probability of multi-year contract renewal",
      "100% remote work arrangement"
    ],
    aboutCompany: "Capital One is a diversified banking company providing financial products and services to consumers, small businesses, and commercial clients.",
    recruiter: {
      name: "Marcus Vance",
      role: "Strategic Mainframe Sourcing Partner @ Capital One",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-jpmorgan",
    title: "Senior Mainframe Developer - Hogan IDS Deposit Core (C2C Only)",
    company: "JPMorgan Chase & Co.",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Columbus, OH (100% Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$100 - $130/hr C2C ($205,000 - $270,000/yr equivalent)",
    hourlyRate: "$100 - $130/hr C2C",
    postedAgo: "3 hours ago",
    applicantsCount: 9,
    easyApply: true,
    matchScore: 99,
    description: "JPMorgan Chase is seeking a Senior Mainframe Developer with hands-on Hogan IDS and core banking deposit processing (DDA/TDA) experience on an immediate Corp-to-Corp (C2C) contract. You will architect, maintain, and enhance mission-critical banking ledger and deposit transaction workflows using Enterprise COBOL, DB2, JCL, and CICS.",
    skills: ["Hogan IDS", "Enterprise COBOL", "DB2 for z/OS", "JCL", "CICS", "DDA/TDA Deposit Processing", "IBM z/OS", "CA7"],
    responsibilities: [
      "Develop and enhance Hogan IDS core banking application logic supporting demand deposit and time deposit processing workflows.",
      "Analyze business requirements with business analysts and operations teams to define batch and online processing rules.",
      "Modify Enterprise COBOL batch programs, CICS online transactions, and DB2 embedded SQL queries.",
      "Triage batch abends and production incidents using SDSF, File-AID, Xpediter, and Abend-AID."
    ],
    qualifications: [
      "8+ years of dedicated Mainframe development experience with hands-on Hogan IDS core banking platform exposure.",
      "Mastery of Enterprise COBOL, JCL cataloged procedures, VSAM, CICS, and DB2 on z/OS.",
      "Active US LLC / business entity in good standing ready for immediate C2C vendor onboarding."
    ],
    benefits: [
      "Top-tier hourly C2C billing rate ($100 - $130/hr)",
      "Long-term multi-year contract engagement (12 months initial with annual renewals)",
      "100% remote flexibility across US time zones with vendor direct deposit"
    ],
    aboutCompany: "JPMorgan Chase & Co. is a leading global financial services firm with assets of over $3.7 trillion and operations worldwide, processing trillions in daily global transaction volume.",
    recruiter: {
      name: "Victoria Sterling",
      role: "Vice President - Core Banking & C2C Vendor Talent",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-wellsfargo",
    title: "Lead Mainframe Developer - Core Banking & Transaction Systems (C2C)",
    company: "Wells Fargo",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    location: "Charlotte, NC (100% Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$95 - $125/hr C2C ($195,000 - $260,000/yr equivalent)",
    hourlyRate: "$95 - $125/hr C2C",
    postedAgo: "5 hours ago",
    applicantsCount: 14,
    easyApply: true,
    matchScore: 97,
    description: "Wells Fargo is contracting a Senior Mainframe Specialist for core banking ledger and high-volume transaction processing on IBM z/OS. Deep proficiency in Enterprise COBOL, DB2 SQL optimization, CICS regions, and CA7 batch scheduling is required.",
    skills: ["Enterprise COBOL", "DB2 for z/OS", "CICS", "JCL", "IBM z/OS", "Control-M", "VSAM KSDS"],
    responsibilities: [
      "Lead application code enhancements across COBOL copybooks, DB2 tables, and VSAM datasets.",
      "Conduct memory leak profiling and response time tuning for consumer deposit backends.",
      "Coordinate release packaging with ChangeMan ZMF and Endevor."
    ],
    qualifications: [
      "8+ years of hands-on Mainframe COBOL, DB2, and CICS transaction processing.",
      "Demonstrated experience supporting financial services and deposit accounting backends.",
      "Available for immediate C2C engagement through verified US business entity."
    ],
    benefits: [
      "High hourly billing rate with prompt bi-weekly direct vendor deposit",
      "Immediate start date with streamlined remote hardware provisioning",
      "Contract extension probability exceeding 90%"
    ],
    aboutCompany: "Wells Fargo & Company is a leading financial services company that has approximately $1.9 trillion in assets, proudly serving one in three U.S. households.",
    recruiter: {
      name: "David Chen",
      role: "Lead Financial Technology Recruiter @ Wells Fargo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-mf-bofa",
    title: "Senior Mainframe Systems & Batch Architect (C2C Contract)",
    company: "Bank of America",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Charlotte, NC (100% Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$95 - $120/hr C2C ($195,000 - $250,000/yr equivalent)",
    hourlyRate: "$95 - $120/hr C2C",
    postedAgo: "1 day ago",
    applicantsCount: 16,
    easyApply: true,
    matchScore: 96,
    description: "Bank of America Global Technology is seeking a Senior Mainframe Architect on a C2C engagement. The role oversees high-volume online transaction processing, sub-second latency tuning, and MQ Series messaging integration on z/OS.",
    skills: ["Enterprise COBOL", "DB2 for z/OS", "CICS", "JCL", "MQ Series", "HLASM / Assembler"],
    responsibilities: [
      "Manage CICS regions, transaction definitions, thread limits, and storage diagnostics.",
      "Design real-time inter-system communication using IBM MQ and TCP/IP sockets on z/OS.",
      "Execute database maintenance tasks: REORG, RUNSTATS, and index optimization."
    ],
    qualifications: [
      "8+ years of hands-on CICS transaction processing and COBOL programming.",
      "Deep understanding of z/OS internals, SYSLOG analysis, and dump reading with Omegamon or Mainview."
    ],
    benefits: [
      "Comprehensive C2C vendor onboarding with direct weekly timecard approval",
      "Contract duration: 18 months with strong likelihood of extension"
    ],
    aboutCompany: "Bank of America is one of the world's leading financial institutions, serving individual consumers, small and middle-market businesses and large corporations with full banking and investment services.",
    recruiter: {
      name: "Elena Rostova",
      role: "Enterprise Banking Talent Lead @ BofA",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  }
];

export const initialApplications: JobApplication[] = [
  {
    id: "app-mf-citi",
    jobId: "job-mf-citi",
    jobTitle: "Senior Mainframe Developer - Hogan IDS & DDA Deposit Core Banking (C2C Only)",
    company: "Citi Bank",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Atlanta, GA (100% Remote C2C)",
    salary: "$105 - $135/hr C2C",
    contractType: "C2C",
    appliedAt: "Just now",
    status: "Reviewing",
    method: "Easy Apply",
    resumeUsed: "KIRAN_K_INDURI_CitiBank_C2C_Tailored_Resume.pdf",
    tailoredResume: generateTailoredResume(mockJobs[0], initialUserProfile),
    notes: "Tailored C2C resume highlighting 4+ years of proven Citi Bank mainframe experience (May 2022 - September 2026), Hogan IDS DDA/TDA deposit processing, and verified LLC incorporation submitted to Heather Sterling."
  },
  {
    id: "app-mf-capitalone",
    jobId: "job-mf-capitalone",
    jobTitle: "Senior Mainframe Systems Engineer - Batch & Online Processing (C2C Only)",
    company: "Capital One",
    companyLogo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    location: "Atlanta, GA (100% Remote C2C)",
    salary: "$95 - $125/hr C2C",
    contractType: "C2C",
    appliedAt: "Yesterday at 3:15 PM",
    status: "Interviewing",
    method: "Easy Apply",
    resumeUsed: "KIRAN_K_INDURI_CapitalOne_C2C_Tailored_Resume.pdf",
    tailoredResume: generateTailoredResume(mockJobs[1], initialUserProfile),
    notes: "Technical phone screen completed with Marcus Vance. Re-engagement interview scheduled based on previous Capital One mainframe delivery."
  },
  {
    id: "app-mf-jpmorgan",
    jobId: "job-mf-jpmorgan",
    jobTitle: "Senior Mainframe Developer - Hogan IDS Deposit Core (C2C Only)",
    company: "JPMorgan Chase & Co.",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Columbus, OH (100% Remote C2C)",
    salary: "$100 - $130/hr C2C",
    contractType: "C2C",
    appliedAt: "2 days ago",
    status: "Reviewing",
    method: "Easy Apply",
    resumeUsed: "KIRAN_K_INDURI_JPMorganChaseCo_C2C_Tailored_Resume.pdf",
    tailoredResume: generateTailoredResume(mockJobs[2], initialUserProfile),
    notes: "Submitted C2C application for Hogan IDS deposit core banking team. Recruiter Victoria Sterling acknowledged receipt."
  }
];
