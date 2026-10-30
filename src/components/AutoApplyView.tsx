"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Zap,
  Briefcase,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  Building2
} from "lucide-react";
import { AutoApplyConfig, Job, JobApplication, UserProfile } from "@/types/job";
import { generateTailoredResume } from "@/utils/resumeTailor";

interface AutoApplyViewProps {
  config: AutoApplyConfig;
  jobs: Job[];
  applications: JobApplication[];
  userProfile: UserProfile;
  onUpdateConfig: (newConfig: Partial<AutoApplyConfig>) => void;
  onRunBatch: () => Promise<void>;
  isBatchRunning: boolean;
}

export const AutoApplyView: React.FC<AutoApplyViewProps> = ({
  config,
  jobs,
  applications,
  userProfile,
  onUpdateConfig,
  onRunBatch,
  isBatchRunning
}) => {
  const [matchScore, setMatchScore] = useState(config.matchThresholdPercent);
  const [dailyLimit, setDailyLimit] = useState(config.maxApplicationsPerDay);
  const [c2cOnly, setC2cOnly] = useState(config.c2cOnly);
  const [autoTailor, setAutoTailor] = useState(config.autoTailorResume ?? true);
  const [domainFilter, setDomainFilter] = useState(config.domainFilter || "Mainframe");
  const [note, setNote] = useState(config.customCoverNote);
  const [expandedPreviewJobId, setExpandedPreviewJobId] = useState<string | null>(null);

  const appliedIds = new Set(applications.map((a) => a.jobId));
  const eligibleJobs = jobs.filter((j) => {
    if (appliedIds.has(j.id)) return false;
    if (!j.easyApply) return false;
    if (j.matchScore < matchScore) return false;
    if (c2cOnly && !(j.contractType === "C2C" || j.c2cEligible)) return false;
    if (domainFilter !== "all" && j.domain !== domainFilter) return false;
    return true;
  });

  const handleSave = () => {
    onUpdateConfig({
      matchThresholdPercent: matchScore,
      maxApplicationsPerDay: dailyLimit,
      c2cOnly,
      autoTailorResume: autoTailor,
      domainFilter,
      customCoverNote: note
    });
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-linear-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-blue-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              C2C (Corp-to-Corp) Automated Hunter
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Per-Job Resume Tailoring
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Automated C2C Job Applications & Custom Tailored Resumes
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our autonomous AI agent scans for C2C Mainframe & Engineering opportunities, refactors your resume keywords, summaries, and deliverables for each specific job, answers all screening questionnaires, and submits your application directly to the recruiter.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onRunBatch}
              disabled={isBatchRunning || eligibleJobs.length === 0}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 disabled:opacity-50 text-slate-950 font-black text-sm rounded-full shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              {isBatchRunning ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full" />
                  Generating Tailored Resumes & Applying...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-slate-950" />
                  Launch C2C Auto-Apply ({eligibleJobs.length} Eligible Jobs)
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
              Agent Targeting & Resume Customization Controls
            </h3>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Ready
            </span>
          </div>

          {/* C2C Only & Domain Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Employment Engagement Type
              </label>
              <div className="flex items-center gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setC2cOnly(!c2cOnly)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    c2cOnly
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  {c2cOnly ? "C2C Only (Corp-to-Corp Active)" : "All Contract Types"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Target Domain & Skill Category
              </label>
              <select
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value as any)}
                className="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white font-medium"
              >
                <option value="Mainframe">Mainframe (COBOL, JCL, DB2, CICS, z/OS)</option>
                <option value="Cloud/Full Stack">Cloud / Full Stack</option>
                <option value="all">All Available Positions</option>
              </select>
            </div>
          </div>

          {/* Auto-Tailor Per-Job Checkbox */}
          <div className="p-3.5 bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl flex items-start gap-3">
            <input
              type="checkbox"
              id="autoTailor"
              checked={autoTailor}
              onChange={(e) => setAutoTailor(e.target.checked)}
              className="mt-1 h-4 w-4 text-[#0a66c2] rounded focus:ring-[#0a66c2]"
            />
            <label htmlFor="autoTailor" className="text-xs text-blue-950 dark:text-blue-200 cursor-pointer">
              <span className="font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0a66c2]" />
                Dynamically Tailor Resume & Highlights for Each Position Separately
              </span>
              <p className="text-[11px] text-blue-800 dark:text-blue-300 mt-0.5">
                Before submitting each application, the agent adapts your resume headline, aligns your summary with the employer&apos;s specific technologies (e.g. COBOL, DB2, JCL, CICS), and emphasizes your C2C business LLC entity.
              </p>
            </label>
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
          </div>

          {/* Max applications per day */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Application Batch Limit
              </label>
              <span className="text-sm font-bold text-[#0a66c2]">
                {dailyLimit} applications per batch
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#0a66c2]"
            />
          </div>

          {/* AI Intro Note */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Recruiter C2C Cover Pitch Template
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
              className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-lg hover:opacity-90 transition cursor-pointer"
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
              C2C Bot Queue & Status
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Matching C2C Roles</span>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                  {eligibleJobs.length} positions
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Resume Tailoring Mode</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Per-Job Active
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Corporate Entity</span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {userProfile.c2cEntityName || "Apex Consulting LLC"}
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Applications Submitted</span>
                <span className="text-sm font-bold text-emerald-600">
                  {applications.length} submitted
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onRunBatch}
              disabled={isBatchRunning || eligibleJobs.length === 0}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              {isBatchRunning ? "Submitting Tailored Apps..." : `Run C2C Auto-Apply Now (${eligibleJobs.length})`}
            </button>
          </div>
        </div>
      </div>

      {/* Eligible Preview Section with Tailored Resume Inspection */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Queued Positions & Individual Tailored Resumes ({eligibleJobs.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Click any queued job below to inspect the custom tailored resume generated specifically for that employer.
            </p>
          </div>
        </div>

        {eligibleJobs.length === 0 ? (
          <p className="text-xs text-slate-500 py-6 text-center">
            No unapplied jobs match your current C2C and domain filters. Adjust thresholds or reset filters.
          </p>
        ) : (
          <div className="space-y-3">
            {eligibleJobs.map((job) => {
              const tailored = generateTailoredResume(job, userProfile);
              const isExpanded = expandedPreviewJobId === job.id;

              return (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 shrink-0">
                        <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {job.title}
                          </h4>
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-300">
                            C2C
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {job.company} · {job.hourlyRate || job.salary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                        {job.matchScore}% match
                      </span>
                      <button
                        type="button"
                        onClick={() => setExpandedPreviewJobId(isExpanded ? null : job.id)}
                        className="text-xs font-semibold text-[#0a66c2] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {isExpanded ? "Hide Tailored Resume" : "Preview Tailored Resume"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Tailored Resume Drawer */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 rounded-xl border space-y-2 text-xs">
                      <div className="flex items-center justify-between font-mono text-[11px] text-blue-600 dark:text-blue-400">
                        <span className="flex items-center gap-1">
                          <FileCheck2 className="w-4 h-4" />
                          Generated Resume: <strong>{tailored.fileName}</strong>
                        </span>
                        <span className="text-slate-400">Ready to transmit</span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400">Headline:</span>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{tailored.tailoredHeadline}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400">Tailored Summary:</span>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{tailored.tailoredSummary}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400">Emphasized Deliverables:</span>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                            {tailored.highlightedAchievements.slice(0, 2).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
