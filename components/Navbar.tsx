"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Wordmark from "./Wordmark";

const LINKS = [["Overview", "#overview"], ["Performance", "#performance"], ["Display", "#display"], ["Cooling", "#cooling"], ["Specifications", "#specs"]] as const;

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink/90" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Wordmark />
        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="group relative py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
                {label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button href="#performance" small className="hidden sm:inline-flex">Explore the Beast</Button>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="px-5 pb-6 lg:hidden">
            <ul>
              {LINKS.map(([label, href]) => (
                <li key={href}><a href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-2xl font-semibold">{label}</a></li>
              ))}
            </ul>
            <Button href="#performance" className="mt-6 w-full">Explore the Beast</Button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-acid" />
    </header>
  );
}
