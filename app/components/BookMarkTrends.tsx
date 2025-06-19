"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export function BookmarkTrendsChart() {
  const data = [
    { date: "6/10", bookmarks: 2 },
    { date: "6/11", bookmarks: 3 },
    { date: "6/12", bookmarks: 1 },
    { date: "6/13", bookmarks: 4 },
    { date: "6/14", bookmarks: 2 },
    { date: "6/15", bookmarks: 5 },
    { date: "6/16", bookmarks: 3 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md dark:bg-[#bcbcbce8]">
      <h2 className="text-xl font-semibold mb-4 dark:text-[#272727]">
        Bookmark Trends
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="bookmarks"
            stroke="#2837de"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
