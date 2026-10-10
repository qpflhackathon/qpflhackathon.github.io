import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Sections alternate between white and a light grey background. */
  tone?: "white" | "muted";
  children: ReactNode;
};

export function Section({ id, tone = "white", children }: SectionProps) {
  return (
    <section id={id} className={`p-6 ${tone === "muted" ? "bg-surface" : "bg-white"}`}>
      <div className="mx-auto max-w-[1000px]">{children}</div>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="mt-6 mb-5 text-[2rem] font-semibold">{children}</h2>;
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="my-4 text-[1.17rem] font-semibold">{children}</h3>;
}
