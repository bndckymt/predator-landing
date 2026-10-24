"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Headline from "./Headline";
import Reveal from "./Reveal";

const CORE = [["Processor", "Placeholder: replace with verified CPU model"], ["Graphics", "Placeholder: replace with verified GPU model"], ["Display", "Placeholder: size, resolution, refresh rate"], ["Memory", "Placeholder: capacity and type"], ["Storage", "Placeholder: capacity and type"], ["Cooling", "Placeholder: cooling system details"], ["Operating system", "Placeholder: edition"]];
const MORE = [["Ports", "Placeholder: list of ports"], ["Connectivity", "Placeholder: wireless standards"], ["Battery", "Placeholder: capacity"], ["Weight and size", "Placeholder: dimensions"], ["Keyboard", "Placeholder: layout and lighting"], ["Audio", "Placeholder: speakers and microphones"]];

export default function Specifications() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const btn = trigger.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") { e.preventDefault(); closeBtn.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; btn?.focus(); };
  }, [open]);

  return (
    <section id="specs" className="bg-ink px-5 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow">06 / Specifications</p>
          <Headline text="The numbers, when you are ready." className="display mt-4 text-5xl sm:text-6xl" />
          <p className="mt-4 text-white/60">Every value below is a labeled placeholder. Swap them for verified data for your exact model.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {CORE.map(([a, b]) => (
              <div key={a} className="grid gap-1 px-6 py-5 sm:grid-cols-3"><dt className="font-semibold">{a}</dt><dd className="text-white/70 sm:col-span-2">{b}</dd></div>
            ))}
          </dl>
          <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className="mt-8 min-h-12 rounded-sm border border-white/30 px-7 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:border-acid hover:text-acid active:translate-y-px active:scale-[0.98]">View full specification</button>
        </Reveal>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-5" onClick={() => setOpen(false)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="spec-title" initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-white/15 bg-coal p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 id="spec-title" className="text-2xl font-semibold">Full specification</h3>
                <button ref={closeBtn} type="button" onClick={() => setOpen(false)} aria-label="Close specification" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20"><X size={20} /></button>
              </div>
              <dl className="mt-6 divide-y divide-white/10">
                {[...CORE, ...MORE].map(([a, b]) => (
                  <div key={a} className="grid gap-1 py-4 sm:grid-cols-3"><dt className="font-semibold">{a}</dt><dd className="text-white/70 sm:col-span-2">{b}</dd></div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
