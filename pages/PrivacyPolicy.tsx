
import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      <Section containerSize="narrow">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-8">Privacy Policy</h1>
        <p className="text-sm text-brand-mediumGrey mb-12 uppercase tracking-widest">Last Updated: February 2026</p>
        
        <div className="prose prose-lg prose-headings:font-display prose-headings:font-light prose-p:font-light prose-p:text-brand-charcoal max-w-none">
          <p>
            a2optics ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or communicate with us.
          </p>

          <h3>1. Company Information</h3>
          <p>
            a2optics is a United Kingdom-based business operating as an exclusive distributor of independent eyewear. We operate remotely without a public physical office address.
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            We collect information you voluntarily provide to us, primarily through our contact forms or direct email correspondence. This may include:
          </p>
          <ul>
            <li>Name and job title</li>
            <li>Practice or business name</li>
            <li>Contact information including email address and phone number</li>
            <li>Business location details</li>
            <li>Any other information you choose to provide in your enquiry</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your enquiries regarding our brand portfolio.</li>
            <li>Discuss potential stockist partnerships.</li>
            <li>Send you our newsletter or industry insights (only if you have explicitly opted in).</li>
            <li>Improve our website and customer service.</li>
          </ul>

          <h3>4. Data Storage and Security</h3>
          <p>
            We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>

          <h3>5. Cookies</h3>
          <p>
            Our website may use standard cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
          </p>

          <h3>6. Your Rights</h3>
          <p>
            Under UK data protection law (UK GDPR), you have the right to request access to the personal data we hold about you, to request corrections, or to request deletion of your data. To exercise these rights, please contact us at <a href="mailto:info@a2optics.com" className="text-brand-gold hover:underline">info@a2optics.com</a>.
          </p>

          <h3>7. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy, please contact us via email at info@a2optics.com.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
