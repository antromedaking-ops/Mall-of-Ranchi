import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../utils/mallData';
import { GalleryItem } from '../types/mall';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Architecture', 'Events', 'Dining', 'Entertainment'];

  const filteredItems =
    activeTab === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            The Mall of Ranchi Gallery
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            Immerse yourself in our illuminated spaces, festive galas, vibrant
            crowds, and luxury architectural design.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid with Hover Glow Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(item);
                }
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0E1322] border border-white/10 hover:border-amber-400/60 shadow-lg hover:shadow-[0_0_30px_rgba(229,184,105,0.25)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Hover Glow & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Corner badge */}
              <div className="absolute top-3 left-3 backdrop-blur-md bg-black/60 border border-white/10 rounded-md px-2.5 py-0.5 text-[11px] text-amber-300 font-medium">
                {item.category}
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-300" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0E1322] border border-amber-400/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-amber-300 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] max-h-[70vh] w-full overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="p-6 bg-[#0E1322] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {selectedPhoto.title}
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  {selectedPhoto.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
