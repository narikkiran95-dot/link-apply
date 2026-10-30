"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  Clock, 
  AlertCircle,
  FileCheck,
  TrendingUp,
  Zap
} from "lucide-react";
import { AutoApplyConfig, Job, JobApplication } from "@/types/job";

interface AutoApplyViewProps {
  config: AutoApplyConfig;
  jobs: Job[];
  applications: JobApplication[];
  onUpdateConfig: (newConfig: Partial<AutoApplyConfig>) => void;
  onRunBatch: () => Promise<void>;
  isBatchRunning: boolean;
}

export const AutoApplyView: React.FC<AutoApplyViewProps> = ({
  config,
  jobs,
  applications,
  onUpdateConfig,
  onRunBatch,
  isBatchRunning
}) => {
  const [matchScore, setMatchScore] = useState(config.matchThresholdPercent);
  const [dailyLimit, setDailyLimit] = useState(config.maxApplicationsPerDay);
  const [note, setNote] = useState(config.customCoverNote);

  const appliedIds = new Set(applications.map((a) => a.jobId));
  const eligibleJobs = jobs.filter(
    (j) => !appliedIds.has(j.id) && j.easyApply && j.matchScore >= matchScore
  );

  const handleSave = () => {
    onUpdateConfig({
      matchThresholdPercent: matchScore,
      maxApplicationsPerDay: dailyLimit,
      customCoverNote: note
    });
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Autonomous AI Job Hunter
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Auto-Apply for Jobs on LinkedIn
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Let our automated agent scan LinkedIn job listings, evaluate match scores against your resume, fill out complex Easy Apply questionnaires, and submit high-probability applications automatically.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onRunBatch}
              disabled={isBatchRunning || eligibleJobs.length === 0}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm rounded-full shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              {isBatchRunning ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  Running AI Auto-Apply Engine...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-white" />
                  Launch Auto-Apply Run ({eligibleJobs.length} Eligible)
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Safe-rate pacing (max {dailyLimit} apps / run)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Box */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#0a66c2]" />
              Agent Automation Parameters
            </h3>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Bot Ready
            </span>
          </div>

          {/* Match Score Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Minimum Resume Match Threshold
              </label>
              <span className="text-sm font-bold text-[#0a66c2]">
                {matchScore}%
              </span>
            </div>
            <input
              type="range"
              min="70"
              max="95"
              step="1"
              value={matchScore}
              onChange={(e) => setMatchScore(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0a66c2]"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Only applies to positions where your skills and experience meet or exceed this score.
            </p>
          </div>

          {/* Max applications per day */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Application Batch Limit
              </label>
              <span className="text-sm font-bold text-[#0a66c2]">
                {dailyLimit} applications
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="15"
              step="1"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0a66c2]"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Maintains recruiter deliverability and prevents algorithmic account flagging.
            </p>
          </div>

          {/* AI Intro Note */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Recruiter Quick Pitch Template
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg hover:opacity-90 transition"
            >
              Save Configuration
            </button>
          </div>
        </div>

        {/* Live Status & Queue */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-600" />
              Agent Queue & Health
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Queued Eligible Roles</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {eligibleJobs.length} roles
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Already Applied</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {applications.length} submitted
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">LinkedIn Proxy & Captcha</span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Healthy
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onRunBatch}
              disabled={isBatchRunning || eligibleJobs.length === 0}
              className="w-full py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Zap className="w-4 h-4 fill-white" />
              {isBatchRunning ? "Applying..." : "Run Batch Now"}
            </button>
          </div>
        </div>
      </div>

      {/* Eligible Preview Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          Upcoming Targets in Automation Queue ({eligibleJobs.length})
        </h3>

        {eligibleJobs.length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">
            No pending unapplied jobs matching criteria. Adjust match threshold or add more roles.
          </p>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {eligibleJobs.map((job) => (
              <div key={job.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-200 shrink-0">
                    <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {job.title}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {job.company} · {job.location} ({job.workplaceType})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                    {job.matchScore}% match
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {job.salary.split("·")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
