import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';

export const SocialStrip: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      handle: '@mallofranchi',
      desc: 'Reels, event updates, celebrity visits & giveaways',
      url: MALL_INFO.instagramUrl,
      icon: Instagram,
      color: 'from-pink-500 via-rose-500 to-amber-500',
      border: 'border-pink-500/30 hover:border-pink-400',
    },
    {
      name: 'Facebook',
      handle: 'Mall of Ranchi Official',
      desc: 'Community photos, festival schedules & family events',
      url: MALL_INFO.facebookUrl,
      icon: Facebook,
      color: 'from-blue-600 to-cyan-600',
      border: 'border-blue-500/30 hover:border-blue-400',
    },
    {
      name: 'YouTube',
      handle: 'Mall of Ranchi Channel',
      desc: 'Event recaps, store launch tours & influencer vlogs',
      url: 'https://youtube.com',
      icon: Youtube,
      color: 'from-red-600 to-rose-600',
      border: 'border-red-500/30 hover:border-red-400',
    },
    {
      name: 'X (Twitter)',
      handle: '@MallOfRanchi',
      desc: 'Live traffic, parking alerts & instant updates',
      url: 'https://x.com',
      icon: Twitter,
      color: 'from-slate-700 to-slate-900',
      border: 'border-slate-600/30 hover:border-slate-400',
    },
  ];

  return (
    <section aria-label="Social Media Connections" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#070A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
              Join Our Community
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Connect With Us on Social Media
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Tag <strong className="text-amber-300">#MallOfRanchi</strong> in your photos and stories for a chance to get featured on our grand atrium LED screens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-5 rounded-2xl bg-[#0D121F] border ${soc.border} shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] transition-all flex flex-col justify-between`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${soc.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="mt-4 space-y-1">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                    {soc.name}
                  </span>
                  <p className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                    {soc.handle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {soc.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
