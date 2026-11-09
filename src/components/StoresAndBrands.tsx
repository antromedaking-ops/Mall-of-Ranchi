import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Clock, Tag } from 'lucide-react';
import { STORES } from '../utils/mallData';
import { StoreCategory } from '../types/mall';
import { filterStores } from '../utils/mallLogic';

const CATEGORIES: StoreCategory[] = [
  'All',
  'Fashion',
  'Food Court',
  'Electronics',
  'Kids',
  'Beauty',
  'Entertainment',
];

export const StoresAndBrands: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<StoreCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStores = filterStores(STORES, activeCategory, searchQuery);

  return (
    <section id="stores" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#080B11]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retail Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Stores and Iconic Brands
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            Explore leading Indian and global luxury retailers, trendsetting
            fashion labels, tech hubs, and kid play zones across all four levels.
          </p>
        </div>

        {/* Filter controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-2">
          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0E1424] border border-white/10 overflow-x-auto max-w-full scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search store or brand..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0E1424] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="group relative rounded-2xl bg-[#0E1424]/90 backdrop-blur-md p-6 border border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-[0_0_25px_rgba(229,184,105,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* Brand Monogram / Logo Placeholder */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A2238] to-[#121828] border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold text-xl font-display shadow-inner group-hover:border-amber-400 group-hover:scale-105 transition-all">
                    {store.name.substring(0, 2).toUpperCase()}
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-purple-300/90 tracking-wide uppercase">
                      {store.category}
                    </span>
                    {store.featured && (
                      <span className="block text-[10px] text-amber-400 font-medium mt-0.5">
                        ★ Featured Brand
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {store.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {store.tagline}
                </p>
              </div>

              {/* Metadata rows */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{store.floor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>{store.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0E1424] border border-white/10 space-y-3">
            <Tag className="w-8 h-8 text-amber-400 mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-white">No brands found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              We couldn't find any store matching “{searchQuery}” in category “{activeCategory}”. Try searching for another brand or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              Show All Stores
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
