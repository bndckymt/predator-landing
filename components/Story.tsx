"use client";
import { useRef } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import LaptopVisual from "./LaptopVisual";

const WORDS = "Every frame is a decision. Every millisecond is a fight. Play like it matters.".split(" ");

function Word({ w, i, p, still }: { w: string; i: number; p: MotionValue<number>; still: boolean }) {
  const start = 0.3 + (i / WORDS.length) * 0.55;
  const opacity = useTransform(p, [start, start + 0.05], [0.3, 1]);
  return <motion.span style={{ opacity: still ? 1 : opacity }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(p, [0, 0.35], [0.6, 1]);
  const y = useTransform(p, [0, 0.35], [80, 0]);
  const tilt = useTransform(p, [0, 0.35], [28, 0]);
  const glow = useTransform(p, [0, 0.6], [0, 1]);
  return (
    <section ref={ref} id="story" aria-label="Brand story" className="relative h-[280vh] bg-ink">
      <div className="sticky top-0 grid h-screen place-items-center overflow-hidden px-5">
        <p className="eyebrow absolute left-5 top-24">03 / The promise</p>
        <motion.div aria-hidden style={{ opacity: glow }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(45,123,255,.3),transparent_65%)]" />
        <div className="relative flex flex-col items-center gap-8">
          <motion.div style={reduce ? undefined : { scale, y, rotateX: tilt, transformPerspective: 1200 }} className="w-[min(80vw,520px)]"><LaptopVisual accent="#2d7bff" /></motion.div>
          <p className="max-w-3xl text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {WORDS.map((w, i) => <Word key={i} w={w} i={i} p={p} still={reduce} />)}
          </p>
        </div>
      </div>
    </section>
  );
}
