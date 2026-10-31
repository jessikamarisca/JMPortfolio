import type { Metadata } from "next";
import Image from "next/image";
import { CaseH2, CaseLayout, Summary } from "@/components/case";
import { InlineVideo } from "@/components/phone-video";

export const metadata: Metadata = {
  title: "Sphere, a mood tracker that acts",
  description: "A mood tracker that turns a daily check-in into activities nearby, picked for how you feel. Designed at Elisava, acquired by Zama Health, where I led the 0-to-1 product design for college athletes.",
};

const BLUE = "#000099";

const SWATCHES: [string, string, string][] = [
  ["Interface", "#000099", "6px"],
  ["Positive · energized", "#FFC500", "55px 6px 55px 6px"],
  ["Positive · calm", "#F32CE6", "55px 6px 55px 6px"],
  ["Negative · energized", "#FF4B00", "55px 6px 55px 6px"],
  ["Negative · calm", "#00DEB5", "55px 6px 55px 6px"],
];

const ROWS: { img: { src: string; alt: string; width: number; height: number }; bg: string; pad: string; title: string; text: string }[] = [
  { img: { src: "/images/sphere/emotion-model.jpg", alt: "Emotion map with four quadrants: tense and irritated, excited and cheerful, bored and gloomy, relaxed and calm", width: 520, height: 420 }, bg: "#EFEFEF", pad: "20px", title: "A check-in, not a diary", text: "Pick how you feel on a map of energy and mood instead of writing about it. One tap tells Sphere enough to help." },
  { img: { src: "/images/sphere/activities.jpg", alt: "Activities just for you: because you’re feeling anxious, a pilates class 1 km away today at 14:30", width: 418, height: 922 }, bg: BLUE, pad: "28px 28px 0", title: "“Because you’re feeling anxious”", text: "Activities nearby, matched to your mood, your likes and even the weather. Book it, share it with a friend, go." },
  { img: { src: "/images/sphere/insights.jpg", alt: "Insights screen: weekly mood bars and a colour sphere summarising the week", width: 316, height: 738 }, bg: "#FFFFFF", pad: "20px", title: "Your week as a sphere", text: "Insights show whether your mood is improving, and Sphere flags alarming patterns gently, before they become a crisis." },
];

export default function SphereCase() {
  return (
    <CaseLayout
      meta="04 — Sphere · iOS app concept · Master’s in UX Design, Elisava · 2023"
      title={["Mood trackers ask how you feel.", <>Sphere helps you <span className="serif" style={{ letterSpacing: "-0.03em" }}>do something about it.</span></>]}
      lede="A mood tracker that turns a daily check-in into activities nearby, picked for how you feel. Designed during my master’s at Elisava in Barcelona. Zama Health acquired it to rebuild the whole flow for US college athletes, and I led that 0-to-1 product design."
      hero={
        <figure style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ borderRadius: 6, overflow: "hidden", background: BLUE }}>
            <InlineVideo style={{ maxWidth: 1008, margin: "0 auto" }} src="/video/sphere-promo.mp4" poster="/video/sphere-promo.jpg" width={1008} height={720} label="Sphere launch promo: tell the app how you feel, get the perfect activity nearby, make plans with friends and track your moods over the week" />
          </div>
          <figcaption className="small">Launch promo · motion design and edit by me.</figcaption>
        </figure>
      }
      facts={[
        { term: "My role", value: "End to end: research, personas, IA, wireframes, UI, prototype and the launch promo" },
        { term: "Context", value: "Master’s in UX Design, Elisava, Barcelona" },
        { term: "Tools", value: "Figma · motion graphics for the launch promo" },
        { term: "Outcome", value: "Acquired by Zama Health · Zama later acquired by Volt Athletics" },
      ]}
      toc={[
        { id: "summary", label: "In 30 seconds" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "call", label: "The hardest call" },
        { id: "solution", label: "Solution" },
        { id: "system", label: "Emotions as a system" },
        { id: "zama", label: "Zama Health" },
        { id: "learned", label: "What I learned" },
      ]}
      next={{ href: "/work/memori", label: "Back to the start · 01", title: <span className="serif">Memori</span>, style: { background: "var(--lilac)", color: "var(--ink)" } }}
    >
      <Summary
        accent={BLUE}
        items={[
          ["The problem", "Mood apps log feelings and stop there, so people forget them."],
          ["What I did", "Research, personas, information architecture, UI and a full prototype during my master’s at Elisava."],
          ["The key decision", "Close the loop: check in, get an activity for that mood, see if it helped."],
          ["The result", "Zama Health acquired the concept, I led its 0-to-1 product for college athletes, and Zama was later acquired by Volt Athletics for $380K."],
        ]}
      />

      <section id="problem" className="reveal">
        <CaseH2 n="02" italic="problem">The</CaseH2>
        <div className="grid-auto">
          <div className="card" style={{ background: BLUE, color: "#FFFFFF" }}>
            <span className="num" style={{ fontSize: 56, letterSpacing: "-0.05em", lineHeight: 1 }}>25%</span>
            <span style={{ fontSize: 16, lineHeight: 1.45 }}>rise in anxiety and depression worldwide in the first year of COVID-19 (WHO, 2022).</span>
          </div>
          <div className="card"><span className="serif" style={{ fontSize: 28, lineHeight: 1.1 }}>Passive apps get forgotten</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Existing trackers give no reason to come back every day.</span></div>
          <div className="card"><span className="serif" style={{ fontSize: 28, lineHeight: 1.1 }}>Free time goes to waste</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>People don’t know what they could do in the city when they finally have an hour.</span></div>
        </div>
      </section>

      <section id="research" className="reveal">
        <CaseH2 n="03" italic="Research" />
        <p className="body">Three trends shaped the brief: digital and virtual care, data to understand the patient, and a shift to self-care and prevention. People told us they want to spot their emotional triggers before things get worse.</p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card">
            <span style={{ fontSize: 15, fontWeight: 800 }}>Persona · Vicente, 37</span>
            <span className="serif" style={{ fontSize: 32, lineHeight: 1 }}>The workaholic</span>
            <span style={{ fontSize: 16, lineHeight: 1.45 }}>Remote developer who has put his physical and mental health aside. Wants to understand what triggers his emotions and find something he can stick to.</span>
          </div>
          <div className="card">
            <span style={{ fontSize: 15, fontWeight: 800 }}>Persona · Emilia, 28</span>
            <span className="serif" style={{ fontSize: 32, lineHeight: 1 }}>FOMO</span>
            <span style={{ fontSize: 16, lineHeight: 1.45 }}>Journalist with an unpredictable schedule. Wants to see friends and never miss a plan, but the apps she tried were too passive and she forgot them.</span>
          </div>
        </div>
      </section>

      <section id="call" className="reveal">
        <CaseH2 n="04" italic="call">The hardest</CaseH2>
        <p style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em" }}>Should Sphere record feelings, or act on them?</p>
        <div className="grid-auto">
          <div className="card"><span className="kicker">A · A better journal</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Log moods beautifully. The same trap as the apps Emilia abandoned.</span></div>
          <div className="card"><span className="kicker">B · An activity finder</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Suggest plans, skip the check-in. Loses the self-awareness Vicente needs.</span></div>
          <div className="card" style={{ background: BLUE, color: "#FFFFFF" }}><span className="kicker">C · Chosen: the loop</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Check in → activity for that mood → insights over the week.</span></div>
        </div>
      </section>

      <section id="solution" className="reveal">
        <CaseH2 n="05" italic="Solution" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ROWS.map((r, i) => (
            <div key={r.title} style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", padding: "24px 0", borderBottom: i < ROWS.length - 1 ? "1px solid rgba(14,42,71,0.25)" : undefined }}>
              <div className="zoom" style={{ flex: "0 1 300px", minWidth: 0, borderRadius: 6, background: r.bg, overflow: "hidden", padding: r.pad, display: "flex", justifyContent: "center" }}>
                <Image src={r.img.src} alt={r.img.alt} width={r.img.width} height={r.img.height} sizes="300px" style={{ width: "auto", maxWidth: "100%", height: "auto", maxHeight: 400, display: "block" }} />
              </div>
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="serif" style={{ fontSize: 34, lineHeight: 1.05 }}>{r.title}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5 }}>{r.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="system" className="reveal">
        <CaseH2 n="06" italic="system">Emotions as a</CaseH2>
        <p className="body">Colour carries meaning here. I mapped the Emotion Identification Model (Watson and Tellegen, 1985) to four colours, one per quadrant, and kept a single deep blue for the interface so emotions always stand out.</p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
          {SWATCHES.map(([name, hex, radius]) => (
            <div key={hex} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ display: "block", height: 110, borderRadius: radius, background: hex }} />
              <span style={{ fontSize: 15 }}><b>{name}</b><br />{hex}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.5 }}>Type: Ubuntu for headings, rounded enough to feel close; Avenir for long text. Voice: kind, caring and close; scientific but easy to understand.</p>
      </section>

      <section id="zama" className="reveal" style={{ padding: "clamp(24px, 3vw, 40px)", borderRadius: 6, background: "var(--ink)", color: "var(--paper)" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(32px, 3.4vw, 48px)", letterSpacing: "-0.045em", lineHeight: 1 }}>07 From master’s project <span className="serif" style={{ color: "#FF8A3D" }}>to a real product</span></h2>
        <p style={{ maxWidth: "62ch", fontSize: 18, lineHeight: 1.55 }}>Zama Health, a sports psychology and mental wellness platform for college athletes, wanted to replicate Sphere’s whole flow, above all the mechanism for capturing emotions, with activity recommendations people could do on a university campus. I led the 0-to-1 product design.</p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {[
            ["Product & UX", "End-to-end experience, interface and information architecture, turning the concept into a B2B SaaS with digital modules and a clinical network."],
            ["Engagement", "A daily mood tracker, habit loops and personalised recommendations for on-campus activities, built for daily use."],
            ["Social", "Push notifications and peer-to-peer connections, so athletes could link up with friends for activities together."],
          ].map(([t, d]) => (
            <div key={t} style={{ padding: 20, borderRadius: 6, background: "var(--ink-2)", display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="kicker">{t}</span><span style={{ fontSize: 15, lineHeight: 1.45 }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 24px" }}>
          <span className="num" style={{ fontSize: "clamp(56px, 6vw, 96px)", letterSpacing: "-0.06em", lineHeight: 0.9 }}>$380K</span>
          <span style={{ flex: "1 1 280px", fontSize: 18, lineHeight: 1.5 }}>Zama Health was acquired by <b>Volt Athletics</b>. The product design and the retention mechanics behind its traction were part of that story.</span>
        </div>
      </section>

      <section id="learned" className="reveal">
        <CaseH2 n="08" italic="learned">What I</CaseH2>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card"><span className="serif" style={{ fontSize: 28, lineHeight: 1.1 }}>Design for sensitive contexts</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Empathy and clarity matter more than features when the topic is your mental health.</span></div>
          <div className="card"><span className="serif" style={{ fontSize: 28, lineHeight: 1.1 }}>Turn insight into action</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Research is only useful when it changes what the product does, not just what it says.</span></div>
        </div>
      </section>
    </CaseLayout>
  );
}
