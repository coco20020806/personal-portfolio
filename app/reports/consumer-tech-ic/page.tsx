import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "消费科技发泡材料 IC 报告 | KFC",
  description: "一级市场消费科技与发泡材料行业研究及投资分析报告。",
};

export default function ConsumerTechReportPage() {
  return (
    <main className="report-reader">
      <header><a href="/#skills">← Back to portfolio</a><div><p>PRIVATE MARKET RESEARCH</p><h1>消费科技发泡材料 IC 报告</h1></div><a href="/financial-research-consumer-tech-ic.pdf" download>Download PDF ↓</a></header>
      <iframe title="消费科技发泡材料 IC 报告 PDF" src="/financial-research-consumer-tech-ic.pdf" />
    </main>
  );
}
