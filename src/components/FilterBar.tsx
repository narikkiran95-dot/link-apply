"use client";

import React from "react";
import { Search, MapPin, SlidersHorizontal, RotateCcw } from "lucide-react";

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
            placeholder="Search by title, skill, or company (e.g. Full Stack, Stripe, React)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
          />
        </div>

        <div className="md:col-span-4 relative">
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="City or 'Remote' (e.g. San Francisco, NY)"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
          />
        </div>

        <div className="md:col-span-2 flex items-center">
          <label className="flex items-center gap-2 cursor-pointer w-full py-2 px-3 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl">
            <input
              type="checkbox"
              checked={easyApplyOnly}
              onChange={(e) => setEasyApplyOnly(e.target.checked)}
              className="text-[#0a66c2] rounded focus:ring-[#0a66c2]"
            />
            <span className="text-xs font-semibold text-blue-900 dark:text-blue-200 select-none">
              Easy Apply Only
            </span>
          </label>
        </div>
      </div>

      {/* Filter pills row */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Workplace type selector */}
          <select
            value={workplaceType}
            onChange={(e) => setWorkplaceType(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
          >
            <option value="all">All Workplaces</option>
            <option value="Remote">Remote Only</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>

          {/* Experience level */}
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
          >
            <option value="all">All Experience Levels</option>
            <option value="Entry level">Entry level</option>
            <option value="Associate">Associate</option>
            <option value="Mid-Senior level">Mid-Senior level</option>
            <option value="Director">Director</option>
          </select>

          {(searchQuery || locationQuery || workplaceType !== "all" || experienceLevel !== "all" || easyApplyOnly) && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-slate-500 hover:text-red-600 transition px-2 py-1 rounded"
            >
              <RotateCcw className="w-3 h-3" />
              Reset filters
            </button>
          )}
        </div>

        <div className="text-slate-500">
          Showing <span className="font-semibold text-slate-800 dark:text-slate-200">{totalResults}</span> active jobs
        </div>
      </div>
    </div>
  );
};
