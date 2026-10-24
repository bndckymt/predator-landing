"use client";
import Button from "./Button";
import LaptopVisual from "./LaptopVisual";
import Headline from "./Headline";
import Reveal from "./Reveal";
import { DISCOVER_URL } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink px-5 py-28 text-center lg:py-44">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_70%,rgba(45,123,255,.28),transparent_60%)]" />
      <Reveal>
        <Headline text="Your next level starts here." className="display mx-auto max-w-4xl text-6xl sm:text-8xl" />
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">The match will not wait. Neither should you.</p>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto my-12 max-w-3xl"><LaptopVisual accent="#b9ff2e" className="float" /></Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={DISCOVER_URL} external>Discover Predator</Button>
          <Button href="#top" variant="ghost">Back to Top</Button>
        </div>
        <p className="mt-4 text-xs text-white/40">The Discover link is a placeholder destination.</p>
      </Reveal>
    </section>
  );
}
