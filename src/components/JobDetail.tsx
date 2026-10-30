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
  Share2, 
  Bookmark, 
  Briefcase, 
  Award,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Job } from "@/types/job";

interface JobDetailProps {
  job: Job;
  hasApplied: boolean;
  onOpenApply: (job: Job) => void;
}

export const JobDetail: React.FC<JobDetailProps> = ({ job, hasApplied, onOpenApply }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs">
            <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
              {job.title}
            </h2>
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
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Users className="w-3.5 h-3.5" />
                {job.applicantsCount} applicants
              </span>
              <span>·</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {job.jobType}
              </span>
              <span>·</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {job.experienceLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {hasApplied ? (
            <div className="w-full sm:w-auto px-5 py-2.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full font-semibold text-sm flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Applied
            </div>
          ) : (
            <button
              onClick={() => onOpenApply(job)}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition shadow-xs hover:shadow-md cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-white" />
              Easy Apply
            </button>
          )}

          <button 
            title="Save job"
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition"
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
              Strong match based on your skills in React, TypeScript & Full Stack
            </p>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-[#0a66c2] shadow-xs">
            <span className="text-base font-black text-[#0a66c2] dark:text-blue-400">
              {job.matchScore}%
            </span>
          </div>
        </div>

        {/* Salary Card */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              Estimated Total Compensation
            </div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">
              {job.salary}
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium">Verified Range</span>
        </div>
      </div>

      {/* Meet the Hiring Team */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Meet the Hiring Team
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
          <span className="text-xs text-[#0a66c2] font-semibold hover:underline cursor-pointer">
            Message
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          About the Job
        </h3>
        <p>{job.description}</p>

        {/* Responsibilities */}
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
            Key Responsibilities:
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
            Skills Required:
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
            Benefits & Perks:
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
