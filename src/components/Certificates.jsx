import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import CertificateModal from './CertificateModal.jsx';
import { portfolioData } from '../data/portfolioData.js';

export default function Certificates() {
  const { certificates } = portfolioData;
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        title="Certifications"
        description="Courses and credentials I've completed."
      />

      {certificates.length === 0 ? (
        <div className="card p-10 text-center">
          <Award className="mx-auto mb-3 text-slate-400 dark:text-cloud-400/40" size={28} />
          <p className="text-ink-700 dark:text-cloud-200">
            Certificates will appear here once added to{' '}
            <code className="tag">src/data/portfolioData.js</code>.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <Reveal key={`${cert.title}-${i}`} delay={i * 70}>
              <button
                onClick={() => setActive(cert)}
                className="card card-hover p-5 text-left w-full h-full transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-violet/10 text-violet-dim dark:text-violet-bright">
                    <Award size={18} />
                  </div>

                  {cert.date && (
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-600 dark:text-cloud-400">
                      {cert.date}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg text-ink-900 dark:text-cloud-50">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-violet-dim dark:text-violet-bright mt-2">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-sm leading-6 text-ink-700 dark:text-cloud-200 mt-3">
                    {cert.description}
                  </p>
                )}

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-violet-dim dark:text-violet-bright">
                  <ExternalLink size={13} />
                  View Details
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      )}

      <CertificateModal
        certificate={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
