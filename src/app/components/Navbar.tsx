"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${scrolled
        ? "bg-[#0D0F12]/90 backdrop-blur-md border-brand-border/60 shadow-lg shadow-black/20"
        : "bg-[#0D0F12]/70 backdrop-blur-sm border-brand-border/30"
        }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-serif text-lg font-medium text-brand-cream tracking-wide transition-opacity hover:opacity-90"
        >
          <span className="w-2 h-2 rounded-full bg-brand-sage animate-pulse" />
          <span>Dheeraj K</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-brand-offwhite/80 hover:text-brand-cream transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-sage hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-brand-cream bg-brand-sage/20 border border-brand-sage/40 hover:bg-brand-sage/35 transition-all duration-200"
          >
            <Mail size={13} className="text-brand-sage" />
            <span>Get in Touch</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-offwhite hover:text-brand-cream focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border/60 bg-[#0D0F12]/95 backdrop-blur-lg px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-brand-offwhite hover:text-brand-cream py-2 border-b border-brand-border/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-medium uppercase tracking-wider text-brand-cream bg-brand-sage/30 border border-brand-sage/50 hover:bg-brand-sage/50 transition-colors"
            >
              <Mail size={14} className="text-brand-cream" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
