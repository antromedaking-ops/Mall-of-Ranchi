import React from 'react';
import { Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ENTERTAINMENT_CARDS } from '../utils/mallData';

export const EntertainmentDining: React.FC = () => {
  return (
    <section id="entertainment" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090D16]">
      {/* Soft ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-transparent rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-pink-400 py-1 px-3 rounded-full bg-pink-500/10 border border-pink-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leisure & Culinary Magic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Entertainment & Dining
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            Whether you crave heart-pounding arcade action, luxury recliner
            blockbuster movies, or authentic gastronomic feasts, we craft
            unforgettable moments.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ENTERTAINMENT_CARDS.map((card, index) => {
            const glowBorderClass =
              index === 0
                ? 'border-purple-500/30 hover:border-purple-500/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]'
                : index === 1
                ? 'border-amber-500/30 hover:border-amber-500/70 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]'
                : 'border-pink-500/30 hover:border-pink-500/70 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]';

            return (
              <div
                key={card.id}
                className={`group rounded-2xl bg-[#0E1322] border ${glowBorderClass} overflow-hidden transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Visual slot */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1322] via-[#0E1322]/30 to-transparent" />
                    <div className="absolute top-3 left-3 backdrop-blur-md bg-black/70 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-200 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{card.timings}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                        {card.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                      {card.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={card.ctaAction}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 transition-all group-hover:text-amber-300"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
