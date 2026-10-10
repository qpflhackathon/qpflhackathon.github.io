import type { ScheduleDay } from "@/content/schedule";

import { Card } from "./ui/Card";

export function ScheduleDayCard({ day }: { day: ScheduleDay }) {
  return (
    <Card title={day.title}>
      <ul>
        {day.items.map((item) => (
          <li
            key={`${item.time}-${item.event}`}
            className="grid grid-cols-[90px_1fr] gap-4 border-b border-black/6 py-[0.45rem] last:border-b-0"
          >
            <span className="font-ui text-[0.85rem] whitespace-nowrap text-canard">{item.time}</span>
            <span className="text-[0.95rem]">
              {item.event}
              {item.detail && (
                <>
                  <br />
                  {item.detail}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
