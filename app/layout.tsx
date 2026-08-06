import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KFC — AI × Life × Thoughts",
  description: "孔斐的 AI 产品作品集。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
