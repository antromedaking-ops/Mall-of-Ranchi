import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Gentle Animated Ambient Light Orbs behind the hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm Gold Orb */}
        <div
          className="absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent blur-[120px] animate-ambient-1"
          aria-hidden="true"
        />
        {/* Soft Purple Orb */}
        <div
          className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-purple-600/25 via-indigo-600/10 to-transparent blur-[140px] animate-ambient-2"
          aria-hidden="true"
        />
        {/* Soft Pink Accent Orb */}
        <div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-pink-500/20 via-rose-500/10 to-transparent blur-[130px] animate-ambient-3"
          aria-hidden="true"
        />
        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Location lead tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300/90 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ratu Road · Kumhartoli · Ranchi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Shop. Dine. Celebrate.{' '}
              <span className="block mt-1 luxury-gradient-text">
                All Under One Roof.
              </span>
            </h1>

            {/* Short Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed [text-wrap:pretty]">
              Welcome to the Mall of Ranchi, Jharkhand’s crown jewel for luxury
              retail, sensational gastronomy, and vibrant community festivities.
              Discover over 100 celebrated brands, 6-screen Dolby Atmos cinema,
              and memories waiting to be made.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#events"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>See Events</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-[#0F1420]/80 hover:bg-[#141B2D] border border-amber-400/30 hover:border-amber-400/60 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust and Feature Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-sans text-amber-300 tabular-nums">
                  100+
                </p>
                <p className="text-slate-400 mt-0.5">Iconic Stores</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-sans text-pink-300 tabular-nums">
                  6 Screens
                </p>
                <p className="text-slate-400 mt-0.5">PVR INOX Cinema</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-sans text-purple-300 tabular-nums">
                  18+ Outlets
                </p>
                <p className="text-slate-400 mt-0.5">Grand Food Hall</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-sans text-amber-200 tabular-nums">
                  1,200+
                </p>
                <p className="text-slate-400 mt-0.5">Basement Parking</p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Hero Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer soft ambient glow */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-pink-500/30 to-purple-600/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                aria-hidden="true"
              />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 bg-[#0E131F] shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/src/assets/images/hero_mall_exterior_1794242041158.jpg"
                    alt="Mall of Ranchi exterior facade illuminated at dusk on Ratu Road"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-[#080B11]/40 to-transparent" />

                  {/* On-image badge overlay */}
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-black/60 border border-amber-400/40 rounded-lg px-3 py-1.5 text-xs text-amber-300 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Safe & Sanitized Hub</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                      Ranchi Landmark
                    </p>
                    <p className="text-base font-bold text-white leading-tight">
                      Architectural Brilliance on Ratu Road
                    </p>
                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-pink-400 shrink-0" />
                      <span>{MALL_INFO.shortAddress}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
