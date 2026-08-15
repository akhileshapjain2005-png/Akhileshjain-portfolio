import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-ink-900/10 dark:border-violet/15">
      <div className="section-shell !py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-semibold text-ink-900 dark:text-cloud-50">
            {personal.name}
          </p>
          <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 max-w-xs">
            {personal.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Elsewhere</p>
          <div className="flex items-center gap-3">
            {social.github && (
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright">
                <Github size={18} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright">
                <Linkedin size={18} />
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`} aria-label="Email" className="p-2 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright">
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-900/10 dark:border-violet/15">
        <div className="section-shell !py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-600 dark:text-cloud-400 font-mono">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p>Built with React • Vite • Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
