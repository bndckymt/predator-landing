"use client";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import LaptopVisual from "./LaptopVisual";
import { EASE } from "@/lib/config";

const line = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 1.1, ease: EASE } } };

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const lx = useTransform(sx, [-1, 1], [-16, 16]);
  const ly = useTransform(sy, [-1, 1], [-8, 8]);
  const ry = useTransform(sx, [-1, 1], [-7, 7]);
  const rx = useTransform(sy, [-1, 1], [4, -4]);
  const gx = useTransform(sx, [-1, 1], [30, -30]);
  const bx = useTransform(sx, [-1, 1], [-24, 24]);

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  const fade = (delay: number) => ({ initial: reduce ? false : { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 1, ease: EASE } } as const);

  return (
    <section id="top" onPointerMove={onMove} className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(55%_50%_at_68%_38%,rgba(45,123,255,.3),transparent_72%)]" />
      <motion.div aria-hidden style={{ x: gx }} className="pointer-events-none absolute -right-[4%] top-[6%] -z-10 select-none text-[34vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.1)] lg:text-[26vw]">BEAST</motion.div>
      <motion.div aria-hidden style={{ x: bx }} className="breathe pointer-events-none absolute left-[46%] top-0 -z-10 h-[78%] w-[26%] bg-gradient-to-b from-volt/40 to-transparent [clip-path:polygon(42%_0,58%_0,100%_100%,0_100%)] max-lg:left-[30%] max-lg:w-[48%]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-2 px-5 pb-28 pt-24 lg:grid-cols-12 lg:pt-20">
        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.8, y: 60 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.4, duration: 1.6, ease: EASE }} style={{ perspective: 1200 }} className="relative max-lg:-mx-8 max-lg:mt-2 lg:order-2 lg:col-span-7 lg:-mr-28 lg:scale-[1.12]">
          <motion.div style={{ x: lx, y: ly, rotateX: rx, rotateY: ry }} className="float"><LaptopVisual accent="#2d7bff" className="drop-shadow-[0_40px_70px_rgba(0,0,0,.7)]" /></motion.div>
        </motion.div>
        <div className="relative z-10 lg:order-1 lg:col-span-5">
          <motion.p {...fade(0.1)} className="eyebrow">Predator Helios series</motion.p>
          <motion.h1 aria-label="Unleash the beast." initial={reduce ? "show" : "hidden"} animate="show" variants={{ show: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } } }} className="display mt-5 text-6xl leading-[.88] sm:text-8xl">
            <span aria-hidden className="block overflow-hidden pb-[0.08em]"><motion.span variants={line} className="block">Unleash</motion.span></span>
            <span aria-hidden className="block overflow-hidden pb-[0.08em]"><motion.span variants={line} className="block"><span className="mr-3 align-top font-mono text-xl font-medium tracking-[0.3em] text-white/60 sm:text-3xl">THE</span><span className="text-acid">Beast.</span></motion.span></span>
          </motion.h1>
          <motion.p {...fade(1)} className="mt-6 max-w-md text-lg text-white/70">Engineered for the moments that decide matches. Serious graphics, sustained cooling and a display built to keep pace with your reflexes.</motion.p>
          <motion.div {...fade(1.15)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#performance">Explore Performance</Button>
            <Button href="#overview" variant="ghost">Discover the Machine</Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 mx-auto flex w-full max-w-7xl items-center justify-between px-5 font-mono text-xs uppercase tracking-widest text-white/50">
        <span className="hidden sm:block">Helios / Concept campaign 2026</span>
        <a href="#overview" aria-label="Scroll to overview" className="mx-auto grid size-11 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-acid hover:text-acid sm:mx-0"><ChevronDown className="bob" size={20} /></a>
        <span className="hidden sm:block">01 / 08</span>
      </div>
    </section>
  );
}
