import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 101 · LLM × Agent",
  description: "从大语言模型、Chatbot 到 Agent 的五章入门课。",
  openGraph: {
    title: "AI 101 · LLM × Agent",
    description: "从大语言模型、Chatbot 到 Agent 的五章入门课。",
    images: [{ url: "/thoughts/ai101-og.png", width: 1200, height: 630 }],
  },
};

const lessons = [
  {
    number: "01",
    label: "THE ENGINE",
    title: "AI",
    image: "/thoughts/ai101-llm.png",
    alt: "手绘风格的大语言模型示意图",
    body: [
      "日常所说的 AI，多半指由 LLM 驱动的生成式 AI。LLM 的本质是一种概率预测模型。",
      "它阅读上下文，再一步步预测最可能接着出现的 token（可粗略理解为文字片段），所以能写、答、改与总结。",
    ],
    takeaway: "它只是在推测下一个 token；不等于具备人类式智能，也不保证准确。",
  },
  {
    number: "02",
    label: "THE CONVERSATION",
    title: "Chatbot",
    image: "/thoughts/ai101-chatbot.png",
    alt: "手绘风格的聊天机器人示意图",
    body: [
      "Chatbot 是把模型变成对话产品的界面：你提问，产品把问题和必要的上下文交给模型，再把结果呈现给你。",
      "ChatGPT、Gemini、DeepSeek、豆包都是常见例子。如今不少产品还能处理图片、语音和文件；具体能力取决于模型、版本与权限。",
    ],
    takeaway: "Chatbot = 让你和模型聊天。",
  },
  {
    number: "03",
    label: "FROM MODEL TO ACTION",
    title: "Agent",
    image: "/thoughts/ai101-agent.png",
    alt: "手绘风格的 AI Agent 工作示意图",
    body: [
      "模型能回答；Agent 能在被授权的范围内做事。",
      "它由模型、工具和你的授权共同构成：可以读取指定资料、调用工具、完成若干步骤，再把结果交给你确认。",
    ],
    takeaway: "它能为你做到什么，取决于你允许它访问和使用什么。",
  },
  {
    number: "04",
    label: "A USEFUL SPECIALIST",
    title: "Coding Agent",
    image: "/thoughts/ai101-coding-agent.png",
    alt: "手绘风格的编程 Agent 示意图",
    body: [
      "过去数十年的技术积累，让电脑上的大量工作都能通过程序完成。于是，能写代码并操作电脑工具的 Agent 往往表现得很通用。",
      "Claude Code、Codex 是代表性产品：它们可以把代码、文件、命令、表格和网页等可程序化任务，组织成一连串可执行步骤。",
    ],
    takeaway: "虽然叫 Coding Agent，完全可以把它当成通用任务助手来用。",
  },
  {
    number: "05",
    label: "WORKING TOGETHER",
    title: "Collaborate",
    image: "/thoughts/ai101-collaborate.png",
    alt: "手绘风格的人与 AI 协作示意图",
    body: [
      "把 AI 当成一位聪明、但不了解你背景的协作者。它需要你先说清楚要完成什么。",
      "给它足够的上下文、参考资料和例子；重要结论、对外内容与实际操作，由人来检查和确认。",
    ],
    takeaway: "好结果来自：清楚的目标、足够的上下文、共同的验收。",
  },
];

export default function LlmAgentThought() {
  return (
    <main className="ai101-page">
      <nav className="ai101-nav" aria-label="页面导航">
        <a href="/" className="ai101-brand">KFC</a>
        <a href="/#thoughts" className="ai101-back">← Thoughts</a>
      </nav>

      <header className="ai101-hero">
        <p className="ai101-eyebrow">AI 101 / FIVE SHORT LESSONS</p>
        <h1><span>从一次对话，</span><em>走到一位能工作的 AI。</em></h1>
        <p className="ai101-intro">面向第一次系统了解 AI 与 Agent 的你。</p>
        <div className="ai101-lesson-nav" aria-label="课程章节">
          {lessons.map((lesson) => <a href={`#lesson-${lesson.number}`} key={lesson.number}><span>{lesson.number}</span>{lesson.title}</a>)}
        </div>
      </header>

      <div className="ai101-thread" aria-hidden="true"><span /></div>

      {lessons.map((lesson, index) => (
        <section className={`ai101-lesson ${index % 2 ? "ai101-lesson-reverse" : ""}`} id={`lesson-${lesson.number}`} key={lesson.number}>
          <div className="ai101-art"><img src={lesson.image} alt={lesson.alt} /></div>
          <div className="ai101-copy">
            <p className="ai101-index"><span>{lesson.number}</span> {lesson.label}</p>
            <h2>{lesson.title}</h2>
            {lesson.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {lesson.number === "01" && <a className="ai101-reference" href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noreferrer">延伸阅读：Transformer 架构 →</a>}
            {lesson.number === "02" && <div className="ai101-products" aria-label="常见聊天机器人产品示例">
              <span><img src="/thoughts/product-icons/chatgpt.ico" alt="" />ChatGPT</span>
              <span><img src="/thoughts/product-icons/gemini.ico" alt="" />Gemini</span>
              <span><img src="/thoughts/product-icons/deepseek.ico" alt="" />DeepSeek</span>
              <span className="ai101-product-doubao"><b aria-hidden="true">豆</b>豆包</span>
            </div>}
            <div className="ai101-takeaway"><small>记住</small><strong>{lesson.takeaway}</strong></div>
          </div>
        </section>
      ))}

      <section className="ai101-recap">
        <p className="ai101-eyebrow">ONE LINE RECAP</p>
        <h2><span>模型负责生成，产品让你对话，</span><span>Agent 获得工具，<em>人负责边界与验收。</em></span></h2>
      </section>

      <footer className="ai101-footer">AI 101 · LLM × Agent · 2026</footer>
    </main>
  );
}
