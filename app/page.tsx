import { MotionObserver } from "./MotionObserver";
import { LivingNav } from "./LivingNav";
import Image from "next/image";
import portrait from "../public/about-dungeon-master.png";
import { ResumeModal } from "./ResumeModal";

const expertise = [
  {
    number: "01",
    title: "Product engineering",
    text: "From an unclear business problem to a system people can actually use — requirements, trade-offs, interfaces, APIs, and delivery included.",
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
    text: "Maintained patient- and provider-facing React Native applications covering scheduling, messaging, forms, notifications, billing, and payments. Supported the mobile tech lead in investigating and validating production bugs.",
    details: ["React Native and TypeScript", "GraphQL and Apollo Client", "Remote collaboration in English"],
  },
];

const principles = [
  ["Understand before building", "The first solution is usually just the fastest way to discover the real problem."],
  ["Make the complex legible", "Good engineering leaves fewer mysteries behind — in the product and in the code."],
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
          <a className="round-link" href="#practice" aria-label="Explore my practice">↓</a>
        </div>
      </section>

      <section className="section expertise" id="practice" data-reveal>
        <div className="section-intro">
          <p className="kicker">What I do</p>
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
      </section>

      <section className="section method" id="method" data-reveal>
        <div className="method-title">
          <p className="kicker">How I work</p>
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
      </section>

      <section className="section experience" id="experience" data-reveal>
        <p className="kicker">Selected experience · NDA-safe</p>
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
      </section>

      <section className="section lab" id="lab" data-reveal>
        <div>
          <p className="kicker">Lab / Experiments</p>
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
      </section>

      <section className="section about" id="about" data-reveal>
        <div className="about-identity">
          <p className="kicker">About</p>
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
          <p>I’m a software engineer focused on mobile products and complex interactions. React Native is where I spend most of my time, but frameworks are tools, not identities.</p>
          <p>I like understanding the system, finding where it bends, and building something simpler, reliable, and pleasant to use.</p>
        </div>
        <aside><span>Currently</span><p>Building mobile software from Brazil, comfortably working in English across international products, platforms, and time zones.</p></aside>
      </section>

      <footer id="contact" data-reveal>
        <p className="kicker">Contact</p>
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
    </main>
  );
}
