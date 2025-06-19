"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStore } from "@/app/store/useStore";
import { useMemo, useEffect, useState } from "react";
import { User } from "@/app/types/user";

export function DepartmentRatingChart() {
  const { getRating } = useStore();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=25")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  const data = useMemo(() => {
    const deptMap: Record<string, { total: number; count: number }> = {};
    users.forEach((user) => {
      const rawDept = user.company?.department?.trim() || "Unknown";
      const department = rawDept.toLowerCase();
      if (
        department === "human resources" ||
        department === "business development" ||
        department === "research and development"
      )
        return;

      const rating = getRating(user.id);
      if (!deptMap[rawDept]) {
        deptMap[rawDept] = { total: 0, count: 0 };
      }
      deptMap[rawDept].total += rating;
      deptMap[rawDept].count += 1;
    });

    return Object.entries(deptMap).map(([department, { total, count }]) => ({
      department,
      averageRating: Number((total / count).toFixed(2)),
    }));
  }, [users, getRating]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md dark:bg-[#bcbcbce8]">
      <h2 className="text-xl font-semibold mb-4 dark:text-[#272727]">
        Average Rating by Department
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="department" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey="averageRating" fill="#8884d8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
