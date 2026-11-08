import React, { useState } from 'react';
import { ZoomIn, ChevronRight, Activity, ChevronDown, ChevronUp, Star, FileText, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types/portfolio';

interface CaseStudiesProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'core' | 'siem' | 'network' | 'offensive'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (filter === 'core') return study.id === 'splunk-siem-homelab' || study.id === 'network-traffic-investigation' || study.id === 'wazuh-security-monitoring';
    if (filter === 'siem') return study.id === 'splunk-siem-homelab' || study.id === 'wazuh-security-monitoring' || study.id === 'phishing-investigation';
    if (filter === 'network') return study.id === 'network-traffic-investigation';
    if (filter === 'offensive') return study.id === 'burp-suite' || study.id === 'owasp-zap' || study.id === 'acunetix' || study.id === 'lab-assessment';
    return true;
  });

  // Progressive disclosure: show 6 by default (3 rows of 2), expandable to all
  const visibleStudies = showAll || filter !== 'all' ? filteredStudies : filteredStudies.slice(0, 6);

  return (
    <section id="case-studies" className="py-14 sm:py-20 border-b border-slate-200/90 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-[#4B5E26] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#556B2F] shrink-0" />
              <span>SOC Case Studies & Technical Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Security Operations, Network Telemetry & Audits
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Featuring hands-on SOC engineering projects in Splunk Enterprise SIEM, Wireshark packet capture, 
              and Wazuh endpoint monitoring alongside verified offensive application assessments.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="w-full overflow-x-auto pb-2.5 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:pt-0 no-scrollbar overscroll-x-contain touch-pan-x">
            <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl shadow-xs whitespace-nowrap min-w-max">
              <button
                onClick={() => { setFilter('all'); setShowAll(false); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === 'all'
                    ? 'bg-[#556B2F] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                All Projects ({CASE_STUDIES.length})
              </button>
              <button
                onClick={() => setFilter('core')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === 'core'
                    ? 'bg-[#556B2F] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Core Projects (1, 2, 3)
              </button>
              <button
                onClick={() => setFilter('siem')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === 'siem'
                    ? 'bg-[#556B2F] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Splunk & Wazuh SIEM
              </button>
              <button
                onClick={() => setFilter('network')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === 'network'
                    ? 'bg-[#556B2F] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Wireshark Traffic
              </button>
              <button
                onClick={() => setFilter('offensive')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  filter === 'offensive'
                    ? 'bg-[#556B2F] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Web App Audits
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Grid - 2 in a row on all viewports */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:gap-8">
          {visibleStudies.map((study, idx) => {
            return (
              <div
                key={study.id}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-200 flex flex-col overflow-hidden group shadow-xs hover:shadow-md ${
                  study.isPrimary
                    ? 'border-[#8F9F68]/90 ring-1 ring-[#C2D1A8]/40 bg-white'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                {/* Media frame */}
                <div
                  className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-900 overflow-hidden cursor-pointer border-b border-slate-100"
                  onClick={() => onSelectCaseStudy(study)}
                >
                  <img
                    src={study.imageSrc}
                    alt={`${study.toolName} project screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Primary Project Star Tag */}
                  {study.isPrimary && (
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-amber-500 text-slate-950 font-bold text-[9px] sm:text-[11px] flex items-center gap-1 shadow-sm uppercase tracking-wide">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-slate-950" />
                      <span>Most Important</span>
                    </div>
                  )}

                  {/* Top-right zoom action button */}
                  <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 p-1 sm:p-2 bg-white/90 border border-slate-200 rounded-md sm:rounded-lg text-slate-700 group-hover:text-[#556B2F] transition-colors shadow-xs backdrop-blur-sm">
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>

                  {/* Bottom Tool Name Over Media */}
                  <div className="absolute bottom-1.5 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4">
                    <div className="text-[9px] sm:text-xs font-mono font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded inline-block truncate max-w-full">
                      {study.toolName}
                    </div>
                  </div>
                </div>

                {/* Content body with responsive 2-per-row auto layout */}
                <div className="p-2.5 sm:p-5 md:p-6 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-3">
                    {/* Unboxed Metadata (Zero-Pill) */}
                    <div className="text-[10px] sm:text-xs text-slate-500 flex flex-wrap items-center justify-between gap-1 sm:gap-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="font-semibold text-slate-700 truncate">{study.badge}</span>
                      </div>
                      {study.referenceDomain && (
                        <span className="hidden sm:inline text-[10px] font-mono text-slate-400">
                          {study.referenceDomain}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-[#556B2F] transition-colors leading-snug line-clamp-2">
                      {study.title}
                    </h3>

                    <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {study.purpose}
                    </p>

                    {/* Deliverable Badge if present */}
                    {study.deliverable && (
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#4B5E26] bg-[#F4F7EE]/80 border border-[#D0DBBA]/70 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg font-medium">
                        <FileText className="w-3 h-3 text-[#556B2F] shrink-0" />
                        <span className="truncate">
                          <span className="text-slate-500 font-normal">Deliverable: </span>
                          <span className="font-semibold text-slate-900">{study.deliverable}</span>
                        </span>
                      </div>
                    )}

                    {/* Key Project Steps / Findings List - Hidden on extra-compact mobile */}
                    <div className="hidden sm:block pt-1 space-y-1">
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                        <span>Project Implementation Steps</span>
                      </div>
                      <ul className="space-y-1">
                        {study.keyFindings.slice(0, 4).map((item, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#556B2F] font-mono mt-0.5 font-bold shrink-0">❯</span>
                            <span className="leading-snug line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card bottom action & tags */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-1">
                    <div className="hidden md:flex flex-wrap items-center gap-x-1.5 text-[10px] sm:text-[11px] text-slate-500 font-mono truncate">
                      {study.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="truncate">
                          #{tag.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectCaseStudy(study)}
                      className="inline-flex items-center gap-0.5 sm:gap-1 text-[11px] sm:text-xs font-semibold text-[#556B2F] hover:text-[#4B5E26] transition-colors cursor-pointer shrink-0 py-0.5 ml-auto"
                    >
                      <span className="sm:hidden">Inspect</span>
                      <span className="hidden sm:inline">Inspect Project & Report</span>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progressive Disclosure Toggle Button */}
        {filter === 'all' && filteredStudies.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              <span>{showAll ? 'Show Core Projects Only' : `View All ${filteredStudies.length} Projects & Audits`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
