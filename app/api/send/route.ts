
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/EmailTemplate';
import React from 'react';

/**
 * Server-side API route for Resend (App Router).
 * Key provided: re_E8ih5jh5_Az8j3cKUFJkeGMJygjyZZJEm
 */

// Prefer environment variable for security, fallback to provided key if necessary
const RESEND_KEY = process.env.RESEND_API_KEY || 're_E8ih5jh5_Az8j3cKUFJkeGMJygjyZZJEm';
const resend = new Resend(RESEND_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, practice, email, phone, location, interest, message } = body;

    if (!RESEND_KEY || RESEND_KEY === 'YOUR_KEY_HERE') {
      return new Response(
        JSON.stringify({ error: 'Resend API key is not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!name || !email || !message || !practice) {
      return new Response(
        JSON.stringify({ error: 'Required fields are missing.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'A2OPTICS Contact <onboarding@resend.dev>',
      to: ['info@a2optics.com'],
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
      console.error('Resend SDK Error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('API Route Exception:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error: ' + err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
