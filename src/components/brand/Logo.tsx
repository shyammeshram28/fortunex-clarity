import { cn } from "@/lib/utils";
import lockup from "@/assets/fortunex-lockup.png.asset.json";

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <img
      src={lockup.url}
      alt="FortuneX Technologies"
      width={896}
      height={220}
      className={cn(
        "w-auto select-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]",
        compact ? "h-7" : "h-9 sm:h-10",
        className,
      )}
    />
  );
}
