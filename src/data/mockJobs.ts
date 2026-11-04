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
    id: "job-mf-hogan",
    title: "Senior Mainframe Developer - Hogan IDS & Core Banking (C2C Only)",
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
    postedAgo: "1 hour ago",
    applicantsCount: 9,
    easyApply: true,
    matchScore: 99,
    description: "JPMorgan Chase is seeking a Senior Mainframe Developer with deep hands-on Hogan IDS and core banking deposit processing (DDA/TDA) experience on an immediate Corp-to-Corp (C2C) contract. You will architect, maintain, and enhance mission-critical banking ledger and deposit transaction workflows using Enterprise COBOL, DB2, JCL, and CICS.",
    skills: ["Hogan IDS", "Enterprise COBOL", "DB2 for z/OS", "JCL", "CICS", "DDA/TDA Deposit Processing", "IBM z/OS", "CA7"],
    responsibilities: [
      "Develop and enhance Hogan IDS core banking application logic supporting demand deposit and time deposit processing workflows.",
      "Analyze business requirements with business analysts and operations teams to define batch and online processing rules.",
      "Modify Enterprise COBOL batch programs, CICS online transactions, and DB2 embedded SQL queries.",
      "Triage batch abends and production incidents using SDSF, File-AID, Xpediter, and Abend-AID.",
      "Integrate legacy core banking feeds with enterprise microservices using z/OS Connect EE and REST interfaces."
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
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-1",
    title: "Senior Mainframe Developer (COBOL, JCL, DB2 - C2C Only)",
    company: "Fidelity Investments",
    companyLogo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    location: "Boston, MA (100% Remote)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$90 - $115/hr C2C ($185,000 - $235,000/yr equivalent)",
    hourlyRate: "$90 - $115/hr C2C",
    postedAgo: "2 hours ago",
    applicantsCount: 14,
    easyApply: true,
    matchScore: 98,
    description: "Fidelity Investments is hiring a Senior Mainframe Consultant on a direct Corp-to-Corp (C2C) contract for our core asset management and trading settlement processing engines. You will lead complex COBOL/DB2 code enhancements, automate JCL production batch cycles, and interface legacy mainframe data with real-time enterprise APIs.",
    skills: ["Enterprise COBOL", "JCL", "DB2 for z/OS", "VSAM KSDS", "CICS", "IBM z/OS", "DFSORT", "Endevor"],
    responsibilities: [
      "Architect and refactor mission-critical COBOL and DB2 batch programs executing over 25M daily transactions.",
      "Diagnose and remediate production abends, optimize JCL batch scheduling windows, and streamline sort utilities.",
      "Work directly with enterprise data architects to optimize DB2 on z/OS table spaces, indexes, and SQL explain plans.",
      "Support hybrid modernization initiatives exposing legacy CICS and DB2 services as RESTful microservices."
    ],
    qualifications: [
      "7+ years of dedicated Mainframe development in Tier-1 financial institutions.",
      "Mastery of Enterprise COBOL, JCL, VSAM, DB2 SQL optimization, and CICS commands.",
      "Proven track record delivering reliable code in fast-turnaround C2C contract environments.",
      "Experience with change management tools (Endevor, Changeman) and automated job schedulers (Control-M, CA7)."
    ],
    benefits: [
      "Guaranteed Net-15 or Net-30 payment terms for Corp-to-Corp vendors",
      "Long-term multi-year contract (12 months initial with annual renewals)",
      "100% remote flexibility across all US time zones",
      "Dedicated vendor support liaison"
    ],
    aboutCompany: "Fidelity Investments is one of the world's largest financial services providers, managing over $11 trillion in customer assets with state-of-the-art enterprise compute infrastructure.",
    recruiter: {
      name: "Heather Sterling",
      role: "Lead Financial C2C Vendor Recruitment @ Fidelity",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-2",
    title: "Lead Mainframe CICS & Systems Specialist (C2C Contract)",
    company: "Bank of America",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Charlotte, NC (100% Remote)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$95 - $125/hr C2C ($195,000 - $260,000/yr equivalent)",
    hourlyRate: "$95 - $125/hr C2C",
    postedAgo: "5 hours ago",
    applicantsCount: 19,
    easyApply: true,
    matchScore: 97,
    description: "Bank of America Global Technology is looking for an experienced Mainframe CICS Specialist for a long-term C2C engagement. The role oversees high-volume online transaction processing, sub-second latency tuning, and MQ Series messaging integration.",
    skills: ["CICS", "Enterprise COBOL", "IBM z/OS", "DB2 for z/OS", "HLASM / Assembler", "CA7"],
    responsibilities: [
      "Manage CICS regions, transaction definitions, thread limits, and storage violation diagnostics.",
      "Design real-time inter-system communication using IBM MQ and TCP/IP sockets on z/OS.",
      "Conduct memory leak profiling and response time tuning for consumer mobile banking transaction backends.",
      "Coordinate with release management for zero-downtime weekend code promotions."
    ],
    qualifications: [
      "8+ years of hands-on CICS transaction processing and COBOL programming.",
      "Deep understanding of z/OS internals, SYSLOG analysis, and dump reading with Omegamon or Mainview.",
      "Ability to engage immediately through an incorporated LLC/Corp on C2C billing."
    ],
    benefits: [
      "High hourly billing rate with prompt bi-weekly direct vendor deposit",
      "Immediate start date with streamlined remote hardware provisioning",
      "Contract extension probability exceeding 90%"
    ],
    aboutCompany: "Bank of America is one of the world's leading financial institutions, serving individual consumers, small and middle-market businesses and large corporations with full banking and investment services.",
    recruiter: {
      name: "Marcus Vance",
      role: "Strategic Vendor Talent Partner @ BofA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-mf-3",
    title: "Mainframe to AWS Cloud Modernization Architect (C2C)",
    company: "Vanguard",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    location: "Malvern, PA (Remote C2C)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Director",
    salary: "$115 - $145/hr C2C ($235,000 - $300,000/yr equivalent)",
    hourlyRate: "$115 - $145/hr C2C",
    postedAgo: "1 day ago",
    applicantsCount: 22,
    easyApply: true,
    matchScore: 94,
    description: "Vanguard is executing an enterprise-wide modernization roadmap to migrate core legacy batch data and business rules to AWS microservices. We seek an elite Mainframe Architect on a Corp-to-Corp contract to bridge COBOL/DB2 workloads with Kafka event streams and cloud data lakes.",
    skills: ["Enterprise COBOL", "IBM z/OS Connect EE", "DB2 for z/OS", "REST APIs", "Python", "JSON"],
    responsibilities: [
      "Decompose legacy monolithic COBOL business rules and reverse-engineer database schemas.",
      "Architect change data capture (CDC) pipelines streaming DB2 z/OS updates to AWS RDS and Kafka topics.",
      "Provide technical advisory to cloud engineering teams on mainframe data types (COMP-3, EBCDIC)."
    ],
    qualifications: [
      "10+ years combining deep Mainframe architecture with cloud and API gateway integration.",
      "Valid US Corp/LLC entity in good standing for C2C contracting."
    ],
    benefits: [
      "Top-tier compensation rate ($115 - $145/hr C2C)",
      "High visibility transformation project shaping enterprise technology strategy"
    ],
    aboutCompany: "Vanguard is an investor-owned investment management company offering low-cost index funds, mutual funds, and wealth management services to over 50 million investors globally.",
    recruiter: {
      name: "David Chen",
      role: "Lead Enterprise Architecture Recruiter",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-mf-4",
    title: "COBOL / Batch Production Support Specialist (C2C Contract)",
    company: "State Farm Insurance",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    location: "Bloomington, IL (100% Remote)",
    workplaceType: "Remote",
    jobType: "Contract",
    contractType: "C2C",
    c2cEligible: true,
    domain: "Mainframe",
    experienceLevel: "Mid-Senior level",
    salary: "$85 - $105/hr C2C ($175,000 - $218,000/yr equivalent)",
    hourlyRate: "$85 - $105/hr C2C",
    postedAgo: "3 hours ago",
    applicantsCount: 11,
    easyApply: true,
    matchScore: 97,
    description: "State Farm is contracting a Batch Production Support Mainframe Engineer on a Corp-to-Corp engagement. Focus is on resolving batch job abends, JCL restarts, incident triage with Abend-AID and File-AID, and SLA enforcement for policy databases.",
    skills: ["Enterprise COBOL", "JCL", "Control-M", "DB2 for z/OS", "DFSORT", "IBM z/OS", "Abend-AID", "File-AID"],
    responsibilities: [
      "Triage critical nightly batch job abends (S0C4, S0C7, S806, S913, S013) within strict SLAs.",
      "Implement emergency hotfixes and permanent JCL / COBOL code remediations via Endevor/ChangeMan.",
      "Fine-tune Control-M / CA7 schedule dependencies, resource pools, and file triggers."
    ],
    qualifications: [
      "6+ years in mainframe level 2 / level 3 production support and troubleshooting.",
      "Expert knowledge of JCL parameters (DISP, DCB, SPACE, COND) and utility tools (IDCAMS, IEBGENER).",
      "Active C2C business entity ready for immediate vendor onboarding."
    ],
    benefits: [
      "Reliable long-term contract with standard on-call rotation bonuses",
      "Immediate project start upon vendor paperwork completion"
    ],
    aboutCompany: "State Farm is the largest property, casualty, and auto insurance provider in the United States, maintaining one of the world's most resilient mainframe private clouds.",
    recruiter: {
      name: "Jessica Taylor",
      role: "Strategic IT Sourcing @ State Farm",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-mf-5",
    title: "Mainframe DB2 Database Administrator & DBA Consultant (C2C)",
    company: "Elevance Health (Anthem)",
    companyLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=120&auto=format&fit=crop&q=80",
    location: "Indianapolis, IN (100% Remote)",
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
    matchScore: 95,
    description: "Elevance Health (formerly Anthem Blue Cross) is seeking a Senior Mainframe DB2 DBA on a C2C basis. You will manage large-scale multi-terabyte healthcare claims databases on IBM z/OS, execute disaster recovery drills, and guide developers on optimal SQL structure.",
    skills: ["DB2 for z/OS", "IBM z/OS", "JCL", "Enterprise COBOL", "File-AID", "VSAM KSDS"],
    responsibilities: [
      "Administer DB2 12/13 for z/OS subsystems, buffer pools, and EDM pools for healthcare claims systems.",
      "Execute database maintenance tasks: REORG, RUNSTATS, COPY, RECOVER, and QUIESCE.",
      "Optimize complex SQL queries, index definitions, and explain tables to eliminate CPU spikes."
    ],
    qualifications: [
      "7+ years of Mainframe DB2 Systems/Database Administration experience.",
      "C2C engagement model ready with business insurance and certificate of liability."
    ],
    benefits: [
      "Comprehensive C2C vendor onboarding with direct weekly timecard approval",
      "Contract duration: 18 months with strong likelihood of extension"
    ],
    aboutCompany: "Elevance Health is a premier health company dedicated to improving lives and addressing health challenges through integrated solutions serving over 115 million individuals.",
    recruiter: {
      name: "Elena Rostova",
      role: "Enterprise Healthcare IT Talent Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  }
];

export const initialApplications: JobApplication[] = [
  {
    id: "app-mf-hogan",
    jobId: "job-mf-hogan",
    jobTitle: "Senior Mainframe Developer - Hogan IDS & Core Banking (C2C Only)",
    company: "JPMorgan Chase & Co.",
    companyLogo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=120&auto=format&fit=crop&q=80",
    location: "Columbus, OH (100% Remote C2C)",
    salary: "$100 - $130/hr C2C",
    contractType: "C2C",
    appliedAt: "Just now",
    status: "Reviewing",
    method: "Easy Apply",
    resumeUsed: "KIRAN_K_INDURI_JPMorganChase_C2C_Tailored_Resume.pdf",
    tailoredResume: generateTailoredResume(mockJobs[0], initialUserProfile),
    notes: "Tailored C2C resume highlighting Hogan IDS DDA/TDA deposit processing, Citi Bank & Capital One tenure, and verified LLC incorporation submitted to Victoria Sterling."
  },
  {
    id: "app-mf-1",
    jobId: "job-mf-1",
    jobTitle: "Senior Mainframe Developer (COBOL, JCL, DB2 - C2C Only)",
    company: "Fidelity Investments",
    companyLogo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    location: "Boston, MA (100% Remote)",
    salary: "$90 - $115/hr C2C",
    contractType: "C2C",
    appliedAt: "Yesterday at 4:30 PM",
    status: "Interviewing",
    method: "Easy Apply",
    resumeUsed: "KIRAN_K_INDURI_FidelityInvestments_C2C_Tailored_Resume.pdf",
    tailoredResume: generateTailoredResume(mockJobs[1], initialUserProfile),
    notes: "Technical phone screen completed with Heather Sterling. Recruiter scheduled 30-min architecture discussion."
  }
];
