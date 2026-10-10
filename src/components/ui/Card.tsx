import type { ReactNode } from "react";

type CardProps = {
  title?: ReactNode;
  /** Uses a stronger, softer shadow to lift the card off the background. */
  elevated?: boolean;
  children: ReactNode;
};

export function Card({ title, elevated = false, children }: CardProps) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 ${elevated ? "border-black/4 shadow-soft" : "border-black/6 shadow-card"}`}
    >
      {title && <h3 className="mb-4 font-ui text-[1.1rem] font-semibold">{title}</h3>}
      {children}
    </div>
  );
}

export function CardGrid({ columns = 3, children }: { columns?: 2 | 3; children: ReactNode }) {
  return (
    <div className={`mt-8 grid gap-8 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {children}
    </div>
  );
}
