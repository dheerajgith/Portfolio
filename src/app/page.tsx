import React from "react";
import HeroMotif from "./components/HeroMotif";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Mail } from "lucide-react";

// Inline minimalist SVG icons to avoid missing brand icons in newer Lucide versions
const LinkedinIcon = ({ size = 15, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 15, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#0D0F12] text-[#9EADB6] font-sans selection:bg-[#4A5D4E] selection:text-[#FBF9F6]">
      {/* 1. Header Motif (Interactive SVG Graphic) */}
      <HeroMotif />

      {/* 2. Hero Section (Typographic Headline & Links) */}
      <section className="w-full pt-16 pb-20 border-b border-brand-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-[46px] leading-[1.25] text-brand-cream font-medium tracking-wide">
            Dheeraj Kothapalli — Computer Science Student crafting scalable systems, database architectures, and data-driven applications.
          </h1>

          {/* Minimal Low-Contrast Hyperlinks */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 text-xs md:text-sm font-medium tracking-wider uppercase font-sans">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-cream transition-colors duration-300 group"
            >
              <Mail size={15} className="text-brand-sage group-hover:scale-105 transition-transform" />
              <span>Email</span>
            </a>
            <span className="text-brand-border select-none">|</span>
            <a
              href="https://linkedin.com/in/dheeraj-k-592086318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-cream transition-colors duration-300 group"
            >
              <LinkedinIcon size={15} className="text-brand-sage group-hover:scale-105 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <span className="text-brand-border select-none">|</span>
            <a
              href="https://github.com/dheerajgith"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-cream transition-colors duration-300 group"
            >
              <GithubIcon size={15} className="text-brand-sage group-hover:scale-105 transition-transform" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. About Me (Single-column layout with wide breathing room) */}
      <section id="about" className="w-full py-16 md:py-24 border-b border-brand-border/40 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif italic text-2xl md:text-3xl text-brand-cream mb-8 tracking-wide">
            About Me
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed tracking-wide text-brand-offwhite/90">
            <p>
              I am a Computer Science and Engineering student at{" "}
              <span className="text-brand-cream font-medium">Vellore Institute of Technology</span>. 
              My research and academic journey are dedicated to exploring backend reliability, database integrity, 
              and data-driven applications. I study how systems store, fetch, and process telemetry securely, 
              focusing on relational databases and highly reliable backends.
            </p>
            <p>
              Parallel to systems development, I am deeply fascinated by the natural mechanics of the cosmos. 
              This curiosities-led focus guides my work in machine learning and data processing—whether modeling 
              morphological characteristics of distant galaxies or mapping public sentiments across global networks. 
              I design my software architecture with the same clean, logical balance that guides the natural universe.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Technical Skill Landscape */}
      <Skills />

      {/* 5. Featured Projects */}
      <Projects />

      {/* 6. Contact Section */}
      <Contact />

      {/* 7. Education Milestones & Editorial Footer */}
      <footer className="w-full py-16 bg-brand-bg/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-y-6">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-brand-sage mb-2 font-sans">
              Education Milestone
            </h4>
            <p className="font-serif text-sm md:text-base text-brand-cream tracking-wide">
              Vellore Institute of Technology — B.Tech in Computer Science and Engineering
            </p>
            <p className="text-xs text-brand-offwhite/60 mt-1 font-sans">
              Graduation Year: 2028 <span className="mx-2">|</span> CGPA: 8.14 / 10
            </p>
          </div>

          <div className="text-[10px] md:text-xs text-brand-offwhite/40 tracking-wider font-sans uppercase">
            © {new Date().getFullYear()} Dheeraj Kothapalli. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
