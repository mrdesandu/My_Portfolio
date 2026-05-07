import { experience } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Timeline, TimelineCard } from "@/components/timeline"

export function SectionExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <SectionHeading id="experience-heading">Work Experience</SectionHeading>
      <Timeline>
        {experience.map((item, i) => (
          <TimelineCard
            key={i}
            title={item.role}
            subtitle={`${item.company} | ${item.period}`}
            description={item.description}
          />
        ))}
      </Timeline>
    </section>
  )
}
