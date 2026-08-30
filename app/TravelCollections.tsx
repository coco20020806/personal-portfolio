"use client";

import { useEffect, useRef, useState } from "react";

const europeStops = [
  ["01", "苏黎世", "01苏黎世.webp"], ["02", "琉森", "02琉森.webp"],
  ["03", "米兰", "03米兰.webp"], ["04", "佛罗伦萨", "04佛罗伦萨.webp"],
  ["05", "少女峰", "05少女峰.webp"], ["06", "西班牙", "06西班牙.webp"],
  ["07", "葡萄牙", "07葡萄牙.webp"], ["08", "好望角", "08好望角.webp"],
  ["09", "荷兰", "09荷兰.webp"], ["10", "比利时", "10比利时.webp"],
  ["11", "卢森堡", "11卢森堡.webp"], ["12", "匈牙利", "12匈牙利.webp"],
  ["13", "奥地利", "13奥地利.webp"], ["14", "捷克", "14捷克.webp"],
  ["15", "南法", "15南法.webp"], ["16", "摩纳哥", "16摩纳哥.webp"],
  ["17", "尼斯", "17尼斯.webp"], ["18", "圣托里尼", "18圣托里尼.webp"],
  ["19", "希腊", "19希腊.webp"], ["20", "马特洪峰", "20马特洪峰.webp"],
  ["21", "瑞吉山", "21瑞吉山.webp"],
] as const;

export function TravelCollections() {
  const [swissOpen, setSwissOpen] = useState(false);
  const [activeStop, setActiveStop] = useState<number | null>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeStop === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveStop(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeStop]);

  const scrollFilmstrip = (direction: -1 | 1) => filmstripRef.current?.scrollBy({ left: direction * 620, behavior: "smooth" });

  return <div className="travel-collections">
    <div className="passport-row">
      <button className="passport-card swiss" type="button" aria-expanded={swissOpen} aria-controls="swiss-travel-archive" onClick={() => setSwissOpen((open) => !open)}><span className="passport-stamp">SWISS</span><p>EXCHANGE</p><h3>Switzerland</h3><strong>2023.09 — 2024.02</strong><small>苏黎世大学 · 欧洲独旅</small><i aria-hidden="true">{swissOpen ? "−" : "＋"}</i><span className="passport-action">{swissOpen ? "Close stories" : "View stories"} ↘</span></button>
      <article className="passport-card japan"><span className="passport-stamp">JAPAN</span><p>EXCHANGE</p><h3>Japan</h3><strong>2025.09 — 2026.02</strong><small>半年交换 · 继续在路上学习</small><i>✦</i></article>
    </div>
    {swissOpen && <section className="travel-archive" id="swiss-travel-archive" aria-labelledby="swiss-archive-title">
      <header className="travel-archive-head"><div><p>SWITZERLAND EXCHANGE · 2023—2024</p><h3 id="swiss-archive-title">从苏黎世出发，<br /><em>一个人去看欧洲。</em></h3></div><p>在苏黎世大学交换期间，我从瑞士出发环游欧洲。大多数旅程都是独自完成：一路收到许多陌生人的帮助，也经历过一些至今想起仍会后怕的危险时刻。</p></header>
      <div className="travel-film-controls"><p><span>01</span> — <span>21</span> / CHRONOLOGICAL TRAVEL ARCHIVE</p><div><button type="button" onClick={() => scrollFilmstrip(-1)} aria-label="查看前面的旅行照片">←</button><button type="button" onClick={() => scrollFilmstrip(1)} aria-label="查看后面的旅行照片">→</button></div></div>
      <div className="travel-filmstrip" ref={filmstripRef}>{europeStops.map(([number, place, file], index) => <button className="travel-frame" type="button" key={file} onClick={() => setActiveStop(index)} aria-label={`查看第 ${number} 站 ${place} 的大图`}><img src={`/travel/europe/${file}`} alt={`${place}旅行照片`} loading="lazy" /><span><b>{number}</b><strong>{place}</strong></span></button>)}</div>
      <p className="travel-swipe-note">Drag / swipe to follow the journey →</p>
    </section>}
    {activeStop !== null && <div className="travel-lightbox" role="dialog" aria-modal="true" aria-label={`${europeStops[activeStop][1]}旅行照片大图`} onClick={() => setActiveStop(null)}><button type="button" className="travel-lightbox-close" onClick={() => setActiveStop(null)} aria-label="关闭大图">×</button><figure onClick={(event) => event.stopPropagation()}><img src={`/travel/europe/${europeStops[activeStop][2]}`} alt={`${europeStops[activeStop][1]}旅行照片大图`} /><figcaption><span>{europeStops[activeStop][0]} / 21</span><strong>{europeStops[activeStop][1]}</strong></figcaption></figure></div>}
  </div>;
}
