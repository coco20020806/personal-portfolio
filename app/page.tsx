const projects = [
  {
    index: "01",
    name: "CateMate",
    type: "Independent project · AI category analysis",
    status: "原型",
    statusKind: "prototype",
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
    status: "已上线 · 原型",
    statusKind: "live-prototype",
    description:
      "把一看就忘的美妆教程变为可复用的美妆知识库，需要时随取随用。",
    role: "独立开发 + 部分产品工作",
    tags: ["Multimodal", "FastAPI", "React"],
    href: "/projects/beauty-decode",
  },
  {
    index: "03",
    name: "NikkiCode",
    type: "Independent project · PWA",
    status: "已上线 · 完成",
    statusKind: "complete",
    description:
      "为暖暖系列玩家打造的游戏福利管家：聚合兑换码、提醒与兑换记录。",
    role: "独立设计 + 开发",
    tags: ["0 → 1", "PWA", "3k+ MAU"],
    href: "/projects/nikkicode",
  },
];

const experiences = [
  { date: "2026.06 — now", company: "Shopee", role: "管培暑期 · 生活品类策略与业务 AI 转型", highlights: ["负责生活品类策略及部门 AI 转型：拆解品类分析工作流，识别自动化机会，并从准确性、可审计性、标准化程度与业务判断依赖度划分 AI 与人工协同边界。", "0—1 独立开发 CateMate 品类分析 AI 原型：让 LLM 负责需求理解与编排、Python / SQL 负责固定计算，并通过人工确认节点、中间产物与数据来源留痕，支持结果复用、回溯与审计。", "围绕 5→2 的品类策略人员优化需求，搭建自动化看板、agent、skills 等，在小组内实现约 80% 的工作量自动化，并评估部门既有 AI 工具的可用性、维护性与实际效率。"] },
  { date: "2025.07 — 2025.09", company: "欧莱雅 · 科颜氏", role: "电商与广告 · 天猫渠道", highlights: ["协助活动目标制定、拆分及核心指标追踪，支持团队基于实际销售与目标差异快速定位待改善环节。", "基于电商数据开展达人直播策略、品牌与单品机会点等专题市场研究。"] },
  { date: "2025.04 — 2025.07", company: "小红书", role: "出海项目组 · 产品运营", highlights: ["基于社区调性、地区特性与用户增长目标，完成内容运营及专题活动从用户筛选、活动设计、发布沟通、数据自动化整理到复盘的全流程。", "“四周挑战”活动中，30% 的种子用户在激励下至少新增发布 1 条内容。", "参与竞品与市场调研、新市场合规研究及国别研究，协助产品新功能设计与后续运营。"] },
  { date: "2024.06 — 2024.09", company: "字节跳动", role: "战略运营 · 大众消费组", highlights: ["服务中国广告销售业务，跟踪大众消费、平台电商与内容消费行业动态，制作竞媒与行业头部玩家周报 / 双周报，供业务组周会使用。", "撰写 24Q2 头部平台电商财报点评，跟踪竞品尤其是广告业务动向；在职期间，组内 2 个重点专题由竞对周报线索发掘。"] },
  { date: "2023.02 — 2023.08", company: "华映资本", role: "消费 TMT 组 · 投资研究", highlights: ["参与消费科技、消费品牌等领域投资研究与决策支持，独立完成消费科技项目投资决策书的行业分析部分，以及农业育种行业报告（30+ 页）。", "累计撰写行业研究报告 50+ 页，涵盖市场规模、竞争格局、上市公司财务概览与可比公司分析。"] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="monogram" href="#top" aria-label="返回顶部">KFC</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
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
              <a href="#experience"><span>02</span> Experience <b>↘</b><i className="spark spark-a" /><i className="spark spark-b" /><i className="spark spark-c" /></a>
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
              <div className="project-main"><div className="project-labels"><p className="project-type">{project.type}</p><span className={`project-status ${project.statusKind}`}>{project.status}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-role"><b>MY ROLE</b>{project.role}</p></div>
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
          <details className="thought-card"><summary><span>01</span><div><p>AI TRANSFORMATION</p><h3>如何快速判断一个业务适合进行怎样的 AI 化改造？</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>流程是否固定、工作内容是否重复且耗时长？</h4><b>＋</b></summary><div><p>重复但耗时不长，其实不一定要 AI 化。搭建 AI 也需要时间，后期还需要维护。更何况，AI 本来就抽走了太多执行层的工作：人总需要一些坐在工位上、却可以放松大脑的时刻。</p></div></details><details className="thought-module"><summary><span>02</span><h4>责任是否重大？</h4><b>＋</b></summary><div><p>很多时候不是「AI 做不对」，而是「怕 AI 做不对」。在 chatbot 阶段已经出现的置信度问题，在 agent 形态只会更严重。比如对外交付的数据和图表，尤其是向上交付时，很多时候即使可以用 AI，更多业务同学仍倾向于手动完成：一方面，业务同学很难理解模型机制，也就很难判断输出的正确性；另一方面，出错后背锅的还是自己。</p><p>对责任和可靠性要求越高，流程就要越死板。通用解法是：写一个足够详尽的需求，产出一个足够详细的任务框架，让 AI 写成固定脚本，再运行。所以，也可以选择一些上古方法，比如搭建几个写满公式的 Excel。古法工作没有什么不好：对于高确定性、经常需要回溯的业务，没有比这更好的方法。</p></div></details><details className="thought-module"><summary><span>03</span><h4>产出是否易于审计？</h4><b>＋</b></summary><div><p>责任是否重大的另一个伴随因素是：如果错误越容易被发现，场景就越适合 AI 化。用 AI 做 PPT 就比做数据分析更合适——审计数据分析结果是否正确的过程，堪比自己拉数；但 PPT 画错了，一眼就能看出来。</p></div></details><details className="thought-module"><summary><span>04</span><h4>上下文是否便于整理？</h4><b>＋</b></summary><div><p>大多数业务同学进行 AI 化的核心问题，在于非常缺少对上下文的思考。AI 可以比喻成一个清北复交的实习生：刚来到组织里，虽然有聪明的头脑，但缺乏大量上下文信息。通常，组里会丢给新实习生一大堆 landing 文档让她自行阅读，再让她从简单的工作开始做，有问题再问；当天中午也可能带 intern 吃顿饭，熟悉人员与组织架构。</p><p>然而，即使组内有大量文档沉淀，新来的实习生仍无法避免在前两周问大量问题。因为我们很难量化一个新 intern 的初始“上下文”：她不会完全精确地转达此前做过什么实习；即使职能接近，也可能因为组织形式、数据基建与工作习惯不同，出现上下文难以复用的情况。</p><p>就像真实实习生来到组里之后，有的人能快速上手，有的人则可能要反复训练才能记住一些上下文；有的人能快速掌握组织风格，有的人则一直处于清澈而愚蠢的状态。所有 AI 产品在得到上下文输入之后，其理解力也会因过往经历与自身能力不同而不同。</p><p>业务部门的 AI 转型，应将上下文描述的难易程度作为判断是否使用 AI 的核心因素之一。分析类工作容易 AI 化，核心原因是原材料大多已经是文字：数据库、历史文档；沟通类工作则相对难以 AI 化，因为很难具体描述客户或老板喜欢什么样的风格与内容。简单来说，想象你现在带一个实习生：你会把什么工作交给她，什么工作自己做；又为什么决定自己做；给她布置任务时会怎么说？</p></div></details><details className="thought-module"><summary><span>05</span><h4>硬件约束是否允许？</h4><b>＋</b></summary><div><p>再强大的大脑配合残疾的身体，破坏力都是有限的。数据基建能力、权限是否能够打通、运行载体是否稳定、电脑会不会过热，才是现实生活中常常限制 AI 化的重要因素。</p></div></details><p className="thought-conclusion">总而言之，最推荐的方法依然是古法 <em>human-in-the-loop</em>：训练出一个熟练使用 AI 的人，有什么任务，就在需要的场景拉起自己的 AI（如 Codex）。不过，教会业务同学怎么用 AI 的难度，并不比造 AI 本身容易。</p></article></details>
          <details className="thought-card"><summary><span>02</span><div><p>WORK, NOT HYPE</p><h3>从工作，而不是画饼导向的 AI 运用方法</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>工具：你有什么 AI 工具可以使用？</h4><b>＋</b></summary><div><p>不掏钱的 AI 都是好 AI。</p></div></details><details className="thought-module"><summary><span>02</span><h4>权限：你能让 AI 接触到什么？</h4><b>＋</b></summary><div><p>特指数据管理非常严格的公司：很多 AI 没办法拉起你的数据或文档权限。请自行进行风险评估。</p></div></details><details className="thought-module"><summary><span>03</span><h4>付费：把预算花在真正会用到的地方</h4><b>＋</b></summary><div><p>从套餐角度看，个人订阅套餐的额度往往远大于同价格下公司设置的 API 计费。让公司给你报销 20 美金吧。</p></div></details><details className="thought-module"><summary><span>04</span><h4>任务：先判断是否需要非常专项的能力</h4><b>＋</b></summary><div><p>如果不涉及非常专项的任务需求，比如代码、设计，那么在普通白领工作的范围内，同梯队的各大 AI 之间没有太明显的区别。</p></div></details><p className="thought-conclusion">如果不是专门搞 AI 的人：少一点 AI 焦虑，少关注一点 AI 博客，少刷一点 AI 短视频。学一些如何和大模型交谈的基本准则，要大于其他一切。<br /><em>Talk is all you need.</em></p></article></details>
          <details className="thought-card"><summary><span>03</span><div><p>THE BOSS VIEW</p><h3>从画饼，而不是工作的视角下看 AI</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>组织的本质不是模型，而是人</h4><b>＋</b></summary><div><p>Sorry to tell you, but 有人的地方就有江湖。AI 再怎么发展，组织的本质还是：怎么把一堆碳基生物团结在一起。</p></div></details><details className="thought-module"><summary><span>02</span><h4>两类期待：降本，或提效</h4><b>＋</b></summary><div><p>不同老板对 AI 的期待当然不一样，但整体可以简单分为两类：一类想降本，一类想提效。</p></div></details><details className="thought-module"><summary><span>03</span><h4>先让老板理解：AI ≠ 许愿神灯</h4><b>＋</b></summary><div><p>如果你负责相关任务，最好能让你的老板简单地理解这个事实：AI ≠ 许愿神灯。</p></div></details><details className="thought-module"><summary><span>04</span><h4>听见宏图时，先问它指向什么</h4><b>＋</b></summary><div><p>当老板给你描述 AI 宏图时，建议快速判断：他想要的是降本，还是增效？降本，简单来说就是效率工具；提效，就是增量需求。当然，也可以一起做。</p></div></details></article></details>
          <details className="thought-card"><summary><span>04</span><div><p>AGENT OR WORKFLOW?</p><h3>你真的需要自建 agent 吗？</h3></div><b>＋</b></summary><article><p>Agent 也有很多种，Codex 这种当然也是 agent。但一般 AI 化转型里想象的 agent，不管具有什么能力，不变的一点是：老板期待它能自巡航。什么叫自巡航？简单来说，就是可以帮他裁员的那种。</p><p>当 AI 的能力可以分为降本与增效两方面后，对老板来说，增效是虚的，降本是真的。AI 增的效能不能转化为利润还要两说，裁掉人，下一个月利润就会涨。</p><p>很 tricky 的一件事是：对现在的 agent 能力来说，增效的意义远远大于降本。AI 能提高人效，人效提高之后提高人员报酬，这对业务同学来说是正循环。业务同学愿意因此多学习 AI，组织也提高了人效，其实是变相降低人员成本。另一方面，主打裁员会让同学们非常抵触，直接阻止组织里上下文的有效流动。不给 AI 开发同学上下文信息，会非常直接地导致 agent 变笨；不提供实际使用场景，也会在客观上阻止 agent 的迭代与发展。</p><p>更重要的是，很多上下文无法沉淀：工作习惯、老板风格，以及组织里那些玄妙的东西，很难写成文字。这是一个非常依赖经验的黑盒。一旦希望 agent 实现自循环，就意味着它必须内置理解这些黑盒的能力。世界模型还很远，这些也一样。</p><p>如果所有人都驾驶自己的 AI，一切会好很多。人负责那些难以沉淀的部分，AI 只负责它能负责的部分。总而言之，请人专门开发 agent 的效果，大概率远不如给大家上 AI 培训课。当然，只上课、不用 AI，也绝无可能学会 AI 使用；给大家一个使用 AI 的动力同样重要。</p><p>如果能接受人来驾驶，采用“自己沉淀自己的 skill”的方法最好：轻便、自由。从这个视角看，未来 2C agent 产品的终局，可能真的就是一个足够好用的 Codex。<br /><strong>Workflow 就很好用。</strong></p></article></details>
          <a className="thought-board-link" href="/thoughts/llm-agent"><span>05</span><div><p>WHITEBOARD NOTE / LLM × AGENT</p><h3>从大模型到 Agent：一张板书讲清楚</h3><small>重绘图解 · 概念速读 · 事实校准</small></div><b>↗</b></a>
        </ThoughtsAccordion>
        <OceanFooter />
      </section>

      <section className="section journey" id="experience">
        <div className="section-heading"><p className="eyebrow">04 / EXPERIENCE</p><p>在策略、消费与技术之间，持续移动。</p></div>
        <div className="timeline">
          {experiences.map((experience, index) => <details className="journey-card" key={experience.company}><summary><p>{experience.date}</p><h3>{experience.company}</h3><p>{experience.role}</p><b aria-hidden="true">＋</b></summary><div className="journey-detail"><span>{String(index + 1).padStart(2, "0")}</span><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></details>)}
        </div>
        <OceanFooter />
      </section>

      <section className="section others" id="others">
        <div className="others-heading"><p className="eyebrow">05 / OTHERS</p><h2>A little more<br />of <em>the world.</em></h2></div>
        <div className="passport-row"><article className="passport-card swiss"><span className="passport-stamp">SWISS</span><p>EXCHANGE</p><h3>Switzerland</h3><strong>2023.09 — 2024.02</strong><small>半年交换 · 走进另一种日常</small><i>✦</i></article><article className="passport-card japan"><span className="passport-stamp">JAPAN</span><p>EXCHANGE</p><h3>Japan</h3><strong>2025.09 — 2026.02</strong><small>半年交换 · 继续在路上学习</small><i>✦</i></article></div>
        <div className="fun-facts"><div><p>FUN FACTS</p><h3>Not working,<br />still <em>collecting stories.</em></h3></div><div className="fact-stickers"><span className="fact-trip">solo trip<br /><b>many stamps</b></span><span className="fact-claw">claw machine<br /><b>level 2 certified</b></span><i className="fact-star">✦</i></div><p className="fun-copy">喜欢独自旅行，有很多 solo trip 的经历；<br />也拥有抓娃娃二级资格证书。</p></div>
        <OceanFooter />
      </section>

      <section className="section recommendations" id="recommendations">
        <div className="recommendations-inner"><div><p className="eyebrow">06 / RECOMMENDATIONS</p><h2>Worth a<br /><em>look.</em></h2><p>以后会慢慢放入一些想推荐给阅读者的链接。</p></div><a className="recommendation-card" href="https://mp.weixin.qq.com/s/DrIpzHm777Zd8klcyAICBA" target="_blank" rel="noreferrer"><span>01 / READING</span><h3>从 Vibe Coding 到 AI 原生研发团队：<br />一套能落地的工程实践</h3><p>腾讯技术工程</p><b>↗</b><i className="recommendation-star">✦</i></a></div>
        <OceanFooter />
      </section>

      <footer id="contact">
        <p className="eyebrow">07 / LET&apos;S CONNECT</p>
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
