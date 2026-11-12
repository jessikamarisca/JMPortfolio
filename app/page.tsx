import Image from "next/image";
import Link from "next/link";
import { NaplesClock, WorkList, type WorkRow } from "@/components/home-client";
import { AvatarFollow } from "@/components/avatar-follow";
import { PhoneVideo } from "@/components/phone-video";
import { CONTACT, ContactLinks, SiteHeader } from "@/components/site";

const BAND = ["Alicorp", "IDB", "Falabella", "Fahrenheit DDB", "Crehana", "Elisava", "Apple Developer Academy"];
const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const PATH = [
  { where: "Apple Developer Academy", role: "Design and iOS development", when: "2026–27" },
  { where: "Inter-American Development Bank", role: "Senior Product Designer", when: "2026–" },
  { where: "Alicorp", role: "Product Designer, AI & experimentation", when: "2023–26" },
  { where: "Elisava, Barcelona", role: "Master’s in UX Design", when: "2022–23" },
  { where: "Crehana", role: "UX Design Mentor", when: "2020–23" },
  { where: "Fahrenheit DDB · Falabella", role: "Art direction, graphic design", when: "2014–20" },
];
const PETALS = Array.from({ length: 10 }, (_, k) => k * 36);

const ROWS: WorkRow[] = [
  {
    n: "02", title: "Betty", href: "/work/betty", bg: "#2D2AD6",
    line: "Alicorp’s private AI, redesigned so researchers could trust it.",
    meta: "Alicorp · AI product design lead · 2025",
    preview: (
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#2D2AD6", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 22, top: 20, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontWeight: 900, fontSize: 40, letterSpacing: "-0.05em", lineHeight: 0.9 }}>Betty <span className="serif">2.0</span></span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Private AI · Alicorp</span>
        </div>
        <span style={{ position: "absolute", left: 22, bottom: 20, padding: "6px 10px", borderRadius: 3, background: "var(--paper)", fontSize: 12, fontWeight: 800 }}>Answers you can verify</span>
        <Image className="fl1" src="/images/betty/chat.jpg" alt="" width={1512} height={983} sizes="330px" style={{ position: "absolute", left: 150, top: 84, width: 330, height: "auto", borderRadius: 8, boxShadow: "0 20px 40px rgba(0,0,40,.4)" }} />
      </div>
    ),
  },
  {
    n: "03", title: "Insuma", href: "/work/insuma", bg: "#E8481E",
    line: "41 experiments to get customers buying without a sales rep.",
    meta: "Alicorp · Growth & experimentation · 2025",
    preview: (
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#E8481E", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 22, top: 20, color: "#14100D", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontWeight: 900, fontSize: 64, letterSpacing: "-0.06em", lineHeight: 0.85 }}>41</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>experiments in 2025</span>
        </div>
        <span style={{ position: "absolute", left: 22, bottom: 20, padding: "6px 10px", borderRadius: 3, background: "#14100D", color: "var(--paper)", fontSize: 12, fontWeight: 800 }}>10,000 customers buying without a rep</span>
        <Image className="fl2" src="/images/insuma/floating-banner.jpg" alt="" width={1080} height={1920} sizes="140px" style={{ position: "absolute", right: 34, top: 30, width: 140, height: "auto", borderRadius: 22, border: "5px solid #121212", boxShadow: "0 20px 40px rgba(20,16,13,.35)" }} />
      </div>
    ),
  },
  {
    n: "04", title: "Sphere", href: "/work/sphere", bg: "#000099",
    line: "From master’s project to Zama Health’s product, later acquired by Volt Athletics.",
    meta: "Elisava · Wellbeing · 2023",
    preview: (
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#000099", color: "#FFFFFF", overflow: "hidden" }}>
        <div className="sorb" style={{ position: "absolute", left: -70, bottom: -150, width: 320, height: 320, borderRadius: "50%", background: "conic-gradient(from 200deg, #F32CE6, #FF4B00, #FFC500, #00DEB5, #F32CE6)", filter: "blur(4px)" }} />
        <div style={{ position: "absolute", left: 22, top: 20, display: "flex", flexDirection: "column", gap: 4 }}>
          <span className="serif" style={{ fontSize: 44, lineHeight: 0.9 }}>Sphere</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Mood tracker · iOS</span>
        </div>
        <span style={{ position: "absolute", left: 22, bottom: 20, padding: "6px 10px", borderRadius: 3, background: "#FFC500", color: "var(--ink)", fontSize: 12, fontWeight: 800 }}>Acquired by Zama Health</span>
        <Image className="fl1" src="/images/sphere/activities.jpg" alt="" width={418} height={922} sizes="138px" style={{ position: "absolute", right: 148, top: 36, width: 138, height: "auto", borderRadius: 22, border: "4px solid #0B0B2E", boxShadow: "0 20px 40px rgba(0,0,40,.5)" }} />
        <Image className="fl2" src="/images/sphere/insights.jpg" alt="" width={316} height={738} sizes="132px" style={{ position: "absolute", right: 20, top: 74, width: 132, height: "auto", borderRadius: 22, border: "4px solid #F2F2F2", boxShadow: "0 20px 40px rgba(0,0,40,.5)" }} />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="wrap" style={{ paddingBlock: "clamp(40px, 7vw, 96px) clamp(48px, 6vw, 80px)", display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ position: "relative" }}>
          <div className="hero-avatar" style={{ position: "absolute", right: 0, bottom: -48 }}>
            <AvatarFollow size="clamp(220px, 21vw, 320px)" />
          </div>
          <h1 className="h-display" style={{ fontSize: "clamp(36px, 8.6vw, 136px)" }}>
            <span className="line"><span>I design products</span></span>
            <span className="line l2">
              <span>
                <Image className="hero-pill" src="/images/home/me-pill.jpg" alt="Jessika smiling" width={580} height={302} priority sizes="220px" style={{ height: "0.78em", width: "1.5em", objectFit: "cover", borderRadius: 999 }} />
                and <span className="serif mark">build</span> them
              </span>
            </span>
            <span className="line l3">
              <span>
                in SwiftUI
                <svg className="flower" viewBox="0 0 100 100" aria-hidden="true" style={{ width: "0.72em", height: "0.72em", display: "block" }}>
                  <g fill="var(--accent)">
                    {PETALS.map((r) => <ellipse key={r} cx="50" cy="22" rx="9" ry="22" transform={`rotate(${r} 50 50)`} />)}
                    <circle cx="50" cy="50" r="12" />
                  </g>
                </svg>
              </span>
            </span>
          </h1>
          </div>
          <div className="fade-in" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 64px", paddingTop: 24, borderTop: "2px solid var(--ink)" }}>
            <p style={{ flex: "1 1 420px", maxWidth: "52ch", fontSize: "clamp(18px, 1.4vw, 20px)", lineHeight: 1.5 }}>
              Peruvian product designer. I started in graphic design for fashion and e-commerce, did my UX master’s at Elisava in Barcelona, and I’m now at the Apple Developer Academy in Naples, learning to build everything I design.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 16 }}>
              <span style={{ fontWeight: 700 }}>Now: App 01 / 09 · Memori</span>
              <span>Open to roles in Europe, the US and remote</span>
              <Link className="ul tap" href="#work" style={{ alignSelf: "flex-start", fontWeight: 700 }}>See selected work ↓</Link>
            </div>
          </div>
        </section>

        <div aria-hidden="true" style={{ background: "var(--accent)", overflow: "hidden", padding: "12px 0" }}>
          <div className="band" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1, whiteSpace: "nowrap" }}>
            {[...BAND, ...BAND].map((b, i) => (
              <span key={i}><span style={{ padding: "0 18px" }}>{b}</span><span style={{ fontFamily: "var(--sans)", fontStyle: "normal", fontWeight: 800 }}>—</span></span>
            ))}
          </div>
        </div>

        <section id="work" className="wrap" style={{ paddingBlock: "clamp(64px, 8vw, 120px)", display: "flex", flexDirection: "column", gap: 32, scrollMarginTop: 16 }}>
          <div className="section-head reveal">
            <h2 className="h-section">Selected work</h2>
            <span className="serif" style={{ fontSize: 28 }}>(04)</span>
          </div>

          <Link className="feature reveal" href="/work/memori" style={{ background: "var(--lilac)" }}>
            <div style={{ flex: "1 1 460px", minWidth: 0, padding: "clamp(24px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 40 }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>01 — iOS app · SwiftUI · Apple Developer Academy · 2026</span>
              <span className="big serif" style={{ fontSize: "clamp(72px, 11vw, 176px)", lineHeight: 0.85, letterSpacing: "-0.03em" }}>Memori</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 600, lineHeight: 1.25, maxWidth: "30ch" }}>A keepsake box, not a scrapbook. A native journal for a day’s photos, lines and songs.</span>
                <span style={{ fontSize: 16 }}>60 surveyed · 5 interviews · 4 usability tests</span>
              </span>
            </div>
            <div className="fimg" style={{ flex: "1 1 360px", minWidth: 0, minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
              <PhoneVideo src="/video/memori-capture.mp4" poster="/video/memori-capture.jpg" label="Memori running on iPhone: creating a chapter called Trip to Napoli and picking photos" />
            </div>
          </Link>

          <div className="reveal">
            <WorkList rows={ROWS} />
          </div>
        </section>

        <section id="apps" className="marq" aria-labelledby="apps-h" style={{ paddingBottom: "clamp(64px, 8vw, 120px)", display: "flex", flexDirection: "column", gap: 28, scrollMarginTop: 16 }}>
          <div className="wrap reveal">
            <div className="section-head">
              <h2 id="apps-h" className="h-section">One app <span className="serif">a month</span></h2>
              <span style={{ fontSize: 16 }}>Oct 2026 – Jun 2027 · Apple Developer Academy</span>
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="track">
              {[...MONTHS, ...MONTHS].map((m, i) => {
                const k = i % MONTHS.length;
                const first = k === 0;
                return (
                  <div key={i} className="app-tile" aria-hidden={i >= MONTHS.length} style={{ background: first ? "var(--lilac)" : k % 2 ? "var(--paper-2)" : "#E4D7C5" }}>
                    {first ? (
                      <Image src="/images/memori/icon.png" alt="Memori app icon" width={900} height={900} sizes="72px" style={{ width: 72, height: 72, borderRadius: 16 }} />
                    ) : (
                      <span aria-hidden="true" style={{ fontWeight: 800, fontSize: 72, letterSpacing: "-0.06em", lineHeight: 0.8, opacity: 0.6 }}>{String(k + 1).padStart(2, "0")}</span>
                    )}
                    <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <span className="serif" style={{ fontSize: 34, lineHeight: 1 }}>{m}</span>
                      <span style={{ fontSize: 15, fontWeight: 700 }}>{first ? "Memori" : "Coming soon"}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="wrap" style={{ paddingBottom: "clamp(64px, 8vw, 120px)", display: "flex", flexDirection: "column", gap: 28, scrollMarginTop: 16 }}>
          <div className="section-head reveal">
            <h2 className="h-section">About <span className="serif">& side quests</span></h2>
          </div>
          <div className="bento">
            <figure className="zoom a-photo">
              <Image src="/images/home/me-park.jpg" alt="Jessika smiling, sitting in a park at golden hour" width={853} height={1280} sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 330px" style={{ objectPosition: "50% 22%" }} />
              <figcaption>Hi, I’m Jessika</figcaption>
            </figure>
            <div className="a-bio" style={{ padding: "clamp(22px, 2.6vw, 36px)", background: "var(--ink)", color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18 }}>
              <p style={{ fontSize: "clamp(18px, 1.5vw, 22px)", lineHeight: 1.32, letterSpacing: "-0.015em" }}>
                I make products people actually use: a sales app a nationwide team adopted, a wellbeing app that got acquired, a design system for the Inter-American Development Bank. Fashion taught me to make things look right. B2B taught me to make them work. Now I write the SwiftUI too, <span className="serif">so nothing gets lost between design and build.</span>
              </p>
              <a className="ul tap" href={CONTACT.cv} download style={{ alignSelf: "flex-start", color: "var(--accent)", fontSize: 17, fontWeight: 700 }}>Download CV →</a>
            </div>
            <div className="a-clock" style={{ padding: 22, background: "var(--accent)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>Naples, right now</span>
              <span style={{ fontWeight: 900, fontSize: "clamp(56px, 5.4vw, 88px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}><NaplesClock /></span>
            </div>
            <div className="a-path" style={{ padding: "clamp(20px, 2.4vw, 32px)", background: "var(--paper-2)", display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="serif" style={{ fontSize: 30, lineHeight: 1, paddingBottom: 10 }}>The path so far</span>
              {PATH.map((p) => (
                <div key={p.where} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "10px 0", borderTop: "1px solid rgba(14,42,71,0.18)" }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 16 }}>{p.where}</b><span style={{ fontSize: 14 }}>{p.role}</span></span>
                  <span style={{ whiteSpace: "nowrap", fontSize: 14, fontWeight: 700 }}>{p.when}</span>
                </div>
              ))}
            </div>
            <figure className="zoom a-paint1" style={{ background: "#FFFFFF" }}>
              <Image src="/images/home/painting-portrait.jpg" alt="Digital portrait of a woman with wavy brown hair and amber eyes" width={999} height={1000} sizes="330px" style={{ objectPosition: "50% 30%" }} />
              <figcaption>Side quest · painting</figcaption>
            </figure>
            <figure className="zoom a-paint2">
              <Image src="/images/home/painting-bloom.jpg" alt="Digital painting: a woman with violet hair among white flowers" width={1000} height={952} sizes="330px" style={{ objectPosition: "50% 35%" }} />
              <figcaption>We’re blooming · digital</figcaption>
            </figure>
            <div className="a-quest" style={{ padding: 22, background: "var(--lilac)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 12 }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>Off the clock</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 17, fontWeight: 600 }}>
                <span>Running · ~30 km a week</span>
                <span>Cycling · Pilates</span>
                <span>Reading · <i className="serif" style={{ fontWeight: 500 }}>Creative Selection</i>, Ken Kocienda</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
          <div className="wrap" style={{ paddingBlock: "clamp(48px, 6vw, 88px) 32px", display: "flex", flexDirection: "column", gap: 36 }}>
            <a className="ul reveal" href={`mailto:${CONTACT.email}`} style={{ alignSelf: "flex-start", color: "var(--paper)", fontWeight: 800, fontSize: "clamp(40px, 4.6vw, 68px)", lineHeight: 0.95, letterSpacing: "-0.045em" }}>
              Let’s <span className="serif" style={{ color: "var(--accent)" }}>talk.</span>
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, fontSize: 16, fontWeight: 600, borderTop: "1px solid rgba(246,238,227,0.3)", paddingTop: 20 }}>
              <ContactLinks />
              <span className="tap">Designed and built by me · 2026</span>
            </div>
          </div>
      </footer>
    </>
  );
}
