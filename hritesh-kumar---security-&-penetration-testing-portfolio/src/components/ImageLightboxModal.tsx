import React, { useEffect } from 'react';
import { X, ZoomIn, Shield, ExternalLink, Terminal, Activity } from 'lucide-react';
import { CaseStudy } from '../types/portfolio';

interface LightboxProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<LightboxProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-slate-200 bg-white gap-2">
          <div className="flex items-center gap-2.5 truncate">
            <div className="truncate">
              <h3 id="modal-case-title" className="text-sm sm:text-base font-bold text-slate-900 truncate">
                {caseStudy.toolName} — Evidence Capture
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">{caseStudy.operation}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close high-resolution evidence modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-3.5 sm:p-6 space-y-4 sm:space-y-6 bg-slate-50">
          {/* Main Screenshot Container */}
          <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-xs relative group bg-slate-900">
            <img
              src={caseStudy.imageSrc}
              alt={`${caseStudy.toolName} Evidence Screenshot`}
              className="w-full h-auto block object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Technical Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B5E26] flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#556B2F]" />
                Assessment Purpose & Operation
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {caseStudy.purpose}
              </p>
              <div className="text-xs text-slate-500 font-mono space-y-1.5 pt-1">
                {caseStudy.deliverable && (
                  <div className="flex items-center gap-1.5 text-[#4B5E26] bg-[#F4F7EE] px-2.5 py-1.5 rounded-lg border border-[#D0DBBA]/80 font-sans text-xs font-semibold">
                    <span>Deliverable:</span>
                    <span className="text-slate-900">{caseStudy.deliverable}</span>
                  </div>
                )}
                {caseStudy.referenceDomain && (
                  <div>
                    <span className="text-slate-400">Reference:</span>{' '}
                    <span className="text-slate-700 font-medium">{caseStudy.referenceDomain}</span>
                  </div>
                )}
                {caseStudy.technicalDetails.targetTested && (
                  <div>
                    <span className="text-slate-400">Target Assessed:</span>{' '}
                    <span className="text-slate-800 font-medium">{caseStudy.technicalDetails.targetTested}</span>
                  </div>
                )}
                {caseStudy.technicalDetails.threatLevel && (
                  <div>
                    <span className="text-slate-400">Recorded Impact:</span>{' '}
                    <span className="text-amber-700 font-semibold">{caseStudy.technicalDetails.threatLevel}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B5E26] flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#556B2F]" />
                Key Findings & Proof-of-Exploit
              </h4>
              <ul className="space-y-2">
                {caseStudy.keyFindings.map((finding, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-[#556B2F] font-mono mt-0.5 font-bold">❯</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Remediation guidance code block */}
          <div className="p-4 bg-white border border-slate-200 rounded-xl font-mono text-xs text-slate-700 leading-relaxed overflow-x-auto shadow-xs">
            <div className="text-[11px] text-[#4B5E26] uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              SOC Remediation & Containment Action Plan
            </div>
            {caseStudy.remediationSnippet}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <div>Documented in Red/Blue Team Incident Records</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
