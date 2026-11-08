import React from 'react';
import { Target, Bug, ShieldAlert, FileText, Activity } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Activity,
      value: 'SIEM Correlation',
      label: 'Sysmon & Event 4625',
      context: 'Detecting brute-force spikes & PowerShell download cradles'
    },
    {
      icon: ShieldAlert,
      value: 'MITRE ATT&CK',
      label: 'T1110, T1059 & T1566',
      context: 'Adversary technique detection with high-confidence triage'
    },
    {
      icon: Target,
      value: '119+ URLs',
      label: 'Dynamic Surface Monitored',
      context: 'OWASP ZAP AJAX Spider dynamic crawling & API asset mapping'
    },
    {
      icon: FileText,
      value: 'NIST SP 800-61',
      label: 'SANS Incident Response',
      context: 'Detailed incident handling, root cause, and containment roadmaps'
    }
  ];

  return (
    <div className="hidden sm:block border-y border-slate-200/90 bg-white py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col space-y-1 p-3.5 sm:p-0 rounded-xl bg-slate-50/60 sm:bg-transparent border border-slate-200/60 sm:border-0"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#556B2F] shrink-0" />
                  <span className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight font-mono">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  {stat.context}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
