import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { CaseStudies } from './components/CaseStudies';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { CaseStudy } from './types/portfolio';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-[#F4F7EE]0/20 selection:text-[#333F1E]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={handleOpenContact}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenContactModal={handleOpenContact}
        />

        {/* Quantified Proof Points / Stats Strip */}
        <StatsStrip />

        {/* Core Offensive Security Case Studies */}
        <CaseStudies
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* Hands-on Interactive Terminal & Payload Console */}
        <InteractiveTerminal />

        {/* Technical Skills, Toolchain & Education Matrix */}
        <SkillsMatrix />

        {/* Download Resume Banner & Contact Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Modals & Overlays */}
      <ImageLightboxModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
