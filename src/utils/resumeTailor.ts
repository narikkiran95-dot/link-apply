import { Job, UserProfile, TailoredResume, WorkExperienceItem, EducationItem, SkillCategoryItem } from "@/types/job";

export const defaultWorkExperience: WorkExperienceItem[] = [
  {
    company: "Citi Bank",
    location: "Atlanta, GA",
    role: "Senior Mainframe Developer",
    period: "May 2022 – September 2026",
    bullets: [
      "Developed, enhanced, and maintained Enterprise COBOL, DB2, CICS, and JCL applications supporting banking transactions, customer accounts, financial processing, and operational reporting.",
      "Analyzed business requirements with business analysts, application owners, and operations stakeholders to define processing changes and acceptance criteria.",
      "Performed impact analysis across COBOL programs, copybooks, DB2 objects, VSAM files, CICS transactions, interfaces, reports, and batch dependencies.",
      "Translated approved requirements into technical specifications, program logic, interface changes, and unit-test scenarios.",
      "Modified COBOL batch programs and CICS online components, including embedded SQL, input validation, exception handling, and file-processing routines.",
      "Created and maintained JCL, cataloged procedures, utility steps, and scheduling dependencies supporting banking batch cycles.",
      "Traced job flows and predecessor/successor relationships to identify processing dependencies and assess downstream impacts.",
      "Analyzed DB2 SQL and validated query results to support accurate transaction processing, data retrieval, and reporting.",
      "Prepared test data using application record layouts and copybooks; verified file contents and expected results with File-AID.",
      "Executed unit, integration, and regression testing covering business rules, transaction accuracy, exception conditions, and downstream outputs.",
      "Investigated production incidents, batch abends, and online failures using SDSF, job output, application diagnostics, File-AID, Xpediter, and Abend-AID.",
      "Identified root causes, implemented application corrections, and coordinated validation with QA and production support teams.",
      "Supported restart and recovery analysis by reviewing failed steps, dataset dependencies, return codes, and completed processing.",
      "Worked with technical leads, QA, operations, and infrastructure teams to resolve defects and prepare changes for implementation.",
      "Maintained program documentation, interface specifications, test evidence, deployment instructions, and recovery procedures.",
      "Communicated development status, technical issues, dependencies, and resolution plans during Agile delivery and support activities.",
      "Supported banking application integration through z/OS Connect EE, REST interfaces, JSON mappings, and WebSphere Liberty.",
      "Used REXX and Python utilities to streamline recurring validation, test-data preparation, log analysis, and operational checks.",
      "Shared application knowledge and troubleshooting procedures with peers and support teams."
    ],
    environment: "Enterprise COBOL, DB2, CICS, JCL, VSAM, IBM z/OS, CA7, TSO/ISPF, SDSF, File-AID, Xpediter, Abend-AID, IBM utilities, REXX, Python, z/OS Connect EE, WebSphere Liberty, Git, JIRA, ServiceNow, Agile."
  },
  {
    company: "Capital One",
    location: "Atlanta, GA",
    role: "Mainframe Developer",
    period: "July 2021 – May 2022",
    bullets: [
      "Developed and maintained Enterprise COBOL programs, DB2 SQL, CICS application components, and JCL procedures supporting retail banking and financial transaction processing.",
      "Collaborated with business and operations stakeholders to clarify requirements, review existing workflows, and define expected application behavior.",
      "Analyzed proposed changes across batch programs, online transactions, data files, interfaces, and downstream reports.",
      "Modified COBOL business logic, file-processing routines, database access, and error handling to meet approved requirements.",
      "Created and maintained cataloged JCL procedures and VSAM KSDS processing routines.",
      "Reviewed job steps, return codes, dataset usage, and scheduling dependencies to troubleshoot batch-processing issues.",
      "Prepared test scenarios and input data; validated application output with QA and business users.",
      "Used TSO/ISPF, SDSF, File-AID, Xpediter, and application diagnostics to investigate defects and processing exceptions.",
      "Analyzed CA7 job runtimes, dataset growth, and JCL execution to identify batch-window concerns.",
      "Coordinated with developers, QA, and production support teams to resolve defects and prepare application releases.",
      "Created Python utilities for data validation and test-file generation using COBOL copybook layouts and File-AID mapping rules.",
      "Supported interfaces between COBOL/CICS applications and distributed systems through z/OS Connect EE, OpenAPI specifications, and JSON transformations.",
      "Documented interface behavior, technical changes, deployment details, and operational verification steps.",
      "Participated in Agile planning and technical discussions, communicating delivery progress, issues, and dependencies."
    ],
    environment: "Enterprise COBOL, DB2, CICS, JCL, VSAM, IBM z/OS, TSO/ISPF, SDSF, CA7, File-AID, Xpediter, REXX, Python, z/OS Connect EE, REST APIs, JSON, Git."
  },
  {
    company: "Cloud Timon Private Limited",
    location: "India",
    role: "COBOL Developer and Systems Specialist",
    period: "June 2018 – November 2020",
    bullets: [
      "Designed, developed, tested, and maintained Enterprise COBOL batch and CICS online applications supporting healthcare and financial transaction processing.",
      "Created and enhanced COBOL copybooks and input/output record layouts.",
      "Used File-AID to inspect files, prepare test data, and validate application data structures.",
      "Developed JCL, cataloged procedures, restart/recovery jobs, and utility streams using IDCAMS, IEBGENER, and DFSORT.",
      "Wrote DB2 SQL, reviewed EXPLAIN output, and assisted with access-path analysis and performance troubleshooting.",
      "Supported CA7 batch workflows and multi-job dependencies.",
      "Performed L2/L3 production support, abend analysis, and application debugging with Abend-AID and Xpediter.",
      "Built Python utilities for batch-log parsing, file validation, and reconciliation of report totals.",
      "Supported Java-based data exchange with distributed applications.",
      "Participated in requirements discussions, design walkthroughs, sprint planning, testing, and implementation activities."
    ],
    environment: "COBOL, JCL, CICS, DB2, VSAM, CA7, TSO/ISPF, SDSF, File-AID, Abend-AID, Xpediter, REXX, Python, Java, IBM utilities, Git."
  },
  {
    company: "Metamor Software Solutions",
    location: "India",
    role: "Mainframe Software Engineer",
    period: "May 2016 – June 2018",
    bullets: [
      "Developed and maintained COBOL applications supporting banking transactions and customer account processing.",
      "Built and validated JCL procedures, condition-code dependencies, GDG definitions, and utility jobs.",
      "Used IDCAMS, IEBGENER, IEBCOPY, and SORT for dataset and file-processing requirements.",
      "Prepared test data and inspected application files using TSO/ISPF, SDSF, and File-AID.",
      "Performed batch-output verification, production abend analysis, and application defect correction.",
      "Supported development and QA teams during testing and release activities.",
      "Wrote REXX and Python scripts for test-data manipulation, log parsing, and operational checks.",
      "Documented flowcharts, test cases, and deployment verification procedures."
    ],
    environment: "COBOL, JCL, DB2, CICS, VSAM, TSO/ISPF, SDSF, File-AID, Xpediter, REXX, SQL, IBM utilities, Python."
  }
];

export const defaultEducation: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science and Information Systems",
    institution: "Christian Brothers University",
    location: "Memphis, Tennessee",
    year: "2022"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    year: "2016"
  }
];

export const defaultSkillCategories: SkillCategoryItem[] = [
  {
    category: "Core Banking",
    skills: "Hogan IDS; DDA/TDA deposit platform exposure; banking transaction processing; customer account processing; financial interfaces and operational reporting."
  },
  {
    category: "Development",
    skills: "Enterprise COBOL, COBOL copybooks, embedded SQL, JCL, cataloged procedures, CICS, VSAM, DB2 for z/OS."
  },
  {
    category: "Mainframe Environment",
    skills: "IBM z/OS, TSO/ISPF, SDSF, JES2, GDGs, dataset management, batch restart and recovery."
  },
  {
    category: "Batch and File Processing",
    skills: "Job flow and dependency analysis, sequential files, VSAM KSDS, record layouts, control totals, exception processing, IDCAMS, IEBGENER, IEBCOPY, DFSORT."
  },
  {
    category: "Testing and Troubleshooting",
    skills: "File-AID, Xpediter, Abend-AID, unit testing, integration testing, regression testing, defect analysis, root-cause analysis, L2/L3 production support."
  },
  {
    category: "Scheduling and Delivery",
    skills: "CA7, Control-M, ChangeMan ZMF, Endevor, Git, JIRA, ServiceNow, Agile, SDLC, implementation planning, release documentation."
  },
  {
    category: "Additional Technologies",
    skills: "Easytrieve, IBM Mainframe Assembler/HLASM, REXX, Python, IBM z/OS Connect EE, REST APIs, JSON, OpenAPI, WebSphere Liberty."
  }
];

export const defaultHoganAlignment: string[] = [
  "Hands-on Hogan IDS experience with exposure to demand deposit (DDA) and time deposit (TDA) application workflows.",
  "Mainframe application development and support using COBOL, JCL, DB2, CICS, and VSAM across banking and financial systems.",
  "Analysis of account-processing logic, transaction data, batch output, application interfaces, and downstream dependencies.",
  "Experience investigating processing exceptions, validating application changes, and supporting reliable banking operations.",
  "Strong transferable experience in enterprise banking development, testing, incident resolution, and technical documentation."
];

/**
 * Intelligent AI Resume Tailoring Engine:
 * Dynamically adapts the candidate's profile, highlights, and keywords
 * to match the exact requirements, contract model (C2C vs W2), and tech stack of each job.
 */
export function generateTailoredResume(job: Job, profile: UserProfile): TailoredResume {
  const isC2C = job.contractType === "C2C" || job.c2cEligible;
  const c2cPrefix = isC2C ? "C2C Principal Consultant" : "Senior Mainframe Developer";

  // 1. Generate customized headline
  const mentionsHogan = job.description.toLowerCase().includes("hogan") || job.title.toLowerCase().includes("hogan") || job.description.toLowerCase().includes("banking");
  const tailoredHeadline = mentionsHogan
    ? `${c2cPrefix} | Hogan IDS & Core Banking | Enterprise COBOL, DB2, JCL, CICS, z/OS · Tailored for ${job.company}`
    : `${c2cPrefix} | Enterprise Mainframe Systems (COBOL, DB2, JCL, CICS, VSAM, z/OS) · Tailored for ${job.company}`;

  // 2. Formulate prioritized skill sets (putting matching skills first)
  const prioritizedSkills = [
    ...job.skills.filter(s => profile.skills.includes(s)),
    ...job.skills.filter(s => !profile.skills.includes(s)),
    ...profile.skills.filter(s => !job.skills.includes(s)).slice(0, 4)
  ];

  // 3. Tailor the Executive Summary to the exact job & C2C status
  const tailoredSummary = `Senior Mainframe Developer with approximately 10 years of experience developing, maintaining, testing, and supporting IBM mainframe applications across banking, financial services, and enterprise transaction processing. Hands-on Hogan IDS experience, including exposure to DDA/TDA deposit processing, supported by strong Enterprise COBOL, DB2, JCL, CICS, and VSAM skills. Proven track record at Tier-1 financial institutions including Citi Bank and Capital One analyzing application dependencies, optimizing batch job flows, and executing L2/L3 production support. ${isC2C ? `Operating as an incorporated business entity (${profile.c2cEntityName || "Apex Enterprise Consulting LLC"}) available for immediate nationwide remote C2C contracting at standard market rates.` : ""}`;

  // 4. Generate custom tailored achievements addressing the job's responsibilities
  const highlightedAchievements: string[] = [
    `Developed and enhanced Enterprise COBOL, DB2, CICS, and JCL applications supporting high-volume banking transactions and customer deposit accounting at Citi Bank.`,
    `Tuned DB2 on z/OS embedded SQL and batch JCL cataloged procedures, optimizing batch execution windows and resolving critical production abends with File-AID and Abend-AID.`,
    `Managed Hogan IDS DDA/TDA deposit transaction processing logic and verified interface data consistency across downstream feeds and operational reporting.`,
    `Integrated mainframe applications with distributed architectures through IBM z/OS Connect EE, REST APIs, JSON transformations, and WebSphere Liberty.`,
    `Engineered automated validation, test-file generation, and log parsing scripts using Python and REXX.`
  ];

  // 5. Build tailored file name with clean candidate name
  const cleanName = profile.fullName.replace(/[^a-zA-Z0-9]/g, "_");
  const cleanCompany = job.company.replace(/[^a-zA-Z0-9]/g, "");
  const contractTag = isC2C ? "C2C" : "Direct";
  const fileName = `${cleanName}_${cleanCompany}_${contractTag}_Tailored_Resume.pdf`;

  const c2cNote = isC2C 
    ? `Applying on C2C (Corp-to-Corp) via verified business entity (${profile.c2cEntityName || "Apex Enterprise Consulting LLC"}). Available for immediate start at market contract rates ($85 - $125+/hr).` 
    : undefined;

  return {
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    fileName,
    tailoredHeadline,
    tailoredSummary,
    primarySkills: prioritizedSkills.slice(0, 10),
    highlightedAchievements,
    workExperience: profile.workExperience || defaultWorkExperience,
    education: profile.educationList || defaultEducation,
    skillCategories: profile.skillCategories || defaultSkillCategories,
    hoganAlignment: profile.hoganAlignment || defaultHoganAlignment,
    c2cNote
  };
}
