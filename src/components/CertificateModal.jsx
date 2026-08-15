import React, { useEffect } from 'react';
import { X, Award, ExternalLink } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();

    if (certificate) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate`}
      onClick={onClose}
    >
      <div
        className="card w-full max-w-2xl bg-paper-50 dark:bg-ink-900 p-7 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-violet/10 text-violet-dim dark:text-violet-bright">
              <Award size={24} />
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cloud-50">
                {certificate.title}
              </h3>
              <p className="text-sm font-medium text-violet-dim dark:text-violet-bright mt-1">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate preview"
            className="p-1.5 rounded-md text-ink-700 dark:text-cloud-200 hover:text-violet-dim dark:hover:text-violet-bright"
          >
            <X size={20} />
          </button>
        </div>

        {certificate.date && (
          <p className="font-mono text-xs text-ink-600 dark:text-cloud-400">
            {certificate.date}
          </p>
        )}

        {certificate.description && (
          <p className="mt-5 text-sm leading-7 text-ink-700 dark:text-cloud-200">
            {certificate.description}
          </p>
        )}

        {certificate.image && (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="w-full rounded-xl mt-5 border border-ink-900/10 dark:border-violet/15"
            loading="lazy"
          />
        )}

        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6 inline-flex items-center gap-2"
          >
            <ExternalLink size={16} />
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
}
