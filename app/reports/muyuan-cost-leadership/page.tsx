import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "牧原股份的成本领先优势分析 | KFC",
  description: "二级市场公司研究报告：牧原股份的成本结构与竞争优势分析。",
};

export default function MuyuanReportPage() {
  return (
    <main className="report-reader">
      <header><a href="/#skills">← Back to portfolio</a><div><p>PUBLIC EQUITY RESEARCH</p><h1>牧原股份的成本领先优势分析</h1></div><a href="/financial-research-muyuan-cost-leadership.pdf" download>Download PDF ↓</a></header>
      <iframe title="牧原股份的成本领先优势分析 PDF" src="/financial-research-muyuan-cost-leadership.pdf" />
    </main>
  );
}
