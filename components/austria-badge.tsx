import { cn } from "@/lib/cn";

export function AustriaBadge({
  dark = false,
  label = "Software made in Austria",
}: {
  dark?: boolean;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
        dark
          ? "border-ink-border bg-ink-soft text-cream"
          : "border-border bg-surface text-foreground shadow-soft",
      )}
    >
      <span className="inline-flex h-3.5 w-5 overflow-hidden rounded-[3px]" aria-hidden>
        <i className="block h-full flex-1" style={{ background: "#ed2939" }} />
        <i className="block h-full flex-1 bg-white" />
        <i className="block h-full flex-1" style={{ background: "#ed2939" }} />
      </span>
      {label}
    </span>
  );
}
