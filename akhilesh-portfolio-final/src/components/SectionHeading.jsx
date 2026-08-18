import React from 'react';

// Heading style matched to the reference: a bold two-tone title (last word in
// the purple/blue gradient) with a short accent underline. Centered for
// content-grid sections (Skills, Projects), left-aligned for narrative
// sections (About, Contact, etc).
export default function SectionHeading({ title, description, align = 'left', action, className = 'mb-10 sm:mb-12' }) {
  const words = title.trim().split(' ');
  const lead = words.slice(0, -1).join(' ');
  const last = words[words.length - 1];
  const isCenter = align === 'center';

  return (
    <div
      className={`flex items-end gap-6 ${
        isCenter ? 'flex-col text-center max-w-xl mx-auto' : 'flex-wrap justify-between max-w-2xl'
      } ${className}`}
    >
      <div>
        <h2 className="font-display text-[1.75rem] sm:text-3xl font-bold tracking-tight text-ink-900 dark:text-cloud-50">
          {lead && `${lead} `}
          <span className="text-gradient">{last}</span>
        </h2>
        <span
          className={`mt-2 block h-[3px] w-10 rounded-full bg-gradient-to-r from-violet to-azure ${
            isCenter ? 'mx-auto' : ''
          }`}
        />
        {description && (
          <p className="mt-3 text-sm text-ink-700 dark:text-cloud-200 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && !isCenter && <div className="shrink-0">{action}</div>}
    </div>
  );
}
