import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4 flex items-center gap-3", centered && "justify-center")}>
          <span className="h-px w-8 bg-palace-charcoal/20" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-palace-orange">
            {badge}
          </span>
          <span className="h-px w-8 bg-palace-charcoal/20" />
        </div>
      )}
      <h2 className="heading-section text-balance text-palace-charcoal">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
