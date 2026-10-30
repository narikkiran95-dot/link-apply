"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Send, 
  CheckCircle2, 
  Clock, 
  Briefcase,
  Sparkles,
  Award
} from "lucide-react";
import { JobApplication, Job } from "@/types/job";

interface AnalyticsViewProps {
  applications: JobApplication[];
  jobs: Job[];
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ applications, jobs }) => {
  const total = applications.length;
  const interviewing = applications.filter((a) => a.status === "Interviewing").length;
  const reviewing = applications.filter((a) => a.status === "Reviewing").length;
  const offers = applications.filter((a) => a.status === "Offer").length;

  const responseRate = total > 0 ? Math.round(((interviewing + reviewing + offers) / total) * 100) : 0;
  const avgMatchScore = Math.round(
    jobs.reduce((acc, curr) => acc + curr.matchScore, 0) / (jobs.length || 1)
  );

  return (
    <div className="space-y-6">
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Total Submissions</span>
            <Send className="w-4 h-4 text-[#0a66c2]" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {total}
          </div>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">
            Easy Apply & AI Auto-Agent
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Recruiter Response Rate</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {responseRate}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Industry average is ~8-12%
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Active Interviews</span>
            <Users className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {interviewing}
          </div>
          <p className="text-[11px] text-purple-600 font-medium mt-1">
            Under recruiter evaluation
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Avg Role Match</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {avgMatchScore}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Across available jobs
          </p>
        </div>
      </div>

      {/* Funnel Breakdown */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Application Pipeline Funnel
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Stage conversion from Easy Apply submission to recruiter screens and interviews.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700 dark:text-slate-300">1. Submitted Applications</span>
              <span className="text-[#0a66c2]">{total} ({total > 0 ? "100%" : "0%"})</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div className="bg-[#0a66c2] h-3 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700 dark:text-slate-300">2. Profile Reviewed by Hiring Manager</span>
              <span className="text-amber-600">{reviewing + interviewing + offers} ({total > 0 ? Math.round(((reviewing + interviewing + offers) / total) * 100) : 0}%)</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-3 rounded-full transition-all"
                style={{ width: `${total > 0 ? Math.round(((reviewing + interviewing + offers) / total) * 100) : 0}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-700 dark:text-slate-300">3. Technical / Recruiter Interview</span>
              <span className="text-purple-600">{interviewing + offers} ({total > 0 ? Math.round(((interviewing + offers) / total) * 100) : 0}%)</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-3 rounded-full transition-all"
                style={{ width: `${total > 0 ? Math.round(((interviewing + offers) / total) * 100) : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations card */}
      <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900 rounded-2xl p-6 shadow-xs flex items-start gap-4">
        <div className="p-3 bg-white dark:bg-slate-900 rounded-xl text-[#0a66c2] shrink-0 shadow-xs">
          <Award className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Top Application Tip for High Conversion
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Roles applied within the first <strong>4 hours</strong> of posting have an <strong>84% higher recruiter callback rate</strong>. Keep the Auto-Apply Bot enabled during business hours to automatically submit Easy Apply applications as soon as new matching positions appear.
          </p>
        </div>
      </div>
    </div>
  );
};
