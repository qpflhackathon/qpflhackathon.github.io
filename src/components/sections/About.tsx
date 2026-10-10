import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section, SectionHeading } from "@/components/ui/Section";
import { links } from "@/content/site";

export function About() {
  return (
    <Section id="about" tone="muted">
      <SectionHeading>About the Hackathon</SectionHeading>
      <div className="space-y-4">
        <p>
          Driven by a team of six EPFL students passionate about quantum tech, from low-level
          hardware to high-level algorithms, we’re on a mission to bring quantum computing to life.
          Join us for a fun weekend of hands-on building, learning, and tackling real-world
          challenges alongside brilliant peers, industry experts, and exciting prizes.
        </p>
        <p>
          New to quantum? No problem at all. We welcome hackers from every background! Your
          curiosity and passion to learn are the only prerequisites.
        </p>
        <p>
          <strong>Important:</strong> All participants must follow our event rules. Please{" "}
          <ExternalLink href={links.rules}>review the EPFL Quantum Hackathon event rules</ExternalLink>
          .
        </p>
      </div>
    </Section>
  );
}
