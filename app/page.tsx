import { PhotoFlip } from "./PhotoFlip";
import { ProjectPreview, type HomeProject } from "./ProjectPreview";
import { ThoughtsAccordion } from "./ThoughtsAccordion";
import { HeroSeaIcon } from "./HeroSeaIcons";
import { FloatingChapterRail } from "./FloatingChapterRail";
import { TravelCollections } from "./TravelCollections";

const projects: HomeProject[] = [
  {
    index: "01",
    name: "CateMate",
    type: "Independent project · AI category analysis",
    status: "原型",
    statusKind: "prototype",
    description: "CateMate 是我在 Shopee 暑期实习中开发的品类分析 Agent 原型。",
    meaning: "它把模糊的自然语言提需转化为可确认、可执行、可回溯的分析工作流，让 LLM 的理解与编排和 Python / SQL 的确定性计算各自承担合适的任务。",
    role: "独立设计 + 开发",
    tags: ["AI workflow", "LLM", "Python / SQL"],
    href: "/projects/catemate",
    previewKind: "workflow",
    previewAlt: "CateMate 分析工作流界面：自然语言需求被解析为 SG、STATIONERY、TREND、TOP SKU，并进入确认、计算与留痕步骤。",
    previewAlign: "start",
    cta: "View case study ↗",
    workflow: {
      chrome: "analysis-request / draft",
      prompt: "帮我分析新加坡市场文具类目的近期趋势",
      fields: ["SG", "STATIONERY", "TREND", "TOP SKU"],
      steps: ["确认需求", "执行计算", "来源留痕"],
      ready: "READY FOR CONFIRMATION",
    },
  },
  {
    index: "02",
    name: "Beauty Decode",
    type: "Multimodal beauty agent",
    status: "已上线 · 原型",
    statusKind: "live-prototype",
    description: "把一看就忘的美妆教程变为可复用的美妆知识库，需要时随取随用。",
    meaning: "把一次性美妆视频消费，转化为能够理解、复用、微调与练习的个人美妆学习体验。",
    role: "独立开发 + 部分产品工作",
    tags: ["Multimodal", "FastAPI", "React"],
    href: "/projects/beauty-decode",
    previewKind: "product-shot",
    previewAlt: "每妆小解产品界面：美妆教程被拆成可跟练的步骤图示与个人知识库。",
    previewAlign: "end",
    previewSrc: "/beautydecode-hero-product.png",
    cta: "Explore project ↗",
    steps: ["视频输入", "教程拆解", "个人知识库"],
  },
  {
    index: "03",
    name: "NikkiCode",
    type: "Independent project · PWA",
    status: "已上线 · 完成",
    statusKind: "complete",
    description: "为暖暖系列玩家打造的游戏福利管家：聚合兑换码、提醒与兑换记录。",
    meaning: "它替玩家记住容易遗漏的小事，让分散的兑换信息、到期提醒与个人记录集中在一个轻量工具中。",
    role: "独立设计 + 开发",
    tags: ["0 → 1", "PWA", "3k+ MAU"],
    href: "/projects/nikkicode",
    previewKind: "device",
    previewAlt: "NikkiCode 实际使用中的兑换码页面：到期提醒、一键复制与领取记录。",
    previewAlign: "start",
    previewSrc: "/nikkicode-live-screen.jpg",
    cta: "Explore project ↗",
    steps: ["到期提醒", "一键复制", "兑换记录"],
    metric: "3k+ MAU",
  },
];

const experiences = [
  { date: "2026.06 — now", company: "Shopee", role: "管培暑期 · 生活品类策略与业务 AI 转型", highlights: ["独立承接生活品类策略日常工作，围绕卖家与品类开展趋势跟踪、经营诊断及月度复盘，为业务团队提供选品、卖家沟通与市场判断支持。", "拆解品类分析工作流，识别高频、路径稳定且适合自动化的环节，并从准确性、可审计性、标准化程度与业务判断依赖度划分 AI 与人工协同边界。", "将找数、筛选、制表等重复流程封装为脚本、模板、自动化看板与团队 Skills，形成可直接调用、持续迭代的交付体系，降低任务耗时与岗位交接成本。", "0—1 独立开发 CateMate 品类分析 AI 原型：由 LLM 负责需求理解与流程编排，Python / SQL 负责确定性计算，并通过人工确认节点、中间产物和数据来源留痕支持复用、回溯与审计。"] },
  { date: "2025.07 — 2025.09", company: "欧莱雅 · 科颜氏", role: "电商与广告 · 天猫渠道", highlights: ["结合天猫平台特性、品牌定位与品类节奏，协助制定并拆解活动期销售目标，筛选核心追踪指标；活动执行中持续对照实际表现与目标，帮助团队快速定位待改善环节。", "基于电商数据开展专题研究，包括以达人直播策略制定为目标的市场扫描，以及品牌全局表现、单品机会点和竞争态势分析，为运营与投放判断提供支持。", "负责日常巡店并识别页面与内容优化机会；在品牌核心单品升级期间，结合前代产品的消费者痛点与核心卖点，规划并制作差异化买家秀内容，最终链接转化率高于预期。"] },
  { date: "2025.04 — 2025.07", company: "小红书", role: "出海项目组 · 产品运营", highlights: ["面向以美国为核心市场的社区与本地生活产品，基于社区调性和地区特征完成内容审核、流量分发及 UGC 内容撰写维护，并在产品形态调整后继续支持主站新产品运营。", "围绕用户增长目标独立推进“四周挑战”：完成活动机制设计、种子用户筛选、活动发布、用户沟通、数据自动化整理与复盘；30% 的种子用户在激励下至少新增发布 1 条内容。", "从日常内容与用户运营中提炼需求，开展竞品及市场调研，推动产品新功能设计并协助迭代后的运营落地。", "参与新产品进入海外市场的合规访谈与研究，并围绕新市场进入策略开展国别研究，梳理业务痛点、市场现状与潜在机会。"] },
  { date: "2024.06 — 2024.09", company: "字节跳动", role: "商业化战略 · 中国销售业务平台大众组", highlights: ["支持抖音集团广告销售业务，覆盖大众消费、平台电商与内容消费等行业；持续跟踪竞媒、行业头部玩家、宏观数据和投融资动态，制作周报 / 双周报供业务组周会使用。", "撰写 2024Q2 头部平台电商财报点评，重点跟踪竞对业务尤其是广告商业化动向，完成核心判断与图表交付，并同步给战略团队及平台电商业务组。", "围绕平台电商完成 5+ 项针对性案头研究，并协助开展重要海外竞对研究与访谈；在职期间，组内 2 个重点专题由竞对周报线索进一步发掘。", "覆盖小游戏、小说等内容消费赛道，完成头部公司分析与细分市场机会扫描，并承担会议纪要、数据处理和演示材料制作等日常支持。"] },
  { date: "2023.03 — 2023.08", company: "华映资本", role: "VC 消费组 · 投资研究", highlights: ["覆盖消费品牌、消费材料、TMT 与农业育种等领域，参与项目前期研究、创始人访谈、投资判断及投后 / 募资材料支持。", "独立完成两份投资决策书的行业分析部分，涉及中国头部 SaaS 生态伙伴与发泡材料标的；分析市场规模、竞争格局、上市公司财务表现、可比公司及行业特定问题，累计撰写 50+ 页。", "独立完成 30+ 页农业育种行业报告，并围绕团队关注赛道完成 20+ 份行业 / 公司简报及 LP 大会材料，梳理行业格局、背景知识与潜在投资机会。", "参与 20+ 次项目会面并形成会议纪要，同时协助搜寻潜在标的、联系专家及创始人，参与募资报告、LP 报告的数据更新、校对与表达优化。"] },
  { date: "2022.07 — 2022.09", company: "灼识投资咨询", role: "咨询实习生 · 投融资咨询", highlights: ["参与面向上市企业与初创公司的投融资咨询项目，协助顾问开展行业研究、建议书制作及招股书行业概览章节支持。", "参与 5+ 家公司的招股书行业概览章节撰写、翻译、数据更新与信息核对，并为初创企业咨询项目独立绘制 10+ 页建议书及行业报告。", "通过案头研究、WIND 等金融终端及 Python 爬虫搜集行业与公司数据，参与数据分析、公司估值和访谈纪要整理，为项目判断与报告交付提供基础支持。"] },
];

export default function Home() {
  return (
    <main>
      <FloatingChapterRail />
      <nav className="nav" aria-label="主导航">
        <a className="monogram" href="#top" aria-label="返回顶部">KFC</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO · 2026</p>
          <div className="hero-title-row">
            <h1 className="hero-headline">
              <span className="hero-title-line hero-title-hi">Hi!</span>
              <span className="hero-title-line hero-title-kfc"><span className="hero-title-im">I&apos;m</span> <em className="title-name">KFC<button className="title-name-trigger" type="button" aria-describedby="title-name-note" aria-label="KFC 名称说明"><span>?</span></button><span className="title-name-note" id="title-name-note" role="tooltip">KFC 是 <strong>Kong Fei Coco</strong> 的缩写。<i className="title-spark title-spark-a" /><i className="title-spark title-spark-b" /><i className="title-spark title-spark-c" /></span></em></span>
              <span className="hero-title-doodles" aria-hidden="true"><i className="hero-doodle-star" /><i className="hero-doodle-dot" /><i className="hero-doodle-spark" /></span>
            </h1>
            <div className="hero-jumps" aria-label="快速跳转">
              <a href="#work"><span>01</span><HeroSeaIcon kind="projects" /><strong>Projects</strong><b>↘</b></a>
              <a href="#experience"><span>02</span><HeroSeaIcon kind="experience" /><strong>Experience</strong><b>↘</b></a>
              <a href="#notes"><span>03</span><HeroSeaIcon kind="thoughts" /><strong>Thoughts</strong><b>↘</b></a>
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
          <h2><em>Curiosity</em><br />leads me forward.</h2>
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
            <ProjectPreview key={project.name} project={project} />
          ))}
        </div>
        <OceanFooter />
      </section>

      <section className="section journey" id="experience">
        <div className="section-heading"><p className="eyebrow">03 / EXPERIENCE</p><p>在策略、消费与技术之间，持续移动。</p></div>
        <div className="timeline">
          {experiences.map((experience, index) => <details className="journey-card" key={experience.company}><summary><p>{experience.date}</p><h3>{experience.company}</h3><p>{experience.role}</p><b aria-hidden="true">＋</b></summary><div className="journey-detail"><span>{String(index + 1).padStart(2, "0")}</span><div className="journey-content"><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>{experience.company === "Shopee" && <figure className="journey-visual"><img src="/shopee-internship-workflow.png" alt="Shopee 实习工作概览：从日常品类分析中识别重复流程，将其标准化和自动化，沉淀为团队可复用的能力。" /></figure>}{experience.company === "欧莱雅 · 科颜氏" && <figure className="journey-visual"><figcaption><strong>品牌电商全景：从流量转化到利润</strong><span>Brand E-commerce Overview</span></figcaption><img src="/loreal-brand-ecommerce-overview.jpg" alt="品牌方天猫电商业务全景图，梳理从人群触达、流量承接与购买转化，到收入、成本和利润的关系。" /></figure>}</div></div></details>)}
        </div>
        <OceanFooter />
      </section>

      <section className="section notes" id="notes">
        <div className="thoughts-heading"><div><p className="eyebrow">04 / THOUGHTS</p><h2>Small observations,<br /><em>still gathering.</em></h2></div><p>关于 AI、产品与真实工作的一些未完成想法。<br />Click a card to read.</p></div>
        <ThoughtsAccordion>
          <section className="thought-series" aria-labelledby="business-ai-series-title">
            <header className="thought-series-header"><div><p>01—04 / SERIES</p><h3 id="business-ai-series-title">业务 AI 化随想</h3></div><span>四则关于判断、落地与组织现实的连续观察。<br />Click a card to unfold.</span></header>
            <div className="thought-series-cards">
          <details className="thought-card"><summary><span>01</span><div><p>AI TRANSFORMATION</p><h3>如何快速判断一个业务适合进行怎样的 AI 化改造？</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>流程是否固定、工作内容是否重复且耗时长？</h4><b>＋</b></summary><div><p>重复但耗时不长，其实不一定要 AI 化。搭建 AI 也需要时间，后期还需要维护。更何况，AI 本来就抽走了太多执行层的工作：人总需要一些坐在工位上、却可以放松大脑的时刻。</p></div></details><details className="thought-module"><summary><span>02</span><h4>责任是否重大？</h4><b>＋</b></summary><div><p>很多时候不是「AI 做不对」，而是「怕 AI 做不对」。在 chatbot 阶段已经出现的置信度问题，在 agent 形态只会更严重。比如对外交付的数据和图表，尤其是向上交付时，很多时候即使可以用 AI，更多业务同学仍倾向于手动完成：一方面，业务同学很难理解模型机制，也就很难判断输出的正确性；另一方面，出错后背锅的还是自己。</p><p>对责任和可靠性要求越高，流程就要越死板。通用解法是：写一个足够详尽的需求，产出一个足够详细的任务框架，让 AI 写成固定脚本，再运行。所以，也可以选择一些上古方法，比如搭建几个写满公式的 Excel。古法工作没有什么不好：对于高确定性、经常需要回溯的业务，没有比这更好的方法。</p></div></details><details className="thought-module"><summary><span>03</span><h4>产出是否易于审计？</h4><b>＋</b></summary><div><p>责任是否重大的另一个伴随因素是：如果错误越容易被发现，场景就越适合 AI 化。用 AI 做 PPT 就比做数据分析更合适——审计数据分析结果是否正确的过程，堪比自己拉数；但 PPT 画错了，一眼就能看出来。</p></div></details><details className="thought-module"><summary><span>04</span><h4>上下文是否便于整理？</h4><b>＋</b></summary><div><p>大多数业务同学进行 AI 化的核心问题，在于非常缺少对上下文的思考。AI 可以比喻成一个清北复交的实习生：刚来到组织里，虽然有聪明的头脑，但缺乏大量上下文信息。通常，组里会丢给新实习生一大堆 landing 文档让她自行阅读，再让她从简单的工作开始做，有问题再问；当天中午也可能带 intern 吃顿饭，熟悉人员与组织架构。</p><p>然而，即使组内有大量文档沉淀，新来的实习生仍无法避免在前两周问大量问题。因为我们很难量化一个新 intern 的初始“上下文”：她不会完全精确地转达此前做过什么实习；即使职能接近，也可能因为组织形式、数据基建与工作习惯不同，出现上下文难以复用的情况。</p><p>就像真实实习生来到组里之后，有的人能快速上手，有的人则可能要反复训练才能记住一些上下文；有的人能快速掌握组织风格，有的人则一直处于清澈而愚蠢的状态。所有 AI 产品在得到上下文输入之后，其理解力也会因过往经历与自身能力不同而不同。</p><p>业务部门的 AI 转型，应将上下文描述的难易程度作为判断是否使用 AI 的核心因素之一。分析类工作容易 AI 化，核心原因是原材料大多已经是文字：数据库、历史文档；沟通类工作则相对难以 AI 化，因为很难具体描述客户或老板喜欢什么样的风格与内容。简单来说，想象你现在带一个实习生：你会把什么工作交给她，什么工作自己做；又为什么决定自己做；给她布置任务时会怎么说？</p></div></details><details className="thought-module"><summary><span>05</span><h4>硬件约束是否允许？</h4><b>＋</b></summary><div><p>再强大的大脑配合残疾的身体，破坏力都是有限的。数据基建能力、权限是否能够打通、运行载体是否稳定、电脑会不会过热，才是现实生活中常常限制 AI 化的重要因素。</p></div></details><p className="thought-conclusion">总而言之，最推荐的方法依然是古法 <em>human-in-the-loop</em>：训练出一个熟练使用 AI 的人，有什么任务，就在需要的场景拉起自己的 AI（如 Codex）。不过，教会业务同学怎么用 AI 的难度，并不比造 AI 本身容易。</p></article></details>
          <details className="thought-card"><summary><span>02</span><div><p>WORK, NOT HYPE</p><h3>从工作，而不是画饼导向的 AI 运用方法</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>工具：你有什么 AI 工具可以使用？</h4><b>＋</b></summary><div><p>不掏钱的 AI 都是好 AI。</p></div></details><details className="thought-module"><summary><span>02</span><h4>权限：你能让 AI 接触到什么？</h4><b>＋</b></summary><div><p>特指数据管理非常严格的公司：很多 AI 没办法拉起你的数据或文档权限。请自行进行风险评估。</p></div></details><details className="thought-module"><summary><span>03</span><h4>付费：把预算花在真正会用到的地方</h4><b>＋</b></summary><div><p>从套餐角度看，个人订阅套餐的额度往往远大于同价格下公司设置的 API 计费。让公司给你报销 20 美金吧。</p></div></details><details className="thought-module"><summary><span>04</span><h4>任务：先判断是否需要非常专项的能力</h4><b>＋</b></summary><div><p>如果不涉及非常专项的任务需求，比如代码、设计，那么在普通白领工作的范围内，同梯队的各大 AI 之间没有太明显的区别。</p></div></details><p className="thought-conclusion">如果不是专门搞 AI 的人：少一点 AI 焦虑，少关注一点 AI 博客，少刷一点 AI 短视频。学一些如何和大模型交谈的基本准则，要大于其他一切。<br /><em>Talk is all you need.</em></p></article></details>
          <details className="thought-card"><summary><span>03</span><div><p>THE BOSS VIEW</p><h3>从画饼，而不是工作的视角下看 AI</h3></div><b>＋</b></summary><article className="thought-modules"><details className="thought-module"><summary><span>01</span><h4>组织的本质不是模型，而是人</h4><b>＋</b></summary><div><p>Sorry to tell you, but 有人的地方就有江湖。AI 再怎么发展，组织的本质还是：怎么把一堆碳基生物团结在一起。</p></div></details><details className="thought-module"><summary><span>02</span><h4>两类期待：降本，或提效</h4><b>＋</b></summary><div><p>不同老板对 AI 的期待当然不一样，但整体可以简单分为两类：一类想降本，一类想提效。</p></div></details><details className="thought-module"><summary><span>03</span><h4>先让老板理解：AI ≠ 许愿神灯</h4><b>＋</b></summary><div><p>如果你负责相关任务，最好能让你的老板简单地理解这个事实：AI ≠ 许愿神灯。</p></div></details><details className="thought-module"><summary><span>04</span><h4>听见宏图时，先问它指向什么</h4><b>＋</b></summary><div><p>当老板给你描述 AI 宏图时，建议快速判断：他想要的是降本，还是增效？降本，简单来说就是效率工具；提效，就是增量需求。当然，也可以一起做。</p></div></details></article></details>
          <details className="thought-card"><summary><span>04</span><div><p>AGENT OR WORKFLOW?</p><h3>你真的需要自建 agent 吗？</h3></div><b>＋</b></summary><article><p>Agent 也有很多种，Codex 这种当然也是 agent。但一般 AI 化转型里想象的 agent，不管具有什么能力，不变的一点是：老板期待它能自巡航。什么叫自巡航？简单来说，就是可以帮他裁员的那种。</p><p>当 AI 的能力可以分为降本与增效两方面后，对老板来说，增效是虚的，降本是真的。AI 增的效能不能转化为利润还要两说，裁掉人，下一个月利润就会涨。</p><p>很 tricky 的一件事是：对现在的 agent 能力来说，增效的意义远远大于降本。AI 能提高人效，人效提高之后提高人员报酬，这对业务同学来说是正循环。业务同学愿意因此多学习 AI，组织也提高了人效，其实是变相降低人员成本。另一方面，主打裁员会让同学们非常抵触，直接阻止组织里上下文的有效流动。不给 AI 开发同学上下文信息，会非常直接地导致 agent 变笨；不提供实际使用场景，也会在客观上阻止 agent 的迭代与发展。</p><p>更重要的是，很多上下文无法沉淀：工作习惯、老板风格，以及组织里那些玄妙的东西，很难写成文字。这是一个非常依赖经验的黑盒。一旦希望 agent 实现自循环，就意味着它必须内置理解这些黑盒的能力。世界模型还很远，这些也一样。</p><p>如果所有人都驾驶自己的 AI，一切会好很多。人负责那些难以沉淀的部分，AI 只负责它能负责的部分。总而言之，请人专门开发 agent 的效果，大概率远不如给大家上 AI 培训课。当然，只上课、不用 AI，也绝无可能学会 AI 使用；给大家一个使用 AI 的动力同样重要。</p><p>如果能接受人来驾驶，采用“自己沉淀自己的 skill”的方法最好：轻便、自由。从这个视角看，未来 2C agent 产品的终局，可能真的就是一个足够好用的 Codex。<br /><strong>Workflow 就很好用。</strong></p></article></details>
            </div>
          </section>
          <section className="thought-standalone" aria-label="LLM 与 Agent 独立图解">
            <a className="thought-board-link" href="/thoughts/llm-agent"><span>05</span><div><p>WHITEBOARD NOTE / LLM × AGENT</p><h3>从大模型到 Agent：一张板书讲清楚</h3><small>重绘图解 · 概念速读 · 事实校准</small></div><b>↗</b></a>
          </section>
        </ThoughtsAccordion>
        <OceanFooter />
      </section>

      <section className="section skills-talents" id="skills">
        <div className="skills-heading"><div><p className="eyebrow">05 / SKILLS &amp; TALENTS</p><h2>Research &amp; <em>Communicate</em></h2></div><p>研究能力、语言，以及在不同语境中理解问题的方式。</p></div>
        <div className="skills-layout">
          <article className="finance-skill">
            <header><div><p>FINANCIAL RESEARCH</p><h3>曾经撰写的研究报告</h3></div><span>01</span></header>
            <p className="skill-intro">能够结合行业格局、商业模式、成本结构与竞争优势开展研究，并将分析沉淀为结构化报告。</p>
            <div className="report-list">
              <a className="report-card" href="/reports/muyuan-cost-leadership" target="_blank" rel="noreferrer"><span>二级研究 · PUBLIC EQUITY</span><h4>牧原股份的成本领先优势分析</h4><p>成本结构 · 竞争优势 · 公司研究</p><b>Read report ↗</b></a>
              <a className="report-card report-card-alt" href="/reports/consumer-tech-ic" target="_blank" rel="noreferrer"><span>一级研究 · PRIVATE MARKET</span><h4>消费科技发泡材料 IC 报告</h4><p>行业研究 · 商业判断 · 投资分析</p><b>Read report ↗</b></a>
            </div>
          </article>
          <article className="language-skill">
            <header><p>LANGUAGES</p><span>02</span></header>
            <div className="language-list">
              <div className="language-row"><div><small>ENGLISH</small><h3>英语</h3></div><strong>IELTS 7.5</strong><p>CET-6 600+</p></div>
              <div className="language-row japanese"><div><small>JAPANESE</small><h3>日语</h3></div><strong>学习中</strong><p>简单交流水准</p></div>
            </div>
            <p className="language-note">Still learning,<br />still listening. <i>✦</i></p>
          </article>
        </div>
        <OceanFooter />
      </section>

      <section className="section others" id="others">
        <div className="others-heading"><p className="eyebrow">06 / OTHERS</p><h2>Overseas Experience</h2></div>
        <TravelCollections />
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
