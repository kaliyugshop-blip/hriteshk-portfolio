import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, ShieldAlert, CheckCircle2, RotateCcw } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';
import { TerminalCommand } from '../types/portfolio';

export const InteractiveTerminal: React.FC = () => {
  const [selectedCmd, setSelectedCmd] = useState<TerminalCommand>(TERMINAL_COMMANDS[0]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>(TERMINAL_COMMANDS[0].output);
  const [copied, setCopied] = useState(false);

  const handleSelectCommand = (cmd: TerminalCommand) => {
    setSelectedCmd(cmd);
    setIsExecuting(true);
    setOutputLines([]);
    // Realistic terminal execution settle
    setTimeout(() => {
      setOutputLines(cmd.output);
      setIsExecuting(false);
    }, 350);
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(selectedCmd.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal-lab" className="py-14 sm:py-20 border-b border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-[#4B5E26] flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#556B2F] shrink-0" />
              <span>Interactive SOC Analyst & SIEM Console</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Alert Correlation, Telemetry & Threat Triage
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Test hands-on SOC investigation queries, Splunk SPL correlation searches, Sysmon process auditing, 
              and phishing header parsing mapped directly against the MITRE ATT&CK matrix.
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Quick-Scenario Selector (< lg screens) */}
        <div className="lg:hidden mb-4 overflow-x-auto pb-1 no-scrollbar">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Select Investigation Scenario
          </div>
          <div className="flex items-center gap-1.5 min-w-max">
            {TERMINAL_COMMANDS.map((cmd, idx) => {
              const isCurrent = selectedCmd.cmd === cmd.cmd;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectCommand(cmd)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#556B2F] text-white border-[#556B2F] font-semibold shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{cmd.label.split(':')[0]}</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded uppercase ${isCurrent ? 'bg-[#4B5E26] text-[#E2E8D7]' : 'bg-slate-200 text-slate-600'}`}>
                    {cmd.category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Console Container - Desktop 12-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Command selector sidebar (Hidden on mobile, rich on desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Select Investigation Scenario
            </div>
            <div className="space-y-2.5">
              {TERMINAL_COMMANDS.map((cmd, idx) => {
                const isCurrent = selectedCmd.cmd === cmd.cmd;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectCommand(cmd)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#F4F7EE]/70 border-[#8F9F68] shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-bold ${isCurrent ? 'text-[#333F1E]' : 'text-slate-800'}`}>
                        {cmd.label}
                      </span>
                      <span className="text-[10px] font-mono text-[#4B5E26] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#E2E8D7]/70 shrink-0 ml-1">
                        {cmd.category}
                      </span>
                    </div>
                    {cmd.mitreRef && (
                      <div className="text-[11px] font-mono text-slate-500 mb-1 truncate">
                        {cmd.mitreRef}
                      </div>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cmd.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick SOC triage note */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#556B2F] shrink-0" />
                SOC Triage Methodology
              </div>
              <p className="leading-relaxed text-slate-500 text-[11px]">
                Adheres to NIST SP 800-61 Rev 2 guidelines: Initial Alert Analysis → Artifact Extraction → Host Isolation → Threat Eradication.
              </p>
            </div>
          </div>

          {/* Terminal output window (12 cols on mobile, 8 cols on desktop) */}
          <div className="w-full lg:col-span-8 rounded-2xl border border-slate-300/80 bg-slate-950 shadow-xl overflow-hidden flex flex-col">
            {/* Terminal Title Bar - Responsive Auto Layout */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 shrink-0" />
                <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">
                  soc-analyst@siem:~/{selectedCmd.category}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={handleCopyCmd}
                  className="inline-flex items-center gap-1 px-2 py-1 text-[10px] sm:text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
                  title="Copy command to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleSelectCommand(selectedCmd)}
                  disabled={isExecuting}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono text-white bg-[#556B2F] hover:bg-[#F4F7EE]0 rounded transition-colors cursor-pointer disabled:opacity-50"
                  title="Re-run investigation query"
                >
                  <RotateCcw className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                  <span>Execute</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-3.5 sm:p-6 font-mono text-[11px] sm:text-xs text-slate-300 space-y-2.5 min-h-[260px] sm:min-h-[320px] bg-slate-950/95 overflow-x-auto">
              {/* Query line */}
              <div className="flex items-start gap-1.5 sm:gap-2 text-[#8F9F68] font-semibold break-all leading-normal">
                <span className="text-emerald-400 select-none shrink-0">$</span>
                <span>{selectedCmd.cmd}</span>
              </div>

              {/* Output */}
              {isExecuting ? (
                <div className="text-slate-500 italic py-4">Ingesting telemetry and executing search query...</div>
              ) : (
                <div className="space-y-1 pt-1.5 text-slate-300">
                  {outputLines.map((line, index) => {
                    let color = 'text-slate-300';
                    if (line.startsWith('[!]')) color = 'text-amber-400 font-medium';
                    else if (line.startsWith('[+]')) color = 'text-[#C2D1A8]';
                    else if (line.startsWith('[✓]')) color = 'text-emerald-400 font-semibold';
                    else if (line.includes('TRUE POSITIVE') || line.includes('High-Severity') || line.includes('FAIL')) color = 'text-rose-400 font-bold';

                    return (
                      <div key={index} className={`${color} leading-relaxed`}>
                        {line}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Remediation & Containment Footer */}
            <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 text-xs">
              <div className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SOC Playbook & Containment Action</span>
              </div>
              <div className="text-slate-300 font-mono text-[11px] sm:text-xs leading-relaxed">
                {selectedCmd.remediation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
