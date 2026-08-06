const projects = [
  {
    index: "01",
    name: "CateMate",
    type: "AI category-analysis prototype",
    description:
      "将自然语言提需转化为可确认、可追溯的品类分析任务；让 LLM 的理解与编排，和 Python / SQL 的确定性计算在同一条工作流里协作。",
    tags: ["AI workflow", "LLM", "Python / SQL"],
    href: "/projects/catemate",
  },
  {
    index: "02",
    name: "Beauty Decode",
    type: "Multimodal beauty agent",
    description:
      "从视频解析、结构化教程到妆容预览与分步跟练，把一次性内容消费变成可复用的个人美妆学习体验。",
    tags: ["Multimodal", "FastAPI", "React"],
    href: "/projects/beauty-decode",
  },
  {
    index: "03",
    name: "NikkiCode",
    type: "Independent PWA",
    description:
      "为暖暖系列玩家打造的游戏福利管家：聚合兑换码、提醒与兑换记录，并持续根据真实使用反馈迭代。",
    tags: ["0 → 1", "PWA", "3k+ MAU"],
    href: "/projects/nikkicode",
  },
];

const experiences = [
  ["2026 — now", "Shopee", "生活品类策略与业务 AI 转型"],
  ["2026", "每妆小解", "多模态美妆 Agent · 全栈开发"],
  ["2025", "小红书", "出海项目组 · 产品运营"],
  ["2025", "欧莱雅", "科颜氏 · 电商与广告"],
  ["2024", "字节跳动", "战略运营 · 大众消费组"],
  ["2023", "华映资本", "消费 TMT 组 · 投资研究"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="monogram" href="#top" aria-label="返回顶部">KFC</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO · 2026</p>
          <div className="hero-title-row">
            <h1>Hi!<br />I&apos;m <em className="title-name">KFC<button className="title-name-trigger" type="button" aria-describedby="title-name-note" aria-label="KFC 名称说明"><span>?</span></button><span className="title-name-note" id="title-name-note" role="tooltip">KFC 是 <strong>Kong Fei Coco</strong> 的缩写。<i className="title-spark title-spark-a" /><i className="title-spark title-spark-b" /><i className="title-spark title-spark-c" /></span></em></h1>
            <div className="hero-jumps" aria-label="快速跳转">
              <a href="#work"><span>01</span> Projects <b>↘</b><i className="spark spark-a" /><i className="spark spark-b" /><i className="spark spark-c" /></a>
              <a href="#journey"><span>02</span> Experiences <b>↘</b><i className="spark spark-a" /><i className="spark spark-b" /><i className="spark spark-c" /></a>
              <a href="#notes"><span>03</span> Thoughts <b>↘</b><i className="spark spark-a" /><i className="spark spark-b" /><i className="spark spark-c" /></a>
            </div>
          </div>
          <p className="hero-subtitle">ai <span>×</span> life <span>×</span> thoughts</p>
          <a className="scroll-cue" href="#about">Explore <i>↓</i><span className="explore-spark explore-spark-a" /><span className="explore-spark explore-spark-b" /><span className="explore-spark explore-spark-c" /></a>
        </div>
        <div className="hero-ocean" aria-hidden="true">
          <span className="wave wave-one" />
          <span className="wave wave-two" />
          <span className="wave wave-three" />
          <span className="sun-glint" />
        </div>
      </section>

      <section className="section about" id="about">
        <p className="eyebrow">01 / ABOUT</p>
        <div className="about-grid">
          <h2>Curiosity<br />leads me <em>forward.</em></h2>
          <div className="about-copy">
            <p>Hi! 我是孔斐。目前在复旦大学管理学院攻读硕士；本科就读于上海交通大学。</p>
            <p>从消费、内容、电商、投资；从咨询、金融、互联网、快消，我积累了丰富的跨行业业务经验。现在，我持续思考：AI 能为我们的工作和生活做些什么？</p>
            <div className="keywords"><span>AI PRODUCT</span><span>STRATEGY</span><span>PROTOTYPING</span><span>CONSUMER TECH</span></div>
          </div>
          <PhotoFlip />
        </div>
        <OceanFooter />
      </section>

      <section className="section work" id="work">
        <div className="section-heading">
          <p className="eyebrow">02 / RECENTLY MAKING</p>
          <p>产品、代码和一些把想法落地的尝试。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-card" key={project.name} href={project.href} target={project.href.startsWith("/") ? undefined : "_blank"} rel={project.href.startsWith("/") ? undefined : "noreferrer"}>
              <div className="project-index">{project.index}</div>
              <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p></div>
              <div className="project-meta"><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><b>↗</b></div>
            </a>
          ))}
        </div>
        <OceanFooter />
      </section>

      <section className="section notes" id="notes">
        <p className="eyebrow">03 / THOUGHTS</p>
        <div className="notes-inner"><p className="notes-mark">~</p><h2>Small observations,<br />still <em>gathering.</em></h2><p>这里会慢慢放入关于 AI、产品与生活的随想。<br />Coming soon.</p></div>
        <OceanFooter />
      </section>

      <section className="section journey" id="journey">
        <div className="section-heading"><p className="eyebrow">04 / JOURNEY</p><p>在策略、消费与技术之间，持续移动。</p></div>
        <div className="timeline">
          {experiences.map(([date, company, role]) => <div className="timeline-row" key={company}><p>{date}</p><h3>{company}</h3><p>{role}</p></div>)}
        </div>
        <OceanFooter />
      </section>

      <footer id="contact">
        <p className="eyebrow">05 / LET&apos;S CONNECT</p>
        <h2>Let&apos;s make<br />something <em>useful.</em></h2>
        <div className="contact-links"><a href="mailto:24210690029@m.fudan.edu.cn">24210690029@m.fudan.edu.cn <b>↗</b></a><a href="https://github.com/coco20020806" target="_blank" rel="noreferrer">GitHub / coco20020806 <b>↗</b></a></div>
        <p className="footer-signoff">KFC · AI × LIFE × THOUGHTS · 2026</p>
        <div className="footer-ocean" aria-hidden="true"><span /><span /></div>
      </footer>
    </main>
  );
}

function OceanFooter() { return <div className="ocean-footer" aria-hidden="true"><span /><span /><span /></div>; }
import { PhotoFlip } from "./PhotoFlip";
