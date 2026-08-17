const expertise = [
  {
    number: "01",
    title: "Mobile engineering",
    text: "Product-minded mobile development across React Native, iOS, Android, and the native edges in between.",
  },
  {
    number: "02",
    title: "Product systems",
    text: "Interfaces, APIs, data flows, offline states, and the invisible structure that makes a product feel obvious.",
  },
  {
    number: "03",
    title: "The difficult bits",
    text: "Performance, background behavior, platform constraints, and bugs with suspiciously good timing.",
  },
];

const principles = [
  ["Understand before building", "The first solution is usually just the fastest way to discover the real problem."],
  ["Make the complex legible", "Good engineering leaves fewer mysteries behind — in the product and in the code."],
  ["Care about the last 10%", "Loading, failure, interruption, recovery. The unglamorous states are still the product."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          SE<span>—</span>BR
        </a>
        <nav aria-label="Primary navigation">
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Contact ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Software engineer</span><span>Brazil · Remote</span></div>
        <h1>I build things.<br /><em>Mostly software.</em><br />Always with intent.</h1>
        <div className="hero-bottom">
          <p>Mobile products, useful systems, and the kind of problems that only show up after everything was supposed to be working.</p>
          <a className="round-link" href="#practice" aria-label="Explore my practice">↓</a>
        </div>
      </section>

      <section className="section expertise" id="practice">
        <div className="section-intro">
          <p className="kicker">What I do</p>
          <h2>Engineering that survives contact with reality.</h2>
        </div>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method">
        <div className="method-title">
          <p className="kicker">How I work</p>
          <h2>Less theatre.<br />More signal.</h2>
        </div>
        <div className="principles">
          {principles.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section lab">
        <div>
          <p className="kicker">Lab / Experiments</p>
          <h2>Small ideas.<br />Sharp tools.<br />No roadmap.</h2>
        </div>
        <div className="lab-note">
          <span className="status-dot" />
          <p>A place for prototypes, open-source tools, visual studies, and other things built to answer “what if?”</p>
          <strong>Experiments arriving as they become interesting.</strong>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="kicker">About</p>
        <div className="about-copy">
          <h2>I’m interested in the whole thing.</h2>
          <p>I’m a software engineer focused on mobile products and complex interactions. React Native is where I spend most of my time, but frameworks are tools, not identities.</p>
          <p>I like understanding the system, finding where it bends, and building something simpler, reliable, and pleasant to use.</p>
        </div>
        <aside><span>Currently</span><p>Building mobile software from Brazil, working across products, platforms, and time zones.</p></aside>
      </section>

      <section className="section experience">
        <p className="kicker">Experience, safely summarized</p>
        <div className="experience-line">
          <h2>Years spent building and improving digital products.</h2>
          <p>Cross-functional teams · Mobile architecture · Product engineering · Technical direction</p>
        </div>
        <p className="nda-note">No client names, secret dashboards, or suspiciously specific growth charts. Good work can respect a good NDA.</p>
      </section>

      <footer id="contact">
        <p className="kicker">Contact</p>
        <h2>Have a hard problem?<br /><em>Good.</em></h2>
        <div className="footer-bottom">
          <p>Open to thoughtful conversations about products, engineering, and ambitious things worth building.</p>
          <a href="mailto:hello@yourdomain.com">hello@yourdomain.com ↗</a>
        </div>
        <div className="footer-meta"><span>© {new Date().getFullYear()}</span><span>Built with care. And CSS.</span></div>
      </footer>
    </main>
  );
}

