import { TopNav } from "@/components/top-nav"
import { SectionHero } from "@/components/section-hero"
import { SectionEducation } from "@/components/section-education"
import { SectionExperience } from "@/components/section-experience"
import { SectionProjects } from "@/components/section-projects"
import { SectionExtraActivities } from "@/components/section-extra-activities"
import { SectionSkills } from "@/components/section-skills"
import { SectionContact } from "@/components/section-contact"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* subtle indigo glow at the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,oklch(0.7_0.18_265/0.18),transparent_70%)]"
      />
      <TopNav />
      <main className="mx-auto max-w-6xl px-6 lg:px-12">
        <RevealOnScroll>
          <SectionHero />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionEducation />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionExperience />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionProjects />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionExtraActivities />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionSkills />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionContact />
        </RevealOnScroll>
      </main>
    </div>
  )
}
