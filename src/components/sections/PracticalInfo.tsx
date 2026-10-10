import { ScheduleDayCard } from "@/components/ScheduleDayCard";
import { BulletList } from "@/components/ui/BulletList";
import { Card, CardGrid } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section, SectionHeading, SubHeading } from "@/components/ui/Section";
import { schedule } from "@/content/schedule";
import { links } from "@/content/site";

export function PracticalInfo() {
  return (
    <Section id="practical" tone="muted">
      <SectionHeading>Practical information</SectionHeading>

      <SubHeading>Tentative schedule</SubHeading>
      <p className="text-[0.95rem] text-subtle">
        This schedule is tentative and may change. We will share the final schedule closer to the
        event.
      </p>
      <CardGrid>
        {schedule.map((day) => (
          <ScheduleDayCard key={day.title} day={day} />
        ))}
      </CardGrid>

      <div className="mt-8">
        <SubHeading>Location & Travel</SubHeading>
      </div>
      <CardGrid columns={2}>
        <Card title="📍 Location & Access" elevated>
          <BulletList
            items={[
              <>
                The hackathon will take place on the{" "}
                <ExternalLink href={links.campusMap}>EPFL main campus</ExternalLink> in Lausanne.
              </>,
              "EPFL is accessible via the Lausanne Metro M1. The hackathon venue is a short walk from the EPFL station. The SwissTech Convention Center hotel is also within walking distance.",
            ]}
          />
        </Card>
        <Card title="ℹ️ Logistics" elevated>
          <BulletList
            items={[
              <>
                <strong className="underline">Meals and refreshments</strong> will be provided
                throughout the three days of the event.
              </>,
              <>
                Participants may coordinate shared accommodation and find potential hosts in the
                WhatsApp group <i>(Coming Soon)</i>.
              </>,
              "We will share more information about the logistics closer to the event.",
            ]}
          />
        </Card>
      </CardGrid>
    </Section>
  );
}
