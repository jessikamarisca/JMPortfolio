import Link from "next/link";

export const CONTACT = {
  email: "jessikamarisca@gmail.com",
  linkedin: "https://www.linkedin.com/in/jessikamarisca/",
  instagram: "https://www.instagram.com/jesmaralv/",
  github: "https://github.com/jessikamarisca",
  cv: "/cv/Jessika-Marisca-CV.pdf",
};

export function SiteHeader() {
  return (
    <header className="wrap site-header">
      <Link href="/" className="logo">
        Jessika Marisca
      </Link>
      <nav aria-label="Main" className="nav">
        <Link className="ul tap" href="/#work">Work</Link>
        <Link className="ul tap" href="/#apps">Apps</Link>
        <Link className="ul tap" href="/#about">About</Link>
      </nav>
    </header>
  );
}

export function ContactLinks({ light = true }: { light?: boolean }) {
  const color = light ? "var(--paper)" : "var(--ink)";
  return (
    <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px" }}>
      <a className="ul tap" style={{ color }} href={`mailto:${CONTACT.email}`}>Email</a>
      <a className="ul tap" style={{ color }} href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      {CONTACT.github && (
        <a className="ul tap" style={{ color }} href={CONTACT.github} target="_blank" rel="noreferrer">GitHub</a>
      )}
      <a className="ul tap" style={{ color }} href={CONTACT.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap" style={{ paddingBlock: 32, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, fontSize: 16, fontWeight: 600 }}>
        <ContactLinks />
        <span className="tap">Designed and built by me · 2026</span>
      </div>
    </footer>
  );
}

export function BackButton() {
  return (
    <Link className="btn-back" href="/#work">
      <span className="arr" aria-hidden="true">←</span>Back to all work
    </Link>
  );
}

export function BackLink() {
  return (
    <Link className="ul tap" href="/#work" style={{ alignSelf: "flex-start", fontSize: 18, fontWeight: 700 }}>
      ← Back to all work
    </Link>
  );
}
