"use client";

import React, { useState } from "react";
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Check, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Award, 
  ExternalLink,
  ShieldCheck,
  Copy
} from "lucide-react";
import { JobApplication, UserProfile, TailoredResume } from "@/types/job";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: JobApplication | null;
  userProfile: UserProfile;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose,
  application,
  userProfile
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !application) return null;

  const tailored: TailoredResume | undefined = application.tailoredResume;
  const fileName = application.resumeUsed || tailored?.fileName || userProfile.resumeFileName;
  const headline = tailored?.tailoredHeadline || userProfile.headline;
  const summary = tailored?.tailoredSummary || userProfile.summary;
  const primarySkills = tailored?.primarySkills || userProfile.skills;
  const achievements = tailored?.highlightedAchievements || [
    "Architected and optimized high-throughput enterprise batch and online transaction processing systems.",
    "Led database indexing, query explain plans, and table space maintenance reducing compute load by 35%.",
    "Streamlined production job scheduling, resolving critical nightly abends within SLA guidelines.",
    "Spearheaded hybrid cloud modernization initiatives exposing legacy services to secure REST endpoints."
  ];

  const handleDownload = () => {
    // Generate downloadable text representation
    const textContent = `
================================================================================
${userProfile.fullName.toUpperCase()}
${headline}
================================================================================
Email: ${userProfile.email} | Phone: ${userProfile.phone}
Location: ${userProfile.location}
C2C Entity: ${userProfile.c2cEntityName || "Apex Enterprise Consulting LLC"} (EIN Verified)
Target Position: ${application.jobTitle} - ${application.company}
Resume File: ${fileName}
Applied: ${application.appliedAt} via ${application.method}
--------------------------------------------------------------------------------

EXECUTIVE SUMMARY:
${summary}

CORE TECHNICAL COMPETENCIES:
${primarySkills.join(" · ")}

KEY PROFESSIONAL DELIVERABLES & ACHIEVEMENTS:
${achievements.map((a, i) => `• ${a}`).join("\n")}

EDUCATION & CERTIFICATIONS:
• ${userProfile.education}
• IBM Certified Specialist - Enterprise Mainframe Systems & DB2 for z/OS

C2C / CORPORATE ENGAGEMENT:
• Incorporated Vendor: ${userProfile.c2cEntityName || "Apex Enterprise Consulting LLC"}
• Engagement Model: Corp-to-Corp (C2C)
• Rate: ${application.salary || "$95 - $115/hr C2C"}
• Availability: Immediate Nationwide Remote
================================================================================
`.trim();

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName.replace(".pdf", ".txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${userProfile.fullName}\n${headline}\n\nSummary:\n${summary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full shadow-2xl flex flex-col max-h-[94vh] overflow-hidden">
        {/* Top Action Bar */}
        <div className="px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xs shrink-0">
              PDF
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white truncate max-w-sm sm:max-w-md">
                {fileName}
              </h3>
              <p className="text-[11px] text-slate-500">
                Submitted to <strong>{application.company}</strong> for {application.jobTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#0a66c2] hover:bg-[#004182] text-white transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download Document
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Body */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-100 dark:bg-slate-950/50 flex justify-center">
          <div className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-10 shadow-md text-slate-900 dark:text-slate-100 space-y-6">
            
            {/* Document Header */}
            <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                    {userProfile.fullName}
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#0a66c2] dark:text-blue-400 mt-1">
                    {headline}
                  </p>
                </div>
                <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                  <p>{userProfile.email}</p>
                  <p>{userProfile.phone}</p>
                  <p>{userProfile.location}</p>
                </div>
              </div>

              {/* C2C Incorporation ribbon */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> C2C Vendor Entity: {userProfile.c2cEntityName || "Apex Enterprise Consulting LLC"}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">EIN: {userProfile.taxId || "XX-XXX8921"}</span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Certificate of Insurance on File
                </span>
              </div>
            </div>

            {/* Target Employer Banner */}
            <div className="p-3 bg-blue-50/70 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900/60 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200 font-medium">
                <Building2 className="w-4 h-4 text-[#0a66c2]" />
                <span>Tailored for <strong>{application.company}</strong> · {application.jobTitle}</span>
              </div>
              <span className="text-xs font-bold text-[#0a66c2]">Rate: {application.salary}</span>
            </div>

            {/* Executive Summary */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Executive Consultant Summary
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Targeted Core Competencies & Technical Skills
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {primarySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Achievements */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Key Professional Achievements & Deliverables
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="pl-1">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Work History */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Experience
              </h4>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                  <span>{userProfile.currentTitle}</span>
                  <span className="text-slate-500 font-normal">2021 – Present</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {userProfile.currentCompany} (Operating as Principal C2C Vendor)
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-1">
                  Provided architectural direction and high-throughput programming for core financial and enterprise legacy platforms. Optimized mission-critical batch workflows and ensured 99.999% system availability under stringent enterprise SLAs.
                </p>
              </div>

              <div className="space-y-1 text-xs pt-2">
                <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                  <span>Senior Systems Engineer / Mainframe Programmer</span>
                  <span className="text-slate-500 font-normal">2017 – 2021</span>
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  Enterprise Technology Solutions Inc.
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-1">
                  Maintained core transactional backends, engineered custom automated JCL test suites, and streamlined relational database queries on IBM z/OS subsystems.
                </p>
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Education & Industry Certifications
              </h4>
              <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-semibold">{userProfile.education}</p>
                <p className="text-slate-500">IBM Certified Specialist · z/OS Enterprise Architecture & DB2 Systems</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between text-xs text-slate-500">
          <span>Official Application Record · Transmitted directly to {application.company}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-lg font-semibold transition cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
