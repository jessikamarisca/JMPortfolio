import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="wrap" style={{ minHeight: "calc(100svh - 220px)", paddingBlock: "clamp(48px, 8vw, 120px)", display: "flex", flexDirection: "column", gap: 28 }}>
        <span style={{ fontSize: 16, fontWeight: 700 }}>404</span>
        <h1 className="h-display" style={{ fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.05em" }}>
          This page <span className="serif">wandered off.</span>
        </h1>
        <Link href="/" className="btn-back"><span className="arr" aria-hidden="true">←</span>Back home</Link>
      </main>
      <SiteFooter />
    </>
  );
}
