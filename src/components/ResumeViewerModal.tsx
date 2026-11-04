"use client";

import React, { useState } from "react";
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Copy,
  Layers,
  GraduationCap,
  Cpu
} from "lucide-react";
import { JobApplication, UserProfile, TailoredResume, WorkExperienceItem, EducationItem, SkillCategoryItem } from "@/types/job";
import { defaultWorkExperience, defaultEducation, defaultSkillCategories, defaultHoganAlignment } from "@/utils/resumeTailor";

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
  const workExperience: WorkExperienceItem[] = tailored?.workExperience || userProfile.workExperience || defaultWorkExperience;
  const educationList: EducationItem[] = tailored?.education || userProfile.educationList || defaultEducation;
  const skillCategories: SkillCategoryItem[] = tailored?.skillCategories || userProfile.skillCategories || defaultSkillCategories;
  const hoganAlignment: string[] = tailored?.hoganAlignment || userProfile.hoganAlignment || defaultHoganAlignment;

  const handleDownload = () => {
    const textContent = `
================================================================================
KIRAN K INDURI
${headline}
+1 (770) 695-7976 | narik.kiran95@gmail.com | LinkedIn
Target Position: ${application.jobTitle} - ${application.company}
C2C Entity: ${userProfile.c2cEntityName || "Apex Enterprise Consulting LLC"} (EIN Verified)
================================================================================

PROFESSIONAL SUMMARY
${summary}

TECHNICAL SKILLS
${skillCategories.map((sc) => `• ${sc.category}: ${sc.skills}`).join("\n")}

HOGAN IDS AND BANKING ALIGNMENT
${hoganAlignment.map((h) => `• ${h}`).join("\n")}

PROFESSIONAL EXPERIENCE
${workExperience
  .map(
    (exp) => `
${exp.company} — ${exp.location}
${exp.role} | ${exp.period}
${exp.bullets.map((b) => `• ${b}`).join("\n")}
Environment: ${exp.environment}
`
  )
  .join("\n")}

EDUCATION
${educationList.map((edu) => `${edu.degree}\n${edu.institution} — ${edu.location} ${edu.year}`).join("\n\n")}

================================================================================
Document: ${fileName}
Submitted to: ${application.company} via ${application.method} (${application.appliedAt})
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
    navigator.clipboard.writeText(
      `KIRAN K INDURI\n${headline}\n+1 (770) 695-7976 | narik.kiran95@gmail.com\n\nPROFESSIONAL SUMMARY:\n${summary}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              Download Resume
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
                    KIRAN K INDURI
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#0a66c2] dark:text-blue-400 mt-1">
                    {headline}
                  </p>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 sm:text-right space-y-0.5 font-medium">
                  <p className="font-semibold text-slate-900 dark:text-white">+1 (770) 695-7976</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">narik.kiran95@gmail.com</p>
                  <p>LinkedIn Profile</p>
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

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {summary}
              </p>
            </div>

            {/* Technical Skills (Categorized) */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#0a66c2]" />
                Technical Skills
              </h4>
              <div className="space-y-2 text-xs">
                {skillCategories.map((sc) => (
                  <div key={sc.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                    <span className="font-bold text-slate-900 dark:text-white sm:col-span-1">
                      {sc.category}:
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 sm:col-span-3">
                      {sc.skills}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hogan IDS and Banking Alignment */}
            <div className="space-y-2 p-3.5 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                Hogan IDS and Banking Alignment
              </h4>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
                {hoganAlignment.map((item, idx) => (
                  <li key={idx} className="pl-0.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Experience
              </h4>

              {workExperience.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-100 dark:border-slate-800/80 pb-1">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {exp.company} — <span className="font-normal text-slate-500">{exp.location}</span>
                    </span>
                    <span className="text-slate-500 font-semibold">{exp.period}</span>
                  </div>
                  <div className="font-semibold text-xs text-[#0a66c2] dark:text-blue-400">
                    {exp.role}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="pl-0.5">
                        {b}
                      </li>
                    ))}
                  </ul>
                  {exp.environment && (
                    <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-200 dark:border-slate-700/60">
                      <strong className="text-slate-700 dark:text-slate-300">Environment:</strong> {exp.environment}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0a66c2]" />
                Education
              </h4>
              <div className="space-y-2 text-xs">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                      <p className="text-slate-500">{edu.institution} — {edu.location}</p>
                    </div>
                    <span className="text-slate-500 font-semibold">{edu.year}</span>
                  </div>
                ))}
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
