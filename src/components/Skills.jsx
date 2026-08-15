import React, { useMemo } from 'react';
import { Sparkles, Zap, Diamond } from 'lucide-react';
import {
  SiPython, SiJavascript, SiOpenjdk, SiC, SiMysql, SiPostgresql, SiMongodb,
  SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress, SiGit, SiGithub,
  SiPostman, SiDocker, SiTensorflow, SiPytorch,
  SiScikitlearn, SiPandas, SiNumpy,
} from 'react-icons/si';
import { BrainCircuit, Eye as EyeIcon, MessageSquareText, Database, Terminal, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { portfolioData } from '../data/portfolioData.js';

// Maps a skill name to a brand icon where one exists; falls back to a
// neutral glyph so any skill added to portfolioData.js still renders cleanly.
const ICON_MAP = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  C: SiC,
  SQL: Database,
  'Machine Learning': BrainCircuit,
  'Deep Learning': BrainCircuit,
  NLP: MessageSquareText,
  'Generative AI': Sparkles,
  'Computer Vision': EyeIcon,
  'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': Code2,
  Postman: SiPostman,
  Docker: SiDocker,
};

// A couple of skills carry a small extra glyph next to the name in the
// reference (e.g. a diamond beside "React") — purely decorative flourish.
const FLOURISH = new Set(['React']);

export default function Skills() {
  const { skills } = portfolioData;

  // Flatten every category into one list of individual skills, de-duplicated
  // by name (e.g. "JavaScript" appears in both Languages and Web Dev).
  const flatSkills = useMemo(() => {
    const seen = new Set();
    const out = [];
    skills.forEach((group) => {
      (group.items || []).forEach((item) => {
        if (!seen.has(item.name)) {
          seen.add(item.name);
          out.push(item.name);
        }
      });
    });
    return out;
  }, [skills]);

  if (flatSkills.length === 0) return null;

  return (
    <section id="skills" className="section-shell">
      <div className="flex items-center gap-2.5 mb-8">
        <Zap size={18} className="text-violet-bright" />
        <SectionHeading title="Skills" className="!mb-0" />
      </div>

      <div className="flex flex-wrap gap-3">
        {flatSkills.map((name, i) => {
          const Icon = ICON_MAP[name] || Terminal;
          return (
            <Reveal key={name} delay={i * 30}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 hover:bg-violet/15 hover:border-violet/50 transition-colors px-4 py-2 text-sm font-medium text-violet-bright">
                <Icon size={15} />
                {name}
                {FLOURISH.has(name) && <Diamond size={10} className="fill-current" />}
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
