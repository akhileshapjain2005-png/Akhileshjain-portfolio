import React, { useMemo, useState } from 'react';
import { Github, ExternalLink, Eye, FolderGit2, BrainCircuit, Globe, Layers, Boxes } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import ProjectModal from './ProjectModal.jsx';
import { portfolioData } from '../data/portfolioData.js';

const FILTERS = ['All', 'AI/ML', 'Web Development', 'Full Stack', 'Other'];

const CATEGORY_ICON = {
  'AI/ML': BrainCircuit,
  'Web Development': Globe,
  'Full Stack': Layers,
  Other: Boxes,
};

// Cycled per card so a grid of projects reads with the same varied-but-
// cohesive accent badges as the reference, without any large hero images.
const BADGE_STYLES = [
  'bg-violet/15 text-violet-bright',
  'bg-azure/15 text-azure',
  'bg-emerald-400/15 text-emerald-400',
  'bg-amber-400/15 text-amber-400',
];

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading title="Featured Projects" align="center" />

      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-9">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? 'text-white border-transparent bg-gradient-to-r from-violet to-azure'
                    : 'border-ink-900/15 dark:border-cloud-50/15 text-ink-700 dark:text-cloud-200 hover:border-violet'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const Icon = CATEGORY_ICON[project.category] || FolderGit2;
              const badge = BADGE_STYLES[i % BADGE_STYLES.length];
              return (
              <Reveal key={project.title} delay={i * 60}>
                <article className="card card-hover overflow-hidden h-full flex flex-col group transition-all duration-300">
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`p-2.5 rounded-xl ${badge}`}>
                        <Icon size={20} />
                      </span>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="p-1.5 text-ink-600 dark:text-cloud-400 hover:text-violet-dim dark:hover:text-violet-bright transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-ink-900 dark:text-cloud-50">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 dark:text-cloud-200 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies?.slice(0, 4).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="btn-secondary !py-1.5 !px-3.5 text-xs"
                      >
                        <Eye size={14} /> Details
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-1.5 text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
              );
            })}
          </div>
        </>
      )}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

function EmptyState() {
  return (
    <div className="card p-10 text-center">
      <FolderGit2 className="mx-auto mb-3 text-slate-400 dark:text-cloud-400/40" size={28} />
      <p className="text-ink-700 dark:text-cloud-200">
        Projects will show up here once added to{' '}
        <code className="tag">src/data/portfolioData.js</code>.
      </p>
    </div>
  );
}
