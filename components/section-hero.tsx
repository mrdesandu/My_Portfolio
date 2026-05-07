import { profile, about } from "@/lib/portfolio-data"

export function SectionHero() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="scroll-mt-24 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="flex flex-col items-center text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Computer Science Portfolio
        </p>
        <h1
          id="profile-heading"
          className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          BSc (Hons) in Computer Science · NSBM Green University &amp; University of Plymouth
        </p>


      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Personal Profile
        </h2>
        <div className="space-y-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          {about.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
