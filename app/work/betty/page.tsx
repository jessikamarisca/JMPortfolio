import type { Metadata } from "next";
import { CaseH2, CaseLayout, Summary } from "@/components/case";
import { Browser } from "@/components/mockups";

export const metadata: Metadata = {
  title: "Betty, Alicorp’s private AI",
  description: "How I redesigned Alicorp’s internal AI so researchers could trust it: 15 interviews, a heuristic audit, a team workshop and a usability test before any code.",
};

const BLUE = "#2D2AD6";
const shot = (src: string, alt: string, w = 1512, h = 983) => ({ src, alt, width: w, height: h });

const TESTS: [string, string][] = [
  ["the human illustration read as a colleague, not as an AI.", "a robot mascot that says “tech” at a glance."],
  ["people expected to chat first; uploading felt like a locked door.", "a chat-first home. Files are optional and contextual."],
  ["onboarding helped once, but annoyed on every login.", "shown on first access and after updates only; the rest lives in FAQ."],
  ["“Does it use Google, or only our files?”", "cited sources, plus a clear note on what Betty doesn’t do."],
  ["“Another password?” Users wanted their work login.", "sign-in with the corporate account."],
];

export default function BettyCase() {
  return (
    <CaseLayout
      meta="02 — Betty · Alicorp’s private AI · Product design lead · 2025"
      title={["Our researchers trusted ChatGPT", "more than our own AI.", <>So I redesigned it <span className="serif" style={{ letterSpacing: "-0.03em" }}>to earn that trust.</span></>]}
      lede="Betty is Alicorp’s internal AI. It runs on a private model, so research, financial and customer data never leaves the company. It worked; people just didn’t use it. I led design and research for Betty 2.0, from the first interview to the handoff."
      hero={
        <div className="stage" style={{ borderRadius: 6, background: BLUE, padding: "clamp(24px, 5vw, 72px) clamp(16px, 5vw, 80px) 0", overflow: "hidden" }}>
          <Browser priority img={shot("/images/betty/login.jpg", "Betty 2.0 welcome screen: the robot mascot, three promises and sign-in with a corporate account", 1512, 982)} style={{ marginBottom: -40 }} />
        </div>
      }
      facts={[
        { term: "My role", value: "Product design lead: research, strategy and design" },
        { term: "Team", value: "Me, 2 researchers, a full-stack engineer and an AI engineer" },
        { term: "Users", value: "Research, insights, innovation and CX teams" },
        { term: "Status", value: "Betty 2.0 shipped · Finsight, for finance, up next" },
      ]}
      toc={[
        { id: "summary", label: "In 30 seconds" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "diagnosis", label: "Diagnosis" },
        { id: "workshop", label: "Aligning the team" },
        { id: "call", label: "The hardest call" },
        { id: "test", label: "Testing before building" },
        { id: "solution", label: "Betty 2.0" },
        { id: "impact", label: "Impact" },
      ]}
      next={{ href: "/work/insuma", label: "Next case · 03", title: <>Insuma <span className="serif">experiments</span></>, style: { background: "#E8481E", color: "#14100D" } }}
    >
      <Summary
        accent={BLUE}
        items={[
          ["The problem", "People trusted ChatGPT more than Betty: too many steps, no memory and answers nobody could check."],
          ["What I did", "15 interviews, a heuristic audit, a team workshop and a usability test before any code was written."],
          ["The key decision", "Make every answer verifiable, with a link to its exact source."],
          ["The result", "Betty 2.0 shipped. First-week users went from 3 who quit to 14 who became ambassadors."],
        ]}
      />

      <section id="problem" className="reveal">
        <CaseH2 n="02" italic="problem">The</CaseH2>
        <p className="body">Betty v1.5 was built engineering-first: secure, closed and good at transcription, but organised like a back office. Before you could ask anything, you created a project, picked its type, uploaded a guide and selected participant profiles.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12, alignItems: "start" }}>
          <figure style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Browser old img={shot("/images/betty/v15-projects.jpg", "Betty v1.5 project management: step 1, create a project, choose its type and upload a PDF guide", 1600, 878)} sizes="(max-width: 700px) 100vw, 450px" />
            <figcaption style={{ fontSize: 14, fontWeight: 600 }}>v1.5 · Step 1 of several before the first question</figcaption>
          </figure>
          <figure style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Browser old img={shot("/images/betty/v15-chat.jpg", "Betty v1.5 consultation chat: project and participant profile dropdowns before any conversation", 1266, 618)} sizes="(max-width: 700px) 100vw, 450px" />
            <figcaption style={{ fontSize: 14, fontWeight: 600 }}>v1.5 · The “chat” opened on two dropdowns</figcaption>
          </figure>
        </div>
        <div className="grid-auto">
          <div className="card"><span className="kicker">Active users · shallow results</span><span className="quote">“It says one thing, then another.”</span></div>
          <div className="card"><span className="kicker">Occasional users · too many steps</span><span className="quote">“You log in, pick the project, and only then can you ask.”</span></div>
          <div className="card"><span className="kicker">Non-users · unclear value</span><span className="quote">“I don’t see it being useful beyond qualitative studies.”</span></div>
        </div>
        <span className="small">Quotes translated from Spanish and anonymised.</span>
      </section>

      <section id="research" className="reveal">
        <CaseH2 n="03" italic="Research" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="num" style={{ fontSize: "clamp(64px, 7vw, 112px)", letterSpacing: "-0.06em", lineHeight: 0.85 }}>15</span>
            <span style={{ fontSize: 17, lineHeight: 1.45 }}>remote interviews with research teams: 7 who use Betty, 8 who don’t. Mixed seniority, every usage pattern.</span>
          </div>
          <div style={{ flex: "2 1 360px", display: "flex", flexDirection: "column", gap: 10 }}>
            <span className="kicker">Who we spoke to</span>
            <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 28px", alignItems: "center", gap: "8px 12px", fontSize: 15 }}>
              {[["Human Insights", 6], ["Research & Behavioral", 4], ["Innovation", 2], ["Alicorp Soluciones", 2], ["Customer Experience", 1]].map(([l, n]) => (
                <div key={l as string} style={{ display: "contents" }}>
                  <span>{l}</span>
                  <span className="bar-g" style={{ height: 18, width: `${((n as number) / 6) * 100}%`, borderRadius: 3, background: BLUE }} />
                  <b>{n}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="body">The headline finding: <b>adoption wasn’t limited by need, but by an experience that didn’t communicate value, didn’t earn trust and didn’t save time.</b> People wanted ChatGPT-simple summaries and quotes, and they wanted Betty to become the company’s memory.</p>
      </section>

      <section id="diagnosis" className="reveal">
        <CaseH2 n="04" italic="Diagnosis" />
        <p className="body">I audited v1.5 against Nielsen’s heuristics plus two human-AI frameworks, Google PAIR and Microsoft HAX, and benchmarked NotebookLM and Condense.</p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {[
            ["Critical", "#C42A16", "#FFFFFF", "Time to value", "Uploading files felt like paperwork. People quit before reaching the model’s output."],
            ["Critical", "#C42A16", "#FFFFFF", "Memory and context", "No history, no projects. Every question started from zero, so Betty felt like a form, not a colleague."],
            ["High risk", "#F3D488", "var(--ink)", "Trust and errors", "Without sources, users re-checked everything by hand, wiping out the time Betty saved."],
            ["Improvable", "#DCE9DA", "#23452A", "Task fit", "Users wanted a “brain” for analysis; Betty offered “hands” for transcription. And nobody knew how to prompt it."],
          ].map(([sev, bg, fg, t, d]) => (
            <div key={t} className="card white">
              <span className="chip" style={{ background: bg, color: fg }}>{sev}</span>
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{t}</span>
              <span style={{ fontSize: 15, lineHeight: 1.45 }}>{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="workshop" className="reveal">
        <CaseH2 n="05" italic="team">Aligning the</CaseH2>
        <p className="body">Findings don’t change a product until the whole team owns them. I designed and ran a workshop that turned <b>8 pains into 8 design opportunities, and those into product requirements.</b></p>
        <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {[
            ["10′", "Context", "Research and heuristic findings, shared.", false],
            ["10′", "Warm-up", "“Design the worst possible Betty, one nobody would ever use.”", false],
            ["50′", "How might we", "Three HMWs, one per team.", true],
            ["15′", "Prioritise", "What to prototype and test first.", false],
          ].map(([m, t, d, hi]) => (
            <div key={t as string} style={{ padding: 18, borderRadius: 6, background: hi ? BLUE : "var(--paper-2)", color: hi ? "#FFFFFF" : undefined, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="num" style={{ fontSize: 28, letterSpacing: "-0.04em" }}>{m}</span>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{t}</span>
              <span style={{ fontSize: 14, lineHeight: 1.4 }}>{d}</span>
            </div>
          ))}
        </div>
        <blockquote style={{ padding: "24px 28px", borderRadius: 6, background: "#FFFFFF", display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 800 }}>A requirement that came out of it</span>
          <span className="serif" style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.2 }}>“Anyone should understand what Betty is for in under 30 seconds, in plain language, without exploring the platform.”</span>
        </blockquote>
      </section>

      <section id="call" className="reveal">
        <CaseH2 n="06" italic="call">The hardest</CaseH2>
        <p style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em" }}>How does a private AI win against ChatGPT?</p>
        <div className="grid-auto">
          <div className="card"><span className="kicker">A · Match its features</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Images, reports, charts. A race we couldn’t win with a smaller, private model.</span></div>
          <div className="card"><span className="kicker">B · Lean on security</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>True, but users recognised it without feeling it. “Secure” alone didn’t make anyone open it.</span></div>
          <div className="card" style={{ background: BLUE, color: "#FFFFFF" }}><span className="kicker">C · Chosen: be verifiable</span><span style={{ fontSize: 16, lineHeight: 1.45 }}>Every answer links to its source, the PDF page or the video timestamp. Trust becomes something you can click.</span></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
          {[["Invisible", "File management disappears behind projects."], ["Conversational", "The chat is the centre, not the settings."], ["Verifiable", "Every answer shows where it came from."]].map(([t, d]) => (
            <div key={t} style={{ padding: 20, borderTop: `3px solid ${BLUE}`, display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="serif" style={{ fontSize: 28 }}>{t}</span>
              <span style={{ fontSize: 15, lineHeight: 1.45 }}>{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="test" className="reveal">
        <CaseH2 n="07" italic="building">Testing before</CaseH2>
        <p className="body">Before development, we ran a moderated, in-person usability test of the prototype with <b>5 colleagues across high, medium and low usage</b>, covering login, onboarding, home and file management. Every finding got a design response.</p>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(14,42,71,0.25)" }}>
          {TESTS.map(([h, r]) => (
            <div key={h} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "8px 32px", padding: "18px 12px", borderBottom: "1px solid rgba(14,42,71,0.25)" }}>
              <span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Heard:</b> {h}</span>
              <span style={{ fontSize: 16, lineHeight: 1.45 }}><b>Design response:</b> {r}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, padding: "clamp(20px, 3vw, 32px)", borderRadius: 6, background: "#DDDCFB" }}>
          <figure style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 800 }}>Tested prototype</span>
            <Browser old sizes="(max-width: 700px) 100vw, 450px" img={shot("/images/betty/login-tested.png", "Earlier login: an illustrated woman holding a tablet, username and password fields, and a badge saying 10 researchers already use Betty", 1512, 982)}
              annotations={[
                { label: "Read as a colleague", box: { left: "3%", top: "16%", width: "39%", height: "66%" }, tag: { left: 0, bottom: -30 } },
                { label: "Didn’t motivate use", box: { left: "70%", top: "87%", width: "28%", height: "9%" }, tag: { right: 0, top: -30 } },
              ]} />
            <figcaption style={{ fontSize: 14, lineHeight: 1.45 }}>A human illustration, yet another password and a user counter.</figcaption>
          </figure>
          <figure style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 800 }}>After the test</span>
            <Browser sizes="(max-width: 700px) 100vw, 450px" img={shot("/images/betty/login.jpg", "Final login: robot mascot, three promises and a single sign-in with the corporate account", 1512, 982)}
              annotations={[{ label: "Corporate sign-in", box: { left: "68%", top: "55%", width: "27%", height: "9%" }, tag: { right: 0, bottom: -30 } }]} />
            <figcaption style={{ fontSize: 14, lineHeight: 1.45 }}>A mascot that reads as AI, three concrete promises and one sign-in.</figcaption>
          </figure>
        </div>
        <p className="body" style={{ fontSize: 16, paddingLeft: 16, borderLeft: `3px solid ${BLUE}` }}>One participant pointed out that a female-named assistant can reinforce gender stereotypes. It was a single voice, but I documented it as a naming recommendation for the next phase.</p>
      </section>

      <section id="solution" className="reveal" style={{ gap: 32 }}>
        <CaseH2 n="08" italic="2.0">Betty</CaseH2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="stage" style={{ borderRadius: 6, background: "#DDDCFB", padding: "clamp(20px, 3vw, 40px)" }}>
            <Browser img={shot("/images/betty/chat.jpg", "Chat answer summarising interviews, with quotes linked to interview PDFs")}
              annotations={[{ label: "Verifiable: every quote links to its file", box: { left: "28%", top: "79%", width: "46%", height: "9%" } }]} />
          </div>
          <p className="body" style={{ fontSize: 17 }}><b>Cited answers.</b> Quotes come with a chip that opens the exact source, so researchers don’t have to re-read transcripts to double-check Betty.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[
            [shot("/images/betty/onboarding.jpg", "Onboarding modal listing secure AI, summaries, document search and pattern finding"), "Onboarding, once.", "Four things Betty does well, and that your data stays inside. Mascot concept generated with AI and art-directed by me."],
            [shot("/images/betty/documents.jpg", "My documents: files grouped by project, each marked shared or private"), "Invisible storage.", "No detour to Google Cloud. Files live in projects, shared or private, and Betty answers only from them."],
            [shot("/images/betty/project.jpg", "Project settings with a project name and its attached interview PDFs", 1512, 985), "Projects as memory.", "Chats and files stay together in a sidebar, so context survives between sessions."],
          ].map(([img, t, d]) => (
            <div key={t as string} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="stage" style={{ borderRadius: 6, background: "#DDDCFB", padding: 18 }}>
                <Browser img={img as ReturnType<typeof shot>} sizes="(max-width: 700px) 100vw, 320px" />
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.5 }}><b>{t as string}</b> {d as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="impact" className="reveal" style={{ padding: "clamp(24px, 3vw, 40px)", borderRadius: 6, background: "var(--ink)", color: "var(--paper)" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(32px, 3.4vw, 48px)", letterSpacing: "-0.045em" }}>09 <span className="serif" style={{ color: "#FF8A3D" }}>Impact</span></h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-end" }}>
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="kicker">First week, before and after</span>
            <span style={{ display: "flex", alignItems: "baseline", gap: 18, fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.85 }}>
              <span style={{ fontSize: "clamp(56px, 6vw, 88px)", color: "rgba(246,238,227,0.55)" }}>3</span>
              <span style={{ fontSize: "clamp(40px, 4vw, 64px)", color: "#FF8A3D" }} aria-label="to">→</span>
              <span style={{ fontSize: "clamp(80px, 9vw, 140px)" }}>14</span>
            </span>
            <span style={{ fontSize: 17, lineHeight: 1.45 }}>v1.5: 3 people tried it twice and dropped it within a week. Betty 2.0: 14 heavy users with no training, who became ambassadors and taught their own teams how to use it.</span>
          </div>
          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="kicker">What users told us</span>
            <span className="serif" style={{ fontSize: "clamp(22px, 2vw, 28px)", lineHeight: 1.25 }}>For the first time, they could see what other research teams had already studied: no duplicated studies, no re-interviewing the same consumers.</span>
          </div>
        </div>
        <div className="grid-auto">
          {[["Fewer hallucination reports", "Reported by the team after cited answers shipped."], ["Next: Finsight", "Betty’s extension for querying the company’s financial data, bringing finance teams in."], ["Expanding", "When I left, Betty was rolling out to marketing and supply chain."]].map(([t, d]) => (
            <div key={t} style={{ padding: 20, borderRadius: 6, background: "var(--ink-2)", display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="kicker">{t}</span><span style={{ fontSize: 15, lineHeight: 1.45 }}>{d}</span>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: "62ch", fontSize: 17, lineHeight: 1.55 }}>The lesson I took with me: with enterprise AI, <span className="serif" style={{ color: "#FF8A3D" }}>trust is a design problem before it’s a model problem.</span></p>
      </section>
    </CaseLayout>
  );
}
