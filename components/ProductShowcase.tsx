"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import LaptopVisual from "./LaptopVisual";
import Headline from "./Headline";
import Reveal from "./Reveal";
import { EASE } from "@/lib/config";

const MODES = [
  { id: "stealth", label: "Stealth", accent: "#8da2bd", desc: "Muted lighting and a restrained profile for late sessions and quiet rooms." },
  { id: "performance", label: "Performance", accent: "#2d7bff", desc: "Cool blue lighting that signals full power without shouting about it." },
  { id: "battle", label: "Battle Ready", accent: "#b9ff2e", desc: "Acid green energy across the deck for ranked nights and tournament days." },
] as const;

const SPOTS = [
  { id: "display", label: "Display", x: 50, y: 34, title: "Display", text: "A wide, fast panel framed by slim bezels so the game fills your view." },
  { id: "keyboard", label: "Keyboard", x: 50, y: 66, title: "Keyboard", text: "Full size keys with per key style lighting that follows the active mode." },
  { id: "chassis", label: "Chassis", x: 14, y: 80, title: "Chassis", text: "A rigid, low profile body with a lighting strip along the front edge." },
  { id: "cooling", label: "Cooling", x: 90, y: 68, title: "Cooling", text: "Side and rear vents move air across the hardware to hold performance." },
] as const;

export default function ProductShowcase() {
  const [mode, setMode] = useState<(typeof MODES)[number]>(MODES[1]);
  const [spot, setSpot] = useState<(typeof SPOTS)[number]>(SPOTS[0]);
  return (
    <section id="overview" className="relative bg-ink px-5 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">01 / The machine</p>
          <Headline text="Choose how it looks when it wakes." className="display mt-4 max-w-3xl text-5xl sm:text-7xl" />
        </Reveal>
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-8">
            <motion.div aria-hidden animate={{ backgroundColor: mode.accent }} transition={{ duration: 0.8 }} className="absolute inset-x-[10%] top-[15%] h-[60%] rounded-full opacity-25 blur-3xl" />
            <motion.div key={mode.id} initial={{ opacity: 0.4, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: EASE }} className="relative">
              <LaptopVisual accent={mode.accent} />
            </motion.div>
            {SPOTS.map((s) => (
              <button key={s.id} type="button" onClick={() => setSpot(s)} aria-pressed={spot.id === s.id} aria-label={`Show ${s.label} details`}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className={`ping absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-white transition-colors ${spot.id === s.id ? "border-acid bg-acid text-black" : "border-white/50 bg-black/50"}`}>
                <Plus size={18} className={`transition-transform duration-500 ${spot.id === s.id ? "rotate-45" : ""}`} />
              </button>
            ))}
          </div>
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60">Lighting mode</h3>
            <div className="mt-3 flex border-b border-white/15">
              {MODES.map((m) => (
                <button key={m.id} type="button" aria-pressed={mode.id === m.id} onClick={() => setMode(m)}
                  className={`relative min-h-11 px-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 active:translate-y-px ${mode.id === m.id ? "text-white" : "text-white/50 hover:text-white"}`}>{m.label}{mode.id === m.id && <motion.span layoutId="mode-line" className="absolute inset-x-0 -bottom-px h-0.5 bg-acid" />}</button>
              ))}
            </div>
            <p className="mt-4 min-h-[3.5rem] text-white/70">{mode.desc}</p>
            <div className="mt-8 border-l-2 border-acid pl-5" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={spot.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                  <p className="eyebrow">Hotspot</p>
                  <h3 className="mt-2 text-2xl font-semibold">{spot.title}</h3>
                  <p className="mt-2 text-white/70">{spot.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 text-sm text-white/50">Tap a marker on the laptop to explore. Visual is an original illustration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
