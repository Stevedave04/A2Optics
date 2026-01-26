import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  practice: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  message: string;
}

export const EmailTemplate = ({ 
  name, 
  practice, 
  email, 
  phone, 
  location, 
  interest, 
  message 
}: EmailTemplateProps) => {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#1A1A1A', padding: '20px' }}>
      <h1 style={{ color: '#B8A078', borderBottom: '1px solid #D4D2CF', paddingBottom: '10px' }}>New Enquiry: A²OPTICS</h1>
      
      <div style={{ marginTop: '20px' }}>
        <p><strong>From:</strong> {name}</p>
        <p><strong>Practice:</strong> {practice}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> {interest}</p>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#FAFAF8', borderRadius: '4px' }}>
        <h3 style={{ marginTop: 0 }}>Message:</h3>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{message}</p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '12px', color: '#9A9A9A' }}>
        This message was sent from the A²OPTICS contact form.
      </p>
    </div>
  );
};