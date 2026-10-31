import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { CaseLayout, Summary } from "@/components/case";
import { Labeled, Phone } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Insuma, growth and experimentation",
  description: "41 experiments on Alicorp’s B2B e-commerce to get small businesses ordering without a sales rep: hypotheses, variants in Insider, and what the results taught us.",
};

const ORANGE = "#E8481E";
const PEACH = "#FBE1D3";

function Metric({ value, label, dark, accent }: { value: string; label: string; dark?: boolean; accent?: boolean }) {
  return (
    <div className="card" style={{ padding: 20, gap: 8, background: accent ? ORANGE : dark ? "var(--ink)" : "var(--paper-2)", color: accent ? "#14100D" : dark ? "var(--paper)" : undefined }}>
      <span className="num" style={{ fontSize: "clamp(32px, 3.4vw, 48px)", letterSpacing: "-0.05em", lineHeight: 0.9 }}>{value}</span>
      <span style={{ fontSize: 15, lineHeight: 1.4 }}>{label}</span>
    </div>
  );
}

function Experiment({ id, kicker, method, title, italic, challenge, hypothesis, metrics, lesson, visual, reverse }: {
  id: string; kicker: string; method: string; title: string; italic: string;
  challenge: string; hypothesis: string; metrics: ReactNode; lesson: string; visual: ReactNode; reverse?: boolean;
}) {
  return (
    <section id={id} className="reveal" style={{ display: "flex", flexDirection: "row", flexWrap: reverse ? "wrap-reverse" : "wrap", gap: 40, alignItems: "center" }}>
      {reverse && visual}
      <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ fontSize: 15, fontWeight: 800 }}>{kicker}</span>
        <span className="method">{method}</span>
        <h2 className="h-case" style={{ border: 0, padding: 0 }}>{title} <span className="serif">{italic}</span></h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 17, lineHeight: 1.5 }}>
          <p><b>Challenge.</b> {challenge}</p>
          <p><b>Hypothesis.</b> {hypothesis}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }}>{metrics}</div>
        <p className="pull">{lesson}</p>
      </div>
      {!reverse && visual}
    </section>
  );
}

const stage = { flex: "1.2 1 340px", minWidth: 0, padding: "40px 24px 48px", borderRadius: 6, background: PEACH, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28 } as const;

type Status = "ok" | "wip";
const ROADMAP: { name: string; note?: string; bars: [number, number][]; color: string; data: Status }[] = [
  { name: "Personalised home by business type", note: "carried from Nov", bars: [[2, 7]], color: "#2F5F85", data: "wip" },
  { name: "Product page benefits banner", note: "carried from Nov", bars: [[4, 6]], color: "#0E2A47", data: "ok" },
  { name: "Coachmark, re-measured", bars: [[2, 4]], color: "#0E2A47", data: "ok" },
  { name: "“Only on Insuma” promo carousel", bars: [[2, 4]], color: "#0E2A47", data: "ok" },
  { name: "Holiday recipes: bakery home iteration", bars: [[3, 6]], color: "#0E2A47", data: "ok" },
  { name: "Digital promos: floating banner, side menu, countdowns", note: "always on", bars: [[2, 7]], color: "#1F8A4C", data: "ok" },
  { name: "Promo strip for provinces", note: "3 weekly campaigns", bars: [[3, 4], [4, 5], [5, 6]], color: ORANGE, data: "ok" },
  { name: "Web push", bars: [[3, 5]], color: "#C42A16", data: "ok" },
  { name: "Checkout ribbon for a payment partner", bars: [[3, 7]], color: "#0E2A47", data: "ok" },
];

const pill = (ok: boolean) => ({ padding: "3px 7px", borderRadius: 3, background: ok ? "#DCE9DA" : "var(--paper-2)", color: ok ? "#23452A" : "var(--ink)", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap" }) as const;

export default function InsumaCase() {
  return (
    <CaseLayout
      meta="03 — Insuma · Growth & experimentation · Alicorp · 2025"
      title={["41 experiments, one goal:", <>customers who buy <span className="serif" style={{ letterSpacing: "-0.03em" }}>without a sales rep.</span></>]}
      lede="Insuma is Alicorp’s B2B e-commerce for bakeries, restaurants and small businesses in Peru. In 2025 I ran its experimentation programme end to end: I defined the hypotheses, designed the variants, shipped them through Insider and read the results."
      hero={
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <figure style={{ flex: "1 1 420px", minWidth: 0, height: 520, borderRadius: 6, overflow: "hidden", position: "relative" }}>
            <Image src="/images/insuma/hero.jpg" alt="A restaurant owner in an Insuma apron pointing at the Insuma store on his phone" fill priority sizes="(max-width: 900px) 100vw, 660px" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
            <figcaption style={{ position: "absolute", left: 0, bottom: 0, padding: "10px 14px", background: "var(--paper)", fontSize: 14, fontWeight: 700 }}>Our users: small business owners ordering on the go</figcaption>
          </figure>
          <div style={{ flex: "1 1 380px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }}>
            <div className="card" style={{ background: ORANGE, color: "#14100D", justifyContent: "space-between" }}><span style={{ fontSize: 15, fontWeight: 800 }}>Experiments in 2025</span><span className="num" style={{ fontSize: "clamp(56px, 6vw, 96px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}>41</span></div>
            <div className="card ink" style={{ justifyContent: "space-between" }}><span style={{ fontSize: 15, fontWeight: 800 }}>Digital customers</span><span style={{ display: "flex", flexDirection: "column", gap: 4 }}><span className="num" style={{ fontSize: "clamp(40px, 4.4vw, 72px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}>10,000</span><span style={{ fontSize: 15 }}>vs a goal of 8,000</span></span></div>
            <div className="card" style={{ justifyContent: "space-between" }}><span style={{ fontSize: 15, fontWeight: 800 }}>Campaigns shipped</span><span className="num" style={{ fontSize: "clamp(48px, 5vw, 80px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}>20+</span></div>
            <div className="card" style={{ justifyContent: "space-between" }}><span style={{ fontSize: 15, fontWeight: 800 }}>Stack</span><span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.45 }}>Insider · GA4 · Hotjar · Clarity · Figma</span></div>
          </div>
        </div>
      }
      facts={[
        { term: "My role", value: "Product designer, AI & experimentation: hypotheses, variants, analysis" },
        { term: "Company", value: "Alicorp · Digital Transformation CoE" },
        { term: "Product", value: "insuma.com.pe · B2B e-commerce, web and mobile web" },
        { term: "Goal", value: "Digital independence: customers ordering without a rep" },
      ]}
      toc={[
        { id: "summary", label: "In 30 seconds" },
        { id: "banner", label: "Floating banner" },
        { id: "urgency", label: "Visual urgency" },
        { id: "segmented", label: "A home per business" },
        { id: "stories", label: "Insuma Stories" },
        { id: "programme", label: "How I ran it" },
      ]}
      next={{ href: "/work/sphere", label: "Next case · 04", title: <span className="serif">Sphere</span>, style: { background: "#000099", color: "#FFFFFF" } }}
    >
      <Summary
        accent={ORANGE}
        items={[
          ["The problem", "Small businesses leaned on their sales rep instead of ordering online."],
          ["What I did", "41 experiments in 2025: hypothesis, variant in Figma, launch in Insider, readout."],
          ["The key decision", "One hypothesis per test, measured against a holdout group whenever possible."],
          ["The result", "10,000 customers buying online, against a goal of 8,000."],
        ]}
      />

      <Experiment
        id="banner"
        kicker="Experiment 01 · Campaigns · Aug 2025"
        method="Before / after vs July · 11–31 Aug · all Insuma users"
        title="The floating" italic="banner"
        challenge="High-potential promotions got lost in the product feed, so key categories like cleaning supplies barely converted."
        hypothesis="A persistent, dismissible banner will catch attention without blocking navigation."
        metrics={<><Metric dark value="S/7k → 18k" label="cleaning category sales" /><Metric value="2.3×" label="more customers buying vs July" /></>}
        lesson="How we show an offer matters as much as the offer itself."
        visual={
          <div className="stage" style={stage}>
            <Labeled label="Variant · mobile home" note="Dismissible, shown across home and category pages, mobile and desktop.">
              <Phone lift objectPosition="right top" img={{ src: "/images/insuma/floating-banner.jpg", alt: "Mobile home with a floating Promo del día banner for Sapolio bleach in the bottom right corner", width: 1080, height: 1920 }}
                annotations={[{ label: "Sticky component", box: { left: "58%", top: "69%", width: "39%", height: "29%" }, tag: { right: -8, top: -30 } }]} />
            </Labeled>
          </div>
        }
      />

      <Experiment
        id="urgency" reverse
        kicker="Experiment 02 · Campaigns · Apr 2025"
        method="Campaign with direct attribution · 9–30 Apr · mixed audience by business type"
        title="Visual" italic="urgency"
        challenge="Users browsed Flash Promos but put off the decision, and carts were abandoned."
        hypothesis="A visible countdown triggers loss aversion and shortens the path to purchase."
        metrics={<><Metric dark value="S/67,000" label="in directly attributed sales" /><Metric value="1.30%" label="click-through rate, now the benchmark for campaigns" /></>}
        lesson="Urgency unlocked purchases people were already planning, in the categories they needed."
        visual={
          <div className="stage" style={{ ...stage, flexDirection: "column", alignItems: "center", gap: 14, padding: "40px 28px" }}>
            <span style={{ fontSize: 14, fontWeight: 800 }}>Variants · countdown banners</span>
            <div style={{ position: "relative", width: "100%", maxWidth: 560 }}>
              <Image src="/images/insuma/countdown-banners.jpg" alt="Three orange Insuma Wow and Promos Flash banners, each with a days, hours and minutes countdown" width={1560} height={1280} sizes="(max-width: 700px) 100vw, 560px" style={{ width: "100%", height: "auto", borderRadius: 6, display: "block", boxShadow: "0 24px 50px rgba(14,42,71,.18)" }} />
              <span className="ann" aria-hidden="true" style={{ left: "66%", top: "2%", width: "33%", height: "13%" }}><span className="tag" style={{ right: 0, bottom: -30 }}>Psychological trigger: scarcity</span></span>
            </div>
            <span style={{ fontSize: 14 }}>Three variants, refreshed daily during the campaign.</span>
          </div>
        }
      />

      <section id="segmented" className="reveal" style={{ gap: 32, padding: "clamp(24px, 4vw, 56px)", borderRadius: 6, background: "var(--ink)", color: "var(--paper)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 15, fontWeight: 800 }}>Experiment 03 · Oct 2025 – Feb 2026</span>
            <span className="method" style={{ background: "var(--ink-2)" }}>Segmented launch · 800+ targeted businesses · run twice</span>
          </span>
          <span className="chip" style={{ background: ORANGE, color: "#14100D", fontSize: 13 }}>Featured experiment</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(36px, 4vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.05em" }}>A home for every <span className="serif" style={{ color: "#FF8A3D" }}>business</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 17, lineHeight: 1.5 }}>
              <p><b>Challenge.</b> Insuma serves bakeries, restaurants and cleaning services. A one-size-fits-all home put flour next to bleach and felt irrelevant to everyone.</p>
              <p><b>Hypothesis.</b> Tailoring the home to each business type, with the right products and how-to content, will raise engagement and direct sales.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }}>
              <Metric accent value="S/9,000" label="in direct sales from 27 buying customers" />
              <div className="card" style={{ padding: 20, gap: 8, background: "var(--ink-2)" }}>
                <span className="num" style={{ fontSize: "clamp(32px, 3.4vw, 48px)", letterSpacing: "-0.05em", lineHeight: 0.9 }}>6</span>
                <span style={{ fontSize: 15 }}>technical consulting requests</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: 6, background: "var(--ink-2)", overflow: "hidden" }}>
              {[
                ["Run 1 · failed", "#C42A16", "#FFFFFF", "It went to the wrong audience, a database of laundries, and it didn’t work."],
                ["Fix", "#F3D488", "var(--ink)", "We rebuilt the audience: small businesses, cleaning services, building administrators and small offices like coworks."],
                ["Run 2 · next month", "#8CE6A0", "var(--ink)", "Same design, much stronger impact. Customers who had left after seeing mayonnaise and cooking oil on the home finally found products for their business."],
              ].map(([t, bg, fg, d], i) => (
                <div key={t} style={{ padding: "16px 20px", display: "flex", gap: 14, alignItems: "baseline", borderTop: i ? "1px solid rgba(246,238,227,0.15)" : undefined }}>
                  <span className="chip" style={{ background: bg, color: fg }}>{t}</span>
                  <span style={{ fontSize: 15, lineHeight: 1.45 }}>{d}</span>
                </div>
              ))}
            </div>
            <p className="pull" style={{ borderLeftColor: "#FF8A3D" }}>The design was right the first time. The audience wasn’t. Personalisation only works when it maps to real intent.</p>
          </div>
          <div className="stage" style={{ flex: "1.2 1 340px", minWidth: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28 }}>
            <Labeled label="Before · generic home">
              <Phone img={{ src: "/images/insuma/home-generic.jpg", alt: "Generic home: WhatsApp channel banner and mixed seller recommendations", width: 690, height: 1500 }} />
            </Labeled>
            <Labeled label="After · cleaning business">
              <Phone lift img={{ src: "/images/insuma/home-cleaning.jpg", alt: "Home for cleaning businesses: free technical consulting banner and a Sapolio Profesional bundle", width: 720, height: 1280 }}
                annotations={[{ label: "Segmented experience", box: { left: "3%", top: "19%", width: "94%", height: "60%" } }]} />
            </Labeled>
          </div>
        </div>
      </section>

      <Experiment
        id="stories"
        kicker="Experiment 04 · Brand & education · Aug 2025"
        method="Insider audience of 1,772 users · 18–31 Aug"
        title="Insuma" italic="Stories"
        challenge="Customers leaned on their sales rep because they didn’t know what the platform could do."
        hypothesis="A pattern they already use every day, stories, can deliver bite-sized education and build trust."
        metrics={<><Metric dark value="48%" label="of reached users learned a new feature" /><Metric value="S/2,000" label="in sales right after watching" /></>}
        lesson="Education can be a commercial lever, not just support content."
        visual={
          <div className="stage" style={stage}>
            <Labeled label="Home with stories">
              <Phone lift img={{ src: "/images/insuma/stories-home.jpg", alt: "Insuma home with an Insuma te enseña row of story circles", width: 622, height: 1404 }}
                annotations={[{ label: "Familiar UI pattern", box: { left: "3%", top: "64%", width: "78%", height: "22%" } }]} />
            </Labeled>
            <Labeled label="Story opened">
              <Phone objectPosition="center" img={{ src: "/images/insuma/story-open.jpg", alt: "An opened story explaining web-only promotions on a 20 litre cooking oil", width: 645, height: 1140 }} />
            </Labeled>
          </div>
        }
      />

      <section id="programme" className="reveal">
        <h2 className="h-case">How I ran the <span className="serif">programme</span></h2>
        <p className="body">The experiments served three goals: <b>digital independence</b> (10,000 customers buying online against a goal of 8,000), <b>stronger commercial communication</b> (20+ campaigns built on patterns that had already proven value) and <b>de-risking the Unified Product</b>, the platform customers were migrating to, with 5+ experiments that validated its hypotheses first. Most tests ran in Insider with a holdout control group; when a promotion had to reach everyone, we measured before and after.</p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[["01 Listen", "Hotjar and Clarity recordings plus GA4 funnels to find where buyers hesitate."], ["02 Bet", "One hypothesis per test, tagged by goal: campaigns, brand, customer need or new opportunity."], ["03 Ship", "Variants designed in Figma and launched in Insider, often within the same week."], ["04 Decide", "Every result ends in a next step: scale it, iterate it or drop it."]].map(([t, d]) => (
            <div key={t} className="card"><span className="num" style={{ fontSize: 30, letterSpacing: "-0.04em" }}>{t}</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>{d}</span></div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "clamp(20px, 3vw, 32px)", borderRadius: 6, background: "#FFFFFF" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>One month of the programme · <span className="serif">December 2025</span></span>
            <span style={{ fontSize: 13 }}>9 initiatives in flight · each needed data and design sign-off before launch</span>
          </div>
          <div style={{ overflowX: "auto" }} tabIndex={0} role="region" aria-label="December 2025 roadmap">
            <div style={{ minWidth: 780 }}>
              <div className="gantt-row" style={{ borderBottom: "2px solid var(--ink)", fontSize: 13, fontWeight: 800 }}>
                <span>Initiative</span>{[1, 2, 3, 4, 5].map((w) => <span key={w}>Week {w}</span>)}<span style={{ justifySelf: "end" }}>Status</span>
              </div>
              {ROADMAP.map((r) => (
                <div key={r.name} className="gantt-row">
                  <span style={{ gridColumn: 1, gridRow: 1, display: "flex", flexDirection: "column", gap: 2, paddingRight: 16, fontSize: 15, fontWeight: 600 }}>
                    {r.name}{r.note && <span style={{ fontSize: 12, opacity: 0.75 }}>{r.note}</span>}
                  </span>
                  {r.bars.map(([a, b]) => (
                    <span key={a} className="bar-g" style={{ gridColumn: `${a} / ${b}`, gridRow: 1, height: 22, borderRadius: 3, background: r.color, margin: r.bars.length > 1 ? "0 3px" : undefined }} />
                  ))}
                  <span style={{ gridColumn: 7, gridRow: 1, justifySelf: "end", display: "flex", gap: 4 }}>
                    <span style={pill(r.data === "ok")}>{r.data === "ok" ? "Data ✓" : "Data …"}</span>
                    <span style={pill(true)}>Design ✓</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 800, marginRight: 4 }}>Backlog, to evaluate:</span>
            {["Box vs unit pricing", "Fixed-bundle web push", "Insuma Stories ecosystem", "New product launch page"].map((b) => <span key={b} className="method" style={{ fontWeight: 600 }}>{b}</span>)}
          </div>
          <span style={{ fontSize: 12 }}>Rebuilt from my planning board in Figma; names and partners removed.</span>
        </div>
      </section>
    </CaseLayout>
  );
}
