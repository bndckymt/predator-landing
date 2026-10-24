export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Predator concept, back to top" className={`text-lg font-bold tracking-[0.3em] ${className}`}>
      PRED<span className="text-acid">A</span>TOR
    </a>
  );
}
