# CareerApply - LinkedIn Job Search & Easy Apply Assistant

CareerApply is an intelligent job search, resume matching, and application automation platform modeled for LinkedIn jobs. It helps candidates search verified roles, inspect rich company and hiring team details, review AI match scores, complete step-by-step Easy Apply questionnaires, and automate bulk applications with customizable safeguards.

---

## Features

- **LinkedIn Job Search & Filtering**: Instant keyword search, location filtering, workplace type (Remote/Hybrid/On-site), experience level, and Easy Apply toggles.
- **AI Match Score**: Calculates a real-time percentage match between the candidate's skills and requirements for each job listing.
- **Easy Apply Modal Wizard**: A complete 4-step LinkedIn-style Easy Apply workflow:
  1. Contact information review (Email, phone, location)
  2. Resume selection & skills matching
  3. Custom screening questions (Sponsorship, notice period, AI pitch note)
  4. Final review and submission with celebratory feedback
- **Auto-Apply AI Agent**:
  - Configurable minimum match score threshold (70% - 95%)
  - Daily batch limits to prevent rate limits
  - Automated qualification answering and recruiter pitch insertion
  - Live queue monitoring and health checks
- **Application Tracker**: Full tracking of submitted applications with status badges (`Applied`, `Reviewing`, `Interviewing`, `Offer`), timestamps, resume version used, notes, and withdrawal options.
- **Candidate Profile & Resume Manager**: Update headline, contact details, years of experience, professional summary, and interactive skills management.
- **Funnel & Response Analytics**: Recruiter response rates, pipeline funnel visualization, and actionable timing recommendations.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations / Celebrations**: Canvas Confetti

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

The application will start on `http://127.0.0.1:3456`.

### 3. Production build

```bash
npm run build
npm start
```
