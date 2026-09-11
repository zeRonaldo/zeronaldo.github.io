import { MotionObserver } from "./MotionObserver";
import { BackToTop, LivingNav } from "./LivingNav";
import Image from "next/image";
import portrait from "../public/about-dungeon-master.png";
import { ResumeModal } from "./ResumeModal";

const expertise = [
  {
    number: "01",
    title: "Product engineering",
    text: "I turn unclear business problems into systems people can actually use, covering requirements, trade-offs, interfaces, APIs, and delivery.",
  },
  {
    number: "02",
    title: "Mobile products",
    text: "React Native and TypeScript across iOS and Android, grounded in production maintenance rather than framework theatre.",
  },
  {
    number: "03",
    title: "Frontend systems",
    text: "Next.js, responsive interfaces, motion, transactional communication, and the reusable structure behind polished product experiences.",
  },
];

const fieldNotes = [
  {
    number: "01",
    company: "Popstand",
    title: "Healthcare operations leadership",
    meta: "Product management · ~5 engineers",
    text: "Led frontend, backend, and mobile delivery for an international healthcare client. Broke large Jira items into parallel workstreams, more than doubling monthly throughput while preserving peer review and integration quality.",
    details: ["HL7-based reporting across multiple US states", "Privacy-sensitive laboratory workflows", "Client communication and technical coaching"],
  },
  {
    number: "02",
    company: "Popstand",
    title: "A simpler way to create on-chain",
    meta: "Next.js · TypeScript · Web3",
    text: "Built the initial structure of an NFT marketplace across frontend, application APIs, deployment, and stakeholder communication. Designed a validated prototype that presented dependent blockchain operations as one guided creation flow.",
    details: ["Collection and asset creation", "Third-party Web3 APIs", "Feasibility before premature resilience"],
  },
  {
    number: "03",
    company: "Sortium",
    title: "Frontend systems with sharp edges",
    meta: "Next.js · TypeScript · Styled Components",
    text: "Built responsive, accessible, motion-led interfaces for established and experimental digital products. Designed a composable transactional-email system driven by reusable blocks and backend-provided content.",
    details: ["Gmail, Outlook, and device validation", "CSS animation and responsive UI", "Registration and error-state ownership"],
  },
  {
    number: "04",
    company: "Entermotion",
    title: "Production mobile, without mythology",
    meta: "Two healthcare apps · iOS + Android",
    text: "Helped build and evolve provider- and patient-facing React Native applications across iOS and Android, spanning scheduling, messaging, forms, billing, payments, and other healthcare workflows. Worked across GraphQL/Apollo data flows, performance, native behavior, application lifecycle, and difficult production issues.",
    details: ["React Native and TypeScript", "iOS + Android / native debugging", "GraphQL and Apollo Client", "International collaboration in English"],
  },
];

const principles = [
  ["Understand before building", "The first solution is usually just the fastest way to discover the real problem."],
  ["Make the complex legible", "Good engineering leaves fewer mysteries behind, both in the product and in the code."],
  ["Care about the last 10%", "Loading, failure, interruption, recovery. The unglamorous states are still the product."],
];

const heroModules = [
  { className: "module-a", icon: "/hero-icons/ai.png", code: "model.run()" },
  { className: "module-b", icon: "/hero-icons/cloud.png", code: "sync → cloud" },
  { className: "module-c", icon: "/hero-icons/react.png", code: "<state />" },
  { className: "module-d", icon: "/hero-icons/apple.png", code: "await native" },
  { className: "module-e", icon: "/hero-icons/android.png", code: "offline: true" },
  { className: "module-f", icon: "/hero-icons/code.png", code: "handle(edge)" },
  { className: "module-g", icon: "/hero-icons/css.png", code: "layout: intent" },
  { className: "module-h", icon: "/hero-icons/react.png", code: "RN ↔ native" },
];

export default function Home() {
  return (
    <main>
      <MotionObserver />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          SE<span>—</span>BR
        </a>
        <LivingNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-system" aria-hidden="true">
          {heroModules.map((module, index) => (
            <div className={`system-module ${module.className}`} key={module.className}>
              <div className="module-icon">
                <Image src={module.icon} alt="" fill sizes="(max-width: 760px) 12vw, 6vw" />
              </div>
              <span className="module-code">{module.code}</span>
              <small>0{index + 1}</small>
            </div>
          ))}
          <div className="system-block block-ink" />
          <div className="system-block block-forest" />
          <div className="system-block block-accent" />
        </div>
        <div className="eyebrow"><span>Software engineer</span><span>Brazil · Remote</span></div>
        <h1>
          <span className="type-line"><span>I build things.</span></span>
          <em>Mostly software.</em><br />Always with intent.
        </h1>
        <div className="hero-bottom">
          <p>Mobile products, useful systems, and the kind of problems that only show up after everything was supposed to be working.</p>
        </div>
      </section>

      <section className="section expertise" id="practice" data-reveal>
        <div className="section-intro">
          <p className="kicker">01 Practice · What I do</p>
          <h2>Engineering that survives contact with reality.</h2>
        </div>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article key={item.number} data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <a className="section-cue" href="#method" aria-label="Continue to how I work"><span className="chevron chevron-down" aria-hidden="true" /></a>
      </section>

      <section className="section method" id="method" data-reveal>
        <div className="method-title">
          <p className="kicker">02 Method · How I work</p>
          <h2>Less theatre.<br />More signal.</h2>
        </div>
        <div className="principles">
          {principles.map(([title, text], index) => (
            <article key={title} data-reveal>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
        <a className="section-cue" href="#experience" aria-label="Continue to selected experience"><span className="chevron chevron-down" aria-hidden="true" /></a>
      </section>

      <section className="section experience" id="experience" data-reveal>
        <p className="kicker">03 Selected experience · NDA-safe</p>
        <div className="experience-line">
          <h2>The work,<br />not the logo wall.</h2>
          <div className="experience-cta">
            <p>Product leadership · Web3 · Frontend systems · Production mobile</p>
            <ResumeModal />
          </div>
        </div>
        <div className="field-notes">
          {fieldNotes.map((note) => (
            <article key={note.number} data-reveal>
              <div className="field-note-index"><span>{note.number}</span><strong>{note.company}</strong></div>
              <p className="field-meta">{note.meta}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <ul>
                {note.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="nda-note">Specific enough to show the work. Careful enough to respect the people who trusted me with it.</p>
        <a className="section-cue" href="#lab" aria-label="Continue to experiments"><span className="chevron chevron-down" aria-hidden="true" /></a>
      </section>

      <section className="section lab" id="lab" data-reveal>
        <div>
          <p className="kicker">04 Lab / Experiments</p>
          <h2>Small ideas.<br />Sharp tools.<br />No roadmap.</h2>
        </div>
        <div className="lab-list">
          <article className="lab-note">
            <span className="status-dot" />
            <span className="lab-status">In progress · Personal experiment</span>
            <h3>RPG Session Board</h3>
            <p>A focused space for shaping tabletop sessions: keeping ideas, moving parts, and the inevitable chaos visible enough to actually use at the table.</p>
            <strong>Campaign notes deserve better than archaeology.</strong>
          </article>
          <article className="lab-note">
            <span className="status-dot" />
            <span className="lab-status">Product concept · Early exploration</span>
            <h3>Playdate</h3>
            <p>A local map for parents looking for places that are genuinely kid-friendly — with useful details about play areas, monitors, age ranges, pricing, and recent experiences from other parents.</p>
            <strong>Their play. Your date.</strong>
          </article>
        </div>
        <a className="section-cue" href="#about" aria-label="Continue to about"><span className="chevron chevron-down" aria-hidden="true" /></a>
      </section>

      <section className="section about" id="about" data-reveal>
        <div className="about-identity">
          <p className="kicker">05 About</p>
          <figure className="portrait-frame">
            <Image
              src={portrait}
              alt="Black-and-white portrait wearing a Dungeon Master hat"
              fill
              sizes="(max-width: 760px) 90vw, 28vw"
              placeholder="blur"
            />
            <figcaption>Systems, stories — same problem: edge cases.</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <h2>I’m interested in the whole thing.</h2>
          <p>Senior Mobile & Software Engineer with 8 years of experience building and scaling cross-platform applications for international clients. Specializes in navigating complex technical constraints, regulatory integrations (such as healthcare workflows and HL7 standards), and bridging engineering execution with product clarity.</p>
          <p>I like understanding the system, finding where it bends, and building something simpler, reliable, and pleasant to use. Outside work, the same instinct usually turns into a D&amp;D campaign.</p>
        </div>
        <aside><span>Currently</span><p>Building mobile software from Brazil after years of working in English with international products, teams, and stakeholders.</p></aside>
        <a className="section-cue" href="#contact" aria-label="Continue to contact"><span className="chevron chevron-down" aria-hidden="true" /></a>
      </section>

      <footer id="contact" data-reveal>
        <p className="kicker">06 Contact</p>
        <h2>Have a hard problem?<br /><em>Good.</em></h2>
        <div className="footer-bottom">
          <p>Open to thoughtful conversations about products, engineering, and ambitious things worth building.</p>
          <div className="contact-links">
            <a href="mailto:hello@zeronaldo.dev">hello@zeronaldo.dev ↗</a>
            <a href="https://www.linkedin.com/in/zeronaldo" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-meta"><span>© {new Date().getFullYear()}</span><span>Built with care. And CSS.</span></div>
      </footer>

      <BackToTop />
    </main>
  );
}
