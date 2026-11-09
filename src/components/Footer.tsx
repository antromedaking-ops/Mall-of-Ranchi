import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Heart } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';

interface FooterProps {
  onOpenLegal: (tab: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Events & Festivals', href: '#events' },
    { label: 'Stores & Directory', href: '#stores' },
    { label: 'Entertainment & Dining', href: '#entertainment' },
    { label: 'Host Your Event', href: '#host-event' },
    { label: 'Visit & Parking', href: '#visit' },
    { label: 'Contact Help Desk', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#06080E] border-t border-amber-500/20 text-slate-400 text-xs">
      {/* Decorative top ambient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 via-pink-500/20 to-purple-600/20 border border-amber-400/30 flex items-center justify-center">
                <span className="font-brand text-amber-300 text-lg font-bold">M</span>
              </div>
              <span className="font-brand text-xl font-bold tracking-wider gold-gradient-text">
                MALL OF RANCHI
              </span>
            </a>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Ranchi’s most celebrated retail, culinary, and entertainment
              destination. Bringing families, fashion, and festive celebrations
              together under one iconic roof on Ratu Road.
            </p>

            <div className="space-y-2 pt-1 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{MALL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Open Everyday: 10:30 AM – 10:00 PM (Dining till 11:30 PM)</span>
              </p>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-display">
              Explore Mall
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Assistance & Direct Booking (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-display">
              Concierge & Inquiries
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              For event space bookings, brand kiosk leases, or guest assistance,
              reach out directly to our team:
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={`tel:${MALL_INFO.phone}`}
                className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{MALL_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${MALL_INFO.email}`}
                className="flex items-center gap-2 text-white hover:text-pink-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>{MALL_INFO.email}</span>
              </a>
              <a
                href={`https://wa.me/${MALL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: 080510 66666</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div className="flex items-center gap-6">
            <p className="text-slate-400">
              © 2026 Mall of Ranchi. All rights reserved.
            </p>
          </div>

          {/* Plain language policy links */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="text-slate-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-slate-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-pink-500 fill-pink-500 inline" />
              <span>in Ranchi</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
