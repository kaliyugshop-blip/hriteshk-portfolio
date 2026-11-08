import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-100/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-slate-100/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title, one line wordmark */}
          <a
            href="#top"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-[#556B2F] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <span>{PERSONAL_INFO.shortName}</span>
            <span className="hidden sm:inline-block text-xs font-normal text-slate-500 font-mono">
              / SOC Analyst
            </span>
          </a>

          {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#case-studies"
              className="hover:text-[#556B2F] transition-colors whitespace-nowrap shrink-0"
            >
              Case Studies
            </a>
            <a
              href="#terminal-lab"
              className="hover:text-[#556B2F] transition-colors whitespace-nowrap shrink-0"
            >
              SIEM & Lab Console
            </a>
            <a
              href="#skills-matrix"
              className="hover:text-[#556B2F] transition-colors whitespace-nowrap shrink-0"
            >
              Skills & Standards
            </a>
            <button
              onClick={onOpenResumeModal}
              className="hover:text-[#556B2F] transition-colors whitespace-nowrap shrink-0 text-slate-600 hover:cursor-pointer flex items-center gap-1"
            >
              Resume PDF
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenContactModal();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#556B2F] rounded-lg hover:bg-[#4B5E26] transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#F4F7EE]0/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4F7EE]0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-100/98 border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 backdrop-blur-xl shadow-lg">
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#556B2F] py-1.5"
          >
            Case Studies
          </a>
          <a
            href="#terminal-lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#556B2F] py-1.5"
          >
            SIEM & Lab Console
          </a>
          <a
            href="#skills-matrix"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-[#556B2F] py-1.5"
          >
            Skills & Standards
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResumeModal();
            }}
            className="block text-left w-full text-sm font-medium text-slate-700 hover:text-[#556B2F] py-1.5"
          >
            View & Download Resume PDF
          </button>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="block text-center w-full py-2.5 text-xs font-semibold text-white bg-[#556B2F] rounded-lg hover:bg-[#4B5E26] transition-colors shadow-sm"
            >
              Hire Me / Send Message
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
