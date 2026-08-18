import React from 'react';

// Small decorative ringed-planet glyph used near the logo, matching the
// reference's floating-planet accent — original SVG, flat neon-glass style.
export default function PlanetIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="planetBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="planetRing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
          <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="66" rx="46" ry="12" fill="none" stroke="url(#planetRing)" strokeWidth="4" transform="rotate(-14 60 66)" />
      <circle cx="60" cy="58" r="30" fill="url(#planetBody)" />
      <circle cx="48" cy="48" r="7" fill="#f5f3ff" opacity="0.25" />
      <ellipse cx="60" cy="66" rx="46" ry="12" fill="none" stroke="url(#planetRing)" strokeWidth="3" strokeDasharray="2 6" transform="rotate(-14 60 66)" opacity="0.7" />
    </svg>
  );
}
