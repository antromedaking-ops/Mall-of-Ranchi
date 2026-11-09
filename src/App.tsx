/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuotesStrip } from './components/QuotesStrip';
import { RecentEvents } from './components/RecentEvents';
import { StoresAndBrands } from './components/StoresAndBrands';
import { EntertainmentDining } from './components/EntertainmentDining';
import { Gallery } from './components/Gallery';
import { HostYourEvent } from './components/HostYourEvent';
import { VisitUs } from './components/VisitUs';
import { ContactSection } from './components/ContactSection';
import { SocialStrip } from './components/SocialStrip';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    tab: 'terms' | 'privacy';
  }>({
    isOpen: false,
    tab: 'terms',
  });

  const handleOpenLegal = (tab: 'terms' | 'privacy') => {
    setLegalModalState({
      isOpen: true,
      tab,
    });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenLegal={handleOpenLegal} />

      {/* Main Sections in Exact Required Order */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Rotating Quotes Strip */}
        <QuotesStrip />

        {/* 4. Recent Events */}
        <RecentEvents />

        {/* 5. Stores and Brands */}
        <StoresAndBrands />

        {/* 6. Entertainment and Dining */}
        <EntertainmentDining />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Host Your Event */}
        <HostYourEvent />

        {/* 9. Visit Us */}
        <VisitUs />

        {/* 10. Contact Section */}
        <ContactSection />

        {/* 11. Social Links */}
        <SocialStrip />
      </main>

      {/* 12. Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Extras: Floating WhatsApp Button at Bottom Right */}
      <FloatingWhatsApp />

      {/* Terms of Service & Privacy Policy Plain-Language Modals */}
      <LegalModals
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
