import React, { useEffect } from 'react';
import { X, FileDown, ExternalLink, Mail, Phone, MapPin, Check, Copy, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-slate-900">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-500">
                Junior SOC Analyst | Cybersecurity Fresher · Roland Institute of Technology (2022–2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Hritesh_Kumar_Nayak_SOC_Analyst_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#556B2F] hover:bg-[#4B5E26] rounded-lg transition-colors shadow-xs"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close resume preview modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area: Embedded PDF + Metadata bar */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-100">
          {/* Quick contact / metadata summary sidebar (1/3 on md) */}
          <div className="p-3.5 sm:p-6 md:w-72 border-b md:border-b-0 md:border-r border-slate-200 bg-white space-y-3.5 sm:space-y-5 overflow-y-auto shrink-0 max-h-44 sm:max-h-64 md:max-h-none">
            <div>
              <div className="text-[11px] font-mono text-[#556B2F] uppercase tracking-wider font-semibold mb-1">
                Candidate Profile
              </div>
              <div className="text-base font-bold text-slate-900">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-emerald-600" />
                <span>Junior SOC Analyst</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Education</span>
                <span className="font-semibold text-slate-800 text-right">B.Tech (2022–2026)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">College</span>
                <span className="font-semibold text-slate-800 text-right">Roland Inst. of Tech.</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-slate-800">Odisha, India</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Notice Period</span>
                <span className="font-semibold text-emerald-600">Immediate</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Direct Contact
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full text-left p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs text-slate-700 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="truncate">
                  <div className="text-[10px] text-slate-400">Email Address</div>
                  <div className="truncate font-mono font-medium text-slate-800">{PERSONAL_INFO.email}</div>
                </div>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="block p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs text-slate-700 transition-colors"
              >
                <div className="text-[10px] text-slate-400">Phone Number</div>
                <div className="font-mono text-[#4B5E26] font-semibold">{PERSONAL_INFO.phone}</div>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <span>Open Raw PDF in Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="flex-1 bg-slate-100 relative overflow-hidden flex flex-col">
            <iframe
              src={`${PERSONAL_INFO.resumePdfUrl}#toolbar=0&navpanes=0`}
              title="Hritesh Kumar Nayak Resume"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
