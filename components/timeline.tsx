import type { ReactNode } from "react"

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative mx-auto flex max-w-3xl flex-col gap-6 pl-8 md:pl-10">
      {/* vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-2 top-3 bottom-3 w-px bg-border md:left-3"
      />
      {children}
    </ol>
  )
}

export function TimelineCard({
  title,
  subtitle,
  description,
  children,
}: {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
}) {
  return (
    <li className="relative">
      {/* dot */}
      <span
        aria-hidden="true"
        className="absolute -left-[26px] top-6 h-4 w-4 rounded-full border-2 border-primary bg-background md:-left-[30px]"
      />
      <article className="rounded-xl border border-border bg-card/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-all hover:border-primary/40 hover:bg-card/70 md:p-6">
        <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">{title}</h3>
        {subtitle ? (
          <p className="mt-1.5 text-sm font-medium text-primary md:text-base">{subtitle}</p>
        ) : null}
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            {description}
          </p>
        ) : null}
        {children}
      </article>
    </li>
  )
}
