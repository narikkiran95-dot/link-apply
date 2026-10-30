"use client";

import React from "react";
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Bookmark, 
  Briefcase, 
  FileCheck2,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { Job } from "@/types/job";

interface JobDetailProps {
  job: Job;
  hasApplied: boolean;
  onOpenApply: (job: Job) => void;
  onMessageRecruiter: (job: Job) => void;
}

export const JobDetail: React.FC<JobDetailProps> = ({ 
  job, 
  hasApplied, 
  onOpenApply, 
  onMessageRecruiter 
}) => {
  const isC2C = job.contractType === "C2C" || job.c2cEligible;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs">
            <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {job.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white hover:underline cursor-pointer">
                {job.company}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {job.location} ({job.workplaceType})
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {job.postedAgo}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
              {isC2C && (
                <span className="bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> C2C Offering (Corp-to-Corp)
                </span>
              )}
              {job.domain === "Mainframe" && (
                <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded border border-indigo-200">
                  Mainframe Architecture
                </span>
              )}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {job.applicantsCount} applicants
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {hasApplied ? (
            <div className="px-5 py-2.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full font-semibold text-sm flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Applied (C2C)
            </div>
          ) : (
            <button
              onClick={() => onOpenApply(job)}
              className="px-5 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 transition shadow-xs hover:shadow-md cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              {isC2C ? "Apply on C2C (Tailored)" : "Easy Apply"}
            </button>
          )}

          <button
            onClick={() => onMessageRecruiter(job)}
            className="px-4 py-2.5 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-[#0a66c2] dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Message Recruiter
          </button>

          <button 
            title="Save job"
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile Match & Salary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Match Card */}
        <div className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0a66c2]" />
              AI Resume Match Score
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
              {job.domain === "Mainframe"
                ? "Excellent match for COBOL, JCL, DB2, and z/OS systems"
                : "Strong candidate match based on core competencies"}
            </p>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-[#0a66c2] shadow-xs">
            <span className="text-base font-black text-[#0a66c2] dark:text-blue-400">
              {job.matchScore}%
            </span>
          </div>
        </div>

        {/* Salary / Rate Card */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              {isC2C ? "C2C Hourly Billing Rate" : "Estimated Total Compensation"}
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {job.hourlyRate || job.salary}
            </p>
          </div>
          <span className="text-xs text-amber-700 dark:text-amber-300 font-bold bg-amber-50 dark:bg-amber-950 px-2 py-1 rounded border border-amber-200">
            {isC2C ? "Corp-to-Corp" : "Direct Hire"}
          </span>
        </div>
      </div>

      {/* AI Per-Job Tailoring Feature Callout */}
      <div className="p-4 bg-linear-to-r from-amber-50 to-blue-50 dark:from-amber-950/20 dark:to-blue-950/20 border border-amber-200/80 dark:border-amber-900/40 rounded-xl flex items-start gap-3 text-xs">
        <FileCheck2 className="w-5 h-5 text-[#0a66c2] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold text-slate-900 dark:text-white">
            Per-Position Tailored Resume Ready
          </span>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            When you apply to {job.company}, our engine customizes your resume highlights, emphasizes {job.skills.slice(0, 3).join(", ")}, and attaches your active C2C LLC business entity details automatically.
          </p>
        </div>
      </div>

      {/* Meet the Hiring Team */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Meet the Hiring & Vendor Management Team
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={job.recruiter.avatar}
              alt={job.recruiter.name}
              className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-slate-900 dark:text-white">
                  {job.recruiter.name}
                </span>
                <span className="text-[11px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.2 rounded font-medium">
                  {job.recruiter.connectionDegree}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {job.recruiter.role}
              </p>
            </div>
          </div>
          <button
            onClick={() => onMessageRecruiter(job)}
            className="text-xs text-[#0a66c2] hover:text-[#004182] font-semibold hover:underline cursor-pointer flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#0a66c2]" />
            Message Recruiter Directly
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          About the Job & Statement of Work
        </h3>
        <p>{job.description}</p>

        {/* Responsibilities */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            Key Responsibilities & Deliverables:
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* Qualifications */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            Qualifications & Experience:
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            {job.qualifications.map((qual, idx) => (
              <li key={idx}>{qual}</li>
            ))}
          </ul>
        </div>

        {/* Skills needed */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            Required Technical Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            Contract Terms & Vendor Benefits:
          </h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            {job.benefits.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>

        {/* About Company */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            About {job.company}
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            {job.aboutCompany}
          </p>
        </div>
      </div>
    </div>
  );
};
