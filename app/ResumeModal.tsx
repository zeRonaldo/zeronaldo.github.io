"use client";

import { useRef } from "react";

const roles = [
  {
    period: "2023 — 2026",
    company: "Entermotion Design Studio Inc",
    title: "React Native Developer",
    summary: "Helped build and evolve patient- and provider-facing healthcare applications across iOS and Android using React Native and TypeScript. Worked across complex GraphQL/Apollo data flows, performance, native behavior, application lifecycle, and production debugging",
  },
  {
    period: "2022 — 2023",
    company: "Sortium",
    title: "Frontend Developer",
    summary: "Built production Next.js and TypeScript experiences for a digital-collectibles platform serving an estimated 40k–60k active users, including responsive, motion-heavy interfaces and a composable transactional-email system validated across Gmail, Outlook, and mobile clients.",
  },
  {
    period: "2021 — 2022",
    company: "Popstand",
    title: "Product Manager",
    summary: "Led a multidisciplinary team of approximately five engineers. More than doubled monthly delivery throughput and guided privacy-sensitive laboratory and state-reporting integrations.",
  },
  {
    period: "2020 — 2021",
    company: "Popstand",
    title: "Frontend Developer",
    summary: "Built across healthcare, React Native, Next.js, Firebase, and Web3, including a stakeholder-validated prototype for a unified NFT-creation workflow.",
  },
  {
    period: "2018 — 2020",
    company: "Fractal Tecnologia · Fácil Soluções",
    title: "Frontend Developer · Development Intern",
    summary: "Built React/Redux applications and data-sensitive internal systems using reusable components, automated tests, PHP, and PostgreSQL.",
  },
];

export function ResumeModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openResume = () => dialogRef.current?.showModal();
  const closeResume = () => dialogRef.current?.close();

  return (
    <div className="resume-modal-root">
      <button className="resume-trigger" type="button" onClick={openResume}>
        Open résumé <span aria-hidden="true">↗</span>
      </button>

      <dialog
        className="resume-dialog"
        ref={dialogRef}
        aria-labelledby="resume-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeResume();
        }}
      >
        <article className="resume-sheet">
          <div className="resume-actions" aria-label="Résumé actions">
            <a
              href="/jose-ronaldo-souza-jr-full-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Full résumé (PDF) ↗
            </a>
            <a
              href="/jose-ronaldo-souza-jr-one-page-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              One-page résumé (PDF) ↗
            </a>
            <button type="button" onClick={closeResume} aria-label="Close résumé">Close ×</button>
          </div>

          <header className="resume-header">
            <div>
              <p className="kicker">Résumé · Print edition</p>
              <h2 id="resume-title">José Ronaldo<br />Souza Jr.</h2>
            </div>
            <div className="resume-contact">
              <strong>Senior Software Engineer · Mobile & Product Engineering</strong>
              <span>João Pessoa, Brazil · Remote (UTC-3)</span>
              <a href="mailto:hello@zeronaldo.dev">hello@zeronaldo.dev</a>
              <a href="https://www.linkedin.com/in/zeronaldo" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </header>

          <section className="resume-summary">
            <p>Software engineer with eight years across engineering and product roles, combining mobile and frontend development with technical leadership for international clients.</p>
            <aside>
              <span>Based in Brazil</span>
              <span>International & distributed teams</span>
              <span>English · C2 proficient</span>
            </aside>
          </section>

          <section className="resume-body" aria-label="Professional experience">
            <p className="kicker">Selected experience</p>
            <div className="resume-roles">
              {roles.map((role) => (
                <div className="resume-role" key={`${role.period}-${role.title}`}>
                  <span>{role.period}</span>
                  <div><small>{role.company}</small><h3>{role.title}</h3><p>{role.summary}</p></div>
                </div>
              ))}
            </div>
          </section>

          <footer className="resume-footer">
            <div><span>Core tools</span><p>React Native · TypeScript · Next.js · GraphQL · Apollo Client · Firebase</p></div>
            <div><span>Product & delivery</span><p>Technical leadership · Stakeholder communication · HL7-based reporting · Web3 APIs</p></div>
            <div><span>Education</span><p>Bachelor’s degree incomplete · Information Technology</p></div>
          </footer>
        </article>
      </dialog>
    </div>
  );
}
