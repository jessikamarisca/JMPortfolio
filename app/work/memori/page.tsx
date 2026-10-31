import type { Metadata } from "next";
import Image from "next/image";
import { CaseH2, CaseLayout, Summary } from "@/components/case";
import { Labeled } from "@/components/mockups";
import { PhoneVideo } from "@/components/phone-video";

export const metadata: Metadata = {
  title: "Memori, a native iOS journal",
  description: "Memori keeps a day as fragments: photos, a line, a quote and its soundtrack. Concept, design and SwiftUI at the Apple Developer Academy.",
};


export default function MemoriCase() {
  return (
    <CaseLayout
      meta="01 — Memori · iOS app · Apple Developer Academy · 2026"
      title={["Journals ask for an essay.", <>Most days give you <span className="serif" style={{ letterSpacing: "-0.03em" }}>three photos and a song.</span></>]}
      lede="Memori is a native iOS journal that keeps a day as fragments (photos, a line, a quote, its soundtrack) and files them into chapters you want to reopen."
      hero={
        <div className="stage" style={{ borderRadius: 6, background: "var(--lilac)", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "clamp(16px, 5vw, 80px)", padding: "56px 24px" }}>
          <Labeled label="Dark">
            <PhoneVideo lift src="/video/memori-capture.mp4" poster="/video/memori-capture.jpg" label="Dark mode: creating a chapter called Trip to Napoli and adding photos from the library" />
          </Labeled>
          <Labeled label="Light">
            <PhoneVideo lift src="/video/memori-light.mp4" poster="/video/memori-light.jpg" label="Light mode: saving four photos to today, giving the day a title and filing it into the Napoli chapter" />
          </Labeled>
        </div>
      }
      facts={[
        { term: "My role", value: "Concept and product design · wrote the SwiftUI for Capture, Chapters and Recap" },
        { term: "Team", value: "The Memorables · 5 people, Apple Developer Academy, Naples" },
        { term: "Built with", value: "SwiftUI · on device, no account" },
        { term: "Status", value: "Working build · App Store next" },
      ]}
      toc={[
        { id: "summary", label: "In 30 seconds" },
        { id: "research", label: "The problem" },
        { id: "process", label: "Process" },
        { id: "principles", label: "Principles" },
        { id: "call", label: "The hardest call" },
        { id: "solution", label: "Solution" },
        { id: "code", label: "In code" },
        { id: "learned", label: "What we learned" },
      ]}
      next={{ href: "/work/betty", label: "Next case · 02", title: <>Betty, <span className="serif">a private AI</span></>, style: { background: "#2D2AD6", color: "#FFFFFF" } }}
    >
      <Summary
        accent="#C2481C"
        items={[
          ["The problem", "Journals ask for an essay. Most days give you three photos and a song."],
          ["What we did", "A survey of 50 people, 5 interviews and 4 usability tests. Then paper, a moodboard, Figma and SwiftUI."],
          ["The key decision", "Save first, organise later: everything lands in today and can be filed into a chapter any time."],
          ["The result", "A working native app: 19 screens, 6 ways to capture, 3 layouts, and one rule we kept coming back to: fewer features, more memories."],
        ]}
      />

      <section id="research" className="reveal">
        <CaseH2 n="02" italic="problem">The</CaseH2>
        <p className="quote" style={{ fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.1 }}>The camera roll has become a memory graveyard: <span style={{ color: "#C2481C" }}>everything is saved, nothing is remembered.</span></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
          {[["50", "people surveyed"], ["5", "interviews"], ["4", "usability tests"]].map(([n, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="num" style={{ fontSize: "clamp(56px, 6vw, 96px)", letterSpacing: "-0.06em" }}>{n}</span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{l}</span>
            </div>
          ))}
        </div>
        <p className="body">We asked 50 people whether it was just us. Many had a hard time remembering the important moments of their own life: not because they didn’t care, but because nothing helped them keep those moments. Photos live in the camera roll, thoughts in notes apps, songs in playlists, and none of them remember the day together.</p>
        <p className="body">So the brief became: not a journal (nobody wants homework at the end of the day), but something closer to scrapbooking, without the work.</p>
      </section>

      <section id="process" className="reveal">
        <CaseH2 n="03" italic="build">Sketch, feel, design,</CaseH2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            ["/images/memori/sketches.jpg", "Paper sketches of Memori screens spread across a table", 1800, 1050, "Sketch", "Every idea started on paper. Paper is cheap, so we could throw ideas away fast."],
            ["/images/memori/moodboard.jpg", "Moodboard collage of app references around the line a keepsake box, not a scrapbook", 1800, 1013, "Feel", "A moodboard to decide what it should feel like: warm and personal, something you want to open, not a project to maintain."],
            ["/images/memori/flows.jpg", "Figma frames for the capture, entry, chapters and recap flows", 1800, 1335, "Design", "Real screens for capturing, writing and organising. This is where the big idea clicked: chapters, not albums."],
            ["/images/memori/build.jpg", "The entry The pizza that ruined all others in the SwiftUI build, with a photo of Napoli and a quote card", 1020, 2024, "Build", "Built in SwiftUI. I wrote the Capture view, Chapters and Recap; we kept the scope small enough to really build it, not just show pictures of it."],
          ].map(([src, alt, w, h, t, d]) => (
            <figure key={t as string} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="zoom" style={{ aspectRatio: "4 / 3", borderRadius: 6, overflow: "hidden", background: "var(--paper-2)", position: "relative" }}>
                <Image src={src as string} alt={alt as string} width={w as number} height={h as number} sizes="(max-width: 700px) 100vw, 300px" style={{ width: "100%", height: "100%", objectFit: t === "Build" ? "contain" : "cover", objectPosition: "center", display: "block" }} />
              </div>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="serif" style={{ fontSize: 28, lineHeight: 1 }}>{t as string}.</span>
                <span style={{ fontSize: 15, lineHeight: 1.45 }}>{d as string}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="principles" className="reveal">
        <CaseH2 n="04" italic="Principles">Design</CaseH2>
        <p className="quote" style={{ fontSize: "clamp(32px, 3.4vw, 48px)", lineHeight: 1.05 }}>A keepsake box, <span style={{ color: "#C2481C" }}>not a scrapbook.</span></p>
        <p className="body">Twenty-one references, each sorted by the job it does for the app and what to leave behind. Out of them came a small system: paper, ink, tangerine, lilac and butter; Instrument Serif for dates and quotes, Instrument Sans for the interface, DM Mono for metadata.</p>
        <div className="grid-auto">
          <div className="card"><span className="kicker">01 · Material is suggested, never imitated</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>A month is a frosted folder with photos peeking out. No spiral bindings, tape or torn paper.</span></div>
          <div className="card"><span className="kicker">02 · Colour comes from the memories</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Each chapter gets its own colour and the interface stays neutral, so your photos lead.</span></div>
          <div className="card"><span className="kicker">03 · Glow is reserved for sound</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>The orange-to-lilac glow only appears on things you can hear: a voice note, the song of the day.</span></div>
        </div>
        <figure className="zoom" style={{ borderRadius: 6, overflow: "hidden" }}>
          <Image src="/images/memori/direction.jpg" alt="Direction board: colour palette, type scale and motifs such as a month as a folder, a day as one column, a quote as a whole card, a glowing voice note and the recap digest" width={1800} height={1780} sizes="(max-width: 900px) 100vw, 900px" style={{ width: "100%", height: "auto", display: "block" }} />
        </figure>
      </section>

      <section id="call" className="reveal">
        <CaseH2 n="05" italic="call">The hardest</CaseH2>
        <p style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em" }}>When should a memory be organised?</p>
        <div className="grid-auto">
          <div className="card"><span className="kicker">A · Chapter first</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Pick where it belongs before you capture. A decision at the worst moment.</span></div>
          <div className="card"><span className="kicker">B · Only by date</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>No decisions at all, but a year becomes an endless scroll.</span></div>
          <div className="card" style={{ background: "#C2481C", color: "#FFFFFF" }}><span className="kicker">C · Chosen</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Saved to today, filed into a chapter any time. Capture stays instant; meaning comes later.</span></div>
        </div>
      </section>

      <section id="solution" className="reveal">
        <CaseH2 n="06" italic="Solution" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", paddingBottom: 28, borderBottom: "1px solid rgba(14,42,71,0.25)" }}>
          <div className="stage" style={{ flex: "0 1 300px", display: "flex", justifyContent: "center", padding: 24, borderRadius: 6, background: "var(--lilac)" }}>
            <PhoneVideo lift src="/video/memori-capture.mp4" poster="/video/memori-capture.jpg" label="Creating a chapter and adding photos" />
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="chip" style={{ background: "var(--ink)", color: "var(--paper)" }}>I wrote this in SwiftUI</span>
            <span className="serif" style={{ fontSize: 34, lineHeight: 1.05 }}>A chapter in seconds</span>
            <span style={{ fontSize: 17, lineHeight: 1.5 }}>Name it, pick a colour, add photos from the library. “What are you keeping?” asks for one fragment at a time: start with one, add the rest after.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", paddingTop: 8 }}>
          <div className="stage" style={{ flex: "0 1 300px", display: "flex", justifyContent: "center", padding: 24, borderRadius: 6, background: "#F3D488" }}>
            <PhoneVideo lift src="/video/memori-entry.mp4" poster="/video/memori-entry.jpg" label="Writing a note, a quote and the soundtrack of the day" />
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="serif" style={{ fontSize: 34, lineHeight: 1.05 }}>A day, in fragments</span>
            <span style={{ fontSize: 17, lineHeight: 1.5 }}>A title, a note, something someone said and the soundtrack of the day. Each fragment has its own shape, so a day reads at a glance.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", paddingBlock: 28, borderTop: "1px solid rgba(14,42,71,0.25)", borderBottom: "1px solid rgba(14,42,71,0.25)" }}>
          <div className="stage" style={{ flex: "0 1 300px", display: "flex", justifyContent: "center", padding: 24, borderRadius: 6, background: "#A8C49A" }}>
            <PhoneVideo lift src="/video/memori-chapters.mp4" poster="/video/memori-chapters.jpg" label="The Trip to Napoli chapter with its first day, then the Chapters screen with the day’s photos fanning out of the folder" />
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="chip" style={{ background: "var(--ink)", color: "var(--paper)" }}>I wrote this in SwiftUI</span>
            <span className="serif" style={{ fontSize: 34, lineHeight: 1.05 }}>Save first, file later</span>
            <span style={{ fontSize: 17, lineHeight: 1.5 }}>Everything lands in today first and can be filed into a chapter whenever you want. Back in Chapters, the day’s photos fan out of the folder, and Recent days keeps it one tap away.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", paddingBottom: 28, borderBottom: "1px solid rgba(14,42,71,0.25)" }}>
          <div className="stage" style={{ flex: "0 1 300px", display: "flex", justifyContent: "center", padding: 24, borderRadius: 6, background: "#F2A66E" }}>
            <PhoneVideo lift src="/video/memori-recap.mp4" poster="/video/memori-recap.jpg" label="Recap: the October digest with the song played, a quote and kept photos, played back as a full-screen story, then the week and chapter digests" />
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="chip" style={{ background: "var(--ink)", color: "var(--paper)" }}>I wrote this in SwiftUI</span>
            <span className="serif" style={{ fontSize: 34, lineHeight: 1.05 }}>Your month, played back</span>
            <span style={{ fontSize: 17, lineHeight: 1.5 }}>Recap turns what you kept into a digest by week, month or chapter: the song you played, something someone said and the photos you kept. Press play and it unfolds as a full-screen story.</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "clamp(20px, 3vw, 32px)", borderRadius: 6, background: "#FFFFFF" }}>
          <span className="kicker">What the 4 usability tests changed</span>
          <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Heard:</b> some people wanted to start from a template and fill a whole day from one view.</span><span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Changed:</b> “Start from a template” became an option on the capture wheel.</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Heard:</b> people needed a nudge to capture their day.</span><span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Changed:</b> we added a home screen widget and notifications.</span></div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", padding: "40px 24px 0", borderRadius: 6, background: "var(--paper-2)", overflow: "hidden" }}>
          <Image src="/images/memori/home-widget.png" alt="Concept: a Memori widget on the iPhone home screen" width={900} height={1786} sizes="260px" style={{ width: "min(260px, 42%)", height: "auto", marginBottom: -60 }} />
          <Image src="/images/memori/lock-screen.png" alt="Concept: a Memori notification on the lock screen suggesting to keep a memory" width={900} height={1786} sizes="260px" style={{ width: "min(260px, 42%)", height: "auto", marginBottom: -60 }} />
        </div>
        <span className="small">Added after usability testing: a home screen widget and a gentle, location-aware nudge to keep the moment.</span>
      </section>

      <section id="code" className="reveal">
        <CaseH2 n="07" italic="code">From the direction board to</CaseH2>
        <p className="body">I wrote the SwiftUI for Capture, Chapters and Recap. The same system from the direction board lives in the code, so the build stays true to the design.</p>
        <figure style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="zoom" style={{ borderRadius: 6, overflow: "hidden", background: "#1F1F24" }}>
            <Image src="/images/memori/code-recap.jpg" alt="Xcode: RecapView in SwiftUI next to its live preview of the October digest" width={2000} height={1162} sizes="(max-width: 900px) 100vw, 900px" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <figcaption className="small">RecapView and its live preview in Xcode.</figcaption>
        </figure>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="card"><span className="kicker">One view, three scopes</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Week, Month and Chapters are one segmented picker over a <code>RecapScope</code>. The hero’s play button opens the story player as a full-screen cover.</span></div>
          <div className="card"><span className="kicker">Tokens, not hex codes</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Colours and type come from a shared <code>Theme</code> (<code>Theme.paper</code>, a <code>metaStyle()</code> modifier for the mono metadata), so every screen pulls from the same palette.</span></div>
          <div className="card"><span className="kicker">Empty states are designed</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>First open gets its own prompt (“Start your first chapter”) with a dedicated Xcode preview, and Recap shows “No chapters yet” instead of a blank screen.</span></div>
          <div className="card"><span className="kicker">Feel, not just look</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Switching scope plays a light selection haptic through <code>.sensoryFeedback</code>.</span></div>
        </div>
        <figure style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="zoom" style={{ borderRadius: 6, overflow: "hidden", background: "#1F1F24" }}>
            <Image src="/images/memori/code-home.jpg" alt="Xcode: HomeView in SwiftUI with previews for With chapters and First open, showing the Start your first chapter state" width={2000} height={1162} sizes="(max-width: 900px) 100vw, 900px" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <figcaption className="small">HomeView, previewed in its “First open” state.</figcaption>
        </figure>
      </section>

      <section id="learned" className="reveal" style={{ padding: "clamp(24px, 3vw, 40px)", borderRadius: 6, background: "var(--ink)", color: "var(--paper)" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(32px, 3.4vw, 48px)", letterSpacing: "-0.045em" }}>08 What we <span className="serif" style={{ color: "#FF8A3D" }}>learned</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
          {[["19", "screens designed"], ["6", "ways to capture"], ["3", "layouts for a day"]].map(([n, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="num" style={{ fontSize: "clamp(56px, 6vw, 96px)", letterSpacing: "-0.06em" }}>{n}</span>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{l}</span>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: "60ch", fontSize: 18, lineHeight: 1.55 }}>And every time we cut something, the memories got more room. Memories don’t need another album; they need a home.</p>
        <p className="serif" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: 1.05, color: "#FF8A3D" }}>Fewer features. More memories.</p>
      </section>
    </CaseLayout>
  );
}
