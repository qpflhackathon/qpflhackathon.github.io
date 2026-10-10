import { contactEmail, credits, links } from "@/content/site";

import { ExternalLink } from "./ui/ExternalLink";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-black/8 bg-sand px-6 pt-10 pb-8">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <p className="mb-2 text-[1.1rem]">
          For any questions, please contact us via{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-link">
            {contactEmail}
          </a>
        </p>
        <ExternalLink
          href={links.linkedin}
          className="inline-flex items-center gap-1.5 text-[0.9rem] text-link"
        >
          <LinkedInIcon />
          Follow us on LinkedIn!
        </ExternalLink>
        <p className="mt-4 text-[0.7rem] text-subtle">
          Website created by{" "}
          <ExternalLink href={credits.website.href} className="text-link">
            {credits.website.name}
          </ExternalLink>{" "}
          · Logo created by{" "}
          <ExternalLink href={credits.logo.href} className="text-link">
            {credits.logo.name}
          </ExternalLink>
          .
        </p>
      </div>
    </footer>
  );
}
