"use client";
import { useState } from "react";
import Headline from "./Headline";
import Reveal from "./Reveal";

const RATES = [60, 144, 240] as const;
const SPECS = [["Panel", "Placeholder: panel type"], ["Refresh rate", "Placeholder: verified rate"], ["Resolution", "Placeholder: verified resolution"], ["Response", "Placeholder: verified time"]];

export default function DisplaySection() {
  const [rate, setRate] = useState<(typeof RATES)[number]>(144);
  const steps = Math.round(rate / 6);
  return (
    <section id="display" className="relative overflow-hidden bg-coal px-5 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">04 / Display</p>
        <Headline text="See every frame." className="display mt-5 text-6xl sm:text-8xl lg:text-9xl" />
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative h-44 overflow-hidden border border-white/20 bg-black sm:h-64" role="img" aria-label="Animated ball sweeping across a screen to illustrate motion smoothness">
              {[18, 38, 58, 78].map((t) => <span key={t} aria-hidden className="absolute inset-x-0 h-px bg-white/10" style={{ top: `${t}%` }} />)}
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <span key={`${rate}-${n}`} aria-hidden className="ball bg-acid" style={{ opacity: 1 - n * 0.16, animationTimingFunction: `steps(${steps}, end)`, animationDelay: `${-n * 0.025}s` }} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div role="group" aria-label="Illustrative refresh rate" className="flex border border-white/20">
                {RATES.map((r) => (
                  <button key={r} type="button" aria-pressed={rate === r} onClick={() => setRate(r)} className={`min-h-11 px-5 font-mono text-sm transition-colors duration-300 active:scale-95 ${rate === r ? "bg-acid text-black" : "hover:bg-white/10"}`}>{r} Hz</button>
                ))}
              </div>
              <p className="font-mono text-xs text-white/50">Illustrative demo, not a model spec</p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md text-lg text-white/70">Speed, clarity and colour that pull you into the game. Watch how the same motion steps at different refresh rates, then add your verified panel details below.</p>
            <dl className="mt-8 border-t border-white/15">
              {SPECS.map(([a, b]) => (
                <div key={a} className="flex justify-between gap-4 border-b border-white/15 py-4"><dt className="font-mono text-xs uppercase tracking-widest text-white/50">{a}</dt><dd className="text-right text-sm text-white/80">{b}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
