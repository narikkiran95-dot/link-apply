"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { JobList } from "@/components/JobList";
import { JobDetail } from "@/components/JobDetail";
import { EasyApplyModal } from "@/components/EasyApplyModal";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { AutoApplyView } from "@/components/AutoApplyView";
import { ProfileView } from "@/components/ProfileView";
import { AnalyticsView } from "@/components/AnalyticsView";
import { Job, JobApplication, UserProfile, AutoApplyConfig, TailoredResume } from "@/types/job";
import { mockJobs, initialApplications, initialUserProfile } from "@/data/mockJobs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"jobs" | "tracker" | "auto-apply" | "profile" | "analytics">("jobs");
  
  // Data state
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [applications, setApplications] = useState<JobApplication[]>(initialApplications);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);
  const [autoApplyConfig, setAutoApplyConfig] = useState<AutoApplyConfig>({
    isActive: true,
    targetTitles: ["Mainframe Developer", "COBOL", "CICS", "DB2", "z/OS Consultant"],
    locations: ["Remote", "Boston, MA", "Charlotte, NC"],
    workplaceTypes: ["Remote"],
    minSalary: 175000,
    maxApplicationsPerDay: 5,
    matchThresholdPercent: 85,
    customCoverNote: "Hi there! I am reaching out as an experienced Mainframe consultant with an active US LLC available immediately for Corp-to-Corp (C2C) engagement.",
    c2cOnly: true,
    autoTailorResume: true,
    domainFilter: "Mainframe",
    minHourlyRateC2C: 90
  });

  // Selected job for right detail panel
  const [selectedJob, setSelectedJob] = useState<Job>(mockJobs[0]);
  
  // Modal state
  const [modalJob, setModalJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [isBatchRunning, setIsBatchRunning] = useState<boolean>(false);

  // Filters: default to C2C and Mainframe friendly
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [workplaceType, setWorkplaceType] = useState<string>("all");
  const [experienceLevel, setExperienceLevel] = useState<string>("all");
  const [easyApplyOnly, setEasyApplyOnly] = useState<boolean>(false);
  const [c2cOnly, setC2cOnly] = useState<boolean>(false); // user can toggle or click preset
  const [domainFilter, setDomainFilter] = useState<string>("all");

  // Fetch / Sync with API
  const fetchJobs = async () => {
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.set("q", searchQuery);
      if (locationQuery) params.set("location", locationQuery);
      if (workplaceType !== "all") params.set("workplaceType", workplaceType);
      if (experienceLevel !== "all") params.set("experienceLevel", experienceLevel);
      if (easyApplyOnly) params.set("easyApply", "true");
      if (c2cOnly) params.set("c2cOnly", "true");
      if (domainFilter !== "all") params.set("domain", domainFilter);

      const res = await fetch(`/api/jobs?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setJobs(data.jobs || []);
        if (data.jobs && data.jobs.length > 0) {
          // If current selected job is not in filtered list, select first
          const stillThere = data.jobs.find((j: Job) => j.id === selectedJob?.id);
          if (!stillThere) setSelectedJob(data.jobs[0]);
        }
        if (data.applications) setApplications(data.applications);
        if (data.userProfile) setUserProfile(data.userProfile);
        if (data.autoApplyConfig) setAutoApplyConfig(data.autoApplyConfig);
      }
    } catch (e) {
      console.error("Failed to fetch jobs:", e);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchQuery, locationQuery, workplaceType, experienceLevel, easyApplyOnly, c2cOnly, domainFilter]);

  const appliedJobIds = new Set(applications.map((a) => a.jobId));

  const handleOpenApplyModal = (job: Job) => {
    setModalJob(job);
    setIsApplyModalOpen(true);
  };

  const handleApplySuccess = async (
    jobId: string, 
    answers: Record<string, string>, 
    notes: string, 
    tailoredResume: TailoredResume
  ) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "apply",
          jobId,
          screeningAnswers: answers,
          notes,
          method: "Easy Apply",
          tailoredResume
        })
      });

      if (res.ok) {
        const data = await res.json();
        setApplications((prev) => [data.application, ...prev]);
      }
    } catch (e) {
      console.error("Error submitting application:", e);
    }
  };

  const handleRunAutoApplyBatch = async () => {
    setIsBatchRunning(true);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "run-auto-apply-batch" })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.allApplications) {
          setApplications(data.allApplications);
        }
      }
    } catch (e) {
      console.error("Batch apply failed:", e);
    } finally {
      setIsBatchRunning(false);
    }
  };

  const handleWithdrawApplication = async (applicationId: string) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "withdraw-application",
          applicationId
        })
      });

      if (res.ok) {
        setApplications((prev) => prev.filter((a) => a.id !== applicationId));
      }
    } catch (e) {
      console.error("Error withdrawing application:", e);
    }
  };

  const handleSaveProfile = async (updated: UserProfile) => {
    setUserProfile(updated);
    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update-profile",
          profile: updated
        })
      });
    } catch (e) {
      console.error("Error updating profile:", e);
    }
  };

  const handleUpdateAutoApply = async (newConfig: Partial<AutoApplyConfig>) => {
    const updated = { ...autoApplyConfig, ...newConfig };
    setAutoApplyConfig(updated);
    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update-auto-apply",
          config: updated
        })
      });
    } catch (e) {
      console.error("Error updating auto-apply config:", e);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setWorkplaceType("all");
    setExperienceLevel("all");
    setEasyApplyOnly(false);
    setC2cOnly(false);
    setDomainFilter("all");
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-200">
      {/* Top Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        applicationCount={applications.length}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        {/* Tab 1: Jobs & Search */}
        {activeTab === "jobs" && (
          <div className="space-y-4">
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              locationQuery={locationQuery}
              setLocationQuery={setLocationQuery}
              workplaceType={workplaceType}
              setWorkplaceType={setWorkplaceType}
              experienceLevel={experienceLevel}
              setExperienceLevel={setExperienceLevel}
              easyApplyOnly={easyApplyOnly}
              setEasyApplyOnly={setEasyApplyOnly}
              c2cOnly={c2cOnly}
              setC2cOnly={setC2cOnly}
              domainFilter={domainFilter}
              setDomainFilter={setDomainFilter}
              totalResults={jobs.length}
              onReset={handleResetFilters}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Job Cards List */}
              <div className="lg:col-span-5 h-[calc(100vh-250px)] overflow-y-auto pr-1">
                <JobList
                  jobs={jobs}
                  selectedJobId={selectedJob?.id}
                  appliedJobIds={appliedJobIds}
                  onSelectJob={(j) => setSelectedJob(j)}
                  onOpenApply={handleOpenApplyModal}
                />
              </div>

              {/* Right Column: Full Job Details */}
              <div className="lg:col-span-7 sticky top-24 h-[calc(100vh-250px)] overflow-y-auto">
                {selectedJob ? (
                  <JobDetail
                    job={selectedJob}
                    hasApplied={appliedJobIds.has(selectedJob.id)}
                    onOpenApply={handleOpenApplyModal}
                  />
                ) : (
                  <div className="p-12 text-center text-slate-400">
                    Select a job to view details
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Auto-Apply AI Bot */}
        {activeTab === "auto-apply" && (
          <AutoApplyView
            config={autoApplyConfig}
            jobs={jobs}
            applications={applications}
            userProfile={userProfile}
            onUpdateConfig={handleUpdateAutoApply}
            onRunBatch={handleRunAutoApplyBatch}
            isBatchRunning={isBatchRunning}
          />
        )}

        {/* Tab 3: Application Tracker */}
        {activeTab === "tracker" && (
          <ApplicationTracker
            applications={applications}
            onWithdraw={handleWithdrawApplication}
          />
        )}

        {/* Tab 4: Profile & Resume */}
        {activeTab === "profile" && (
          <ProfileView
            profile={userProfile}
            onSaveProfile={handleSaveProfile}
          />
        )}

        {/* Tab 5: Analytics */}
        {activeTab === "analytics" && (
          <AnalyticsView
            applications={applications}
            jobs={jobs}
          />
        )}
      </main>

      {/* Easy Apply Wizard Modal */}
      <EasyApplyModal
        job={modalJob}
        userProfile={userProfile}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onApplySuccess={handleApplySuccess}
      />
    </div>
  );
}
