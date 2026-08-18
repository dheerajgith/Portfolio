import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  description: string;
  link?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Starship Mission Management System",
      tags: ["Flask", "Oracle DB", "SQL", "Python"],
      description:
        "A full-stack database application designed to manage SpaceX Starship mission logistics, crew assignments, and payloads. Built to handle complex relational data safely using the python-oracledb driver with optimized query performance and robust transactional integrity.",
      link: "https://github.com/dheerajgith",
    },
    {
      title: "Galaxy Image Classifier",
      tags: ["Machine Learning", "Scikit-Learn", "Python"],
      description:
        "A morphological machine learning classification model developed to automatically identify and categorize structural galaxy types from astronomical image datasets, streamlining sky-survey analysis pipelines.",
      link: "https://github.com/dheerajgith",
    },
    {
      title: "Geopolitical Sentiment Analysis",
      tags: ["Python", "NLP", "Pandas", "NLTK"],
      description:
        "An NLP sentiment analysis pipeline that leverages NLTK and pandas to ingest, clean, and evaluate global public opinion data. Evaluates geopolitical sentiments and perspectives regarding international conflicts through social media and news telemetry.",
      link: "https://github.com/dheerajgith",
    },
    {
      title: "YouTube Distraction Blocker",
      tags: ["JavaScript", "Chrome Extension", "CSS"],
      description:
        "A productivity-focused browser extension built to filter distracting website recommendation sections. Utilizes content filtering algorithms and asynchronous JavaScript DOM manipulation to deliver a clean, focused viewport.",
      link: "https://github.com/dheerajgith",
    },
  ];

  return (
    <section id="projects" className="w-full py-16 md:py-24 border-b border-brand-border/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-serif italic text-2xl md:text-3xl text-brand-cream mb-16 tracking-wide">
          Featured Projects
        </h2>

        {/* Cardless Projects List */}
        <div className="space-y-16 md:space-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative flex flex-col items-start">
              {/* Top Row: Title & Link Arrow & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full gap-y-3">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 group/link"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-brand-cream transition-colors duration-300 group-hover:text-brand-cream group-hover:underline decoration-brand-sage decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-brand-sage opacity-70 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </a>
              </div>

              {/* Tag badges */}
              <div className="flex flex-wrap gap-2 mt-3.5">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-[11px] font-medium uppercase tracking-wider font-sans px-2.5 py-0.5 rounded bg-brand-sage/10 text-[#A6C4AE] border border-brand-sage/20 transition-all duration-300 hover:bg-brand-sage/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-brand-offwhite text-sm md:text-base leading-relaxed mt-4 max-w-3xl font-sans tracking-wide">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
