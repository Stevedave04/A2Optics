
import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 lg:pt-32">
      <Section id="contact-hero" className="pb-0!">
        <div className="max-w-3xl mb-16">
          <span className="text-xs tracking-extrawide uppercase font-medium text-meridian-gold block mb-6">Connect</span>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">Let's Talk</h1>
          <p className="text-lg text-meridian-charcoal font-light leading-relaxed">
            Whether you're interested in becoming a stockist or have questions about our collections, we'd love to hear from you. We typically respond to all enquiries within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {isSubmitted ? (
              <div className="bg-meridian-lightGrey p-12 text-center space-y-6">
                <h3 className="font-display text-3xl font-light">Thank You</h3>
                <p className="text-sm text-meridian-charcoal font-light">
                  Your enquiry has been received. Andrew will be in touch within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs tracking-widest uppercase font-medium border-b border-meridian-warmBlack pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Practice / Business Name</label>
                    <input 
                      required
                      name="practice"
                      type="text"
                      value={formState.practice}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Phone Number</label>
                    <input 
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Location</label>
                    <select 
                      name="location"
                      value={formState.location}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm appearance-none"
                    >
                      <option>Republic of Ireland</option>
                      <option>Northern Ireland</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">I'm interested in...</label>
                    <select 
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm appearance-none"
                    >
                      <option>Becoming a stockist</option>
                      <option>Specific brand enquiry</option>
                      <option>General information</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your practice and what you're looking for..."
                    className="w-full bg-white border border-meridian-borderGrey px-4 py-4 focus:outline-none focus:border-meridian-gold transition-colors font-light text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto bg-meridian-warmBlack text-white px-12 py-5 text-xs tracking-extrawide uppercase font-medium hover:bg-meridian-gold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="font-display text-3xl font-light">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <Mail className="w-5 h-5 mt-1 stroke-[1px] text-meridian-gold" />
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Email</span>
                    <a href="mailto:info@a2optics.com" className="text-sm font-light hover:text-meridian-gold transition-colors">info@a2optics.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Phone className="w-5 h-5 mt-1 stroke-[1px] text-meridian-gold" />
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Phone</span>
                    <a href="tel:+35312345678" className="text-sm font-light hover:text-meridian-gold transition-colors">+353 1 234 5678</a>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <MapPin className="w-5 h-5 mt-1 stroke-[1px] text-meridian-gold" />
                  <div>
                    <span className="block text-[10px] tracking-widest uppercase font-medium text-meridian-mediumGrey mb-1">Coverage</span>
                    <span className="text-sm font-light">Republic of Ireland & Northern Ireland</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-meridian-offWhite p-10 border border-meridian-borderGrey">
              <h4 className="text-xs tracking-widest uppercase font-medium mb-4">Stockist Enquiries</h4>
              <p className="text-sm text-meridian-charcoal font-light leading-relaxed mb-6">
                Are you an independent optician looking to differentiate your practice? We provide exclusive access to Europe's most innovative brands with complete marketing and clinical support.
              </p>
              <div className="h-[1px] bg-meridian-borderGrey w-full mb-6"></div>
              <p className="text-[10px] tracking-widest uppercase text-meridian-gold font-medium">
                Andrew Arbuthnot • Director
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
