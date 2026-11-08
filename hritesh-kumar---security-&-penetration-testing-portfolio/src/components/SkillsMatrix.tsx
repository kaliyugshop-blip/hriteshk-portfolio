import React from 'react';
import { GraduationCap, BookOpen, Activity } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills-matrix" className="py-12 sm:py-20 border-b border-slate-200/90 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="text-xs font-bold tracking-wider uppercase text-[#4B5E26] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#556B2F] shrink-0" />
            <span>Technical Competencies & Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            SOC Operations, SIEM Toolchain & Purple Team Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A comprehensive matrix encompassing SIEM log analysis, MITRE ATT&CK framework mapping, 
            offensive vulnerability tools, endpoint telemetry, and computer science engineering coursework.
          </p>
        </div>

        {/* Category Grid - 2 Divisions per Row on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 md:gap-8 mb-6 sm:mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            return (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-5 md:p-6 space-y-2 sm:space-y-3 hover:border-slate-300 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="space-y-0.5 sm:space-y-1 pb-1 sm:pb-2 border-b border-slate-100">
                    <div className="text-[9px] sm:text-xs font-mono font-semibold text-[#4B5E26] uppercase">
                      Domain {idx + 1}
                    </div>
                    <h3 className="text-xs sm:text-base md:text-lg font-bold text-slate-900 leading-snug line-clamp-1 sm:line-clamp-none">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 leading-tight line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="divide-y divide-slate-100 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-1.5 sm:py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 sm:gap-1 text-xs"
                      >
                        <div className="pr-1 min-w-0">
                          <span className="font-semibold text-slate-800 text-[11px] sm:text-xs block truncate">
                            {skill.name}
                          </span>
                          <p className="text-slate-500 text-[10px] sm:text-[11px] leading-tight line-clamp-1 sm:line-clamp-2 mt-0.5">
                            {skill.detail}
                          </p>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono text-[#4B5E26] font-medium shrink-0 self-start sm:self-auto sm:text-right mt-0.5 sm:mt-0 px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded bg-[#F4F7EE]">
                          {skill.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Academic Rigor Card - Responsive Auto Layout */}
        <div className="rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-6 md:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-1.5 sm:space-y-3">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-[#4B5E26] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#556B2F] shrink-0" />
                <span>Academic Engineering Foundation</span>
              </div>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                {PERSONAL_INFO.education.institution} · <span className="font-mono text-[#4B5E26] font-bold">{PERSONAL_INFO.education.period}</span>
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xl">
                Comprehensive training in computer systems engineering, distributed database networks, 
                and secure operating system architecture.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-200 pt-3.5 lg:pt-0 lg:pl-8">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-4 h-4 text-[#556B2F] shrink-0" />
                <span>Relevant Engineering Coursework</span>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-700 font-mono">
                {PERSONAL_INFO.education.coursework.map((course, cIdx) => (
                  <span key={cIdx} className="flex items-center gap-1">
                    <span className="text-[#556B2F] font-bold">·</span>
                    <span className="text-[10px] sm:text-xs">{course}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
