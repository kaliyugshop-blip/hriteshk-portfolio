import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Copy, Check, MessageSquare, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: 'SOC Analyst (Tier 1 / Tier 2) Role Opening',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business or personal email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details regarding your role or inquiry (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Direct form-to-inbox dispatch via FormSubmit API
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not Provided',
          subject: formData.subject,
          message: formData.message,
          _subject: `[SOC Analyst Portfolio] Recruiter Inquiry: ${formData.subject} from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('Direct transmission response not ok');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.warn('Direct API delivery fallback triggered:', err);
      // Fallback: trigger mailto so recruiter data is never lost
      const subject = encodeURIComponent(`[SOC Job Inquiry] ${formData.subject} - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct channels & pitch (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B5E26]">
                <div className="flex items-center gap-1.5 shrink-0">
                  <Briefcase className="w-4 h-4 text-[#556B2F]" />
                  <span>Hiring Availability</span>
                </div>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-700 font-semibold">Immediate Joining</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's Connect & Secure Your Operations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Actively seeking entry-level and junior <strong>SOC Analyst (Tier 1 / Tier 2)</strong>, 
                SIEM log monitoring, threat detection, and incident response roles. Prepared for 24/7 rotational 
                shifts, available for immediate joining, and open to remote roles globally or relocation across India.
              </p>
            </div>

            {/* Direct Contact Channels - Unified & Well-Organized Division */}
            <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs divide-y divide-slate-100">
              {/* Email */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#F4F7EE] text-[#556B2F] shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                      Verified Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#556B2F] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#F4F7EE] text-[#556B2F] shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#556B2F] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 sm:p-4 flex items-center gap-3 hover:bg-slate-50/60 transition-colors">
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#F4F7EE] text-[#556B2F] shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                    Location & Mobility
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    Ready for immediate start · Remote or relocation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Email Dispatched to Hritesh's Inbox</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. An automated email with your inquiry details has been sent directly to <span className="text-[#4B5E26] font-semibold font-mono">{PERSONAL_INFO.email}</span>. 
                  Hritesh will review and reply directly to <span className="text-slate-900 font-semibold">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        subject: 'SOC Analyst (Tier 1 / Tier 2) Role Opening',
                        message: ''
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#556B2F] rounded-lg hover:bg-[#4B5E26] transition-colors cursor-pointer shadow-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#556B2F]" />
                    <span className="text-sm font-bold text-slate-900">Direct Recruiter & Hiring Dispatch</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#556B2F] hidden sm:inline">hriteshk.nayak@gmail.com</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins (Lead Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#556B2F] focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. sjenkins@securitycorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#556B2F] focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-xs font-semibold text-slate-700">
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="e.g. Defense Operations Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#556B2F] focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700">
                      Inquiry Focus
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#556B2F] focus:ring-1 focus:ring-[#556B2F] transition-colors cursor-pointer"
                    >
                      <option value="SOC Analyst (Tier 1 / Tier 2) Role Opening">SOC Analyst (Tier 1 / Tier 2) Role Opening</option>
                      <option value="Threat Detection & Incident Response Position">Threat Detection & Incident Response Position</option>
                      <option value="Purple Team / Penetration Testing Opportunity">Purple Team / Pentest Opportunity</option>
                      <option value="General Professional Discussion">General Professional Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">
                    Position Details or Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Provide details about the open SOC position, technical stack (Splunk, Wazuh, EDR), or interview schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#556B2F] focus:ring-1 focus:ring-[#556B2F] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-rose-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#556B2F]" />
                    <span>Delivers directly to hriteshk.nayak@gmail.com · Replies prioritized within 24h</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#556B2F] hover:bg-[#4B5E26] rounded-lg transition-colors cursor-pointer disabled:opacity-60 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
