const projects = [
  {
    index: "01",
    name: "CateMate",
    type: "AI category-analysis prototype",
    description:
      "源于 Shopee Summer Intern 期间的真实业务场景：将自然语言提需转化为可确认、可追溯的品类分析任务，让 LLM 的理解与编排和 Python / SQL 的确定性计算在同一工作流里协作。",
    role: "独立设计 + 开发",
    tags: ["AI workflow", "LLM", "Python / SQL"],
    href: "/projects/catemate",
  },
  {
    index: "02",
    name: "Beauty Decode",
    type: "Multimodal beauty agent",
    description:
      "把一看就忘的美妆教程变为可复用的美妆知识库，需要时随取随用。",
    role: "独立开发 + 部分产品工作",
    tags: ["Multimodal", "FastAPI", "React"],
    href: "/projects/beauty-decode",
  },
  {
    index: "03",
    name: "NikkiCode",
    type: "Independent PWA",
    description:
      "为暖暖系列玩家打造的游戏福利管家：聚合兑换码、提醒与兑换记录。",
    role: "独立设计 + 开发",
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
              <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-role"><b>MY ROLE</b>{project.role}</p></div>
              <div className="project-meta"><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><b>↗</b></div>
              <span className="project-doodle" aria-hidden="true"><i className="doodle-orbit" /><i className="doodle-star doodle-star-a" /><i className="doodle-star doodle-star-b" /></span>
            </a>
          ))}
        </div>
        <OceanFooter />
      </section>

      <section className="section notes" id="notes">
        <div className="thoughts-heading"><div><p className="eyebrow">03 / THOUGHTS</p><h2>Small observations,<br /><em>still gathering.</em></h2></div><p>关于 AI、产品与真实工作的一些未完成想法。<br />Click a card to read.</p></div>
        <ThoughtsAccordion>
          <details className="thought-card"><summary><span>01</span><div><p>AI TRANSFORMATION</p><h3>业务同学，如何判断一个业务适合怎样的 AI 化改造？</h3></div><b>＋</b></summary><article><section><h4>流程是否固定</h4><p>工作内容是否重复且耗时较长？如果内容重复，但耗时并不长，我并不建议 AI 化。搭建 AI 也需要时间；更何况，AI 本来就抽走了太多执行层的工作，人总需要一些坐在工位上、却可以放松大脑的时刻。</p></section><section><h4>责任是否重大</h4><p>在大多数情况下，AI 化最重要的问题是出错之后的责任归属。比如对外交付的文件和图表，很多时候即使可以用 AI，业务同学仍倾向于手动完成。一方面，是因为不能理解模型机制，便很难判断模型输出的正确性。</p><p>很多时候不是 AI 做不对，而是怕 AI 做不对。这一点和大量 2C AI 产品有共通性，也是从 chatbot 形态迁移到 agent 形态必须面对的核心问题。</p><p>对责任和可靠性要求越高，流程就要越死板。通用解法是：写一个足够详尽的需求，产出足够详细的任务框架，让 AI 写成固定脚本，再运行。也可以选择一些“上古方法”，比如搭建写满公式的 Excel。古法工作没有什么不好：对于高确定性、经常需要回溯的业务，没有比这更好的方法。</p></section><section><h4>上下文是否足够清楚</h4><p>大多数业务同学进行 AI 化时的核心问题，在于缺少对上下文的思考。AI 可以比喻成一个清北复交的实习生：刚来到组织里，头脑很聪明，但缺乏大量上下文信息。通常，组里会丢给新实习生一大堆 landing 文档，让她自行阅读；再让她从简单工作开始做，有问题再问。中午也会带 intern 吃顿饭，熟悉人员与组织架构。</p><p>然而，即使有大量文档沉淀，新实习生仍难免在前两周问大量问题。因为我们很难量化她的初始“上下文”：她无法完全精确地转达此前做过什么；即使职能接近，也可能因为组织形式、数据基建和工作习惯不同，导致上下文难以复用。</p><p>就像真实实习生一样，有人能快速上手，有人需要反复训练才能记住上下文；有人能快速掌握组织风格，有人则一直处于清澈而愚蠢的状态。AI 产品获得上下文输入后，理解力也会因其过往经历与自身能力不同而不同。</p><p>业务部门的 AI 转型，应将“上下文描述的难易程度”作为判断是否使用 AI 的核心因素之一。分析类工作更容易 AI 化，核心原因是原材料大多已经是文字：数据库、历史文档；而沟通类工作相对难以 AI 化，因为很难具体描述客户或老板喜欢什么样的风格与内容。简单来说，想象你正在带一个实习生：你会把什么工作交给她，什么工作自己做，又会怎样给她布置任务？</p></section><section><h4>硬件约束是否允许</h4><p>再强大的大脑配合残疾的身体，破坏力也是有限的。数据基建能力、权限能否打通、运行载体是否稳定（比如 PPT 很容易崩溃）、电脑会不会过热，才是现实中常常限制 AI 化的重要因素。</p></section><p className="thought-conclusion">总而言之，最推荐的方法依然是古法 <em>human-in-the-loop</em>：人有什么任务，就在需要的场景拉起自己的 AI（如 Codex）。</p></article></details>
          <details className="thought-card"><summary><span>02</span><div><p>WORK, NOT HYPE</p><h3>从工作，而不是画饼导向的 AI 运用方法</h3></div><b>＋</b></summary><article><section><h4>客观条件</h4><ul><li>你有什么 AI 工具可以使用？</li><li>在数据管理严格的公司，许多 AI 无法拉起数据或文档权限。如果公司条件不允许，先与 AI 聊聊，在合规前提下看看是否有可行的替代方案。</li><li>从套餐角度看，个人订阅的额度往往远大于公司设置的 API 计费额度。</li><li>你要不要搞开发？</li></ul></section><section><h4>主观条件</h4><p>不搞开发的人，少一点 AI 焦虑，少关注一点 AI 博客。<em>Talk is all you need.</em> 学一些如何和大模型交谈的基本准则，大于其他一切。</p></section></article></details>
          <details className="thought-card"><summary><span>03</span><div><p>THE BOSS VIEW</p><h3>从老板，而不是工作的视角下看 AI</h3></div><b>＋</b></summary><article><p className="thought-draft">这一则还在写。</p></article></details>
          <details className="thought-card"><summary><span>04</span><div><p>AGENT OR WORKFLOW?</p><h3>你真的需要自建 agent 吗？</h3></div><b>＋</b></summary><article><p>Agent 也有很多种，Codex 这种当然也是 agent。但一般 AI 化转型里想象的 agent，不管具有什么能力，不变的一点是：老板期待它能自巡航。什么叫自巡航？简单来说，就是可以帮他裁员的那种。</p><p>当 AI 的能力可以分为降本与增效两方面后，对老板来说，增效是虚的，降本是真的。AI 增的效能不能转化为利润还要两说，裁掉人，下一个月利润就会涨。</p><p>很 tricky 的一件事是：对现在的 agent 能力来说，增效的意义远远大于降本。AI 能提高人效，人效提高之后提高人员报酬，这对业务同学来说是正循环。业务同学愿意因此多学习 AI，组织也提高了人效，其实是变相降低人员成本。另一方面，主打裁员会让同学们非常抵触，直接阻止组织里上下文的有效流动。不给 AI 开发同学上下文信息，会非常直接地导致 agent 变笨；不提供实际使用场景，也会在客观上阻止 agent 的迭代与发展。</p><p>更重要的是，很多上下文无法沉淀：工作习惯、老板风格，以及组织里那些玄妙的东西，很难写成文字。这是一个非常依赖经验的黑盒。一旦希望 agent 实现自循环，就意味着它必须内置理解这些黑盒的能力。世界模型还很远，这些也一样。</p><p>如果所有人都驾驶自己的 AI，一切会好很多。人负责那些难以沉淀的部分，AI 只负责它能负责的部分。总而言之，请人专门开发 agent 的效果，大概率远不如给大家上 AI 培训课。当然，只上课、不用 AI，也绝无可能学会 AI 使用；给大家一个使用 AI 的动力同样重要。</p><p>如果能接受人来驾驶，采用“自己沉淀自己的 skill”的方法最好：轻便、自由。从这个视角看，未来 2C agent 产品的终局，可能真的就是一个足够好用的 Codex。<br /><strong>Workflow 就很好用。</strong></p></article></details>
        </ThoughtsAccordion>
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
import { ThoughtsAccordion } from "./ThoughtsAccordion";
