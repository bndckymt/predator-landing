"use client";
import Image from "next/image";
import { useId, useState } from "react";
import { PRODUCT_IMAGE } from "@/lib/config";

export default function LaptopVisual({ accent = "#2d7bff", className = "" }: { accent?: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const id = useId().replace(/:/g, "");
  const [s, g, k, c, body, mk, fg] = ["s", "g", "k", "c", "body", "mk", "fg"].map((x) => `${id}${x}`);

  if (PRODUCT_IMAGE && !failed) {
    return (
      <div className={`relative aspect-[5/3] w-full ${className}`}>
        <Image src={PRODUCT_IMAGE} alt="Predator Helios gaming laptop" fill priority sizes="(max-width: 1024px) 90vw, 700px" className="object-contain" onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <svg viewBox="0 0 800 540" className={`h-auto w-full ${className}`} role="img" aria-label="Illustration of a gaming laptop">
      <defs>
        <linearGradient id={s} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0a1220" /><stop offset=".55" stopColor="#04060b" /><stop offset="1" stopColor={accent} stopOpacity=".45" /></linearGradient>
        <radialGradient id={g}><stop offset="0" stopColor={accent} stopOpacity=".55" /><stop offset="1" stopColor={accent} stopOpacity="0" /></radialGradient>
        <linearGradient id={fg} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <mask id={mk}><rect x="0" y="440" width="800" height="100" fill={`url(#${fg})`} /></mask>
        <pattern id={k} width="22" height="13" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="18" height="9" rx="2" fill="#1c2430" /></pattern>
        <clipPath id={c}><polygon points="110,338 690,338 766,428 34,428" /></clipPath>
      </defs>
      <ellipse cx="400" cy="446" rx="380" ry="30" fill={`url(#${g})`} />
      <use href={`#${body}`} transform="translate(0 880) scale(1 -1)" mask={`url(#${mk})`} opacity=".16" />
      <g id={body}>
        <rect x="138" y="26" width="524" height="316" rx="14" fill="#0b1016" stroke={accent} strokeOpacity=".5" strokeWidth="2" />
        <rect x="154" y="42" width="492" height="284" rx="6" fill={`url(#${s})`} />
        <circle cx="470" cy="190" r="110" fill={`url(#${g})`} />
        <g stroke={accent} fill="none" strokeLinecap="round">
          <path d="M154 230 H646" strokeOpacity=".6" />
          {[-300, -190, -90, 0, 90, 190, 300].map((dx) => <path key={dx} d={`M${400 + dx * 0.25} 230 L${400 + dx * 1.6} 326`} strokeOpacity=".28" />)}
          <path d="M190 276 L420 124" strokeWidth="3" /><path d="M230 296 L520 104" strokeWidth="2" strokeOpacity=".6" /><path d="M300 300 L610 146" strokeWidth="1.5" strokeOpacity=".5" />
        </g>
        <rect x="190" y="72" width="120" height="8" rx="2" fill="#fff" opacity=".85" /><rect x="190" y="90" width="70" height="6" rx="2" fill="#fff" opacity=".35" />
        <polygon points="154,42 340,42 226,326 154,326" fill="#fff" opacity=".05" />
        <polygon points="110,338 690,338 766,428 34,428" fill="#10161e" stroke="#2b3542" strokeWidth="2" />
        <g clipPath={`url(#${c})`}>
          <rect x="30" y="338" width="740" height="62" fill={`url(#${k})`} />
          <rect x="30" y="338" width="740" height="62" fill={accent} opacity=".2" />
        </g>
        <rect x="350" y="404" width="100" height="16" rx="3" fill="#0b0f15" stroke="#2b3542" />
        <g stroke="#2b3542" strokeWidth="3" strokeLinecap="round"><path d="M706 352 L736 396" /><path d="M720 350 L750 394" /><path d="M94 352 L64 396" /><path d="M80 350 L50 394" /></g>
        <rect x="300" y="336" width="200" height="6" rx="3" fill="#080b10" />
        <rect x="34" y="428" width="732" height="12" rx="5" fill="#080b10" stroke="#2b3542" />
        <rect x="300" y="432" width="200" height="3" rx="1.5" fill={accent} />
      </g>
    </svg>
  );
}
