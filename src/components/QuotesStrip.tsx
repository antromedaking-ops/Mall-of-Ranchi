import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { QUOTES } from '../utils/mallData';

export const QuotesStrip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  return (
    <section
      aria-label="Mall Quotations & Highlights"
      className="relative py-10 px-4 sm:px-6 lg:px-8 border-y border-amber-500/20 bg-gradient-to-r from-[#0a0e18] via-[#101626] to-[#0a0e18] overflow-hidden"
    >
      {/* Background glow lines */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,184,105,0.08),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        {/* Quote symbol */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 via-pink-500/20 to-purple-600/20 border border-amber-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(229,184,105,0.25)]">
            <Quote className="w-6 h-6 text-amber-300" />
          </div>
          <span className="hidden lg:inline text-xs uppercase tracking-widest text-slate-400 font-semibold font-sans">
            Mall Life & Moments
          </span>
        </div>

        {/* Rotating Text Content */}
        <div className="flex-1 text-center sm:text-left min-h-[50px] flex items-center justify-center sm:justify-start">
          <p
            key={currentIndex}
            className="text-lg sm:text-xl lg:text-2xl font-serif italic text-amber-100 transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            “{QUOTES[currentIndex]}”
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-300 border border-white/10 transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-300 border border-white/10 transition-colors"
            aria-label={isPlaying ? 'Pause quote rotation' : 'Resume quote rotation'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-amber-400" />
            ) : (
              <Play className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-300 border border-white/10 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 ml-2">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i
                    ? 'w-6 bg-gradient-to-r from-amber-400 to-pink-500'
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Jump to quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
