"use client";

import { useState } from "react";

export function PhotoFlip() {
  const [flipped, setFlipped] = useState(false);
  const location = flipped ? "Belgium, 2023" : "Budapest, 2024";

  return (
    <button
      className="photo-flip"
      type="button"
      onClick={() => setFlipped((current) => !current)}
      aria-pressed={flipped}
      aria-label={`翻转旅行照片；当前为 ${location}`}
    >
      <span className={`photo-flip-card${flipped ? " is-flipped" : ""}`}>
        <span className="photo-face photo-front">
          <img src="/about-kfc.jpg" alt="孔斐在布达佩斯的个人照片" />
          <span className="photo-caption">Budapest, 2024</span>
          <span className="photo-turn">turn over ↗</span>
        </span>
        <span className="photo-face photo-back">
          <img src="/about-kfc-belgium.jpg" alt="孔斐在比利时的个人照片" />
          <span className="photo-caption">Belgium, 2023</span>
          <span className="photo-turn">turn back ↗</span>
        </span>
      </span>
    </button>
  );
}
