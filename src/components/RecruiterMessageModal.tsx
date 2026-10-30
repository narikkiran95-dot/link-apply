"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  X, 
  Send, 
  Sparkles, 
  Paperclip, 
  CheckCheck, 
  Clock, 
  Briefcase, 
  Building2,
  FileText,
  Phone,
  Mail,
  Check
} from "lucide-react";
import { Job, UserProfile } from "@/types/job";

interface MessageItem {
  id: string;
  sender: "user" | "recruiter";
  text: string;
  timestamp: string;
  attachmentName?: string;
}

interface RecruiterMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
  userProfile: UserProfile;
}

export const RecruiterMessageModal: React.FC<RecruiterMessageModalProps> = ({
  isOpen,
  onClose,
  job,
  userProfile
}) => {
  const [messages, setMessages] = useState<Record<string, MessageItem[]>>({});
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [attachResume, setAttachResume] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const recruiter = job?.recruiter;

  // Initialize greeting conversation if none exists for this job
  useEffect(() => {
    if (!job) return;
    if (!messages[job.id]) {
      const initialMsgs: MessageItem[] = [
        {
          id: `msg-rec-init-${job.id}`,
          sender: "recruiter",
          text: `Hello! Thanks for your interest in our ${job.title} opening at ${job.company}. We are actively screening candidates and C2C vendors. Feel free to leave a message or send across your availability!`,
          timestamp: "Today at 9:15 AM"
        }
      ];
      setMessages((prev) => ({ ...prev, [job.id]: initialMsgs }));
    }
  }, [job]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen || !job || !recruiter) return null;

  const currentMessages = messages[job.id] || [];

  const handleTemplateSelect = (templateType: string) => {
    if (templateType === "c2c") {
      setInputText(
        `Hi ${recruiter.name.split(" ")[0]}, I am reaching out as a Senior Mainframe Consultant available immediately for C2C (Corp-to-Corp) engagement via my US LLC (${userProfile.c2cEntityName || "Apex Enterprise Consulting LLC"}). I have 8+ years deep in ${job.skills.slice(0, 4).join(", ")}. What is your team's timeline for initial screening?`
      );
    } else if (templateType === "availability") {
      setInputText(
        `Hello ${recruiter.name.split(" ")[0]}, I recently reviewed the ${job.title} position at ${job.company}. My profile is tailored for your tech stack (${job.skills.slice(0, 3).join(", ")}) and I am open for immediate nationwide remote contract start at $95 - $115/hr C2C.`
      );
    } else if (templateType === "followup") {
      setInputText(
        `Hi ${recruiter.name.split(" ")[0]}, I submitted my application for the ${job.title} role with my tailored C2C resume. Looking forward to connecting with your engineering management team!`
      );
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: MessageItem = {
      id: `msg-user-${Date.now()}`,
      sender: "user",
      text: inputText.trim(),
      timestamp: "Just now",
      attachmentName: attachResume ? `${userProfile.fullName.replace(" ", "_")}_${job.company}_Tailored_C2C_Resume.pdf` : undefined
    };

    const updated = [...currentMessages, userMsg];
    setMessages((prev) => ({ ...prev, [job.id]: updated }));
    setInputText("");

    // Simulate recruiter typing and responding
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        `Thanks for reaching out, ${userProfile.fullName}! We received your C2C details and your background with ${job.skills[0]} and ${job.skills[1]} is an excellent match for ${job.company}. Our engineering manager would like to schedule a 20-minute video screen. Does tomorrow at 2:00 PM EST work for you?`,
        `Hi ${userProfile.fullName}, appreciate the message and your verified LLC vendor information! Your rate of ${job.hourlyRate || "$95-$115/hr"} is well within our budget for this C2C engagement. I have flagged your profile directly to our talent director.`,
        `Hello ${userProfile.fullName}! Thanks for the quick note. Your tailored resume has been forwarded to the lead architect for ${job.title}. Expect an update from us by tomorrow morning!`
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const recruiterReply: MessageItem = {
        id: `msg-rec-${Date.now()}`,
        sender: "recruiter",
        text: randomResponse,
        timestamp: "Just now"
      };

      setMessages((prev) => ({
        ...prev,
        [job.id]: [...(prev[job.id] || []), recruiterReply]
      }));
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full shadow-2xl flex flex-col h-[600px] overflow-hidden">
        {/* Recruiter Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={recruiter.avatar}
                alt={recruiter.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {recruiter.name}
                </h3>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-1.5 py-0.2 rounded font-semibold">
                  {recruiter.connectionDegree}
                </span>
                <span className="text-[11px] text-emerald-600 font-semibold">
                  Active now
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {recruiter.role} · <strong className="text-slate-700 dark:text-slate-300">{job.company}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Message Template Chips */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-semibold shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#0a66c2]" /> Quick Pitch:
          </span>
          <button
            onClick={() => handleTemplateSelect("c2c")}
            className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 shrink-0 font-medium cursor-pointer"
          >
            C2C Rate & LLC Inquiry
          </button>
          <button
            onClick={() => handleTemplateSelect("availability")}
            className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 shrink-0 font-medium cursor-pointer"
          >
            Immediate Remote Availability
          </button>
          <button
            onClick={() => handleTemplateSelect("followup")}
            className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 shrink-0 font-medium cursor-pointer"
          >
            Application Follow-up
          </button>
        </div>

        {/* Messages List Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/30 dark:bg-slate-950/20">
          {currentMessages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? "bg-[#0a66c2] text-white rounded-br-xs shadow-xs"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-xs shadow-xs"
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.attachmentName && (
                    <div className="mt-2 pt-2 border-t border-white/20 flex items-center gap-2 text-xs font-mono">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="truncate">{msg.attachmentName}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 px-1">
                  <span>{msg.timestamp}</span>
                  {isUser && <CheckCheck className="w-3 h-3 text-[#0a66c2]" />}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <img
                src={recruiter.avatar}
                alt={recruiter.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="flex items-center gap-1 font-medium">
                {recruiter.name.split(" ")[0]} is typing
                <span className="animate-pulse">...</span>
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input & Send Box */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={attachResume}
                onChange={(e) => setAttachResume(e.target.checked)}
                className="text-[#0a66c2] rounded focus:ring-[#0a66c2]"
              />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Attach Tailored C2C Resume
              </span>
            </label>
            <span className="text-[10px] text-slate-400">
              Press Enter to send
            </span>
          </div>

          <div className="flex items-center gap-2">
            <textarea
              rows={2}
              placeholder={`Write a direct message to ${recruiter.name}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1 px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a66c2] text-slate-800 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="px-4 py-2.5 bg-[#0a66c2] hover:bg-[#004182] disabled:opacity-40 text-white rounded-xl font-bold text-xs transition flex items-center gap-1 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
