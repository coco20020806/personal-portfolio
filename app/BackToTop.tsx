"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const revealPoint = Math.min(720, Math.max(360, window.innerHeight * 0.65));
      setIsVisible(window.scrollY > revealPoint);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label="返回页面顶部"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <span aria-hidden="true">↑</span>
      <small>TOP</small>
    </button>
  );
}
