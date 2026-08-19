"use client";

import { useRef } from "react";

const roles = [
  {
    period: "2020 — 2022",
    title: "Product Manager · Frontend Developer",
    summary: "Progressed from hands-on product engineering into leadership of a five-person healthcare team. More than doubled monthly delivery throughput and guided privacy-sensitive laboratory and state-reporting integrations.",
  },
  {
    period: "2022 — 2023",
    title: "Frontend Developer",
    summary: "Next.js and TypeScript interfaces, motion-led experimental products, and a composable transactional-email system validated across major clients and devices.",
  },
  {
    period: "2023 — 2026",
    title: "React Native Developer",
    summary: "Maintained patient- and provider-facing healthcare apps across iOS and Android using React Native, TypeScript, GraphQL, and Apollo Client.",
  },
  {
    period: "2016 — 2020",
    title: "Earlier chapters",
    summary: "Frontend engineering, data-sensitive internal systems, and international technical customer support — where translating problems became part of the job.",
  },
];

export function ResumeModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openResume = () => dialogRef.current?.showModal();
  const closeResume = () => dialogRef.current?.close();

  return (
    <>
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
            <button type="button" onClick={() => window.print()}>Print / save PDF</button>
            <button type="button" onClick={closeResume} aria-label="Close résumé">Close ×</button>
          </div>

          <header className="resume-header">
            <div>
              <p className="kicker">Résumé · Short version</p>
              <h2 id="resume-title">José Ronaldo<br />Souza Jr.</h2>
            </div>
            <div className="resume-contact">
              <strong>Senior Mobile Engineer</strong>
              <span>React Native · TypeScript · iOS · Android</span>
              <a href="mailto:hello@zeronaldo.dev">hello@zeronaldo.dev</a>
              <a href="https://www.linkedin.com/in/zeronaldo" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </header>

          <section className="resume-summary">
            <p>I move comfortably between engineering and product: shaping the problem, building the system, and making delivery legible to the people around it.</p>
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
                  <div><h3>{role.title}</h3><p>{role.summary}</p></div>
                </div>
              ))}
            </div>
          </section>

          <footer className="resume-footer">
            <div><span>Core tools</span><p>React Native · TypeScript · GraphQL · Apollo Client · Next.js · Firebase</p></div>
            <div><span>Product & delivery</span><p>Technical leadership · Stakeholder communication · HL7-based reporting · Web3 APIs</p></div>
            <div><span>Education</span><p>Bachelor’s degree · Information Technology</p></div>
          </footer>
        </article>
      </dialog>
    </>
  );
}
