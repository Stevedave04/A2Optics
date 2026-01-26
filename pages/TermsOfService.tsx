
import React from 'react';
import Section from '../components/Section';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      <Section containerSize="narrow">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-8">Terms of Service</h1>
        <p className="text-sm text-brand-mediumGrey mb-12 uppercase tracking-widest">Last Updated: February 2026</p>
        
        <div className="prose prose-lg prose-headings:font-display prose-headings:font-light prose-p:font-light prose-p:text-brand-charcoal max-w-none">
          <h3>1. Introduction</h3>
          <p>
            Welcome to a2optics.com. These Terms of Service govern your use of our website. By accessing or using our site, you agree to comply with and be bound by these terms.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            The content, design, and imagery on this website are owned by a2optics or used with permission from our brand partners (Le Parc, Kaleos, Raen, Rolf). You may not reproduce, distribute, or create derivative works from this content without express written permission.
          </p>

          <h3>3. Disclaimer</h3>
          <p>
            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.
          </p>

          <h3>4. Business Relationships</h3>
          <p>
            This website serves as a portfolio and contact point for professional optical practices. Nothing on this website constitutes a binding offer to supply goods. All business relationships and supply agreements are subject to separate contracts and credit approval.
          </p>

          <h3>5. External Links</h3>
          <p>
            Our website may contain links to third-party websites (such as the official sites of the brands we represent). We have no control over the content and nature of these sites and accept no responsibility for them.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the United Kingdom.
          </p>

          <h3>7. Contact</h3>
          <p>
            For any questions regarding these Terms of Service, please contact us at <a href="mailto:info@a2optics.com" className="text-brand-gold hover:underline">info@a2optics.com</a>.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default TermsOfService;
