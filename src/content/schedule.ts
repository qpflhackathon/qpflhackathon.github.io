export type ScheduleItem = {
  time: string;
  event: string;
  /** Shown on a second line under the event name. */
  detail?: string;
};

export type ScheduleDay = {
  title: string;
  items: ScheduleItem[];
};

export const schedule: ScheduleDay[] = [
  {
    title: "Day 1 · Friday, March 12",
    items: [
      { time: "11:00–13:00", event: "Reception & Lunch" },
      { time: "13:30–15:00", event: "Lectures", detail: "(EPFL Professors)" },
      { time: "15:30–17:00", event: "Poster Session", detail: "(EPFL Researchers)" },
      { time: "17:15–19:15", event: "Hackathon Presentation & Challenge Teasers" },
      { time: "19:15–20:15", event: "Dinner" },
      { time: "23:59", event: "Team Formation Deadline" },
    ],
  },
  {
    title: "Day 2 · Saturday, March 13",
    items: [
      { time: "09:00–10:00", event: "Breakfast" },
      { time: "10:00–11:00", event: "Presentations with the details of the challenges" },
      { time: "11:00–12:30", event: "Hacking" },
      { time: "12:30–13:30", event: "Lunch" },
      { time: "13:30–19:30", event: "Hacking" },
      { time: "19:30–20:30", event: "Dinner" },
      { time: "20:30 →", event: "Overnight Hacking" },
    ],
  },
  {
    title: "Day 3 · Sunday, March 14",
    items: [
      { time: "09:00–10:00", event: "Breakfast" },
      { time: "11:00", event: "Submission Deadline" },
      { time: "11:30–13:30", event: "Solution Presentations" },
      { time: "14:00–15:00", event: "Lunch" },
      { time: "15:00–16:30", event: "Award Ceremony" },
    ],
  },
];
