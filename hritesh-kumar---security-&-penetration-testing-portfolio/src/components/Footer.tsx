import React from 'react';
import { ArrowUp, FileDown, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#556B2F]" />
            <div>
              <div className="text-sm font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-500">
                SOC Analyst (Tier 1 / Tier 2) & Threat Detection · Portfolio 2026
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
            <a href="#case-studies" className="hover:text-[#556B2F] transition-colors">
              Case Studies
            </a>
            <a href="#terminal-lab" className="hover:text-[#556B2F] transition-colors">
              SIEM & Lab Console
            </a>
            <a href="#skills-matrix" className="hover:text-[#556B2F] transition-colors">
              Technical Matrix
            </a>
            <button
              onClick={onOpenResumeModal}
              className="hover:text-[#556B2F] transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Hritesh_Kumar_Nayak_SOC_Analyst_CV.pdf"
              className="hover:text-[#556B2F] transition-colors flex items-center gap-1 font-semibold text-[#556B2F]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="hidden sm:flex p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            Built with strict security testing and detection standards (MITRE ATT&CK, NIST SP 800-61, OWASP).
          </div>
          <div>
            Direct Inquiries:{' '}
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:text-[#556B2F] font-medium">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
