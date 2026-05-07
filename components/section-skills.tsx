import { skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"

export function SectionSkills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40 md:p-6"
          >
            <h3 className="mb-4 text-base font-bold text-foreground">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
