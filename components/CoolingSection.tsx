"use client";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import Headline from "./Headline";
import Reveal from "./Reveal";

const PATHS = [
  "M400 200 C300 200 250 120 110 80", "M400 200 C300 200 250 280 110 320",
  "M400 200 C500 200 550 120 690 80", "M400 200 C500 200 550 280 690 320",
  "M400 200 C400 140 400 80 400 20", "M400 200 C400 260 400 320 400 380",
];

export default function CoolingSection() {
  const reduce = useReducedMotion();
  const [load, setLoad] = useState<"idle" | "full">("idle");
  const color = load === "full" ? "#b9ff2e" : "#2d7bff";
  const dur = load === "full" ? 1.4 : 3.5;
  return (
    <section id="cooling" className="relative overflow-hidden bg-ink px-5 py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">05 / Cooling</p>
          <Headline text="Cool under pressure." className="display mt-4 text-6xl sm:text-8xl" />
          <p className="mt-6 max-w-md text-lg text-white/70">Heat is what slows a machine down. Strong airflow keeps components in their comfort zone so performance stays steady through long sessions.</p>
          <div role="group" aria-label="Simulated load" className="mt-8 flex gap-2">
            {([["idle", "Idle"], ["full", "Full load"]] as const).map(([id, label]) => (
              <button key={id} type="button" aria-pressed={load === id} onClick={() => setLoad(id)} className={`min-h-11 rounded-sm border px-5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 active:scale-95 ${load === id ? "border-acid bg-acid text-black" : "border-white/25 hover:border-white"}`}>{label}</button>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50">Conceptual visualization. It is not an engineering diagram of any real product.</p>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <svg viewBox="0 0 800 400" className="h-auto w-full lg:scale-[1.15]" role="img" aria-label="Abstract animated airflow moving outward from a central chip" style={{ ["--flow" as string]: `${dur}s`, ["--spin" as string]: `${dur / 2}s` }}>
                        <circle cx="400" cy="200" r="130" fill={color} opacity=".08" />
            {PATHS.map((d, i) => (
              <g key={i}>
                <path id={`air${i}`} d={d} fill="none" stroke="#1d2a3a" strokeWidth="6" strokeLinecap="round" />
                <path d={d} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" className="flow" />
                {!reduce && (
                  <circle r="4" fill={color}>
                    <animateMotion dur={`${dur * 1.2}s`} begin={`${i * 0.3}s`} repeatCount="indefinite"><mpath href={`#air${i}`} /></animateMotion>
                  </circle>
                )}
              </g>
            ))}
            {[330, 470].map((cx) => (
              <g key={cx} transform={`translate(${cx} 200)`}>
                <circle r="50" fill="#0d1117" stroke="#2b3542" strokeWidth="2" />
                <g className="spin" fill={color} opacity=".75"><ellipse rx="42" ry="8" /><ellipse rx="42" ry="8" transform="rotate(60)" /><ellipse rx="42" ry="8" transform="rotate(120)" /></g>
                <circle r="8" fill="#05070a" />
              </g>
            ))}
            <rect x="372" y="172" width="56" height="56" rx="10" fill="#05070a" stroke={color} strokeWidth="2" opacity=".9" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
