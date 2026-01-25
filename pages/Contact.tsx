
import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, ArrowLeft, AlertCircle, ExternalLink, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormErrors {
  name?: string;
  practice?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    practice: '',
    email: '',
    phone: '',
    location: 'Republic of Ireland',
    interest: 'Becoming a stockist',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isStaticEnv, setIsStaticEnv] = useState(false);
  const [copied, setCopied] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Full name is required';
    if (!formState.practice.trim()) newErrors.practice = 'Practice name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid professional email address';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry';
    } else if (formState.message.trim().length < 15) {
      newErrors.message = 'Please provide a bit more detail (min 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setErrorMessage('');
    setIsStaticEnv(false);

    try {
      // Trying to fetch the API route
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.status === 404) {
        setIsStaticEnv(true);
        throw new Error('API service unreachable. This typically happens in static hosting environments where server-side functions are not supported.');
      }

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || `Server error: ${response.statusText}`);
      }

      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  };

  const handleCopy = () => {
    const text = `Name: ${formState.name}\nPractice: ${formState.practice}\nLocation: ${formState.location}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nEnquiry: ${formState.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const mailtoLink = `mailto:info@a2optics.com?subject=Enquiry from ${formState.practice}&body=Hello Andrew,%0A%0AMy name is ${formState.name} from ${formState.practice} in ${formState.location}.%0A%0AEnquiry Details: ${formState.message}%0A%0AContact: ${formState.phone || 'N/A'}`;

  return (
    <div className="pt-24 lg:pt-32">
      <Section id="contact-hero" className="pb-0!">
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-extrawide uppercase font-medium text-meridian-gold block mb-6">Connect</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">Let's Talk</h1>
          <p className="text-lg text-meridian-charcoal font-light leading-relaxed">
            Independent practices deserve an independent partner. Reach out below or contact Andrew directly at info@a2optics.com.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="relative">
            {status === 'success' ? (
              <div className="bg-meridian-offWhite border border-meridian-borderGrey p-12 lg:p-20 text-center space-y-8 animate-in fade-in duration-700">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-meridian-gold/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-meridian-gold stroke-[1px]" />
                  </div>
                </div>
                <h3 className="font-display text-4xl font-light">Enquiry Sent</h3>
                <p className="text-sm text-meridian-charcoal opacity-70">Thank you for your interest. Andrew will review your details and respond within 24 hours.</p>
                <Link to="/" className="text-[10px] tracking-widest uppercase font-bold text-meridian-warmBlack border-b border-black pb-1">Back Home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-6 bg-meridian-offWhite border border-meridian-borderGrey shadow-sm text-meridian-charcoal text-[11px] leading-relaxed animate-in slide-in-from-top-4 duration-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-meridian-gold/10 p-2 shrink-0">
                        <AlertCircle size={18} className="text-meridian-gold" />
                      </div>
                      <div className="space-y-4 flex-grow">
                        <div>
                          <strong className="block mb-2 text-xs tracking-widest uppercase">Lead Generation Note</strong>
                          <p className="opacity-80">This preview environment is static. While the API is fully configured for Vercel/Next.js, direct submission is disabled in this demo.</p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <a 
                            href={mailtoLink}
                            className="flex-grow inline-flex items-center justify-center gap-2 bg-meridian-warmBlack text-white px-6 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-meridian-gold transition-colors shadow-lg"
                          >
                            Send via Mail App <ExternalLink size={12} />
                          </a>
                          <button 
                            type="button"
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center gap-2 border border-meridian-borderGrey px-6 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-white transition-all"
                          >
                            {copied ? <Check size={12} className="text-meridian-gold" /> : <Copy size={12} />}
                            {copied ? 'Copied!' : 'Copy Data'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Full Name*</label>
                    <input name="name" type="text" placeholder="e.g. Jane Smith" value={formState.name} onChange={handleChange} className={`w-full bg-white border px-4 py-4 text-sm focus:outline-none transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-meridian-borderGrey focus:border-meridian-gold'}`} />
                    {errors.name && <p className="text-[9px] text-red-500 font-medium">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Practice Name*</label>
                    <input name="practice" type="text" placeholder="e.g. Vision Care" value={formState.practice} onChange={handleChange} className={`w-full bg-white border px-4 py-4 text-sm focus:outline-none transition-all ${errors.practice ? 'border-red-500 ring-1 ring-red-500' : 'border-meridian-borderGrey focus:border-meridian-gold'}`} />
                    {errors.practice && <p className="text-[9px] text-red-500 font-medium">{errors.practice}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Work Email*</label>
                    <input name="email" type="email" placeholder="jane@practice.com" value={formState.email} onChange={handleChange} className={`w-full bg-white border px-4 py-4 text-sm focus:outline-none transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-meridian-borderGrey focus:border-meridian-gold'}`} />
                    {errors.email && <p className="text-[9px] text-red-500 font-medium">{errors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Contact Number</label>
                    <input name="phone" type="tel" placeholder="Optional" value={formState.phone} onChange={handleChange} className="w-full bg-white border border-meridian-borderGrey px-4 py-4 text-sm focus:outline-none focus:border-meridian-gold" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Message & Enquiry*</label>
                  <textarea name="message" rows={5} value={formState.message} onChange={handleChange} className={`w-full bg-white border px-4 py-4 text-sm focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-meridian-borderGrey focus:border-meridian-gold'}`} placeholder="Please describe your practice and interest in our brands..."></textarea>
                  {errors.message && <p className="text-[9px] text-red-500 font-medium">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-meridian-warmBlack text-white py-5 text-[10px] tracking-extrawide uppercase font-bold hover:bg-meridian-gold transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-meridian-mediumGrey shadow-xl active:scale-[0.98]"
                >
                  {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Transmitting...</> : 'Send Professional Enquiry'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-12 lg:pl-10">
            <h3 className="font-display text-3xl font-light">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-meridian-borderGrey flex items-center justify-center shrink-0 group-hover:border-meridian-gold transition-colors">
                  <Mail className="w-5 h-5 text-meridian-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Electronic Mail</span>
                  <a href="mailto:info@a2optics.com" className="text-base font-light hover:text-meridian-gold transition-colors">info@a2optics.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-meridian-borderGrey flex items-center justify-center shrink-0 group-hover:border-meridian-gold transition-colors">
                  <Phone className="w-5 h-5 text-meridian-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Direct Line</span>
                  <a href="tel:+447703166036" className="text-base font-light hover:text-meridian-gold transition-colors">+44 (0) 7703 166036</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-meridian-borderGrey flex items-center justify-center shrink-0 group-hover:border-meridian-gold transition-colors">
                  <MapPin className="w-5 h-5 text-meridian-gold stroke-[1.2px]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Territory</span>
                  <span className="text-base font-light">Ireland North & South</span>
                </div>
              </div>
            </div>

            <div className="bg-meridian-warmBlack p-8 text-white mt-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-meridian-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-meridian-gold mb-4">Stockist Advantage</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                Our stockists receive exclusive protected territories, clinical training support, and bespoke POS materials to ensure the brand's story translates to your bottom line.
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
