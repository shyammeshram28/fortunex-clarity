export function HeroComposition({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden="true">
      <g className="animate-spin-slow" style={{ transformOrigin: "260px 260px" }}>
        <circle
          cx="260"
          cy="260"
          r="210"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
        <circle
          cx="260"
          cy="260"
          r="150"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="3 9"
        />
        <circle cx="470" cy="260" r="4" fill="var(--primary)" />
        <circle cx="110" cy="260" r="3" fill="currentColor" fillOpacity="0.35" />
      </g>

      <g className="animate-drift">
        <path
          d="M120 150 H400 L360 200 H120 Z"
          fill="currentColor"
          fillOpacity="0.92"
        />
        <path
          d="M158 232 H322 L286 284 H222 L200 372 H150 Z"
          fill="currentColor"
          fillOpacity="0.92"
        />
        <path
          d="M372 186 L282 292 L372 386 L338 386 L252 292 L338 186 Z"
          fill="var(--primary)"
        />
      </g>

      <path
        className="animate-trace"
        d="M40 430 C 160 430, 200 330, 300 330 S 440 400, 490 330"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        className="animate-trace"
        style={{ animationDelay: "400ms" }}
        d="M40 90 C 140 90, 190 40, 300 60 S 450 120, 490 80"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
    </svg>
  );
}

export function ArcGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M40 ${280 - i * 12} A ${150 - i * 22} ${150 - i * 22} 0 0 1 ${340 - i * 22} ${280 - i * 12}`}
          fill="none"
          stroke={i === 1 ? "var(--primary)" : "currentColor"}
          strokeOpacity={i === 1 ? 0.7 : 0.15}
          strokeWidth="1"
        />
      ))}
      <g>
        {[0, 1, 2, 3, 4, 5, 6].map((c) =>
          [0, 1, 2, 3].map((r) => (
            <circle
              key={`${c}-${r}`}
              cx={70 + c * 44}
              cy={64 + r * 34}
              r="1.6"
              fill="currentColor"
              fillOpacity="0.22"
            />
          )),
        )}
      </g>
      <path d="M170 40 H300 L282 66 H170 Z" fill="currentColor" fillOpacity="0.85" />
      <path d="M288 56 L246 106 L288 150 L272 150 L232 106 L272 56 Z" fill="var(--primary)" />
    </svg>
  );
}
