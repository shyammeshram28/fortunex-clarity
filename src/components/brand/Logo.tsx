import { cn } from "@/lib/utils";

export function FxMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="FortuneX Technologies mark"
      className={cn("h-7 w-7", className)}
    >
      <path d="M6 8 H58 L48 20 H6 Z" fill="currentColor" />
      <path d="M14 28 H44 L36 39 H24 L20 56 H10 Z" fill="currentColor" />
      <path
        d="M52 16 L36 38 L52 58 L46 58 L30 38 L46 16 Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("flex items-center gap-3 text-foreground", className)}>
      <FxMark className="transition-transform duration-500 group-hover:scale-[1.04]" />
      <span className="flex flex-col leading-none">
        <span className="wordmark text-[0.8125rem]">
          Fortune<span className="text-primary">X</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[0.5625rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">
            Technologies
          </span>
        )}
      </span>
    </span>
  );
}
