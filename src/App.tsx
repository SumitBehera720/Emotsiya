import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { NationalChallenges } from './components/NationalChallenges';
import { CampaignBanner } from './components/CampaignBanner';
import { ApproachSection } from './components/ApproachSection';
import { LifeSkillsSection } from './components/LifeSkillsSection';
import { EventSection } from './components/EventSection';
import { GallerySection } from './components/GallerySection';
import { PricingSection } from './components/PricingSection';
import { PassModal } from './components/PassModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const ScrollSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
    >
      {children}
    </div>
  );
};

export const App: React.FC = () => {
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [selectedPassTier, setSelectedPassTier] = useState<'199' | '499'>('199');

  const handleOpenPassModal = (tier: '199' | '499' = '199') => {
    setSelectedPassTier(tier);
    setIsPassModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] text-slate-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Sticky Translucent Header Navbar */}
      <Navbar onOpenPassModal={handleOpenPassModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Interactive Full-Screen Hero Visual Banner */}
        <Hero onOpenPassModal={handleOpenPassModal} />

        {/* About & Core Philosophy */}
        <ScrollSection>
          <AboutSection />
        </ScrollSection>

        {/* The 7 National Challenges */}
        <ScrollSection>
          <NationalChallenges />
        </ScrollSection>

        {/* Middle Section Visual Campaign Banner */}
        <ScrollSection>
          <CampaignBanner onOpenPassModal={handleOpenPassModal} />
        </ScrollSection>

        {/* 6-Step Transformation Approach */}
        <ScrollSection>
          <ApproachSection />
        </ScrollSection>

        {/* Life Skills & Employability */}
        <ScrollSection>
          <LifeSkillsSection />
        </ScrollSection>

        {/* Event Details Section (Live, Past, Future) */}
        <ScrollSection>
          <EventSection onOpenPassModal={handleOpenPassModal} />
        </ScrollSection>

        {/* Filterable Media & Field Action Gallery */}
        <ScrollSection>
          <GallerySection />
        </ScrollSection>

        {/* Pricing Tiers (₹199 & ₹499 Passes) */}
        <ScrollSection>
          <PricingSection onSelectPass={handleOpenPassModal} />
        </ScrollSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Event Pass Enrollment Modal */}
      <PassModal
        isOpen={isPassModalOpen}
        initialTier={selectedPassTier}
        onClose={() => setIsPassModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Support Widget */}
      <WhatsAppWidget />
    </div>
  );
};

export default App;
