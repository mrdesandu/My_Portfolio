import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { techProjects, behanceProjects, otherProjects } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"

type Project = {
  title: string
  period: string
  description: string
  tags: string[]
  link: string
}

function ProjectCard({ p }: { p: Project }) {
  const isGithub = p.link.includes("github.com")
  return (
    <Link
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40 hover:bg-card/70 hover:scale-105 hover:shadow-lg md:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
          {p.title}
        </h4>
        {isGithub ? (
          <Github
            className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        ) : (
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-primary">{p.period}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
        {p.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
        {p.tags.map((t) => (
          <li key={t}>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {t}
            </Badge>
          </li>
        ))}
      </ul>
    </Link>
  )
}

export function SectionProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <SectionHeading
        id="projects-heading"
        subtitle="A mix of code and creative production work — from university group builds to live cultural events."
      >
        Projects &amp; Productions
      </SectionHeading>

      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
            Tech Projects
          </h3>
          <Link
            href="https://github.com/mrdesandu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View all on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {techProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mb-5 mt-14 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
            Design &amp; Creative Work
          </h3>
          <Link
            href="https://www.behance.net/mrdesandu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View all on Behance
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {behanceProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mb-5 mt-14 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/90">
            Event Production &amp; Coordination
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {otherProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
