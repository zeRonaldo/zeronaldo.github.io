"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "practice", label: "Practice" },
  { id: "method", label: "Method" },
  { id: "experience", label: "Experience" },
  { id: "lab", label: "Lab" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function LivingNav() {
  const [active, setActive] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    let frame: number | null = null;

    const updateActiveSection = () => {
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 72;
      const sampleY = headerHeight + Math.min(window.innerHeight * 0.28, 240);
      const current = elements.find((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top <= sampleY && bounds.bottom > sampleY;
      });

      if (current) {
        setActive(current.id);
        setVisited((previous) => {
          if (previous.has(current.id)) return previous;
          return new Set(previous).add(current.id);
        });
      } else if (window.scrollY < headerHeight) {
        setActive(null);
      }

      frame = null;
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="living-nav" aria-label="Page sections">
      {sections.map(({ id, label }, index) => {
        const isActive = active === id;
        const isVisited = visited.has(id);

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`${isActive ? "is-active" : ""} ${isVisited ? "is-visited" : ""}`}
            aria-current={isActive ? "location" : undefined}
          >
            <span className="nav-index">0{index + 1}</span>
            <span className="nav-label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export function BackToTop() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const updateTone = () => {
      const sampleY = window.innerHeight - 50;
      const darkSection = ["method", "contact"].some((id) => {
        const bounds = document.getElementById(id)?.getBoundingClientRect();
        return bounds && bounds.top <= sampleY && bounds.bottom >= sampleY;
      });

      setOnDark(darkSection);
    };

    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);
    return () => {
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, []);

  return (
    <a
      className={`round-link back-to-top${onDark ? " on-dark" : ""}`}
      href="#top"
      aria-label="Back to masthead"
    >
      <span className="chevron chevron-up" aria-hidden="true" />
    </a>
  );
}
