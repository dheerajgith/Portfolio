"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kothapallidheeraj1@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 border-b border-brand-border/40 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif italic text-2xl md:text-3xl text-brand-cream mb-4 tracking-wide">
          Get in Touch
        </h2>
        <p className="text-brand-offwhite text-sm md:text-base mb-10 max-w-xl font-sans leading-relaxed">
          Whether you want to discuss database architectures, systems engineering, research collaborations, or just say hello—my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-lg bg-brand-border/30 border border-brand-border/60">
          <div className="flex items-center gap-3 text-brand-cream font-mono text-sm md:text-base select-all">
            <Mail className="text-brand-sage shrink-0" size={18} />
            <span>{email}</span>
          </div>

          <div className="flex items-center gap-3 sm:ml-auto">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-medium uppercase tracking-wider text-brand-cream bg-brand-sage/20 border border-brand-sage/40 hover:bg-brand-sage/40 transition-all duration-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-brand-sage" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-medium uppercase tracking-wider text-brand-cream bg-brand-sage/40 hover:bg-brand-sage/60 border border-brand-sage/60 transition-all duration-200"
            >
              <span>Open Mail</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-6 mt-8 text-xs md:text-sm font-medium uppercase tracking-wider font-sans">
          <a
            href="https://linkedin.com/in/dheeraj-k-592086318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-cream transition-colors duration-300 group"
          >
            <LinkedinIcon size={16} className="text-brand-sage group-hover:scale-105 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <span className="text-brand-border select-none">•</span>
          <a
            href="https://github.com/dheerajgith"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-offwhite/70 hover:text-brand-cream transition-colors duration-300 group"
          >
            <GithubIcon size={16} className="text-brand-sage group-hover:scale-105 transition-transform" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
