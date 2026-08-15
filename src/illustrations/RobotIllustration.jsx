import React from 'react';

// Original SVG illustration approximating the reference's "robot at laptop"
// mascot — flat neon-glass style, built from primitives (no external art).
export default function RobotIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 360 360" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="botBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="botScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <radialGradient id="botGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="laptopBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2338" />
          <stop offset="100%" stopColor="#0b1020" />
        </linearGradient>
      </defs>

      <ellipse cx="180" cy="190" rx="150" ry="150" fill="url(#botGlow)" />

      {/* antenna */}
      <line x1="180" y1="58" x2="180" y2="30" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />
      <circle cx="180" cy="24" r="8" fill="#c4b5fd">
        <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* head */}
      <rect x="100" y="58" width="160" height="120" rx="34" fill="url(#botBody)" />
      <rect x="100" y="58" width="160" height="120" rx="34" fill="none" stroke="#f5f3ff" strokeOpacity="0.35" strokeWidth="2" />

      {/* visor / screen */}
      <rect x="122" y="86" width="116" height="64" rx="20" fill="#0b1020" />
      <rect x="122" y="86" width="116" height="64" rx="20" fill="url(#botScreen)" opacity="0.18" />
      {/* eyes */}
      <path d="M148 118 q10 -16 20 0" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M192 118 q10 -16 20 0" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* ear pads (headphones) */}
      <rect x="80" y="96" width="26" height="52" rx="13" fill="#7c3aed" />
      <rect x="254" y="96" width="26" height="52" rx="13" fill="#7c3aed" />
      <path d="M92 96 Q100 40 180 40 Q260 40 268 96" stroke="#7c3aed" strokeWidth="10" fill="none" strokeLinecap="round" />

      {/* body */}
      <rect x="118" y="178" width="124" height="96" rx="26" fill="url(#botBody)" opacity="0.95" />
      <circle cx="180" cy="222" r="16" fill="#0b1020" />
      <circle cx="180" cy="222" r="9" fill="#67e8f9">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* arms */}
      <rect x="70" y="196" width="46" height="20" rx="10" fill="url(#botBody)" transform="rotate(-8 93 206)" />
      <rect x="244" y="188" width="46" height="20" rx="10" fill="url(#botBody)" transform="rotate(18 267 198)" />

      {/* laptop */}
      <g transform="translate(0 6)">
        <rect x="118" y="256" width="128" height="16" rx="4" fill="url(#laptopBody)" />
        <rect x="128" y="204" width="108" height="60" rx="6" fill="url(#laptopBody)" />
        <rect x="136" y="212" width="92" height="44" rx="3" fill="#050816" stroke="#a855f7" strokeOpacity="0.4" />
        <path d="M158 234 l-8 6 8 6 M198 234 l8 6 -8 6 M180 226 l-6 22" stroke="#67e8f9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* floating sparkles */}
      <g fill="#c4b5fd">
        <path d="M60 70 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z" opacity="0.85" />
        <path d="M300 150 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" opacity="0.7" />
        <path d="M292 60 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" opacity="0.6" />
      </g>
    </svg>
  );
}
