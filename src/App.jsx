import React from 'react';
import { useTheme } from './hooks/useTheme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Achievements from './components/Achievements.jsx';
import Education from './components/Education.jsx';
import ResumeCTA from './components/ResumeCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-shell min-h-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FeaturedProject />
        <Experience />
        <Certificates />
        <Achievements />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
