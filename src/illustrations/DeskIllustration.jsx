import React from 'react';

// Small decorative "laptop + plant + mug" desk scene, echoing the reference's
// About section illustration. Original flat SVG, no external assets.
export default function DeskIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 260 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="deskLaptop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="deskMug" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* plant */}
      <g transform="translate(178 20)">
        <rect x="-16" y="60" width="32" height="26" rx="6" fill="#1b2338" stroke="#a855f7" strokeOpacity="0.4" />
        <path d="M0 60 C -18 40 -14 10 0 0 C 14 10 18 40 0 60" fill="#34d399" opacity="0.85" />
        <path d="M0 60 C -8 42 -4 20 0 8" fill="none" stroke="#0b1020" strokeOpacity="0.15" strokeWidth="2" />
      </g>

      {/* mug */}
      <g transform="translate(20 96)">
        <rect x="0" y="0" width="30" height="40" rx="6" fill="url(#deskMug)" />
        <path d="M30 8 h8 a8 8 0 0 1 0 16 h-8" fill="none" stroke="url(#deskMug)" strokeWidth="4" />
        <text x="15" y="24" textAnchor="middle" fontSize="9" fill="#0b1020" fontFamily="monospace">♡</text>
      </g>

      {/* laptop base */}
      <rect x="50" y="130" width="140" height="14" rx="4" fill="#0b1020" />
      {/* laptop screen */}
      <rect x="62" y="70" width="116" height="64" rx="6" fill="url(#deskLaptop)" />
      <rect x="70" y="78" width="100" height="48" rx="3" fill="#050816" />
      <text x="120" y="98" textAnchor="middle" fontSize="7" fill="#67e8f9" fontFamily="monospace">const whoami</text>
      <text x="120" y="110" textAnchor="middle" fontSize="7" fill="#c4b5fd" fontFamily="monospace">= {'{ building }'}</text>
      <path d="M84 118 l-6 4 6 4 M156 118 l6 4 -6 4" stroke="#a855f7" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* rocket sticker on laptop lid */}
      <g transform="translate(150 108) rotate(20)">
        <path d="M0 0 q6 -14 12 0 q-2 8 -6 8 q-4 0 -6 -8 z" fill="#f472b6" />
        <circle cx="6" cy="2" r="2" fill="#050816" />
      </g>
    </svg>
  );
}
