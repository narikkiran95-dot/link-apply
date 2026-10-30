"use client";

import React, { useState } from "react";
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
  Check
} from "lucide-react";
import { Job, UserProfile } from "@/types/job";
import confetti from "canvas-confetti";

interface EasyApplyModalProps {
  job: Job | null;
  userProfile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onApplySuccess: (jobId: string, answers: Record<string, string>, notes: string) => void;
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

  // Form states
  const [phone, setPhone] = useState(userProfile.phone);
  const [email, setEmail] = useState(userProfile.email);
  const [yearsOfExp, setYearsOfExp] = useState(userProfile.yearsExperience.toString());
  const [sponsorshipRequired, setSponsorshipRequired] = useState("No");
  const [noticePeriod, setNoticePeriod] = useState("2 weeks");
  const [customNote, setCustomNote] = useState(
    `I am enthusiastic about the ${job?.title || "role"} at ${job?.company || "your team"}. With my background in ${job?.skills.slice(0, 3).join(", ") || "full-stack development"}, I can hit the ground running immediately.`
  );

  if (!isOpen || !job) return null;

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate brief network submission
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
      // fallback if canvas not available
    }

    onApplySuccess(
      job.id,
      {
        phone,
        email,
        yearsOfExp,
        sponsorshipRequired,
        noticePeriod
      },
      customNote
    );
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
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
                <span className="bg-blue-50 text-[#0a66c2] text-[11px] font-bold px-2 py-0.5 rounded border border-blue-200">
                  Easy Apply
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {job.title} · {job.location}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition"
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
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Application Submitted!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your application for <strong className="text-slate-900 dark:text-white">{job.title}</strong> has been transmitted directly to {job.company}&apos;s talent team.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-left text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Recruiter:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{job.recruiter.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Resume Attached:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{userProfile.resumeFileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Review Time:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Within 48 hours</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white font-medium rounded-full text-sm transition shadow-sm"
                >
                  Done & View in Tracker
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Step {step} of {totalSteps}:{" "}
                  {step === 1 && "Contact Info"}
                  {step === 2 && "Resume & Experience"}
                  {step === 3 && "Screening Questions"}
                  {step === 4 && "Review & Submit"}
                </span>
                <span className="flex items-center gap-1 text-[#0a66c2]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Direct Recruiter Review
                </span>
              </div>

              {/* Step 1: Contact Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={userProfile.fullName}
                      className="w-full px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 cursor-not-allowed"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Pre-filled from your profile</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      disabled
                      value={userProfile.location}
                      className="w-full px-3 py-2 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 cursor-not-allowed"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Resume & Experience */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Selected Resume
                    </label>
                    <div className="p-3.5 border-2 border-[#0a66c2] bg-blue-50/50 dark:bg-blue-950/30 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            {userProfile.resumeFileName}
                          </p>
                          <p className="text-xs text-slate-500">
                            Updated October 2026 · Tailored for Full Stack & Senior roles
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#0a66c2] flex items-center gap-1">
                        <Check className="w-4 h-4" /> Default
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Total Years of Professional Experience
                    </label>
                    <input
                      type="number"
                      value={yearsOfExp}
                      onChange={(e) => setYearsOfExp(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Matched Core Skills for this Job
                    </label>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill) => {
                        const hasSkill = userProfile.skills.includes(skill);
                        return (
                          <span
                            key={skill}
                            className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${
                              hasSkill
                                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            {hasSkill && <Check className="w-3 h-3 text-emerald-600" />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Screening Questions */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Will you now or in the future require visa sponsorship for employment?
                    </label>
                    <div className="flex gap-4 mt-1.5">
                      {["No", "Yes"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 dark:text-slate-300"
                        >
                          <input
                            type="radio"
                            name="sponsorship"
                            value={option}
                            checked={sponsorshipRequired === option}
                            onChange={(e) => setSponsorshipRequired(e.target.value)}
                            className="text-[#0a66c2] focus:ring-[#0a66c2]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      What is your expected notice period?
                    </label>
                    <select
                      value={noticePeriod}
                      onChange={(e) => setNoticePeriod(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                    >
                      <option value="Immediately">Available Immediately</option>
                      <option value="1 week">1 week</option>
                      <option value="2 weeks">2 weeks</option>
                      <option value="1 month">1 month</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Add a quick intro pitch note to the recruiter
                      </label>
                      <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Crafted
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="space-y-3.5">
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Application Summary
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400">Applicant:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{userProfile.fullName}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Position:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{job.title}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Email:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{email}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Phone:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{phone}</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Experience:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{yearsOfExp} years</p>
                      </div>
                      <div>
                        <span className="text-slate-400">Notice:</span>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{noticePeriod}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl text-xs text-blue-800 dark:text-blue-300 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0a66c2] shrink-0 mt-0.5" />
                    <p>
                      By pressing <strong>Submit Application</strong>, your resume ({userProfile.resumeFileName}) and profile data will be sent directly to {job.company}.
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
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
            ) : (
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition"
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold rounded-full transition shadow-sm flex items-center gap-1.5 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
                  Submitting Application...
                </>
              ) : step === totalSteps ? (
                <>
                  Submit Application <Check className="w-4 h-4" />
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
