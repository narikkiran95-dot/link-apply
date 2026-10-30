"use client";

import React, { useState } from "react";
import { 
  Send, 
  Clock, 
  MapPin, 
  Building2, 
  FileText, 
  Trash2, 
  ExternalLink,
  CheckCircle,
  Eye,
  AlertCircle,
  Search,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { JobApplication } from "@/types/job";

interface ApplicationTrackerProps {
  applications: JobApplication[];
  onWithdraw: (applicationId: string) => void;
}

export const ApplicationTracker: React.FC<ApplicationTrackerProps> = ({
  applications,
  onWithdraw
}) => {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filtered = applications.filter((app) => {
    if (filterStatus !== "all" && app.status !== filterStatus) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        app.jobTitle.toLowerCase().includes(q) ||
        app.company.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getStatusBadge = (status: JobApplication["status"]) => {
    switch (status) {
      case "Applied":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900";
      case "Reviewing":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-900";
      case "Interviewing":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900";
      case "Offer":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-900";
      case "Rejected":
        return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter summary */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Application Tracker
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Live status of all Easy Apply and AI-automated LinkedIn submissions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#0a66c2] border border-blue-200 dark:border-blue-800">
              {applications.length} Total Applications
            </span>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by role or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {["all", "Applied", "Reviewing", "Interviewing", "Offer"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`text-xs px-3 py-1 rounded-full font-medium transition ${
                  filterStatus === status
                    ? "bg-[#0a66c2] text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Cards List */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <Send className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
            No applications match your filter
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Browse open jobs to submit Easy Apply requests or launch the Auto-Apply bot.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0">
                    <img
                      src={app.companyLogo}
                      alt={app.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                        {app.jobTitle}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(
                          app.status
                        )}`}
                      >
                        {app.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-500">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {app.company}
                      </span>
                      <span>·</span>
                      <span>{app.location}</span>
                      <span>·</span>
                      <span>{app.salary}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Applied: {app.appliedAt}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> {app.resumeUsed}
                      </span>
                      <span>·</span>
                      <span className="text-[#0a66c2] font-medium">
                        Via {app.method}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => onWithdraw(app.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/50 transition text-xs flex items-center gap-1"
                    title="Withdraw Application"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Withdraw</span>
                  </button>
                </div>
              </div>

              {app.notes && (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Latest Activity Note:{" "}
                  </span>
                  {app.notes}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
