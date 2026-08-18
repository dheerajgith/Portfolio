"use client";

import React, { useState } from "react";

export default function HeroMotif() {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  // Floating star positions for background constellations
  const stars = [
    { cx: 80, cy: 60, r: 1.2, delay: "0s" },
    { cx: 160, cy: 120, r: 1.5, delay: "1.5s" },
    { cx: 280, cy: 50, r: 1, delay: "3s" },
    { cx: 420, cy: 90, r: 1.8, delay: "0.5s" },
    { cx: 580, cy: 70, r: 1.5, delay: "2s" },
    { cx: 720, cy: 110, r: 1, delay: "4s" },
    { cx: 880, cy: 80, r: 1.8, delay: "1s" },
    { cx: 940, cy: 140, r: 1.2, delay: "2.5s" },
    { cx: 220, cy: 180, r: 1, delay: "3.5s" },
    { cx: 780, cy: 170, r: 1.5, delay: "1.8s" },
  ];

  return (
    <div className="relative w-full aspect-[16/7] min-h-[300px] max-h-[480px] select-none flex items-center justify-center overflow-hidden border-b border-brand-border/40 bg-brand-bg">
      {/* Background Dot Constellations */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />

      {/* SVG Container for Rocket, Trees, and Tech */}
      <svg
        viewBox="0 0 1000 400"
        className="w-full h-full max-w-5xl z-10 font-sans"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Twinkling Constellation Stars */}
        <g className="opacity-40">
          {stars.map((star, idx) => (
            <circle
              key={idx}
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              fill="#FBF9F6"
              className="animate-pulse-slow"
              style={{ animationDelay: star.delay }}
            />
          ))}
          {/* Subtle constellation connection lines */}
          <path d="M80 60 L160 120" stroke="#FBF9F6" strokeWidth="0.5" strokeDasharray="3,3" className="opacity-20" />
          <path d="M580 70 L720 110" stroke="#FBF9F6" strokeWidth="0.5" strokeDasharray="3,3" className="opacity-20" />
          <path d="M780 170 L880 80" stroke="#FBF9F6" strokeWidth="0.5" strokeDasharray="3,3" className="opacity-20" />
        </g>

        {/* LEFT FLANK - Nature & Software Engineering */}
        <g
          className="group cursor-pointer"
          onMouseEnter={() => setActiveElement("left-flank")}
          onMouseLeave={() => setActiveElement(null)}
        >
          {/* Nature: Outer Left Pine Tree */}
          <g className="transition-all duration-700">
            <path
              d="M120 320 L150 240 L180 320 Z"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            <path
              d="M130 290 L150 230 L170 290"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            <line
              x1="150"
              y1="320"
              x2="150"
              y2="340"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />
          </g>

          {/* Software: Floating Terminal Window */}
          <g className="translate-y-[-10px] md:translate-y-0 transition-all duration-700">
            {/* Terminal Frame */}
            <rect
              x="220"
              y="180"
              width="100"
              height="70"
              rx="4"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              fillOpacity="0.8"
              className="transition-all duration-500"
            />
            {/* Terminal Header Bar */}
            <line
              x1="220"
              y1="195"
              x2="320"
              y2="195"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1"
              className="transition-colors duration-500"
            />
            {/* Header Buttons */}
            <circle cx="230" cy="188" r="2" fill={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} className="transition-colors duration-500" />
            <circle cx="236" cy="188" r="2" fill={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} className="transition-colors duration-500" />
            <circle cx="242" cy="188" r="2" fill={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} className="transition-colors duration-500" />
            
            {/* Text lines inside terminal */}
            <line x1="230" y1="210" x2="270" y2="210" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="opacity-80 transition-colors duration-500" />
            <line x1="230" y1="220" x2="290" y2="220" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="opacity-60 transition-colors duration-500" />
            <line x1="230" y1="230" x2="260" y2="230" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="opacity-70 transition-colors duration-500" />
          </g>

          {/* Nature: Mid-Left Pine Tree */}
          <g className="transition-all duration-700">
            <path
              d="M340 330 L365 260 L390 330 Z"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            <line
              x1="365"
              y1="330"
              x2="365"
              y2="345"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />
          </g>

          {/* Software: Micro Server Rack / Database Unit */}
          <g className="transition-all duration-700">
            <rect
              x="270"
              y="280"
              width="50"
              height="60"
              rx="2"
              stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Server slots */}
            <line x1="275" y1="292" x2="315" y2="292" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="transition-colors duration-500" />
            <line x1="275" y1="305" x2="315" y2="305" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="transition-colors duration-500" />
            <line x1="275" y1="318" x2="315" y2="318" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="transition-colors duration-500" />
            <line x1="275" y1="330" x2="315" y2="330" stroke={activeElement === "left-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="transition-colors duration-500" />
            
            {/* Blinking indicator LED */}
            <circle
              cx="308"
              cy="292"
              r="1.5"
              fill="#4A5D4E"
              className={activeElement === "left-flank" ? "animate-pulse" : "opacity-60"}
            />
            <circle
              cx="308"
              cy="318"
              r="1.5"
              fill="#4A5D4E"
              className={activeElement === "left-flank" ? "animate-pulse" : "opacity-60"}
            />
          </g>
        </g>

        {/* CENTER - Sleek Minimalist Rocket */}
        <g
          className="group cursor-pointer"
          onMouseEnter={() => setActiveElement("rocket")}
          onMouseLeave={() => setActiveElement(null)}
        >
          {/* Animated Rocket Wrapper */}
          <g className="animate-float" style={{ animationDuration: "5s" }}>
            {/* Rocket Body */}
            <path
              d="M500 130 C485 170 485 240 485 260 L515 260 C515 240 515 170 500 130 Z"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#FBF9F6"}
              strokeWidth="1.5"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Rocket Tip */}
            <path
              d="M500 130 L500 115"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#FBF9F6"}
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />
            {/* Rocket Window */}
            <circle
              cx="500"
              cy="185"
              r="4.5"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            {/* Rocket Fins */}
            <path
              d="M485 245 C470 255 470 270 470 270 L485 260 Z"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#FBF9F6"}
              strokeWidth="1.5"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            <path
              d="M515 245 C530 255 530 270 530 270 L515 260 Z"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#FBF9F6"}
              strokeWidth="1.5"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Rocket Thruster Base */}
            <path
              d="M493 260 L507 260 L504 266 L496 266 Z"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Soft Flame/Thruster trail */}
            <path
              d="M496 268 L500 282 L504 268"
              stroke="#4A5D4E"
              strokeWidth="1"
              fill="none"
              className={`transition-opacity duration-500 ${
                activeElement === "rocket" ? "opacity-100" : "opacity-45"
              }`}
            />
          </g>

          {/* Rocket Smoke Trail (Quietly dissolving downwards) */}
          <g className="animate-pulse-slow">
            <path
              d="M500 290 Q485 320 500 350 T500 390"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1"
              strokeDasharray="4,4"
              className="opacity-40 transition-colors duration-500"
            />
            <path
              d="M495 300 Q510 330 495 365"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1"
              strokeDasharray="5,3"
              className="opacity-20 transition-colors duration-500"
            />
            <path
              d="M505 305 Q490 340 505 375"
              stroke={activeElement === "rocket" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1"
              strokeDasharray="5,3"
              className="opacity-20 transition-colors duration-500"
            />
          </g>
        </g>

        {/* RIGHT FLANK - Nature & Software Engineering */}
        <g
          className="group cursor-pointer"
          onMouseEnter={() => setActiveElement("right-flank")}
          onMouseLeave={() => setActiveElement(null)}
        >
          {/* Software: Code Doodle Frame / Console */}
          <g className="translate-y-[-10px] md:translate-y-0 transition-all duration-700">
            <rect
              x="660"
              y="170"
              width="110"
              height="80"
              rx="4"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              fillOpacity="0.8"
              className="transition-all duration-500"
            />
            {/* Horizontal dividers */}
            <line x1="660" y1="185" x2="770" y2="185" stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" className="transition-colors duration-500" />
            
            {/* Small graph illustration (data-driven app visual) */}
            <path
              d="M675 230 L695 210 L715 225 L735 200 L755 215"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1"
              className="opacity-70 transition-colors duration-500"
            />
            {/* Graph reference lines */}
            <line x1="670" y1="235" x2="760" y2="235" stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="0.8" strokeDasharray="2,2" className="opacity-40 transition-colors duration-500" />
            <line x1="670" y1="195" x2="670" y2="235" stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="0.8" strokeDasharray="2,2" className="opacity-40 transition-colors duration-500" />
          </g>

          {/* Nature: Mid-Right Pine Tree */}
          <g className="transition-all duration-700">
            <path
              d="M610 320 L635 250 L660 320 Z"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            <line
              x1="635"
              y1="320"
              x2="635"
              y2="340"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />
          </g>

          {/* Software: Minimal Laptop/Workstation doodle */}
          <g className="transition-all duration-700">
            {/* Screen */}
            <rect
              x="790"
              y="280"
              width="60"
              height="40"
              rx="3"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Laptop Base */}
            <path
              d="M775 320 L865 320 L860 326 L780 326 Z"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              fill="#0D0F12"
              className="transition-colors duration-500"
            />
            {/* Keyboard detail */}
            <line x1="795" y1="323" x2="845" y2="323" stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"} strokeWidth="1" strokeDasharray="2,1" className="opacity-75 transition-colors duration-500" />
          </g>

          {/* Nature: Far-Right Pine Tree */}
          <g className="transition-all duration-700">
            <path
              d="M870 330 L895 260 L920 330 Z"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.2"
              className="transition-colors duration-500"
            />
            <line
              x1="895"
              y1="330"
              x2="895"
              y2="348"
              stroke={activeElement === "right-flank" ? "#4A5D4E" : "#9EADB6"}
              strokeWidth="1.5"
              className="transition-colors duration-500"
            />
          </g>
        </g>

        {/* Flat Horizon Line */}
        <line
          x1="50"
          y1="348"
          x2="950"
          y2="348"
          stroke="#1E232B"
          strokeWidth="1"
        />
      </svg>

      {/* CORNER ACCENT - Bottom Left: Leaf morphing into Circuit Traces */}
      <div className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none md:w-36 md:h-36 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-offwhite opacity-25">
          {/* Main Leaf Stem */}
          <path
            d="M 5 95 C 10 90, 20 80, 40 60 C 60 40, 70 30, 80 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Leaf Sprout 1 (Organic morphing into Circuit) */}
          <path
            d="M 25 75 C 30 65, 45 65, 55 58"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Circuit line branching out from Leaf Sprout 1 */}
          <path d="M 55 58 L 70 58 L 80 48" fill="none" stroke="currentColor" strokeWidth="0.8" />
          {/* PCB Node Pad */}
          <circle cx="80" cy="48" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />

          {/* Leaf Sprout 2 */}
          <path
            d="M 40 60 C 35 45, 50 40, 65 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Circuit Trace from Sprout 2 */}
          <path d="M 65 35 L 75 25 L 85 25" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="85" cy="25" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />

          {/* Leaf Sprout 3 (Top end) */}
          <path
            d="M 60 40 C 62 25, 75 22, 80 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="80" cy="20" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* CORNER ACCENT - Bottom Right: Leaf morphing into Circuit Traces */}
      <div className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none md:w-36 md:h-36 z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-offwhite opacity-25">
          {/* Main Leaf Stem */}
          <path
            d="M 95 95 C 90 90, 80 80, 60 60 C 40 40, 30 30, 20 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Leaf Sprout 1 */}
          <path
            d="M 75 75 C 70 65, 55 65, 45 58"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Circuit line */}
          <path d="M 45 58 L 30 58 L 20 48" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="20" cy="48" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />

          {/* Leaf Sprout 2 */}
          <path
            d="M 60 60 C 65 45, 50 40, 35 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Circuit line */}
          <path d="M 35 35 L 25 25 L 15 25" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="15" cy="25" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />

          {/* Leaf Sprout 3 */}
          <path
            d="M 40 40 C 38 25, 25 22, 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="20" cy="20" r="1.5" fill="#4A5D4E" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
