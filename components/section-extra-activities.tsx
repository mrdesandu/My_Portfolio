import { extraActivities } from "@/lib/portfolio-data"
import { SectionHeading } from "@/components/section-heading"
import { Timeline, TimelineCard } from "@/components/timeline"

export function SectionExtraActivities() {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <SectionHeading id="activities-heading">Extra Activities</SectionHeading>
      <Timeline>
        {extraActivities.map((item, i) => (
          <TimelineCard
            key={i}
            title={item.role}
            subtitle={`${item.org} | ${item.period}`}
            description={item.description}
          />
        ))}
      </Timeline>
    </section>
  )
}
