import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BackButton, BackLink, SiteFooter, SiteHeader } from "./site";

export type Fact = { term: string; value: ReactNode };
export type TocItem = { id: string; label: string };

export function CaseLayout({ meta, title, lede, hero, facts, toc, next, children }: {
  meta: string;
  title: ReactNode[];
  lede: ReactNode;
  hero: ReactNode;
  facts: Fact[];
  toc: TocItem[];
  next: { href: string; label: string; title: ReactNode; style: CSSProperties };
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap" style={{ paddingBlock: "clamp(32px, 5vw, 72px) 40px", display: "flex", flexDirection: "column", gap: 32 }}>
          <BackButton />
          <span className="fade-in" style={{ fontSize: 16, fontWeight: 700 }}>{meta}</span>
          <h1 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.05em" }}>
            {title.map((line, i) => (
              <span key={i} className={`line txt${i ? ` l${i + 1}` : ""}`}><span>{line}</span></span>
            ))}
          </h1>
          <p className="lede fade-in">{lede}</p>
        </section>

        <div className="wrap">
          {hero}
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.term} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <dt>{f.term}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="wrap case-body">
          <nav aria-label="On this page" className="toc">
            {toc.map((t, i) => (
              <a key={t.id} className="ul" href={`#${t.id}`} style={i === 0 ? { fontWeight: 800 } : undefined}>
                {String(i + 1).padStart(2, "0")} {t.label}
              </a>
            ))}
          </nav>
          <div className="case-main">
            {children}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <BackLink />
              <Link className="next" href={next.href} style={next.style}>
                <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{next.label}</span>
                  <span style={{ fontWeight: 800, fontSize: "clamp(32px, 3.6vw, 52px)", letterSpacing: "-0.045em", lineHeight: 1 }}>{next.title}</span>
                </span>
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function Summary({ items, accent }: { items: [string, ReactNode][]; accent: string }) {
  return (
    <section id="summary" className="reveal">
      <h2 className="kicker" style={{ fontSize: 16 }}>01 — In 30 seconds</h2>
      <div className="summary">
        {items.map(([label, text], i) => (
          <div key={label} style={i === 2 ? { borderTopColor: accent } : undefined}>
            <span className="label">{label}</span>
            <span className="text">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseH2({ n, children, italic }: { n: string; children?: ReactNode; italic: string }) {
  return (
    <h2 className="h-case">
      {n} {children}
      {children ? " " : ""}
      <span className="serif">{italic}</span>
    </h2>
  );
}
