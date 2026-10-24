"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/config";

/** Masked word by word reveal. Text is exposed to assistive tech through aria-label. */
export default function Headline({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.h2 aria-label={text} className={className} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-10%" }} variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-top">
          <motion.span className="inline-block" variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.9, ease: EASE } } }}>{w}</motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
