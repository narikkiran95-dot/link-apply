"use client";

import React from "react";
import { Search, MapPin, SlidersHorizontal, RotateCcw, Briefcase, Sparkles, Terminal } from "lucide-react";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  locationQuery: string;
  setLocationQuery: (val: string) => void;
  workplaceType: string;
  setWorkplaceType: (val: string) => void;
  experienceLevel: string;
  setExperienceLevel: (val: string) => void;
  easyApplyOnly: boolean;
  setEasyApplyOnly: (val: boolean) => void;
  c2cOnly: boolean;
  setC2cOnly: (val: boolean) => void;
  domainFilter: string;
  setDomainFilter: (val: string) => void;
  totalResults: number;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  locationQuery,
  setLocationQuery,
  workplaceType,
  setWorkplaceType,
  experienceLevel,
  setExperienceLevel,
  easyApplyOnly,
  setEasyApplyOnly,
  c2cOnly,
  setC2cOnly,
  domainFilter,
  setDomainFilter,
  totalResults,
  onReset
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3">
      {/* Primary search row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search Mainframe, COBOL, JCL, DB2, CICS, Full Stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
          />
        </div>

        <div className="md:col-span-3 relative">
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="City or 'Remote'..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
          />
        </div>

        {/* C2C Only Toggle Button */}
        <div className="md:col-span-3 flex items-center">
          <button
            type="button"
            onClick={() => setC2cOnly(!c2cOnly)}
            className={`flex items-center justify-between w-full py-2 px-3.5 rounded-xl border transition cursor-pointer ${
              c2cOnly
                ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                : "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800 hover:bg-amber-100"
            }`}
          >
            <span className="flex items-center gap-1.5 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              C2C Only (Corp-to-Corp)
            </span>
            <span
              className={`text-[10px] font-black px-1.5 py-0.2 rounded-full uppercase ${
                c2cOnly ? "bg-amber-700 text-white" : "bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200"
              }`}
            >
              {c2cOnly ? "ON" : "OFF"}
            </span>
          </button>
        </div>
      </div>

      {/* Filter pills row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Domain Category Selector */}
          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold"
          >
            <option value="all">All Domains</option>
            <option value="Mainframe">Mainframe (COBOL, JCL, DB2, CICS)</option>
            <option value="Cloud/Full Stack">Cloud / Full Stack</option>
          </select>

          {/* Workplace type selector */}
          <select
            value={workplaceType}
            onChange={(e) => setWorkplaceType(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
          >
            <option value="all">All Workplaces</option>
            <option value="Remote">100% Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>

          {/* Easy Apply Checkbox */}
          <label className="flex items-center gap-1.5 cursor-pointer px-2.5 py-1.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={easyApplyOnly}
              onChange={(e) => setEasyApplyOnly(e.target.checked)}
              className="text-[#0a66c2] rounded focus:ring-[#0a66c2]"
            />
            <span className="font-medium text-slate-800 dark:text-slate-200">Easy Apply</span>
          </label>

          {(searchQuery || locationQuery || workplaceType !== "all" || experienceLevel !== "all" || easyApplyOnly || c2cOnly || domainFilter !== "all") && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-slate-500 hover:text-red-600 transition px-2 py-1 rounded cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset all filters
            </button>
          )}
        </div>

        <div className="text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-800 dark:text-slate-200">{totalResults}</span> positions
          {c2cOnly && <span className="ml-1 text-amber-600 font-semibold">(C2C Only)</span>}
          {domainFilter === "Mainframe" && <span className="ml-1 text-[#0a66c2] font-semibold">(Mainframe)</span>}
        </div>
      </div>
    </div>
  );
};
