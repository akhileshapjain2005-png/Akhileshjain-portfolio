import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileDown, Mail, Sparkles, Code2, FolderGit2, Cpu, GraduationCap, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import RobotIllustration from '../illustrations/RobotIllustration.jsx';
import PlanetIllustration from '../illustrations/PlanetIllustration.jsx';

export default function Hero() {
  const { personal, about } = portfolioData;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    personal.github && { icon: Github, label: 'GitHub', href: personal.github },
    personal.linkedin && { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
  ].filter(Boolean);

  const stats = [
    { icon: FolderGit2, label: 'Projects', value: about?.stats?.[0]?.value ?? '0', accent: 'text-violet-bright' },
    { icon: Cpu, label: 'Tech Used', value: 'Python, Java, C, SQL…', accent: 'text-violet-bright', small: true },
    { icon: GraduationCap, label: 'Learning', value: 'Always', accent: 'text-violet-bright' },
    { icon: Target, label: 'Goal', value: 'Build Useful Software', accent: 'text-violet-bright', small: true },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper-50 dark:bg-transparent pt-28 pb-20 lg:pt-24"
    >
      <PlanetIllustration className="hidden sm:block absolute top-14 left-4 w-16 h-16 opacity-90 pointer-events-none" />
      <Sparkles className="hidden sm:block absolute top-10 right-[38%] w-5 h-5 text-violet-bright/70 pointer-events-none animate-pulse" />
      <Sparkles className="hidden sm:block absolute top-24 left-[46%] w-4 h-4 text-azure/60 pointer-events-none animate-pulse" />

      <div className="section-shell !py-0 w-full relative">
        <div className="grid gap-12 lg:gap-10 items-center lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-medium text-violet-bright mb-5">
              <Sparkles size={12} /> {personal.title}
            </span>

            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-ink-900 dark:text-cloud-50">
              {personal.name.split(' ')[0]}{' '}
              <span className="text-gradient">{personal.name.split(' ').slice(1).join(' ')}</span>
              <span className="inline-block w-[3px] h-[0.85em] align-middle ml-1 bg-violet-bright animate-blink" />
            </h1>

            <p className="mt-4 max-w-xl text-ink-700 dark:text-cloud-200 leading-relaxed text-lg">
              {personal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View My Work <ArrowRight size={16} />
              </button>
              <a href={personal.resumeUrl} download className="btn-secondary">
                <FileDown size={16} /> Download Resume
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <Mail size={16} /> Contact Me
              </button>
            </div>

            {socials.length > 0 && (
              <div className="mt-7 flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-ink-900/10 dark:border-violet/15 text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright hover:border-violet transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}

            {/* Stat strip */}
            <div className="mt-9 card !bg-white/60 dark:!bg-ink-900/60 grid grid-cols-2 sm:grid-cols-4 divide-x divide-ink-900/8 dark:divide-violet/10 max-w-xl">
              {stats.map(({ icon: Icon, label, value, accent, small }) => (
                <div key={label} className="px-4 py-4 first:pl-5">
                  <Icon size={16} className="text-ink-600 dark:text-cloud-400 mb-2" />
                  <p className={`font-mono text-[11px] uppercase tracking-wide text-ink-600 dark:text-cloud-400`}>
                    {label}
                  </p>
                  <p className={`mt-0.5 font-display font-bold text-gradient ${small ? 'text-xs leading-snug' : 'text-lg'}`}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Signature element: original SVG robot-at-laptop illustration */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-violet/25 via-fuchsia-500/10 to-azure/15 blur-3xl opacity-0 dark:opacity-100 transition-opacity" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <RobotIllustration className="w-full h-auto drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]" />
            </motion.div>

            <div className="hidden sm:flex absolute bottom-2 right-2 items-center justify-center w-16 h-16 rounded-2xl border border-violet/30 bg-violet/10 backdrop-blur-sm rotate-6">
              <Code2 size={26} className="text-violet-bright" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
