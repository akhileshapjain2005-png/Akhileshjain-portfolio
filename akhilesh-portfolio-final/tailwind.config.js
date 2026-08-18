/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds — deep navy/violet-black scale
        ink: {
          950: '#030712',
          900: '#050816',
          850: '#080b18',
          800: '#0b1020',
          700: '#0f1426',
          600: '#111827',
          500: '#1b2338',
        },
        // Light-mode surface scale (kept for the theme toggle)
        paper: {
          50: '#f7f7fb',
          100: '#eef0f8',
          200: '#e1e4f0',
        },
        // Primary accent — purple/violet
        violet: {
          DEFAULT: '#8b5cf6',
          dim: '#7c3aed',
          bright: '#a855f7',
        },
        // Secondary accent — blue
        azure: {
          DEFAULT: '#3b82f6',
          dim: '#6366f1',
        },
        // Text scale
        cloud: {
          50: '#f8fafc',
          200: '#cbd5e1',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
