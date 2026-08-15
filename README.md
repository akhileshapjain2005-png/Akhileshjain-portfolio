# Engineer Portfolio

A recruiter-ready personal portfolio built with React, Vite, and Tailwind CSS.
Every piece of personal content — name, projects, certificates, skills, and
more — lives in **one file**: `src/data/portfolioData.js`.

---

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Project structure

```text
src/
├── components/        # UI components — pull all content from data/
├── data/
│   └── portfolioData.js   # <-- EDIT THIS to update the whole site
├── hooks/
│   ├── useTheme.js    # dark/light mode + localStorage
│   └── useReveal.js   # scroll-reveal animation
├── App.jsx
├── main.jsx
└── index.css

public/
└── assets/            # profile photo, resume, project/certificate images
```

---

## How to edit my portfolio

Everything below is done in **`src/data/portfolioData.js`** unless noted.

1. **Change my name** — edit `personal.name`.
2. **Change my profile photo** — put your image at `public/assets/profile.jpg`
   (the path is already set in `personal.profileImage`).
3. **Change About Me** — edit the `about.paragraphs` array; each string is
   one paragraph.
4. **Add a skill** — find the right category inside the `skills` array (or
   add a new category object) and add `{ name: 'Skill Name' }` to its
   `items` list.
5. **Add a project** — add a new object to the `projects` array. Set
   `category` to one of `'AI/ML'`, `'Web Development'`, `'Full Stack'`, or
   `'Other'` so it shows up under the right filter. Leave `github` or
   `liveDemo` as `''` to hide that button.
6. **Add a certificate** — add a new object to the `certificates` array.
7. **Add an achievement** — add a new object to the `achievements` array.
8. **Add education** — add a new object to the `education` array (shows as
   a timeline, most recent first is fine either order).
9. **Add an internship/experience** — add a new object to the `experience`
   array. While this array is empty, the site shows a "currently seeking
   opportunities" message instead.
10. **Add your GitHub link** — set `personal.github` (and `social.github`
    for the footer) to your profile URL.
11. **Add your LinkedIn link** — set `personal.linkedin` (and
    `social.linkedin`) to your profile URL.
12. **Add your resume** — put the PDF at `public/assets/resume.pdf`. The
    "Download Resume" and "View Resume" buttons already point there.
13. **Change colors** — open `tailwind.config.js` → `theme.extend.colors`.
    The `signal` color is the main accent; `ink` and `paper` are the dark
    and light background/text scales.
14. **Change the profile image** — same as step 2 above.
15. **Deploy updated changes** — see Deployment below; for Vercel/Netlify,
    just push to GitHub and it redeploys automatically.

Every field in `portfolioData.js` has a comment above it explaining what it
controls — scroll through the file and it's mostly self-explanatory.

### Contact form

The contact form in `src/components/Contact.jsx` is fully functional UI but
is **not connected to an email service yet** — submitting it shows a local
confirmation only. To make it actually deliver messages, connect it to one
of:

- [Formspree](https://formspree.io) — point the form's `onSubmit` at a POST
  request to your Formspree endpoint.
- [EmailJS](https://www.emailjs.com) — call `emailjs.send(...)` inside
  `handleSubmit`.
- Your own backend API route.

The exact spot to change is marked with a `TODO` comment in `Contact.jsx`.

---

## Deployment

### Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy — Vercel auto-detects everything else.

### Netlify

1. Push this project to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.

### GitHub Pages

1. Install the helper: `npm install --save-dev gh-pages`.
2. In `vite.config.js`, add `base: '/<your-repo-name>/'`.
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom `ink` / `paper` / `signal` design tokens)
- Framer Motion (available for further animation work)
- lucide-react icons
- Dark mode by default, toggle persisted to `localStorage`
- Respects `prefers-reduced-motion`
