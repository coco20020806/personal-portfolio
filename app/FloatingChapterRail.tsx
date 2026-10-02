"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

export const CHAPTERS = [
  { id: "about", number: "01", label: "ABOUT" },
  { id: "work", number: "02", label: "PROJECTS" },
  { id: "experience", number: "03", label: "EXPERIENCE" },
  { id: "notes", number: "04", label: "THOUGHTS" },
  { id: "skills", number: "05", label: "SKILLS & TALENTS" },
  { id: "others", number: "06", label: "OTHERS" },
  { id: "contact", number: "07", label: "CONTACT" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readActiveChapter(): ChapterId | null {
  const marker = Math.min(240, window.innerHeight * 0.3);
  let current: ChapterId | null = null;

  for (const chapter of CHAPTERS) {
    const element = document.getElementById(chapter.id);
    if (!element) continue;
    if (element.getBoundingClientRect().top <= marker) {
      current = chapter.id;
    }
  }

  const scrolledToEnd =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 56;
  if (scrolledToEnd) return "contact";

  return current;
}

export function FloatingChapterRail() {
  const [activeId, setActiveId] = useState<ChapterId | null>(null);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const refreshActive = useCallback(() => {
    setActiveId(readActiveChapter());
  }, []);

  useEffect(() => {
    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        refreshActive();
      });
    };

    const nodes = CHAPTERS
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(requestUpdate, {
      root: null,
      rootMargin: "-18% 0px -55% 0px",
      threshold: [0, 0.12, 0.35, 0.6, 1],
    });
    for (const node of nodes) observer.observe(node);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [refreshActive]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.body.classList.add("chapter-menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("chapter-menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const goToChapter = (id: ChapterId, fromMobile = false) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveId(id);
    setOpen(false);

    const reduce = prefersReducedMotion();
    element.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);

    if (fromMobile) {
      window.setTimeout(() => {
        if (!element.hasAttribute("tabindex")) element.tabIndex = -1;
        element.focus({ preventScroll: true });
      }, reduce ? 0 : 320);
    }
  };

  const activeIndex = activeId ? CHAPTERS.findIndex((chapter) => chapter.id === activeId) : -1;
  const progress = activeIndex < 0 ? 0 : activeIndex / (CHAPTERS.length - 1);
  const meter = activeIndex < 0 ? 0 : (activeIndex + 1) / CHAPTERS.length;
  const preview = CHAPTERS[Math.max(0, activeIndex)];

  return (
    <>
      <nav className="chapter-rail" aria-label="页面章节导航">
        <div className="chapter-rail-track" aria-hidden="true">
          <span className="chapter-rail-progress" style={{ height: `${progress * 100}%` }} />
        </div>
        <ol className="chapter-rail-list">
          {CHAPTERS.map((chapter, index) => {
            const state = index < activeIndex ? "done" : index === activeIndex ? "current" : "todo";
            return (
              <li key={chapter.id} data-state={state}>
                <a
                  href={`#${chapter.id}`}
                  className="chapter-rail-link"
                  aria-current={state === "current" ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    goToChapter(chapter.id);
                  }}
                >
                  <i className="chapter-node" aria-hidden="true" />
                  <span className="chapter-num">{chapter.number}</span>
                  <span className="chapter-label">{chapter.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <nav className="chapter-dock" aria-label="页面章节导航">
        <div className="chapter-dock-bar">
          <p className="chapter-dock-now">
            <span>{preview.number}</span>
            <small>/</small>
            {preview.label}
          </p>
          <div className="chapter-dock-meter" aria-hidden="true">
            <i style={{ width: `${meter * 100}%` }} />
          </div>
          <button
            ref={menuButtonRef}
            className="chapter-dock-toggle"
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "关闭章节目录" : "打开章节目录"}
            onClick={() => setOpen((current) => !current)}
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
        <div className="chapter-dock-panel" id={panelId} hidden={!open}>
          <div className="chapter-dock-panel-head">
            <p>CHAPTERS</p>
            <button
              className="chapter-dock-close"
              type="button"
              aria-label="关闭章节目录"
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              Close
            </button>
          </div>
          <ol className="chapter-dock-list">
            {CHAPTERS.map((chapter, index) => {
              const state = index < activeIndex ? "done" : index === activeIndex ? "current" : "todo";
              return (
                <li key={chapter.id} data-state={state}>
                  <a
                    href={`#${chapter.id}`}
                    className="chapter-dock-link"
                    aria-current={state === "current" ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      goToChapter(chapter.id, true);
                    }}
                  >
                    <i className="chapter-node" aria-hidden="true" />
                    <span className="chapter-num">{chapter.number}</span>
                    <span className="chapter-label">{chapter.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
