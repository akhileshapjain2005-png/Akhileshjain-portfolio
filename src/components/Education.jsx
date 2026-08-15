import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Education() {
  const { education } = portfolioData;
  if (education.length === 0) return null;

  return (
    <section id="education" className="section-shell">
      <SectionHeading title="Education" description="Academic background and coursework." />

      <div className="relative pl-8 space-y-10">
        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-ink-900/10 dark:bg-violet/15" />

        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 80}>
            <div className="relative">
              <div className="absolute -left-8 top-1 w-[19px] h-[19px] rounded-full bg-paper-50 dark:bg-ink-950 border-2 border-violet-dim dark:border-violet-bright flex items-center justify-center">
                <GraduationCap size={11} className="text-violet-dim dark:text-violet-bright" />
              </div>
              <p className="font-mono text-xs text-ink-600 dark:text-cloud-400">{edu.year}</p>
              <h3 className="font-display font-semibold text-ink-900 dark:text-cloud-50 mt-1">
                {edu.degree}
              </h3>
              <p className="text-sm text-ink-700 dark:text-cloud-200 mt-0.5">
                {edu.institution}
                {edu.university ? `, ${edu.university}` : ''}
              </p>
              {edu.score && (
                <p className="text-sm text-ink-700 dark:text-cloud-200 mt-0.5">Score: {edu.score}</p>
              )}
              {edu.coursework?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <span key={c} className="tag">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
