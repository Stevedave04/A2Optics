import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("meegowwv");
  const [copied, setCopied] = useState(false);
  
  // Local state only for the mailto link and copy data features
  const [formData, setFormData] = useState({
    name: '',
    practice: '',
    email: '',
    phone: '',
    location: 'Republic of Ireland',
    interest: 'Becoming a stockist',
    message: ''
  });

  const handleCopy = () => {
    const text = `Name: ${formData.name}\nPractice: ${formData.practice}\nLocation: ${formData.location}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nEnquiry: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mailtoLink = `mailto:info@a2optics.ie?subject=Enquiry for a2optics from ${formData.practice}&body=Hello Andrew,%0A%0AMy name is ${formData.name} from ${formData.practice} in ${formData.location}.%0A%0AInterest: ${formData.interest}%0A%0AEnquiry Details: ${formData.message.replace(/\n/g, '%0A')}%0A%0AContact: ${formData.phone || 'N/A'}`;

  return (
    <div className="pt-24 lg:pt-32">
      <Section id="contact-hero" className="pb-0!">
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-extrawide uppercase font-bold text-brand-gold block mb-6">Partnership</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">Initiate <span className="italic">Dialogue</span></h1>
          <p className="text-lg text-brand-charcoal font-light leading-relaxed">
            Independent practices deserve a partner with a specific vision. Reach out below to begin a conversation about curating a unique selection for your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative">
            {state.succeeded ? (
              <div className="bg-brand-offWhite border border-brand-borderGrey p-12 lg:p-20 text-center space-y-8 animate-in fade-in duration-700">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-brand-gold stroke-[1px]" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-4xl font-light">Enquiry Received</h3>
                  <p className="text-sm text-brand-charcoal opacity-70 leading-relaxed">
                    Thank you. Your details have been transmitted directly to Andrew at a2optics. We aim to respond within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col items-center gap-6">
                  <Link to="/" className="text-[10px] tracking-widest uppercase font-bold text-brand-warmBlack border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">Back to Home</Link>
                  <button onClick={() => window.location.reload()} className="text-[10px] tracking-widest uppercase font-bold text-brand-mediumGrey hover:text-brand-warmBlack">Send another message</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {state.errors && state.errors.length > 0 && (
                  <div className="p-8 bg-white border border-brand-borderGrey text-brand-charcoal text-[11px] leading-relaxed animate-in slide-in-from-top-4 duration-500 mb-8 shadow-sm">
                    <div className="flex items-start gap-5">
                      <div className="bg-brand-gold/10 p-2 rounded-full shrink-0">
                        <AlertCircle size={20} className="text-brand-gold" />
                      </div>
                      <div className="space-y-5 flex-grow">
                        <div>
                          <strong className="block mb-1 text-xs tracking-widest uppercase text-brand-warmBlack">Transmission Update</strong>
                          <p className="opacity-80">We encountered an issue processing your request through the automated system.</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <a 
                            href={mailtoLink}
                            className="flex-grow inline-flex items-center justify-center gap-2 bg-brand-warmBlack text-white px-6 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-brand-gold transition-colors shadow-sm"
                          >
                            Send via Mail App <ExternalLink size={12} />
                          </a>
                          <button 
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center gap-2 border border-brand-borderGrey bg-white px-6 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-brand-offWhite transition-all"
                          >
                            {copied ? <Check size={12} className="text-brand-gold" /> : <Copy size={12} />}
                            {copied ? 'Data Copied' : 'Copy Data'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Full Name*</label>
                    <input id="name" name="name" type="text" required placeholder="e.g. Jane Smith" value={formData.name} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="practice" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Practice Name*</label>
                    <input id="practice" name="practice" type="text" required placeholder="e.g. Vision Care" value={formData.practice} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                    <ValidationError prefix="Practice" field="practice" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Work Email*</label>
                    <input id="email" name="email" type="email" required placeholder="jane@practice.com" value={formData.email} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold transition-all" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Contact Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="Optional" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="location" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Practice Location</label>
                    <select id="location" name="location" value={formData.location} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold appearance-none cursor-pointer">
                      <option value="Republic of Ireland">Republic of Ireland</option>
                      <option value="Northern Ireland">Northern Ireland</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="interest" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Enquiry Type</label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-brand-gold appearance-none cursor-pointer">
                      <option value="Becoming a stockist">Becoming a stockist</option>
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey">Enquiry Details*</label>
                  <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-white border border-brand-borderGrey px-4 py-4 text-sm focus:outline-none transition-all resize-none focus:border-brand-gold" placeholder="Tell us about your practice and your interest in our collections..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[10px] text-red-500 mt-1" />
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-brand-warmBlack text-white py-5 text-[10px] tracking-extrawide uppercase font-bold hover:bg-brand-gold transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-brand-mediumGrey shadow-xl active:scale-[0.98]">
                  {state.submitting ? <><Loader2 size={16} className="animate-spin" /> Transmitting...</> : <><Send size={14} /> Send Professional Enquiry</>}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-12 lg:pl-10">
            <h3 className="font-display text-3xl font-light">a2optics Access</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-brand-borderGrey flex items-center justify-center shrink-0 group-hover:border-brand-gold transition-colors">
                  <Mail className="w-5 h-5 text-brand-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey mb-1">Direct Correspondence</span>
                  <a href="mailto:info@a2optics.ie" className="text-base font-light hover:text-brand-gold transition-colors">info@a2optics.ie</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-brand-borderGrey flex items-center justify-center shrink-0 group-hover:border-brand-gold transition-colors">
                  <Phone className="w-5 h-5 text-brand-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey mb-1">Direct Line</span>
                  <a href="tel:+447703166036" className="text-base font-light hover:text-brand-gold transition-colors">+44 (0) 7703 166036</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-brand-borderGrey flex items-center justify-center shrink-0 group-hover:border-brand-gold transition-colors">
                  <MapPin className="w-5 h-5 text-brand-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-brand-mediumGrey mb-1">Coverage</span>
                  <span className="text-base font-light">Ireland North & South</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-warmBlack p-8 text-white mt-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-brand-gold mb-4 italic">Independent Heritage</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                Independent practices deserve an independent partner. We understand the specific clinical and commercial pressures of the Irish optical market.
              </p>
              <div className="h-[1px] bg-white/10 w-full mb-6"></div>
              <p className="text-[10px] tracking-widest uppercase font-bold">Andrew Arbuthnot • Director</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;