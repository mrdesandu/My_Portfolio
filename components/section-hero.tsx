import { profile, about } from "@/lib/portfolio-data"
import Image from "next/image"

export function SectionHero() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      className="scroll-mt-24 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-24">
        <div className="flex-1 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Computer Science Portfolio
          </p>
          <h1
            id="profile-heading"
            className="text-balance text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
          >
            {profile.name}
          </h1>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground whitespace-nowrap">
            BSc (Hons) in Computer Science · NSBM Green University &amp; University of Plymouth
          </p>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-96 group cursor-pointer">
            <div className="absolute -inset-4 bg-primary/30 rounded-2xl transform -rotate-2 blur-sm transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-primary rounded-xl transform rotate-3 transition-all duration-300 group-hover:scale-110" style={{ width: "85%", height: "90%", right: 0, top: 0 }}></div>
            <Image
              src="/E87A4330.jpg"
              alt={profile.name}
              fill
              className="object-cover rounded-lg relative z-10 transition-all duration-300 group-hover:scale-110"
              priority
            />
          </div>
        </div>
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
