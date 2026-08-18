import React from 'react';
import { Trophy } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section-shell">
      <SectionHeading title="Achievements" description="Hackathons, competitions, and recognitions." />

      {achievements.length === 0 ? (
        <div className="card p-10 text-center">
          <Trophy className="mx-auto mb-3 text-slate-400 dark:text-cloud-400/40" size={28} />
          <p className="text-ink-700 dark:text-cloud-200">
            Achievements will appear here once added to{' '}
            <code className="tag">src/data/portfolioData.js</code>.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className="card card-hover p-5 flex gap-4">
                <div className="p-2.5 h-fit rounded-lg bg-azure/10 text-azure-dim dark:text-azure">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink-900 dark:text-cloud-50">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-700 dark:text-cloud-200 mt-0.5">
                    {a.event} · <span className="font-mono text-xs">{a.date}</span>
                  </p>
                  {a.description && (
                    <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 leading-relaxed">
                      {a.description}
                    </p>
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
