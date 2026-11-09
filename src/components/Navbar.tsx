import React, { useState } from 'react';
import { MessageCircle, Menu, X, Clock } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';
import { formatWhatsAppUrl, getMallStatus } from '../utils/mallLogic';

interface NavbarProps {
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getMallStatus();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Events', href: '#events' },
    { label: 'Stores', href: '#stores' },
    { label: 'Entertainment', href: '#entertainment' },
    { label: 'Visit Us', href: '#visit' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappLink = formatWhatsAppUrl(
    MALL_INFO.whatsappNumber,
    'Hello Mall of Ranchi, I would like to inquire about visiting / stores / events.'
  );

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#080B11]/90 border-b border-amber-500/15 transition-all">
      {/* Top micro bar for mall status */}
      <div className="hidden sm:flex items-center justify-between px-6 lg:px-12 py-1.5 text-xs bg-[#0c101a] border-b border-white/5 text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-amber-400/90 font-medium">Ratu Road, Kumhartoli, Ranchi</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>10:30 AM – 10:00 PM</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
            }`}
          />
          <span className="text-slate-300 font-medium">{status.statusText}</span>
          <span className="text-slate-500 text-[11px]">({status.nextChangeText})</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Wordmark (Zone 1) */}
        <a
          href="#hero"
          className="group flex items-center gap-3 tracking-wider text-left transition-transform"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 via-pink-500/15 to-purple-600/20 border border-amber-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(229,184,105,0.2)]">
            <span className="font-brand text-amber-300 text-lg font-bold">M</span>
          </div>
          <div>
            <span className="font-brand text-xl sm:text-2xl font-bold tracking-wider gold-gradient-text block leading-none">
              MALL OF RANCHI
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-sans font-medium block mt-1">
              Jharkhand’s Premier Destination
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Zone 2) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA: WhatsApp Us (Zone 3) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-900 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-slate-900 text-slate-900" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c101a] border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs text-slate-400">
            <span>Ratu Road, Kumhartoli</span>
            <span className="text-amber-400 font-medium">{status.statusText}</span>
          </div>

          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-slate-900 bg-gradient-to-r from-amber-300 to-amber-500 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-slate-900" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
