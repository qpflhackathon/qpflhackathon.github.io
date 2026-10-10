import Image from "next/image";

import poster2026 from "@assets/images/2026_poster.jpeg";
import { Card, CardGrid } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatCard } from "@/components/ui/StatCard";
import { pastEdition } from "@/content/past-edition";

export function PastEdition() {
  return (
    <Section id="2026">
      <SectionHeading>2026 at a glance</SectionHeading>
      <p>
        Our first edition brought together a growing international quantum community at EPFL for a
        weekend of hacking, learning, and collaboration, from February 27 to March 1, 2026.
      </p>

      <div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
        {pastEdition.stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-10 md:flex-row">
        <ExternalLink
          href={pastEdition.posterPostUrl}
          aria-label="LinkedIn post"
          className="w-full md:flex-1"
        >
          <Image
            src={poster2026}
            alt="2026 QPFL Hackathon poster"
            className="mx-auto my-4 h-auto w-[300px] max-w-[80%] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          />
        </ExternalLink>
        <p className="md:flex-3">
          The <ExternalLink href={pastEdition.newsUrl}>2026 edition</ExternalLink> featured
          challenges from Alice & Bob, Quandela, and Quobly × AXA, supported by additional partners
          including qBraid, Zurich Instruments, and the Swiss Quantum Initiative. Teams worked
          alongside mentors and industry experts to develop innovative solutions spanning quantum
          algorithms, hardware, and applications.
        </p>
      </div>

      <CardGrid>
        {pastEdition.challenges.map((challenge) => (
          <Card key={challenge.title} title={challenge.title}>
            <p>{challenge.description}</p>
          </Card>
        ))}
      </CardGrid>

      <p className="mt-8 mb-4 text-center font-semibold">
        Ready for the next challenge? Join us for the EPFL Quantum Hackathon 2027!
      </p>
    </Section>
  );
}
