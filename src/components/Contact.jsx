import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgawzgwk';

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message =
          result?.errors?.map((item) => item.message).join(' ') ||
          'Something went wrong. Please try again.';
        throw new Error(message);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message || 'Unable to send the message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
    personal.linkedin && { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
    personal.github && { icon: Github, label: 'GitHub', href: personal.github },
    { icon: MapPin, label: personal.location, href: null },
  ].filter(Boolean);

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        title="Contact"
        description="Have a role, project, or question in mind? Reach out."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <Reveal>
          <div className="card p-6 h-fit space-y-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 text-sm">
                  <span className="p-2 rounded-lg bg-violet/10 text-violet-dim dark:text-violet-bright">
                    <Icon size={16} />
                  </span>
                  <span className="text-ink-700 dark:text-cloud-200 break-all">
                    {item.label}
                  </span>
                </div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="block hover:opacity-75 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          {submitted ? (
            <div className="card p-8 text-center">
              <CheckCircle2
                className="mx-auto mb-3 text-violet-dim dark:text-violet-bright"
                size={28}
              />
              <h3 className="font-display font-semibold text-ink-900 dark:text-cloud-50">
                Message sent successfully!
              </h3>
              <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 max-w-sm mx-auto">
                Thanks for reaching out. Your message has been sent successfully.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary mt-5"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wide text-ink-600 dark:text-cloud-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink-900/15 dark:border-cloud-50/15 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 dark:text-cloud-50 focus:border-violet outline-none resize-none"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 text-sm text-red-400" role="alert">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={submitting}>
                <Send size={16} />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono uppercase tracking-wide text-ink-600 dark:text-cloud-400 mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-ink-900/15 dark:border-cloud-50/15 bg-transparent px-3.5 py-2.5 text-sm text-ink-900 dark:text-cloud-50 focus:border-violet outline-none"
      />
    </div>
  );
}
