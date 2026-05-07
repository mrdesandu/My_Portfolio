import type { ReactNode } from "react"

export function SectionHeading({
  id,
  children,
  subtitle,
}: {
  id?: string
  children: ReactNode
  subtitle?: string
}) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <h2
        id={id}
        className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
      >
        {children}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
