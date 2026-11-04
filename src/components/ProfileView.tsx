"use client";

import React, { useState, useRef } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Check, 
  Sparkles, 
  ExternalLink,
  Plus,
  X,
  Building2,
  Upload,
  CheckCircle2,
  FileUp,
  RefreshCw
} from "lucide-react";
import { UserProfile } from "@/types/job";
import { 
  defaultWorkExperience, 
  defaultEducation, 
  defaultSkillCategories, 
  defaultHoganAlignment 
} from "@/utils/resumeTailor";

interface ProfileViewProps {
  profile: UserProfile;
  onSaveProfile: (updated: UserProfile) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profile, onSaveProfile }) => {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [newSkill, setNewSkill] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skillToRemove)
    });
  };

  const setPresetMainframe = () => {
    const updated: UserProfile = {
      ...formData,
      fullName: "KIRAN K INDURI",
      headline: "Senior Mainframe Developer | Hogan IDS | COBOL, DB2, JCL",
      email: "narik.kiran95@gmail.com",
      phone: "+1 (770) 695-7976",
      currentTitle: "Senior Mainframe Developer",
      currentCompany: "Citi Bank",
      primaryDomain: "Mainframe",
      c2cEntityName: "Apex Enterprise Consulting LLC",
      resumeFileName: "KIRAN_K_INDURI_Senior_Mainframe_Hogan_Master_Resume.pdf",
      resumeFileSize: "296 KB",
      resumeLastUpdated: "Loaded just now",
      skills: [
        "Hogan IDS",
        "Enterprise COBOL",
        "DB2 for z/OS",
        "JCL",
        "CICS",
        "VSAM KSDS",
        "IBM z/OS",
        "DDA/TDA Deposit Processing",
        "Core Banking",
        "TSO/ISPF",
        "SDSF",
        "CA7",
        "Control-M",
        "File-AID",
        "Xpediter",
        "Abend-AID",
        "ChangeMan ZMF",
        "Endevor",
        "IBM z/OS Connect EE",
        "REST APIs",
        "JSON",
        "REXX",
        "Python",
        "IDCAMS",
        "DFSORT",
        "Easytrieve",
        "HLASM / Assembler"
      ],
      workExperience: defaultWorkExperience,
      educationList: defaultEducation,
      skillCategories: defaultSkillCategories,
      hoganAlignment: defaultHoganAlignment,
      education: "M.S. in Computer Science & Information Systems (Christian Brothers University, 2022) | B.Tech in Computer Science (JNTU, 2016)",
      summary: "Senior Mainframe Developer with approximately 10 years of experience developing, maintaining, testing, and supporting IBM mainframe applications across banking, financial services, and enterprise transaction processing. Hands-on Hogan IDS experience, including exposure to DDA/TDA deposit processing, supported by strong Enterprise COBOL, DB2, JCL, CICS, and VSAM skills."
    };
    setFormData(updated);
    onSaveProfile(updated);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileSizeKB = Math.round(file.size / 1024);
      const updated: UserProfile = {
        ...formData,
        resumeFileName: file.name,
        resumeFileSize: `${fileSizeKB} KB`,
        resumeLastUpdated: "Uploaded just now"
      };
      setFormData(updated);
      onSaveProfile(updated);
      setUploadSuccessMessage(`Successfully replaced resume with "${file.name}"!`);
      setTimeout(() => setUploadSuccessMessage(null), 4000);
    }
  };

  const handleSelectPresetResume = (presetFileName: string) => {
    const updated: UserProfile = {
      ...formData,
      resumeFileName: presetFileName,
      resumeFileSize: "296 KB",
      resumeLastUpdated: "Selected just now"
    };
    setFormData(updated);
    onSaveProfile(updated);
    setUploadSuccessMessage(`Active resume updated to: ${presetFileName}`);
    setTimeout(() => setUploadSuccessMessage(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".pdf,.doc,.docx,.txt"
        className="hidden"
      />

      {/* Header card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#0a66c2] to-amber-500 text-white flex items-center justify-center font-bold text-2xl shadow-md">
            KI
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {formData.fullName}
              </h2>
              <span className="bg-amber-100 text-amber-800 text-xs px-2.5 py-0.5 rounded-full font-bold border border-amber-300">
                C2C Vendor Ready
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {formData.headline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={setPresetMainframe}
            className="px-3.5 py-2 bg-blue-50 dark:bg-blue-950/60 text-[#0a66c2] dark:text-blue-300 rounded-xl border border-blue-200 text-xs font-bold hover:bg-blue-100 transition flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Reload Hogan IDS & Mainframe Preset
          </button>

          {isSaved && (
            <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 animate-in fade-in">
              <Check className="w-4 h-4" /> Saved!
            </div>
          )}
        </div>
      </div>

      {uploadSuccessMessage && (
        <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          {uploadSuccessMessage}
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Personal & C2C Entity */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-600" />
              Consultant & C2C Corporate Entity Info
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Legal Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  C2C Incorporated LLC / Entity Name
                </label>
                <input
                  type="text"
                  value={formData.c2cEntityName || "Apex Enterprise Consulting LLC"}
                  onChange={(e) => setFormData({ ...formData, c2cEntityName: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-amber-700 dark:text-amber-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tax EIN / W-9 Status
                </label>
                <input
                  type="text"
                  value={formData.taxId || "XX-XXX8921"}
                  onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Consultant Headline
              </label>
              <input
                type="text"
                value={formData.headline}
                onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                About / Professional & C2C Summary
              </label>
              <textarea
                rows={4}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl leading-relaxed"
              />
            </div>
          </div>

          {/* Right Column: Experience, Skills & Resume Management */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0a66c2]" />
              Resume File Management & Upload
            </h3>

            {/* Active Resume Card with Replace Action */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                  Active Master Resume (Used by AI Engine)
                </label>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Primary Template
                </span>
              </div>

              <div className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-2 border-blue-200 dark:border-blue-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0a66c2] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {formData.resumeFileName}
                    </p>
                    <p className="text-xs text-slate-500">
                      {formData.resumeFileSize || "296 KB"} · {formData.resumeLastUpdated || "Updated for 2026 C2C Roles"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full sm:w-auto px-4 py-2 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Replace / Upload
                  </button>
                </div>
              </div>

              {/* Pre-packaged Resume Template Chooser */}
              <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Available Verified Master Versions:
                </span>
                <div className="flex flex-col gap-1.5 text-xs">
                  {[
                    "KIRAN_K_INDURI_Senior_Mainframe_Hogan_Master_Resume.pdf",
                    "KIRAN_K_INDURI_Hogan_IDS_Deposit_Processing_C2C.pdf",
                    "KIRAN_K_INDURI_CitiBank_Mainframe_Lead_Resume.pdf"
                  ].map((resName) => (
                    <button
                      key={resName}
                      type="button"
                      onClick={() => handleSelectPresetResume(resName)}
                      className={`px-2.5 py-1.5 rounded-lg text-left flex items-center justify-between transition cursor-pointer ${
                        formData.resumeFileName === resName
                          ? "bg-blue-100 dark:bg-blue-900/60 text-[#0a66c2] dark:text-blue-300 font-bold"
                          : "hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <span className="truncate">{resName}</span>
                      {formData.resumeFileName === resName && (
                        <Check className="w-3.5 h-3.5 text-[#0a66c2] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Current Title
                </label>
                <input
                  type="text"
                  value={formData.currentTitle}
                  onChange={(e) => setFormData({ ...formData, currentTitle: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Years of Experience
                </label>
                <input
                  type="number"
                  value={formData.yearsExperience}
                  onChange={(e) => setFormData({ ...formData, yearsExperience: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            </div>

            {/* Skills chip manager */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mainframe & Technical Skills (Used for Dynamic Resume Tailoring)
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2.5 max-h-36 overflow-y-auto">
                {formData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add skill (e.g. Hogan IDS, COBOL, DB2)..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  className="flex-1 px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Client & Employment History */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0a66c2]" />
              Verified Client & Enterprise Employment History (~10 Years Experience)
            </h3>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> 4 Verified Client Organizations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {defaultWorkExperience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{exp.company}</h4>
                    <p className="text-xs font-semibold text-[#0a66c2] dark:text-blue-400">{exp.role}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-500">{exp.location}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 line-clamp-2">
                  {exp.bullets[0]}
                </p>
                <div className="text-[10px] text-slate-400 font-mono truncate pt-1">
                  {exp.environment}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold text-sm rounded-full shadow-sm transition cursor-pointer"
          >
            Save Profile & C2C Settings
          </button>
        </div>
      </form>
    </div>
  );
};
