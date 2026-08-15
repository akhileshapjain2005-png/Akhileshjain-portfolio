import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function FeaturedProject() {
  const { featuredProject } = portfolioData;
  if (!featuredProject) return null;

  return (
    <section className="section-shell !pt-0">
      <Reveal>
        <div className="rounded-[20px] p-[1.5px] bg-gradient-to-br from-violet via-violet/30 to-azure/60">
        <div className="card !rounded-[18px] !border-0 overflow-hidden grid lg:grid-cols-2">
          <div className="aspect-video lg:aspect-auto bg-slate-100 dark:bg-ink-800">
            {featuredProject.image && (
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} screenshot`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>

          <div className="p-8 flex flex-col justify-center">
            <p className="eyebrow flex items-center gap-1.5 mb-3">
              <Star size={12} fill="currentColor" /> Featured Project
            </p>
            <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-cloud-50">
              {featuredProject.title}
            </h3>

            {featuredProject.problem && (
              <p className="mt-4 text-sm text-ink-700 dark:text-cloud-200">
                <span className="font-semibold text-ink-900 dark:text-cloud-50">Problem: </span>
                {featuredProject.problem}
              </p>
            )}
            {featuredProject.solution && (
              <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200">
                <span className="font-semibold text-ink-900 dark:text-cloud-50">Solution: </span>
                {featuredProject.solution}
              </p>
            )}

            {featuredProject.technologies?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {featuredProject.github && (
                <a href={featuredProject.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  <Github size={16} /> GitHub
                </a>
              )}
              {featuredProject.liveDemo && (
                <a href={featuredProject.liveDemo} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
