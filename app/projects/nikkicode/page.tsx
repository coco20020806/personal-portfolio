const flows = [
  ["01", "Collect", "持续收集各平台不定时发布的兑换码，让信息不再散落。"],
  ["02", "Remind", "以订阅与提醒，把短暂有效的福利带回玩家的日常。"],
  ["03", "Claim", "复制即标记已领取，减少反复确认与重复操作。"],
  ["04", "Share", "为玩家照片提供展示空间，让工具也有一点社区的温度。"],
];

export default function NikkiCodeCaseStudy() {
  return (
    <main className="nikki-case">
      <nav className="case-nav"><a className="nikki-action nikki-back" href="/#work">← Back to portfolio</a><span>NikkiCode / Independent product</span></nav>

      <section className="nikki-hero">
        <div className="nikki-hero-copy">
          <p className="case-kicker">INDEPENDENT PWA · 2026 — NOW</p>
          <p className="nikki-logo">✦ <span>Nikki</span>Code</p>
          <h1>不再错过<br /><em>每一份福利。</em></h1>
          <p className="nikki-lead">一个为暖暖玩家设计的游戏福利管家：收集、提醒、领取、记录，让每次打开都更轻松一点。</p>
          <div className="nikki-hero-links"><a className="nikki-action" href="https://www.nikkigift.top/" target="_blank" rel="noreferrer">打开产品 <b>↗</b></a><a className="nikki-action" href="#result">查看结果 <b>↓</b></a></div>
        </div>
        <div className="nikki-phone-wrap" aria-label="NikkiCode 产品界面预览"><div className="nikki-spark s1">✦</div><div className="nikki-spark s2">✧</div><div className="nikki-spark s3">✦</div><div className="nikki-phone"><div className="phone-top" /><img src="/nikkicode-live-screen.jpg" alt="NikkiCode 实际使用中的兑换码页面" /></div></div>
      </section>

      <section className="case-section nikki-start-loop"><div className="nikki-start-copy"><p className="case-kicker">THE STARTING POINT → THE PRODUCT LOOP</p><div className="case-split"><h2>一份小小的<br />玩家<strong>不便。</strong></h2><div><p>暖暖系列的兑换码发布并不规律，常常有效期短、来源分散。玩家容易错过，也会在不同渠道之间反复确认自己是否已经领取。</p><p>NikkiCode 从一个具体的问题出发：能不能把这些零散的福利，变成一个更可靠、更有陪伴感的日常工具？</p></div></div></div><div className="flow-grid">{flows.map(([number, title, description]) => <article key={title}><span>{number}</span><b>{title}</b><p>{description}</p></article>)}</div></section>

      <section className="case-section nikki-features"><p className="case-kicker">WHAT I BUILT</p><div className="feature-grid"><article className="feature-tall"><p>01 / LIVE CODES</p><h3>一眼找到<br />还未领取的兑换码。</h3><div className="fake-code-card"><span>闪耀暖暖</span><b>✧ 100 钻石</b><small>复制后自动标记</small></div></article><article className="feature-notes"><p>02 / REMINDERS</p><h3>在失效之前<br />轻轻提醒你。</h3><div className="reminder-visual"><img src="/nikkicode-reminder.jpg" alt="NikkiCode 应用图标与红点提醒" /></div></article><article className="feature-notes"><p>03 / MEMORY</p><h3>把领取记录<br />留在自己的节奏里。</h3><p className="memory-note">备注：无需账号密码登录，<br />记录储存在本机。</p></article></div></section>

      <section className="case-section nikki-community"><p className="case-kicker">THE COMMUNITY MOMENT</p><div className="community-head"><h2>玩家们的<br /><em>能量投喂。</em></h2><div className="community-aside"><p>工具之外，NikkiCode 也留出了一点地方，收集大家愿意分享的搭配与灵感。</p><figure className="community-accent"><img src="/nikkicode-community-03.jpg" alt="NikkiCode 用户分享的粉色暖暖搭配" /><figcaption>shared with love ♡</figcaption></figure></div></div><div className="community-wall"><figure><img src="/nikkicode-community-01.png" alt="NikkiCode 用户分享的暖暖游戏搭配照片墙之一" /><figcaption>Every look is a small story.</figcaption></figure><figure><img src="/nikkicode-community-02.png" alt="NikkiCode 用户分享的暖暖游戏搭配照片墙之二" /><figcaption>Made and shared by players.</figcaption></figure></div></section>

      <section className="case-section nikki-results" id="result"><p className="case-kicker">EARLY SIGNALS / LAST 30 DAYS</p><div className="results-head"><h2>慢慢长大的<br /><em>小工具。</em></h2><p>产品于 2026.04.26 上线。以下为最近 30 天的生产环境数据。</p></div><div className="metric-grid"><div><strong>3,346</strong><span>Visitors</span><em>+61%</em></div><div><strong>4,102</strong><span>Page views</span><em>+71%</em></div><div><strong>84%</strong><span>Bounce rate</span><em>−4%</em></div></div><figure className="analytics-shot"><img src="/nikkicode-analytics.png" alt="NikkiCode 最近 30 天的访问分析：3346 位访客和 4102 次页面浏览" /><figcaption>Production analytics · Last 30 days</figcaption></figure></section>

      <section className="case-section nikki-role"><p className="case-kicker">MY ROLE</p><div className="role-row"><h2>From a tiny idea<br />to a <em>living product.</em></h2><div><p>独立完成产品定义、交互设计、前端开发与持续迭代；代码在 AI 协作下完成，并以真实玩家反馈作为下一轮优化的依据。</p><a href="https://www.nikkigift.top/" target="_blank" rel="noreferrer">Visit NikkiCode <b>↗</b></a></div></div></section>
      <footer className="case-footer"><a href="/#work">← Return to KFC&apos;s portfolio</a><span>NikkiCode · made with care for Nikki players ♡</span></footer>
    </main>
  );
}
