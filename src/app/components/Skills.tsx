import React from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

export default function Skills() {
  const skillLandscape: SkillCategory[] = [
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript", "SQL (Oracle)"],
    },
    {
      title: "Web",
      items: ["HTML & CSS", "Flask", "React"],
    },
    {
      title: "Tools & DBs",
      items: ["Git", "VS Code", "Jupyter Notebook", "Oracle DB"],
    },
    {
      title: "Core Concepts",
      items: ["Data Structures", "DBMS", "Machine Learning", "NLP", "Operating Systems"],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 md:py-24 border-b border-brand-border/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="font-serif italic text-2xl md:text-3xl text-brand-cream mb-12 tracking-wide">
          Technical Skill Landscape
        </h2>

        {/* Skill Array Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skillLandscape.map((category, idx) => (
            <div key={idx} className="group flex flex-col space-y-3">
              {/* Category Title */}
              <h3 className="font-serif text-lg text-brand-cream/80 border-b border-brand-border/60 pb-1.5 font-medium transition-colors duration-300 group-hover:text-brand-cream">
                {category.title}
              </h3>
              
              {/* Inline text-based list */}
              <div className="text-brand-offwhite text-sm md:text-base leading-relaxed tracking-wide font-sans">
                {category.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="inline-block">
                    <span className="transition-all duration-300 hover:text-brand-cream hover:underline decoration-brand-sage decoration-2 underline-offset-4 cursor-default">
                      {item}
                    </span>
                    {itemIdx < category.items.length - 1 && (
                      <span className="mx-2.5 text-brand-sage/60 font-light select-none">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
