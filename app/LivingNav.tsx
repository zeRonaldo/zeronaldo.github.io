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

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (!current) return;

        const id = current.target.id;
        setActive(id);
        setVisited((previous) => {
          if (previous.has(id)) return previous;
          return new Set(previous).add(id);
        });
      },
      { rootMargin: "-18% 0px -68%", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
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
