import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';
import { formatWhatsAppUrl } from '../utils/mallLogic';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = formatWhatsAppUrl(
    MALL_INFO.whatsappNumber,
    'Hello Mall of Ranchi Concierge! I have a question regarding visits, stores, or events.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1424] border border-amber-400/40 text-xs text-white shadow-2xl animate-in slide-in-from-right duration-300">
          <div>
            <span className="font-semibold text-amber-300 block">
              Need assistance?
            </span>
            <span className="text-[11px] text-slate-300">
              Chat directly with our Ranchi concierge
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mall of Ranchi on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all transform hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 group-hover:opacity-60" />

        <MessageCircle className="w-7 h-7 fill-white relative z-10" />

        {/* Small notification badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-[#080B11] rounded-full z-20" />
      </a>
    </div>
  );
};
