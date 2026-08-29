type HeroSeaIconProps = {
  kind: "projects" | "experience" | "thoughts";
};

export function HeroSeaIcon({ kind }: HeroSeaIconProps) {
  return (
    <span className={`hero-sea-icon hero-sea-icon-${kind}`} aria-hidden="true">
      {kind === "projects" && <SailboatIcon />}
      {kind === "experience" && <LighthouseIcon />}
      {kind === "thoughts" && <BottleIcon />}
    </span>
  );
}

function SailboatIcon() {
  return (
    <svg viewBox="0 0 72 72" focusable="false">
      <g className="sea-icon-art sea-icon-boat">
        <path className="sea-icon-coral" d="M35 12v27H19z" />
        <path className="sea-icon-aqua" d="M38 13c9 4 14 12 15 25H38z" />
        <path className="sea-icon-teal" d="M17 41h39c-3 10-10 15-20 15S20 51 17 41Z" />
        <path className="sea-icon-wave" d="M12 57c7-6 13-6 20 0 7 5 14 5 28-1" />
        <path className="sea-icon-mast" d="M36 10v31" />
        <path className="sea-icon-yellow" d="m37 9 9 3-9 3z" />
      </g>
    </svg>
  );
}

function LighthouseIcon() {
  return (
    <svg viewBox="0 0 72 72" focusable="false">
      <g className="sea-icon-art sea-icon-lighthouse">
        <path className="sea-icon-light" d="m25 24-16-8v17zM47 24l16-8v17z" />
        <path className="sea-icon-cream" d="m29 22-5 35h24l-5-35z" />
        <path className="sea-icon-coral" d="M27 36h18l2 10H26z" />
        <path className="sea-icon-aqua" d="M27 25h18v7H27z" />
        <path className="sea-icon-roof" d="m28 21 8-8 8 8z" />
        <circle className="sea-icon-yellow" cx="36" cy="12" r="3" />
        <path className="sea-icon-teal" d="M16 58c7-6 13-5 20 0 6-5 12-5 20 0v4H16z" />
        <path className="sea-icon-path" d="M37 59c8 3 8 7-2 11" />
      </g>
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg viewBox="0 0 72 72" focusable="false">
      <g className="sea-icon-art sea-icon-bottle">
        <path className="sea-icon-glass" d="m43 9 9 7-5 7c4 6 5 10 2 15L36 58c-4 7-11 9-17 5-7-4-8-11-4-18l13-20c3-4 7-6 12-6z" />
        <path className="sea-icon-paper" d="m24 37 15-1 2 15-15 2z" />
        <path className="sea-icon-ribbon" d="m29 42 8 6m-1-8-6 10" />
        <path className="sea-icon-cork" d="m43 9 9 7 4-6-9-7z" />
        <circle className="sea-icon-bubble" cx="57" cy="50" r="4" />
      </g>
    </svg>
  );
}
