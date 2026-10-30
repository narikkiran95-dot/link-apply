"use client";

import React, { useState, useMemo, useRef } from "react";
import { 
  X, 
  CheckCircle2, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  Check,
  Briefcase,
  Layers,
  FileCheck2,
  Upload,
  RefreshCw
} from "lucide-react";
import { Job, UserProfile, TailoredResume } from "@/types/job";
import { generateTailoredResume } from "@/utils/resumeTailor";
import confetti from "canvas-confetti";

interface EasyApplyModalProps {
  job: Job | null;
  userProfile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess: (jobId: string, answers: Record<string, string>, notes: string, tailoredResume: TailoredResume) => void;
}

export const EasyApplyModal: React.FC<EasyApplyModalProps> = ({
  job,
  userProfile,
  isOpen,
  onClose,
  onApplySuccess
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [customResumeName, setCustomResumeName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Compute tailored resume for this specific job
  const baseTailoredResume = useMemo(() => {
    if (!job) return null;
    return generateTailoredResume(job, userProfile);
  }, [job, userProfile]);

  const tailoredResume = useMemo(() => {
    if (!baseTailoredResume) return null;
    if (customResumeName) {
      return {
        ...baseTailoredResume,
        fileName: customResumeName
      };
    }
    return baseTailoredResume;
  }, [baseTailoredResume, customResumeName]);

  // Form states
  const [phone, setPhone] = useState(userProfile.phone);
  const [email, setEmail] = useState(userProfile.email);
  const [yearsOfExp, setYearsOfExp] = useState(userProfile.yearsExperience.toString());
  const [employmentModel, setEmploymentModel] = useState(job?.contractType === "C2C" || job?.c2cEligible ? "C2C (Corp-to-Corp)" : "W2");
  const [c2cRate, setC2cRate] = useState(job?.hourlyRate || "$95/hr C2C");
  const [sponsorshipRequired, setSponsorshipRequired] = useState("No");
  const [noticePeriod, setNoticePeriod] = useState("Immediate start");

  const initialPitch = useMemo(() => {
    if (!job) return "";
    const isC2C = job.contractType === "C2C" || job.c2cEligible;
    if (isC2C) {
      return `Hi ${job.recruiter.name.split(" ")[0]}, I am reaching out as a Senior Consultant with an active US LLC (${userProfile.c2cEntityName || "Independent LLC"}) available immediately for this C2C engagement at ${job.company}. My expertise in ${job.skills.slice(0, 4).join(", ")} aligns directly with your deliverables.`;
    }
    return `Hi ${job.recruiter.name.split(" ")[0]}, I am eager to apply for the ${job.title} role at ${job.company}. My 8+ years hands-on experience in ${job.skills.slice(0, 3).join(", ")} will allow me to deliver immediate value to your engineering team.`;
  }, [job, userProfile]);

  const [customNote, setCustomNote] = useState(initialPitch);

  if (!isOpen || !job || !tailoredResume) return null;

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCustomResumeName(files[0].name);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }

    onApplySuccess(
      job.id,
      {
        phone,
        email,
        yearsOfExp,
        employmentModel,
        c2cRate,
        sponsorshipRequired,
        noticePeriod
      },
      customNote,
      tailoredResume
    );
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    setCustomResumeName(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleCustomFileUpload}
        accept=".pdf,.doc,.docx,.txt"
        className="hidden"
      />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                  Apply to {job.company}
                </h3>
                {job.contractType === "C2C" ? (
                  <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded border border-amber-300">
                    C2C Corp-to-Corp
                  </span>
                ) : (
                  <span className="bg-blue-50 text-[#0a66c2] text-[11px] font-bold px-2 py-0.5 rounded border border-blue-200">
                    Easy Apply
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {job.title} · {job.hourlyRate || job.salary}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
            <div
              className="bg-[#0a66c2] h-1.5 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Application & Tailored Resume Submitted!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                Your customized C2C application for <strong className="text-slate-900 dark:text-white">{job.title}</strong> has been transmitted directly to {job.company}&apos;s talent team with a tailor-fit resume.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 max-w-lg mx-auto text-left text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Recruiter:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{job.recruiter.name} ({job.recruiter.role})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tailored Resume:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{tailoredResume.fileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contract Engagement:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">{employmentModel} · {c2cRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Corporate Entity:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{userProfile.c2cEntityName || "Apex Consulting LLC"}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white font-medium rounded-full text-sm transition shadow-sm cursor-pointer"
                >
                  Done & View in Application Tracker
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Step {step} of {totalSteps}:{" "}
                  {step === 1 && "Contact & C2C Entity"}
                  {step === 2 && "AI Resume Tailoring Engine"}
                  {step === 3 && "C2C Rates & Screening"}
                  {step === 4 && "Final Review & Submit"}
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified C2C Deliverable
                </span>
              </div>

              {/* Step 1: Contact & C2C Entity */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Legal / Consultant Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={userProfile.fullName}
                      className="w-full px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 cursor-not-allowed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Corporate LLC / Business Entity
                      </label>
                      <input
                        type="text"
                        value={userProfile.c2cEntityName || "Apex Consulting LLC"}
                        disabled
                        className="w-full px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300"
                      />
                      <p className="text-[10px] text-emerald-600 mt-1">✓ Active EIN / Tax ID on file for C2C</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Contact Phone
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Business Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: AI Resume Tailoring */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0a66c2]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 dark:text-blue-200">
                          Tailored Resume Generated for {job.company}
                        </h4>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {job.matchScore}% Match
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center justify-between font-mono text-[11px] bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900">
                        <div className="flex items-center gap-2">
                          <FileCheck2 className="w-4 h-4 text-[#0a66c2]" />
                          <span className="font-bold text-slate-900 dark:text-white truncate max-w-xs">{tailoredResume.fileName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-2.5 py-1 text-[11px] font-bold text-[#0a66c2] bg-blue-50 dark:bg-blue-950 rounded hover:bg-blue-100 transition flex items-center gap-1 cursor-pointer shrink-0"
                        >
                          <Upload className="w-3 h-3" /> Replace Resume
                        </button>
                      </div>

                      <div className="bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Tailored Headline:</span>
                          <p className="font-semibold text-slate-900 dark:text-white text-xs mt-0.5">
                            {tailoredResume.tailoredHeadline}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Targeted Executive Summary:</span>
                          <p className="text-slate-600 dark:text-slate-300 text-xs mt-0.5 leading-relaxed">
                            {tailoredResume.tailoredSummary}
                          </p>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Key Tailored Bullets for this Role:</span>
                          <ul className="list-disc pl-4 space-y-1 mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                            {tailoredResume.highlightedAchievements.slice(0, 3).map((ach, idx) => (
                              <li key={idx}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Targeted Core Technologies for this Position
                    </label>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-emerald-600" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: C2C Rates & Screening */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Contract Engagement Model
                      </label>
                      <select
                        value={employmentModel}
                        onChange={(e) => setEmploymentModel(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                      >
                        <option value="C2C (Corp-to-Corp)">C2C (Corp-to-Corp) - Preferred</option>
                        <option value="1099 Independent">1099 Independent</option>
                        <option value="W2 Contract">W2 Contract</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Proposed C2C Billing Rate
                      </label>
                      <input
                        type="text"
                        value={c2cRate}
                        onChange={(e) => setC2cRate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Earliest Consultant Availability / Notice Period
                    </label>
                    <select
                      value={noticePeriod}
                      onChange={(e) => setNoticePeriod(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                    >
                      <option value="Immediate start">Available Immediately (0-1 week)</option>
                      <option value="2 weeks">2 weeks notice</option>
                      <option value="1 month">1 month</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Tailored Recruiter Introduction Pitch
                      </label>
                      <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Auto-Generated for {job.company}
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Review */}
              {step === 4 && (
                <div className="space-y-3.5">
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      C2C Application Summary
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400">Target Role:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{job.title}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Company:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{job.company}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Engagement Model:</span>
                        <p className="font-semibold text-amber-600 dark:text-amber-400">{employmentModel} ({c2cRate})</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Tailored Resume:</span>
                        <p className="font-semibold text-blue-600 dark:text-blue-400 truncate">{tailoredResume.fileName}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Availability:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{noticePeriod}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Vendor Entity:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{userProfile.c2cEntityName || "Apex Consulting LLC"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p>
                      By clicking <strong>Submit C2C Application</strong>, your tailored resume ({tailoredResume.fileName}) and C2C availability notes will be transmitted directly to {job.recruiter.name} at {job.company}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {!submitted && (
          <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition cursor-pointer"
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold rounded-full transition shadow-sm flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
                  Transmitting C2C Application...
                </>
              ) : step === totalSteps ? (
                <>
                  Submit C2C Application <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
