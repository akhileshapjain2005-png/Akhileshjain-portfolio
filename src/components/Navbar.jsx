import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper-50/80 dark:bg-ink-950/75 backdrop-blur-md border-b border-ink-900/10 dark:border-violet/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-display font-bold text-lg text-ink-900 dark:text-cloud-50 tracking-tight"
        >
          {portfolioData.personal.name.split(' ')[0] || 'Portfolio'}
          <span className="text-gradient">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                  active === link.id
                    ? 'text-violet-dim dark:text-violet-bright'
                    : 'text-ink-700 dark:text-cloud-200 hover:text-ink-900 dark:hover:text-cloud-50'
                }`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
              {active === link.id && <span className="nav-active-underline" />}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={portfolioData.personal.resumeUrl} download className="btn-secondary !py-2 !px-4">
            <FileDown size={16} /> Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-md text-ink-700 dark:text-cloud-200"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-md text-ink-900 dark:text-cloud-50"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper-50 dark:bg-ink-950 backdrop-blur-md border-t border-ink-900/10 dark:border-violet/15 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                    active === link.id
                      ? 'text-violet-dim dark:text-violet-bright bg-violet/5'
                      : 'text-ink-700 dark:text-cloud-200'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a href={portfolioData.personal.resumeUrl} download className="btn-primary mt-3 w-full justify-center">
            <FileDown size={16} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
