import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
    >
      <div
        className="card w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-paper-50 dark:bg-ink-900 p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-cloud-50">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright"
          >
            <X size={20} />
          </button>
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full rounded-xl mb-5 border border-ink-900/10 dark:border-violet/15"
            loading="lazy"
          />
        )}

        <p className="text-ink-700 dark:text-cloud-200 leading-relaxed mb-4">{project.description}</p>

        {project.problem && (
          <div className="mb-4">
            <p className="eyebrow mb-1.5">Problem solved</p>
            <p className="text-ink-700 dark:text-cloud-200 leading-relaxed">{project.problem}</p>
          </div>
        )}

        {project.features?.length > 0 && (
          <div className="mb-4">
            <p className="eyebrow mb-2">Key features</p>
            <ul className="list-disc list-inside space-y-1 text-ink-700 dark:text-cloud-200">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
