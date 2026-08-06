"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ThoughtsAccordion({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const onToggle = (event: Event) => {
      const card = event.target;
      if (!(card instanceof HTMLDetailsElement) || !card.open) return;

      stack.querySelectorAll("details[open]").forEach((other) => {
        if (other !== card) other.removeAttribute("open");
      });

      card.classList.remove("is-opening");
      requestAnimationFrame(() => card.classList.add("is-opening"));
      window.setTimeout(() => card.classList.remove("is-opening"), 720);
    };

    stack.addEventListener("toggle", onToggle, true);
    return () => stack.removeEventListener("toggle", onToggle, true);
  }, []);

  return <div className="thought-stack" ref={stackRef}>{children}</div>;
}
