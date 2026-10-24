import { ArrowUp, Instagram, Twitter, Youtube } from "lucide-react";
import Wordmark from "./Wordmark";
import { DISCOVER_URL } from "@/lib/config";

const LINKS = [["Overview", "#overview"], ["Performance", "#performance"], ["Display", "#display"], ["Cooling", "#cooling"], ["Specifications", "#specs"]];
const SOCIAL = [["Instagram placeholder", Instagram], ["YouTube placeholder", Youtube], ["X placeholder", Twitter]] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div><Wordmark /><p className="mt-3 max-w-xs text-sm text-white/50">A fictional promotional concept. Not affiliated with or endorsed by Acer.</p></div>
        <nav aria-label="Footer"><ul className="grid gap-2 text-sm text-white/70">{LINKS.map(([l, h]) => <li key={h}><a href={h} className="hover:text-white">{l}</a></li>)}</ul></nav>
        <ul className="flex gap-3">
          {SOCIAL.map(([label, Icon]) => (
            <li key={label}><a href={DISCOVER_URL} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white"><Icon size={18} /></a></li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-sm text-white/50">
        <p>© 2026 Predator concept page. All rights reserved by their respective owners.</p>
        <a href="#top" aria-label="Return to top" className="grid size-11 place-items-center rounded-full border border-white/20 transition-transform hover:-translate-y-1 hover:text-white"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
