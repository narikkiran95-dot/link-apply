import { Job, UserProfile, JobApplication } from "@/types/job";

export const initialUserProfile: UserProfile = {
  fullName: "Alex Rivera",
  headline: "Senior Full Stack Software Engineer | React, TypeScript, Next.js, Node.js, Python",
  email: "alex.rivera.dev@gmail.com",
  phone: "+1 (555) 234-5678",
  location: "San Francisco, CA (Open to Remote)",
  currentTitle: "Full Stack Software Engineer",
  currentCompany: "CloudScale Technologies",
  yearsExperience: 6,
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "REST APIs",
    "System Design"
  ],
  education: "B.S. in Computer Science - University of California, Berkeley (2018 - 2022)",
  summary: "Results-driven Software Engineer with 6+ years of hands-on experience building high-throughput web applications, scalable distributed backends, and modern responsive frontend interfaces. Passionate about developer tooling, real-time collaboration, and clean architecture.",
  resumeFileName: "Alex_Rivera_Senior_FullStack_Resume.pdf",
  portfolioUrl: "https://alexrivera.dev",
  githubUrl: "https://github.com/alexrivera",
  linkedinUrl: "https://linkedin.com/in/alex-rivera-dev"
};

export const mockJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (Next.js & Node.js)",
    company: "Stripe",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$165,000 - $210,000 · Full Benefits · Equity",
    postedAgo: "1 day ago",
    applicantsCount: 42,
    easyApply: true,
    matchScore: 96,
    description: "Stripe is seeking an experienced Senior Full Stack Engineer to build next-generation merchant billing and checkout experiences. You will collaborate directly with product managers, designers, and infrastructure teams to deliver high-reliability services used by millions of businesses worldwide.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS", "System Design"],
    responsibilities: [
      "Architect and ship user-facing payment checkout flows with sub-second latency.",
      "Lead cross-functional technical initiatives across payments and customer onboarding.",
      "Mentor mid-level and junior engineers through rigorous code reviews and design docs.",
      "Partner with security and compliance teams to ensure strict PCI-DSS safety standards."
    ],
    qualifications: [
      "5+ years of software engineering experience in high-growth SaaS environments.",
      "Deep mastery of TypeScript, modern React, Next.js, and server-side runtimes.",
      "Solid foundation in relational databases, SQL optimization, and distributed messaging.",
      "Strong product intuition with empathy for user experience and edge case handling."
    ],
    benefits: [
      "Competitive base salary + comprehensive stock equity package",
      "Unlimited paid time off (PTO) and paid family leave",
      "Comprehensive medical, dental, and vision insurance with 100% premium coverage",
      "$3,000 annual home office setup and continuous learning stipend"
    ],
    aboutCompany: "Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world's largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities.",
    recruiter: {
      name: "Sarah Jenkins",
      role: "Lead Technical Recruiter at Stripe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-2",
    title: "Staff Frontend Architect",
    company: "Figma",
    companyLogo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&auto=format&fit=crop&q=80",
    location: "New York, NY",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$185,000 - $240,000 · Equity Grants",
    postedAgo: "3 hours ago",
    applicantsCount: 18,
    easyApply: true,
    matchScore: 92,
    description: "Join Figma's Core Editor team to push the boundaries of what is possible in the browser. You will craft high-performance interactive canvassing tools, real-time multiplayer syncing, and reusable UI components that delight millions of designers and product creators.",
    skills: ["React", "TypeScript", "WebAssembly", "Canvas API", "Performance Optimization", "Tailwind CSS"],
    responsibilities: [
      "Drive architecture decisions for the core canvas rendering engine and interaction model.",
      "Eliminate frame drops and optimize 60fps rendering in complex enterprise design files.",
      "Collaborate with WebAssembly and WebGL systems engineers on hybrid rendering pipelines.",
      "Evangelize best frontend engineering practices across the entire engineering organization."
    ],
    qualifications: [
      "6+ years of dedicated frontend engineering with profound DOM & browser runtime expertise.",
      "Demonstrated track record of shipping complex interactive interfaces or graphics tools.",
      "Expertise with TypeScript, WebGL/Canvas rendering, or complex state synchronization.",
      "Clear, persuasive technical communication and collaborative mindset."
    ],
    benefits: [
      "Generous equity and yearly refresh grants",
      "Hybrid work flexibility (2 days in-office, 3 days remote)",
      "Wellness stipend, gym reimbursement, and fertility benefits",
      "Catered lunches and snacks in modern downtown offices"
    ],
    aboutCompany: "Figma connects everyone in the design process so teams can deliver better products, faster. Free, collaborative, and entirely browser-based, Figma brings together designers, engineers, and stakeholders.",
    recruiter: {
      name: "Marcus Vance",
      role: "Director of Talent Acquisition @ Figma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-3",
    title: "AI Full Stack Engineer",
    company: "Anthropic",
    companyLogo: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=120&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$190,000 - $260,000 + Top-tier Equity",
    postedAgo: "5 hours ago",
    applicantsCount: 65,
    easyApply: true,
    matchScore: 89,
    description: "Anthropic is looking for a versatile Full Stack Engineer to build tools, interfaces, and platforms that power the next generation of safe AI assistants. You will bridge advanced language model research with delightful, reliable end-user applications.",
    skills: ["Python", "TypeScript", "React", "Next.js", "FastAPI", "Docker", "LLM APIs"],
    responsibilities: [
      "Build fluid streaming user experiences for conversational AI interfaces.",
      "Create high-throughput APIs and evaluation pipelines to test model reasoning and safety.",
      "Design telemetry, observability, and latency optimization dashboards.",
      "Work closely with AI safety researchers to implement novel steerability mechanisms."
    ],
    qualifications: [
      "Strong fluency across modern Python backends and TypeScript frontends.",
      "Experience deploying production LLM or machine learning-driven web applications.",
      "Commitment to AI safety, product reliability, and high-quality software craftsmanship.",
      "Self-directed problem solver capable of flourishing in a fast-evolving research lab."
    ],
    benefits: [
      "Comprehensive medical, dental, vision, life, and disability plans",
      "Company-wide sabbatical programs and mental health support",
      "Daily gourmet team lunches, dinners, and ergonomic workstation setups",
      "Generous commuter and travel stipends"
    ],
    aboutCompany: "Anthropic is an AI safety and research company that builds reliable, interpretable, and steerable AI systems. We are creating state-of-the-art AI models that align with human values.",
    recruiter: {
      name: "Elena Rostova",
      role: "AI Engineering Talent Partner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-4",
    title: "Senior Backend Engineer (Distributed Systems)",
    company: "Datadog",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    location: "New York, NY",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$160,000 - $205,000 · RSUs",
    postedAgo: "2 days ago",
    applicantsCount: 38,
    easyApply: true,
    matchScore: 85,
    description: "Datadog is building the monitoring and security platform for cloud applications. We are seeking a Senior Backend Engineer to join our Distributed Metrics Pipeline team processing tens of trillions of events per day.",
    skills: ["Go", "Python", "Kafka", "PostgreSQL", "AWS", "Docker", "Distributed Systems"],
    responsibilities: [
      "Scale real-time data ingestion pipelines handling millions of points per second.",
      "Optimize low-latency storage engines and query processing layers.",
      "Drive incident root-cause investigations and implement automated self-healing mechanisms.",
      "Contribute to open source telemetry standards and developer observability tools."
    ],
    qualifications: [
      "4+ years building high-concurrency distributed systems in Go, Python, or Java.",
      "Demonstrated experience with event streaming (Kafka, Pulsar) and distributed key-value stores.",
      "Proficiency with Linux kernel internals, networking primitives, and memory profiling.",
      "B.S. in Computer Science or equivalent practical industry experience."
    ],
    benefits: [
      "Competitive compensation package with equity grants",
      "Flexible PTO policy and paid parental leave",
      "401(k) matching program up to 5%",
      "Employee assistance programs and wellness stipends"
    ],
    aboutCompany: "Datadog is the essential monitoring and security platform for cloud applications. We bring together end-to-end traces, metrics, and logs to make applications, infrastructure, and third-party services entirely observable.",
    recruiter: {
      name: "David Chen",
      role: "Senior Tech Recruiter @ Datadog",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "3rd"
    }
  },
  {
    id: "job-5",
    title: "Lead React & React Native Engineer",
    company: "Coinbase",
    companyLogo: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=120&auto=format&fit=crop&q=80",
    location: "Austin, TX",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$170,000 - $225,000 + Crypto Incentive Grants",
    postedAgo: "1 day ago",
    applicantsCount: 51,
    easyApply: true,
    matchScore: 91,
    description: "Coinbase is looking for a Lead Mobile/Web Engineer to shape consumer wallet and trading applications. You will deliver intuitive, bulletproof financial transactions across web and mobile surfaces.",
    skills: ["React", "React Native", "TypeScript", "Tailwind CSS", "GraphQL", "Mobile Security"],
    responsibilities: [
      "Architect shared cross-platform component libraries between web and mobile apps.",
      "Collaborate with security engineers to safeguard cryptographic keys and transaction signatures.",
      "Improve app launch times, network payload efficiency, and offline resilience.",
      "Coordinate releases across Apple App Store, Google Play Store, and web production."
    ],
    qualifications: [
      "5+ years creating production React and React Native client applications.",
      "Deep understanding of native bridges, offline storage, and state management paradigms.",
      "Passion for cryptocurrency, open protocols, and user privacy protection.",
      "Strong track record leading multi-engineer client initiatives."
    ],
    benefits: [
      "100% remote-first company culture with global team offsites",
      "Comprehensive medical, dental, vision, and mental health benefits",
      "Option to receive a portion of salary/bonuses in crypto",
      "Generous sabbatical every 3 years of tenure"
    ],
    aboutCompany: "Coinbase is building the cryptoeconomy—a more fair, accessible, efficient, and transparent financial system enabled by crypto. We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and safely send and receive Bitcoin.",
    recruiter: {
      name: "Jessica Taylor",
      role: "FinTech Talent Lead",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-6",
    title: "Cloud Infrastructure & DevOps Engineer",
    company: "Vercel",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$150,000 - $195,000 · Equity",
    postedAgo: "4 days ago",
    applicantsCount: 29,
    easyApply: true,
    matchScore: 84,
    description: "Vercel's mission is to enable the world to ship the best products. We are looking for an experienced DevOps & Platform Engineer to enhance edge delivery networks, serverless compilation fleets, and automated preview deployments.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "TypeScript", "CI/CD", "Next.js"],
    responsibilities: [
      "Maintain 99.99% availability for global edge network routing billions of requests daily.",
      "Automate multi-cloud provisioning with Terraform and Pulumi.",
      "Improve build pipeline caching and warm-start execution times for Next.js builds.",
      "Participate in on-call rotations and lead proactive disaster recovery drills."
    ],
    qualifications: [
      "4+ years operating cloud infrastructure on AWS, GCP, or Azure.",
      "Expertise with container orchestration (Kubernetes, ECS), CI/CD pipelines, and IaC.",
      "Familiarity with modern JavaScript runtimes (V8, Bun, Node) and edge workers.",
      "Strong scripting abilities in Python, Bash, or TypeScript."
    ],
    benefits: [
      "Work from anywhere in the world",
      "Full coverage health insurance for employees and dependents",
      "$2,500 annual workspace allowance + $1,500 wellness stipend",
      "Flexible vacation time and quarterly recharge days"
    ],
    aboutCompany: "Vercel provides developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web. Creators of Next.js and pioneers of frontend cloud computing.",
    recruiter: {
      name: "Liam O'Connor",
      role: "Platform Recruitment Partner",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  },
  {
    id: "job-7",
    title: "Product Engineer (Growth & Activation)",
    company: "Notion",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=120&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    workplaceType: "Hybrid",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$175,000 - $220,000 · Equity",
    postedAgo: "6 hours ago",
    applicantsCount: 44,
    easyApply: true,
    matchScore: 94,
    description: "Notion is looking for a creative, data-minded Product Engineer to scale user activation, collaboration invites, and self-serve team adoption. You will ship experiments, analyze conversion funnels, and craft intuitive onboarding flows.",
    skills: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "A/B Testing", "Tailwind CSS"],
    responsibilities: [
      "Design and execute high-velocity A/B tests across the user onboarding funnel.",
      "Build delightful collaboration features that help new teams unlock Notion value in minutes.",
      "Partner with growth data scientists to measure experiment statistical significance.",
      "Ensure rapid page load and snappy micro-interactions throughout the product."
    ],
    qualifications: [
      "4+ years building high-quality web products with React and TypeScript.",
      "Proven interest in growth experimentation, product analytics, and customer conversion.",
      "A high aesthetic bar for visual details, typography, and motion design.",
      "Comfort working with full-stack technologies from React components to backend APIs."
    ],
    benefits: [
      "Competitive salary + equity package",
      "100% covered health, dental, and vision insurance",
      "Commuter benefits and $1,500 annual wellness perk",
      "Delicious catered team lunches and baristas in office"
    ],
    aboutCompany: "Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company—and do it exactly the way you want.",
    recruiter: {
      name: "Chloe Miller",
      role: "Product & Design Recruiter at Notion",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "2nd"
    }
  },
  {
    id: "job-8",
    title: "Software Engineer - Developer Platforms",
    company: "GitHub",
    companyLogo: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=120&auto=format&fit=crop&q=80",
    location: "Remote - US",
    workplaceType: "Remote",
    jobType: "Full-time",
    experienceLevel: "Mid-Senior level",
    salary: "$155,000 - $200,000 + Microsoft Stock",
    postedAgo: "3 days ago",
    applicantsCount: 77,
    easyApply: true,
    matchScore: 88,
    description: "GitHub is where 100M+ developers build software. We are looking for an engineer to join the Actions & Automation team, empowering developers to automate CI/CD workflows at unmatched scale.",
    skills: ["TypeScript", "Go", "Docker", "REST APIs", "AWS", "CI/CD", "PostgreSQL"],
    responsibilities: [
      "Scale GitHub Actions backend runners to execute hundreds of millions of workflow minutes.",
      "Build secure secrets management and token minting protocols for CI environments.",
      "Maintain high developer satisfaction through fast, reliable workflow execution.",
      "Collaborate with open source maintainers on automation best practices."
    ],
    qualifications: [
      "4+ years of backend or full-stack software development experience.",
      "Familiarity with container runtimes, virtual machines, and cloud compute orchestration.",
      "Strong debugging abilities in complex distributed cloud environments.",
      "Passion for developer productivity tools and open source software."
    ],
    benefits: [
      "Microsoft 401(k) match and comprehensive health coverage",
      "Flexible work from home options with home office allowance",
      "Tuition assistance and continuous learning programs",
      "Annual charity donation matching up to $15,000"
    ],
    aboutCompany: "GitHub is the complete developer platform to build, scale, and deliver secure software. Over 100 million developers and 90% of Fortune 100 companies trust GitHub to innovate together.",
    recruiter: {
      name: "Brandon Lee",
      role: "Principal Talent Sourcer @ GitHub",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
      connectionDegree: "1st"
    }
  }
];

export const initialApplications: JobApplication[] = [
  {
    id: "app-prev-1",
    jobId: "job-7",
    jobTitle: "Product Engineer (Growth & Activation)",
    company: "Notion",
    companyLogo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=120&auto=format&fit=crop&q=80",
    location: "San Francisco, CA",
    salary: "$175,000 - $220,000",
    appliedAt: "Yesterday at 4:30 PM",
    status: "Reviewing",
    method: "Easy Apply",
    resumeUsed: "Alex_Rivera_Senior_FullStack_Resume.pdf",
    notes: "Application viewed by Chloe Miller. Recruiter reached out regarding phone screen availability."
  },
  {
    id: "app-prev-2",
    jobId: "job-4",
    jobTitle: "Senior Backend Engineer (Distributed Systems)",
    company: "Datadog",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    location: "New York, NY",
    salary: "$160,000 - $205,000",
    appliedAt: "3 days ago",
    status: "Interviewing",
    method: "Easy Apply",
    resumeUsed: "Alex_Rivera_Senior_FullStack_Resume.pdf",
    notes: "Technical phone screen completed with David Chen. Next step: 45-minute system design pairing session."
  }
];
