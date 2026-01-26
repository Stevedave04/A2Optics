import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';
import React from 'react';

/**
 * Standard API handler for environments that don't use App Router.
 */

const resend = new Resend(process.env.RESEND_API_KEY || process.env.API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, practice, email, phone, location, interest, message } = body;

    if (!name || !email || !message || !practice) {
      return new Response(
        JSON.stringify({ error: 'Required fields are missing.' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'a2optics Contact <onboarding@resend.dev>',
      to: ['info@a2optics.ie'], 
      replyTo: email,
      subject: `Stockist Enquiry: ${practice}`,
      react: React.createElement(EmailTemplate, { 
        name, 
        practice, 
        email, 
        phone, 
        location, 
        interest, 
        message 
      }),
    });

    if (error) {
      console.error('Resend Error:', error);
      return new Response(
        JSON.stringify({ error: error.message }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('API Send Exception:', error);
    return new Response(
      JSON.stringify({ error: 'Server error: ' + error.message }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}