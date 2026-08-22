import React, { useEffect, useState } from 'react';
import { X, Award, ExternalLink, ImageOff } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [imageFailed, setImageFailed] = useState(false);

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

  // Reset the broken-image fallback whenever a different certificate is opened.
  useEffect(() => {
    setImageFailed(false);
  }, [certificate]);

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
        className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-paper-50 dark:bg-ink-900 p-7 sm:p-8"
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

        {certificate.image && !imageFailed ? (
          <div className="mt-5 flex justify-center rounded-xl border border-ink-900/10 dark:border-violet/15 bg-paper-100 dark:bg-ink-950/40 p-2 sm:p-3">
            <p className="text-red-500 break-all">
              IMAGE URL:{certificate.image}
            </p>
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="w-full max-h-[60vh] object-contain rounded-lg"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          </div>
        ) : certificate.image && imageFailed ? (
          <div className="mt-5 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink-900/15 dark:border-violet/15 p-8 text-center">
            <ImageOff size={22} className="text-ink-600 dark:text-cloud-400" />
            <p className="text-sm text-ink-700 dark:text-cloud-200">
              The certificate image couldn't be loaded, but the details above are accurate.
            </p>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {certificate.image && !imageFailed && (
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Open Certificate
            </a>
          )}

          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Verify
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
