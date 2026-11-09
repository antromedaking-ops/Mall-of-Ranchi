import React from 'react';
import {
  MapPin,
  Clock,
  Car,
  Navigation,
  ExternalLink,
  Zap,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';
import { getMallStatus } from '../utils/mallLogic';

export const VisitUs: React.FC = () => {
  const status = getMallStatus();

  return (
    <section id="visit" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Plan Your Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Visit Us on Ratu Road
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            Centrally situated in Kumhartoli along Ranchi’s bustling commercial
            lifeline with seamless multi-level basement parking and concierge
            valet.
          </p>
        </div>

        {/* Content Split: Details Cards + Google Map Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Timings, Address & Parking Info */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="rounded-2xl p-6 bg-[#0E1322] border border-amber-400/25 shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Mall Location</h3>
                  <p className="text-xs text-amber-300/90 font-medium">
                    Heart of Ranchi
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                {MALL_INFO.address}
              </p>
              <div className="text-xs text-slate-400 flex items-center gap-4 pt-1">
                <span>Ranchi Rly Stn: ~4.5 km</span>
                <span aria-hidden="true">·</span>
                <span>Airport: ~10.5 km</span>
              </div>
            </div>

            {/* Mall Timings Card */}
            <div className="rounded-2xl p-6 bg-[#0E1322] border border-purple-500/25 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Operating Timings</h3>
                    <p className="text-xs text-slate-400">Open 7 Days a Week</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    status.isOpen
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  {status.statusText}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Retail Stores & Showrooms:</span>
                  <span className="font-semibold text-white">10:30 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Grand Food Court & Bistros:</span>
                  <span className="font-semibold text-amber-300">10:30 AM – 11:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">PVR INOX Cinema:</span>
                  <span className="font-semibold text-purple-300">09:30 AM – 12:00 AM</span>
                </div>
              </div>
            </div>

            {/* Parking Info Card */}
            <div className="rounded-2xl p-6 bg-[#0E1322] border border-pink-500/25 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-300">
                  <Car className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Parking & Transit</h3>
                  <p className="text-xs text-slate-400">
                    Smart Multi-Tier Basement
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span>1,200+ Bays</span>
                  </p>
                  <p className="text-[11px] text-slate-400">2-Wheeler & 4-Wheeler Slots</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EV Fast Charging</span>
                  </p>
                  <p className="text-[11px] text-slate-400">Level 2 & CCS2 Chargers</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-pink-400" />
                    <span>Valet Service</span>
                  </p>
                  <p className="text-[11px] text-slate-400">Main Porch Drop-off</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>FASTag Entry</span>
                  </p>
                  <p className="text-[11px] text-slate-400">Ticketless & 24/7 CCTV</p>
                </div>
              </div>
            </div>

            {/* Primary Get Directions CTA */}
            <a
              href={MALL_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4 text-slate-950" />
              <span>Get Directions to Mall</span>
              <ExternalLink className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          {/* Right Column: Google Map Showcase Placeholder */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-[#0D121F] border border-amber-400/30 shadow-2xl flex-1 flex flex-col min-h-[460px]">
              {/* Map visual representation */}
              <div className="relative flex-1 bg-[#101524] overflow-hidden">
                {/* Stylized Google Map Background Canvas */}
                <div className="absolute inset-0 opacity-80">
                  {/* Road Grid lines */}
                  <svg
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                  >
                    <defs>
                      <pattern
                        id="map-roads"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 80 0 L 0 0 0 80"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.05)"
                          strokeWidth="1"
                        />
                      </pattern>
                      <linearGradient id="road-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E5B869" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="#0c111d" />
                    <rect width="100%" height="100%" fill="url(#map-roads)" />

                    {/* Ratu Road Main Highway Path */}
                    <path
                      d="M -50 350 Q 250 280 500 240 T 950 160"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="24"
                    />
                    <path
                      d="M -50 350 Q 250 280 500 240 T 950 160"
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="4"
                      strokeDasharray="8 6"
                      opacity="0.7"
                    />

                    {/* Secondary Cross Road Kumhartoli */}
                    <path
                      d="M 380 -50 L 520 600"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="18"
                    />
                    <path
                      d="M 380 -50 L 520 600"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="2"
                    />

                    {/* Harmony Green Zone (Ranchi Parks) */}
                    <circle cx="200" cy="140" r="80" fill="#064e3b" opacity="0.25" />
                    <circle cx="750" cy="400" r="110" fill="#064e3b" opacity="0.2" />
                  </svg>
                </div>

                {/* Road Labels on Map */}
                <div className="absolute top-[52%] left-[12%] text-[11px] font-bold text-amber-300 tracking-wider uppercase rotate-[-8deg] bg-black/60 px-2 py-0.5 rounded border border-amber-500/20">
                  Ratu Road (NH 75 / Main Arterial)
                </div>
                <div className="absolute top-[20%] left-[58%] text-[10px] font-medium text-slate-400 rotate-[75deg] bg-black/50 px-1.5 py-0.5 rounded">
                  Kumhartoli Chowk
                </div>

                {/* Center Pin Marker for Mall of Ranchi */}
                <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  {/* Pulse Ring */}
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-pink-400 opacity-75" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.8)] border-2 border-white relative z-10">
                      <MapPin className="w-6 h-6 text-slate-950 fill-white" />
                    </div>
                  </div>

                  {/* Marker Popup Callout */}
                  <div className="mt-3 p-3 rounded-xl bg-[#090D17]/95 backdrop-blur-md border border-amber-400/60 shadow-2xl text-center min-w-[200px] z-20">
                    <p className="text-xs font-bold text-white font-display">
                      MALL OF RANCHI
                    </p>
                    <p className="text-[11px] text-amber-300">
                      Ratu Road, Kumhartoli, Ranchi
                    </p>
                    <div className="mt-1 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{status.statusText} · Open Today</span>
                    </div>
                  </div>
                </div>

                {/* Map Control overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="bg-[#090D17]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-slate-300">
                    <span>Google Maps Platform</span>
                    <span className="text-slate-500 mx-1.5">|</span>
                    <span className="text-amber-400">Ranchi 834001</span>
                  </div>

                  <a
                    href={MALL_INFO.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
