import React from 'react';
import { FileDown, Eye } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function ResumeCTA() {
  const { personal } = portfolioData;

  return (
    <section className="section-shell !pt-0">
      <Reveal>
        <div className="card p-10 sm:p-14 text-center bg-gradient-to-b from-violet/5 to-transparent">
          <p className="eyebrow mb-3">Resume</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-cloud-50">
            Interested in my profile?
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-ink-700 dark:text-cloud-200">
            Download my resume to learn more about my experience, skills, and projects.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={personal.resumeUrl} download className="btn-primary">
              <FileDown size={16} /> Download Resume
            </a>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <Eye size={16} /> View Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
