import type { ReactNode } from "react";

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-[0.4rem] pl-[1.1rem]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
