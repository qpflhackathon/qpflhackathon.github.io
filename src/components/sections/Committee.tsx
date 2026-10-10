import { CommitteeCard } from "@/components/CommitteeCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { committee } from "@/content/committee";

export function Committee() {
  return (
    <Section id="committee">
      <SectionHeading>Organizing Committee</SectionHeading>
      <div
        aria-label="Organizing committee"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {committee.map((member) => (
          <CommitteeCard key={member.name} member={member} />
        ))}
      </div>
    </Section>
  );
}
