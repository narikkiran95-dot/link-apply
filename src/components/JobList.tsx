"use client";

import React from "react";
import { 
  Building2, 
  MapPin, 
  Clock, 
  Zap, 
  Sparkles, 
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { Job } from "@/types/job";

interface JobListProps {
  jobs: Job[];
  selectedJobId: string;
  appliedJobIds: Set<string>;
  onSelectJob: (job: Job) => void;
  onOpenApply: (job: Job) => void;
}

export const JobList: React.FC<JobListProps> = ({
  jobs,
  selectedJobId,
  appliedJobIds,
  onSelectJob,
  onOpenApply
}) => {
  if (jobs.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
          <Building2 className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-base">
          No matching jobs found
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Try clearing filters or search terms like &quot;React&quot;, &quot;Full Stack&quot;, or &quot;Remote&quot;.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {jobs.map((job) => {
        const isSelected = job.id === selectedJobId;
        const hasApplied = appliedJobIds.has(job.id);

        return (
          <div
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`p-4 rounded-xl border transition-all cursor-pointer relative bg-white dark:bg-slate-900 ${
              isSelected
                ? "border-[#0a66c2] ring-2 ring-[#0a66c2]/20 shadow-sm"
                : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0 mt-0.5">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Job Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-snug hover:text-[#0a66c2] transition">
                    {job.title}
                  </h3>
                  {/* Match pill */}
                  <span className="shrink-0 text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0a66c2]" />
                    {job.matchScore}% match
                  </span>
                </div>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                  {job.company}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {job.location} ({job.workplaceType})
                  </span>
                  <span>·</span>
                  <span>{job.salary.split("·")[0]}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {job.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{job.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Bottom row actions */}
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.postedAgo}
                    </span>
                    {job.easyApply && (
                      <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-0.5">
                        <Zap className="w-3 h-3 fill-blue-600" /> Easy Apply
                      </span>
                    )}
                  </div>

                  {hasApplied ? (
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Applied
                    </span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenApply(job);
                      }}
                      className="text-xs font-semibold text-[#0a66c2] hover:text-[#004182] hover:underline flex items-center gap-1 py-1 px-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                    >
                      Easy Apply
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
