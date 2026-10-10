import Image from "next/image";

import type { CommitteeMember } from "@/content/committee";

import { ExternalLink } from "./ui/ExternalLink";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function CommitteeCard({ member }: { member: CommitteeMember }) {
  const { name, role, href, linkLabel, image, isLogo } = member;

  return (
    <article className="flex-[0_0_210px] snap-start rounded-xl border border-black/6 bg-white px-4 pt-[1.1rem] pb-[1.2rem] text-center shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
      <ExternalLink
        href={href}
        aria-label={linkLabel}
        className={`mx-auto mb-3 flex size-20 items-center justify-center overflow-hidden rounded-full ${isLogo ? "border border-black/10 bg-white p-5" : "bg-perle"}`}
      >
        {image ? (
          <Image
            src={image}
            alt={isLogo ? `${name} logo` : ""}
            className={isLogo ? "h-auto max-h-full w-auto object-contain" : "size-full object-cover"}
          />
        ) : (
          <span className="font-ui text-xl text-white" aria-hidden="true">
            {initials(name)}
          </span>
        )}
      </ExternalLink>
      <h3 className="my-4 text-[1.17rem] font-semibold">{name}</h3>
      <p>{role}</p>
    </article>
  );
}
