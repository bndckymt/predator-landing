"use client";
import { motion } from "framer-motion";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; external?: boolean; small?: boolean; className?: string };

export default function Button({ href, children, variant = "primary", external, small, className = "" }: Props) {
  const size = small ? "min-h-10 px-5 text-xs" : "min-h-12 px-6 text-sm";
  const look = variant === "primary" ? "bg-acid text-black" : "border border-white/30 text-white hover:border-white";
  const label = variant === "primary" ? "" : "group-hover:text-black group-focus-visible:text-black";
  return (
    <motion.a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} whileTap={{ scale: 0.96, y: 1 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-sm font-semibold uppercase tracking-[0.12em] ${size} ${look} ${className}`}>
      <span aria-hidden className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0 group-focus-visible:translate-x-0" />
      <span className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-300 ${label}`}>{children}</span>
    </motion.a>
  );
}
