'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Initialize EmailJS (only needs to be done once, but doing it here is safe)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      // Send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      setSuccess('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('An error occurred while sending your email');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <h1 className="page-title">Contact</h1>
        <form onSubmit={handleSubmit} id="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <input type="submit" value={loading ? 'Sending...' : 'Submit'} disabled={loading} />
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </main>
      <footer className="footer">© 2025 Parnika's Personal Website | All Rights Reserved</footer>
    </>
  );
}