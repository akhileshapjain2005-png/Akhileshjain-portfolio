import React from 'react';
import { Briefcase, Radar } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-shell">
      <SectionHeading title="Experience" description="Internships, freelance work, and hands-on contributions." />

      {experience.length === 0 ? (
        <Reveal>
          <div className="card p-10 text-center">
            <Radar className="mx-auto mb-3 text-violet-dim dark:text-violet-bright" size={28} />
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cloud-50">
              Currently seeking internship opportunities
            </h3>
            <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 max-w-md mx-auto">
              I'm actively looking for internships and entry-level roles where I can apply and
              grow my AI/ML and full-stack skills. Reach out via the contact section below.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="space-y-5">
          {experience.map((exp, i) => (
            <Reveal key={`${exp.role}-${exp.organization}`} delay={i * 80}>
              <div className="card card-hover p-6 flex gap-4">
                <div className="p-2.5 h-fit rounded-lg bg-violet/10 text-violet-dim dark:text-violet-bright">
                  <Briefcase size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-ink-900 dark:text-cloud-50">
                      {exp.role} · {exp.organization}
                    </h3>
                    <span className="font-mono text-xs text-ink-600 dark:text-cloud-400">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  {exp.location && (
                    <p className="text-xs text-ink-600 dark:text-cloud-400 mt-0.5">{exp.location}</p>
                  )}
                  <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.technologies?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
