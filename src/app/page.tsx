import { About } from "@/components/sections/About";
import { Committee } from "@/components/sections/Committee";
import { Hero } from "@/components/sections/Hero";
import { PastEdition } from "@/components/sections/PastEdition";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { event, links, siteUrl } from "@/content/site";

// Structured data so search engines can show the hackathon as an event
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${event.name} 2027`,
  description:
    "A three-day quantum computing hackathon at EPFL with lectures, a poster session and hands-on hacking.",
  startDate: event.startDate,
  endDate: event.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "EPFL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lausanne",
      postalCode: "1015",
      addressCountry: "CH",
    },
  },
  image: `${siteUrl}/og-image.png`,
  url: `${siteUrl}/`,
  organizer: {
    "@type": "Organization",
    name: event.name,
    url: `${siteUrl}/`,
    sameAs: [links.linkedin],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Hero />
      <About />
      <Committee />
      <PracticalInfo />
      <PastEdition />
    </>
  );
}
