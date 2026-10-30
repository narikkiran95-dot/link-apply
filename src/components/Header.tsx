"use client";

import React from "react";
import { 
  Briefcase, 
  Search, 
  Send, 
  FileText, 
  Bot, 
  BarChart3, 
  User, 
  Bell,
  Sparkles
} from "lucide-react";

interface HeaderProps {
  activeTab: "jobs" | "tracker" | "auto-apply" | "profile" | "analytics";
  setActiveTab: (tab: "jobs" | "tracker" | "auto-apply" | "profile" | "analytics") => void;
  applicationCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, applicationCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a66c2] text-white font-bold text-xl shadow-sm">
              in
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 dark:text-white tracking-tight text-lg">
                  CareerApply
                </span>
                <span className="bg-blue-100 dark:bg-blue-950/80 text-[#0a66c2] dark:text-blue-400 text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 border border-blue-200 dark:border-blue-800">
                  <Sparkles className="w-3 h-3" />
                  Auto & Easy Apply
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                LinkedIn Job Application Assistant & Automation Engine
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "jobs"
                  ? "bg-blue-50 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden md:inline">Jobs & Search</span>
              <span className="md:hidden">Jobs</span>
            </button>

            <button
              onClick={() => setActiveTab("auto-apply")}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all relative ${
                activeTab === "auto-apply"
                  ? "bg-blue-50 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="hidden md:inline">Auto-Apply Bot</span>
              <span className="md:hidden">Bot</span>
              <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                AI
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tracker")}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all relative ${
                activeTab === "tracker"
                  ? "bg-blue-50 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Send className="w-4 h-4" />
              <span className="hidden md:inline">Tracker</span>
              {applicationCount > 0 && (
                <span className="bg-[#0a66c2] text-white text-xs px-1.5 py-0.2 rounded-full font-bold">
                  {applicationCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "profile"
                  ? "bg-blue-50 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <User className="w-4 h-4" />
              <span className="hidden md:inline">Profile & Resume</span>
              <span className="md:hidden">Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === "analytics"
                  ? "bg-blue-50 dark:bg-blue-900/40 text-[#0a66c2] dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden md:inline">Analytics</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
