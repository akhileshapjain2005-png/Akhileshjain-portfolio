import React from 'react';
import { Pin, User, MapPin, BookOpen, Building2, Percent } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import DeskIllustration from '../illustrations/DeskIllustration.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function About() {
  const { about, personal, education } = portfolioData;
  const primaryEducation = education?.[0];

  const infoItems = [
    { label: 'name', value: `"${personal.name}"` },
    personal.location && { label: 'location', value: `"${personal.location}"` },
    primaryEducation?.degree && { label: 'study', value: `"${primaryEducation.degree}"` },
    primaryEducation?.university && { label: 'university', value: `"${primaryEducation.university}"` },
    primaryEducation?.score && { label: 'score', value: `"${primaryEducation.score}"` },
    { label: 'status', value: '"Learning • Building • Creating"' },
  ].filter(Boolean);

  return (
    <section id="about" className="section-shell">
      <div className="flex items-center gap-2.5 mb-10">
        <Pin size={18} className="text-violet-bright" />
        <SectionHeading title="About Me" className="!mb-0" />
      </div>

      <Reveal>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
          <div className="card !rounded-2xl p-6 font-mono text-sm shadow-xl shadow-ink-900/5">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <p className="text-violet-bright">
              const <span className="text-cloud-50">whoami</span> = {'{'}
            </p>
            <div className="pl-5 space-y-1.5 py-2">
              {infoItems.map(({ label, value }, i) => (
                <p key={label} className="text-ink-700 dark:text-cloud-200">
                  <span className="text-azure">{label}</span>:{' '}
                  <span className="text-emerald-400">{value}</span>
                  {i < infoItems.length - 1 ? ',' : ''}
                </p>
              ))}
            </div>
            <p className="text-violet-bright">{'}'}</p>
          </div>

          <div className="hidden lg:flex justify-center">
            <DeskIllustration className="w-full max-w-xs h-auto drop-shadow-[0_0_30px_rgba(139,92,246,0.18)]" />
          </div>
        </div>

        <div className="mt-8 space-y-4 max-w-3xl">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-ink-700 dark:text-cloud-200 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
