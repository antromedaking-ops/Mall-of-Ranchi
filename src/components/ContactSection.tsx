import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { MALL_INFO } from '../utils/mallData';
import { ContactFormData } from '../types/mall';
import { formatWhatsAppUrl, validateContactForm } from '../utils/mallLogic';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const directWhatsappUrl = formatWhatsAppUrl(
    MALL_INFO.whatsappNumber,
    'Hello Mall of Ranchi Team, I am reaching out regarding general assistance / shopping inquiries.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Mall of Ranchi,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = formatWhatsAppUrl(MALL_INFO.whatsappNumber, text);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090D17]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Contact Mall of Ranchi
          </h2>
          <p className="text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
            Have a question about store directories, lost and found, cinema
            timings, or leasing? Reach our customer concierge desk right away.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0E1322] border border-amber-400/25 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Concierge & Help Desk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our front desk and mall management team are on site 7 days a week
                to assist patrons, families, and business partners.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-[#0e1726] border border-emerald-500/30 hover:border-emerald-400/70 shadow-md group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                    <MessageCircle className="w-6 h-6 fill-emerald-400 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      Instant Messaging
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp 080510 66666
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Fastest response for queries & bookings
                    </span>
                  </div>
                </a>

                {/* Telephone */}
                <a
                  href={`tel:${MALL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                      Mall Telephone Desk
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {MALL_INFO.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Mon–Sun, 10:00 AM – 10:00 PM
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${MALL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/50 group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-300 shrink-0">
                    <Mail className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-pink-200 transition-colors">
                      {MALL_INFO.email}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Concierge, PR, events & leasing
                    </span>
                  </div>
                </a>
              </div>

              {/* Quick Info pills */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Kumhartoli, Ratu Rd</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>10:30 AM – 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0E1322] border border-amber-400/25 shadow-xl relative overflow-hidden">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold text-white font-display">
                  Send us a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out this quick form and our support executive will respond
                  shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    We have received your message. Our team on Ratu Road will get
                    back to your phone{' '}
                    <span className="text-amber-300 font-semibold">
                      ({formData.phone})
                    </span>{' '}
                    as quickly as possible.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 flex items-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>Also Send to Our WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/15 focus:border-amber-400/60'
                      } text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400/60 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 080510 66666"
                        className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-white/15 focus:border-amber-400/60'
                        } text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400/60 transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Message or Query <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message)
                          setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us what you need help with (store details, event hosting, lost item, feedback)..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/15 focus:border-amber-400/60'
                      } text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-400/60 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your details are kept strictly confidential as outlined in our{' '}
                    <span className="text-amber-400">Privacy Policy</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
