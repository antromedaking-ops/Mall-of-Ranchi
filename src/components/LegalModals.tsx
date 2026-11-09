import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, Mail, Phone, Lock } from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';

interface LegalModalsProps {
  isOpen: boolean;
  initialTab?: 'terms' | 'privacy';
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  isOpen,
  initialTab = 'terms',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[85vh] flex flex-col bg-[#0D121E] border border-amber-400/40 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#090D17]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
              {activeTab === 'terms' ? (
                <FileText className="w-5 h-5 text-amber-400" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-pink-400" />
              )}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-xl font-bold text-white font-display">
                {activeTab === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
              </h3>
              <p className="text-xs text-slate-400">
                Plain-Language Policies · Mall of Ranchi
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-white/10 bg-[#0B0F19] px-6">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'terms'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {activeTab === 'terms' ? (
            /* TERMS OF SERVICE */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200">
                <strong>Plain-Language Summary:</strong> These terms govern your
                use of the Mall of Ranchi website and your visits to our premises
                at Ratu Road, Kumhartoli, Ranchi, Jharkhand.
              </div>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>1. Website Use & Information Accuracy</span>
                </h4>
                <p className="text-xs text-slate-300">
                  This website is provided for informational purposes regarding
                  store listings, opening timings, entertainment schedules, and
                  events at Mall of Ranchi. While we make every effort to keep all
                  information current and accurate, store hours, offers, movie
                  screenings, and event schedules may change without prior notice.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>2. Event Schedules & Promotional Offers</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Event dates (including our Influencer Competitions, Chess
                  Tournaments, and Festive Lucky Draws) and retail promotions are
                  subject to venue availability, organizer discretion, and local
                  guidelines. Winning prize distributions and lucky draw rules
                  are subject to verification of valid government identification.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>3. Intellectual Property & Brand Trademarks</span>
                </h4>
                <p className="text-xs text-slate-300">
                  All store brand names, logos, and trademarks displayed on this
                  website (such as Westside, Pantaloons, Zudio, Croma, PVR INOX,
                  Starbucks, etc.) belong exclusively to their respective
                  trademark holders and corporate owners. Their mention on this
                  website indicates retail tenancy at the mall.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>4. Visitor Safety & Mall Code of Conduct</span>
                </h4>
                <p className="text-xs text-slate-300">
                  We strive to maintain a safe, welcoming, and family-friendly
                  environment for all patrons. Visitors are kindly requested to
                  cooperate with security checks at mall entry gates, park only in
                  designated basement slots, and follow staff guidance during
                  events and peak festival hours.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>5. Limitation of Liability</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Mall of Ranchi is not liable for indirect, incidental, or
                  consequential damages resulting from website downtime, minor
                  informational errors, or personal property left unattended on
                  mall premises.
                </p>
              </section>

              <section className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <h4 className="text-sm font-bold text-white">Questions Regarding These Terms?</h4>
                <p className="text-slate-400">
                  Contact our administrative office at{' '}
                  <a href={`mailto:${MALL_INFO.email}`} className="text-amber-300 hover:underline">
                    {MALL_INFO.email}
                  </a>{' '}
                  or call{' '}
                  <span className="text-white font-medium">{MALL_INFO.phoneDisplay}</span>.
                </p>
              </section>
            </div>
          ) : (
            /* PRIVACY POLICY */
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200">
                <strong>Plain-Language Summary:</strong> We respect your privacy.
                We do not track you across the web, we do not run third-party ad
                trackers, and we never sell your contact information.
              </div>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-pink-400" />
                  <span>1. Information We Collect</span>
                </h4>
                <p className="text-xs text-slate-300">
                  When you submit our website contact form or initiate an inquiry,
                  we collect only the information you voluntarily supply:
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
                  <li><strong>Your Name:</strong> To address you politely.</li>
                  <li><strong>Your Phone Number:</strong> To call or message you back.</li>
                  <li><strong>Your Message:</strong> To understand and answer your inquiry.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-pink-400" />
                  <span>2. How We Use Your Information</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Your submitted details are used solely to reply to your specific
                  question, coordinate event participation, or assist with mall
                  services. We do not enroll your phone number in spam lists, and
                  we never sell or rent your personal information to third-party
                  marketers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-pink-400" />
                  <span>3. Data Storage & Protection</span>
                </h4>
                <p className="text-xs text-slate-300">
                  All messages transmitted through our website are handled over
                  industry-standard encrypted HTTPS connections. Only authorized
                  management staff at Mall of Ranchi have access to your inquiry.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-pink-400" />
                  <span>4. How to Request Data Deletion</span>
                </h4>
                <p className="text-xs text-slate-300">
                  You have the right to request the immediate deletion of your
                  contact information from our inquiry logs at any time. Simply
                  send a brief email to{' '}
                  <a
                    href={`mailto:${MALL_INFO.email}?subject=Data%20Deletion%20Request`}
                    className="text-amber-300 underline"
                  >
                    {MALL_INFO.email}
                  </a>{' '}
                  or message our WhatsApp desk at{' '}
                  <span className="text-white font-medium">080510 66666</span>{' '}
                  with the subject "Data Deletion Request". We will confirm
                  removal within 48 business hours.
                </p>
              </section>

              <section className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <h4 className="text-sm font-bold text-white">Privacy Officer Contact</h4>
                <p className="text-slate-400">
                  Mall of Ranchi Management Office, Ratu Road, Kumhartoli, Ranchi, Jharkhand 834001, India.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#090D17] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Last Updated: November 2026
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
