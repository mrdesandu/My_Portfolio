import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Timeline, TimelineCard } from "@/components/timeline"

export function SectionEducation() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      <Timeline>
        {education.map((e) => (
          <TimelineCard
            key={e.school}
            title={e.school}
            subtitle={`${e.degree} | ${e.period}`}
            description={e.note}
          />
        ))}
      </Timeline>
    </section>
  )
}
