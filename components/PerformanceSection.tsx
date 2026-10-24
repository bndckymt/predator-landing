"use client";
import { motion, useReducedMotion } from "framer-motion";
import Headline from "./Headline";
import { EASE } from "@/lib/config";

const ITEMS = [
  { k: "GPU", t: "Advanced gaming graphics", d: "Dedicated graphics headroom for detailed worlds, rich lighting and high resolution output." },
  { k: "CPU", t: "High performance processing", d: "Multi core muscle for fast loads, smooth streaming and heavy background tasks." },
  { k: "Hz", t: "High refresh rate gaming", d: "A fast panel and fast hardware working together so motion stays clean." },
  { k: "AI", t: "AI assisted performance", d: "Smart tuning that responds to what you are playing and how hard the machine is working." },
];

export default function PerformanceSection() {
  const reduce = useReducedMotion();
  return (
    <section id="performance" className="relative bg-ink px-5 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">02 / Performance</p>
        <Headline text="Built to dominate." className="display mt-5 text-6xl sm:text-8xl" />
        <ol className="mt-20 border-t border-white/15">
          {ITEMS.map((it, i) => (
            <motion.li key={it.k} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
              className="group relative grid items-baseline gap-3 border-b border-white/15 py-8 transition-colors duration-500 hover:bg-white/[0.02] lg:grid-cols-12 lg:gap-6 lg:py-12">
              <span className="font-mono text-sm text-white/40 lg:col-span-1">0{i + 1}</span>
              <h3 className="display text-4xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-3 group-hover:text-acid sm:text-6xl lg:col-span-7 lg:text-7xl">{it.t}</h3>
              <div className="lg:col-span-4">
                <span className="font-mono text-xs tracking-[0.3em] text-acid">{it.k}</span>
                <p className="mt-2 text-white/60">{it.d}</p>
              </div>
              <span aria-hidden className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-acid transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100" />
            </motion.li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-white/50">Conceptual copy. No benchmark figures or exact hardware are claimed.</p>
      </div>
    </section>
  );
}
