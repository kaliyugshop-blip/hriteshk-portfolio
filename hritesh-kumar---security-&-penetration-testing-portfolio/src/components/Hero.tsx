import React from 'react';
import {
  FileDown,
  Shield,
  ExternalLink,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Activity,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenContactModal }) => {
  return (
    <section id="top" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden relative bg-slate-50">
      {/* Subtle creative dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big Top Headline */}
        <div className="mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200/90 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase flex items-center gap-3">
            <span>Portfolio</span>
            <span className="text-[#556B2F]">2026</span>
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Junior SOC Analyst & Threat Detection Engineer
          </p>
        </div>

        {/* Prominent Active Search Banner - Hidden on mobile preview as requested */}
        <div className="hidden sm:inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F7EE] border border-[#D0DBBA] text-xs font-semibold text-[#4B5E26] mb-6 shadow-xs max-w-full">
          <div className="flex items-center gap-1.5 shrink-0">
            <Briefcase className="w-3.5 h-3.5 text-[#556B2F]" />
            <span>Seeking SOC Analyst (Tier 1 / Tier 2) Roles</span>
          </div>
          <span className="text-[#C2D1A8] hidden sm:inline">·</span>
          <span className="text-emerald-700 font-medium shrink-0">Immediate Availability</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Right Column (Hero Image): Placed at the top on mobile preview via order-first lg:order-last */}
          <div className="order-first lg:order-last lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[370px] sm:max-w-md md:max-w-lg lg:max-w-none">
              {/* Creative Light Frame */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-md sm:shadow-xl shadow-slate-200/70">
                <div className="relative rounded-xl overflow-hidden aspect-[4/4.5] bg-slate-100 group">
                  <img
                    src={PERSONAL_INFO.portraitUrl}
                    alt="Hritesh Kumar - SOC Analyst & Penetration Tester"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Identity Overlay on Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                    <div className="p-2 sm:p-3 bg-white/95 border border-slate-200/90 rounded-lg shadow-sm backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                            {PERSONAL_INFO.name}
                          </div>
                          <div className="text-[10px] sm:text-xs text-[#556B2F] font-mono mt-0.5">
                            B.Tech CSE · Roland Institute of Tech
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase">Target Role</div>
                          <div className="text-[11px] sm:text-xs font-bold text-emerald-600">SOC ANALYST (L1/L2)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-card SOC & Threat Detection Highlights */}
                <div className="mt-2 px-1.5 py-1 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium truncate">
                    <Activity className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                    <span className="truncate text-[11px] sm:text-xs">Splunk · Wazuh · Sysmon</span>
                  </div>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-500 font-mono text-[10px] sm:text-[11px] shrink-0">MITRE ATT&CK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column (Text & CTAs): Placed below the image on mobile preview via order-last lg:order-first */}
          <div className="order-last lg:order-first lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#4B5E26]">
              <Shield className="w-4 h-4 text-[#556B2F] shrink-0" />
              <span>Security Operations Center</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Threat Detection</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-[1.15] text-balance">
              Investigating Alerts & Neutralizing Threats with Offensive Insight
            </h2>

            {/* Lead Copy - Hidden on mobile preview as requested */}
            <p className="hidden sm:block text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I am {PERSONAL_INFO.name}, a cybersecurity analyst specializing in{' '}
              <span className="text-slate-900 font-semibold">SIEM Log Monitoring, Threat Detection & Incident Response</span>. 
              By leveraging hands-on offensive penetration testing experience (Burp Suite Pro, OWASP ZAP, Acunetix) 
              alongside blue-team detection tools (Splunk, Wazuh, Sysmon, Wireshark), I bring a decisive purple-team 
              advantage to high-tempo SOC environments.
            </p>

            {/* Unboxed Metadata Strip (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                <span>Berhampur, Odisha, India</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-700 hover:text-[#556B2F] transition-colors font-medium">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Ready for Relocation / Remote</span>
              </div>
            </div>

            {/* Primary Action Buttons - Mobile Responsive Auto Layout */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Hritesh_Kumar_Nayak_SOC_Analyst_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#556B2F] rounded-lg hover:bg-[#4B5E26] transition-all shadow-sm shadow-[#F4F7EE]0/20 whitespace-nowrap active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#556B2F] transition-colors whitespace-nowrap"
              >
                <span>Explore SIEM & Audits</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
