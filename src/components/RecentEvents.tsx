import React, { useState } from 'react';
import { Calendar, Trophy, Instagram, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { EVENTS, HIGHLIGHTS, MALL_INFO } from '../utils/mallData';
import { MallEvent } from '../types/mall';

export const RecentEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<MallEvent | null>(null);

  return (
    <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090D15]">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Recent Events & Grand Festivals
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            From high-glamour runway showcases and championship mind sports to
            thrilling festival giveaways, explore the electric atmosphere at
            Mall of Ranchi.
          </p>
        </div>

        {/* 3 Featured Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="group relative rounded-2xl overflow-hidden bg-[#0F1422] border border-amber-400/20 hover:border-amber-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(229,184,105,0.25)] transition-all duration-300 flex flex-col"
            >
              {/* Event Image */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1422] via-[#0F1422]/20 to-transparent" />

                {/* Date overlay tag */}
                <div className="absolute top-3 left-3 backdrop-blur-md bg-black/75 border border-amber-400/30 rounded-lg px-2.5 py-1 text-xs text-amber-300 font-medium flex items-center gap-1.5 shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{event.date}</span>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-purple-950/80 border border-purple-400/30 rounded-lg px-2.5 py-1 text-[11px] text-purple-200 font-medium">
                  {event.tag}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Highlights and footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium truncate pr-2">
                    {event.participantsOrWinners}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>View Recap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Winners and Highlights Photo Gallery Row */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#111726] to-[#0D121F] border border-amber-500/25 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(229,184,105,0.2)]">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Winners and Highlights
                </h3>
                <p className="text-xs text-slate-400">
                  Hall of champions, top creators, and lucky draw grand winners
                </p>
              </div>
            </div>
            <a
              href={MALL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
            >
              <span>See winner interviews on Reels</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden bg-[#0A0E18] border border-white/10 hover:border-amber-400/40 p-4 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block truncate">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white truncate">{item.winner}</p>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Banner & See More on Instagram */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-950/60 via-slate-900 to-amber-950/50 border border-purple-500/30 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Big Celebration Coming Soon</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Upcoming Events at Mall of Ranchi
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Stay tuned, follow us on Instagram for the next event! Live acoustic
              weekends, seasonal shopping festivals, and celebrity meet-ups are
              right around the corner.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={MALL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>See more on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Recap Modal if user clicks View Recap */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0F1424] border border-amber-400/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 space-y-5">
            <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-xs text-amber-300">
                {selectedEvent.date}
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                {selectedEvent.tag}
              </span>
              <h4 className="text-2xl font-bold text-white mt-1">
                {selectedEvent.title}
              </h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedEvent.description}
              </p>
              <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-amber-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{selectedEvent.participantsOrWinners}</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
              >
                Close
              </button>
              <a
                href={MALL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>View on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
