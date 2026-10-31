"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";

export type WorkRow = {
  n: string;
  title: string;
  line: string;
  meta: string;
  href: string;
  bg: string;
  preview: ReactNode;
};

export function WorkList({ rows }: { rows: WorkRow[] }) {
  const [hov, setHov] = useState(-1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const pending = useRef({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    pending.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      setPos(pending.current);
    });
  }

  const vis = hov >= 0;
  return (
    <div className="list" onMouseMove={onMove} onMouseLeave={() => setHov(-1)} style={{ position: "relative", display: "flex", flexDirection: "column" }}>
      {rows.map((k, i) => (
        <Link key={k.title} className="row" href={k.href} onMouseEnter={() => setHov(i)} onFocus={() => setHov(-1)}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 28px", padding: "26px 0", borderBottom: "1px solid rgba(14,42,71,0.25)", textDecoration: "none" }}>
          <span style={{ fontSize: 15, fontWeight: 700, width: 36 }}>{k.n}</span>
          <span className="ttl" style={{ flex: "999 1 420px", minWidth: 0, fontSize: "clamp(32px, 4.6vw, 68px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1 }}>
            <span className="rm">{k.title}</span>
            <span className="it" aria-hidden="true">{k.title}</span>
          </span>
          <span style={{ flex: "1 1 240px", fontSize: 16, lineHeight: 1.4 }}>
            {k.line}
            <br />
            <span style={{ opacity: 0.85 }}>{k.meta}</span>
          </span>
          <div className="thumb" aria-hidden="true" style={{ flex: "1 1 100%", height: 280, borderRadius: 4, overflow: "hidden", background: k.bg }}>
            {k.preview}
          </div>
        </Link>
      ))}
      <div className="preview" aria-hidden="true" style={{
        position: "absolute", left: 0, top: 0, width: 440, height: 300, borderRadius: 4, overflow: "hidden", pointerEvents: "none", zIndex: 3,
        transform: `translate(${pos.x + 28}px, ${pos.y - 150}px)`,
        clipPath: vis ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
        transition: "clip-path 500ms cubic-bezier(.7,0,.15,1), transform 450ms cubic-bezier(.2,.8,.2,1)",
      }}>
        {vis && rows[hov].preview}
      </div>
    </div>
  );
}

function naples() {
  try {
    return new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/Rome", hour: "2-digit", minute: "2-digit" });
  } catch {
    return "--:--";
  }
}

function subscribeClock(onChange: () => void) {
  const id = setInterval(onChange, 30000);
  return () => clearInterval(id);
}

export function NaplesClock() {
  const time = useSyncExternalStore(subscribeClock, naples, () => null);
  return <span suppressHydrationWarning>{time ?? " "}</span>;
}

export function PreviewImage({ src, alt = "", style, className, width, height }: { src: string; alt?: string; style?: React.CSSProperties; className?: string; width: number; height: number }) {
  return <Image src={src} alt={alt} width={width} height={height} sizes="200px" className={className} style={style} />;
}
