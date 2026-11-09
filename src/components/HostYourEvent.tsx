import React from 'react';
import { CalendarCheck, MessageCircle, Sparkles, Building2, Users, Radio, ArrowUpRight } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';
import { formatWhatsAppUrl } from '../utils/mallLogic';

export const HostYourEvent: React.FC = () => {
  const whatsappBookingUrl = formatWhatsAppUrl(
    MALL_INFO.whatsappNumber,
    'Hello Mall of Ranchi Events Team, I would like to inquire about hosting an event / kiosk setup at the mall.'
  );

  const perks = [
    {
      icon: Building2,
      title: 'Grand Central Atrium',
      desc: '10,000+ sq.ft multi-level atrium with 360° visibility for brand pop-ups & exhibitions.',
    },
    {
      icon: Users,
      title: 'High Footfall Audience',
      desc: 'Connect with 25,000+ discerning weekend shoppers, families, and youth of Ranchi.',
    },
    {
      icon: Radio,
      title: 'AV & Production Support',
      desc: 'Acoustic stage setups, integrated LED display backdrops, and dedicated power backups.',
    },
  ];

  return (
    <section id="host-event" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090D17]">
      {/* Ambient background light */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#10172A] via-[#0E1322] to-[#130F24] border border-amber-400/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          {/* Subtle glow border */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-bl from-amber-400/20 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Brand Collaborations & Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
                Host Your Next Signature Event at Mall of Ranchi
              </h2>

              <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
                From experiential brand activations and auto launches to live
                acoustic gigs, fashion runways, and cultural art exhibitions —
                our prime spaces put your brand in front of Ranchi’s most engaged
                audience.
              </p>

              {/* Space Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {perks.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-amber-400 mb-2" />
                      <h3 className="text-sm font-bold text-white mb-1">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Enquire via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                  <span>Prompt response within 2 hours</span>
                </span>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-amber-400/30 bg-[#0A0D17] p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-amber-300 font-semibold uppercase tracking-wider">
                    Booking Guidelines
                  </span>
                  <span className="text-slate-400">Turnaround: 48 hrs</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong className="text-white">Central Atrium Activations:</strong>{' '}
                      Ideal for car unveils, tech pavilions & festive stalls.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong className="text-white">Cultural & Live Stages:</strong>{' '}
                      Fully equipped with acoustic rigging and sound clearances.
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      3
                    </span>
                    <p>
                      <strong className="text-white">Private Screenings:</strong> Book
                      auditoriums at PVR INOX for corporate town halls & launches.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="text-[11px] text-slate-400">
                    Direct Concierge Hotline:{' '}
                    <a
                      href={`tel:${MALL_INFO.phone}`}
                      className="text-amber-300 font-medium hover:underline"
                    >
                      {MALL_INFO.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
