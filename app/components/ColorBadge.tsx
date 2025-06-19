import React from "react";

interface ColorBadgeProps {
  rating: number;
}

const ratingMap = {
  1: { label: "Poor", color: "bg-[#F00404]" },
  2: { label: "Bad", color: "bg-[#FD7805]" },
  3: { label: "Average", color: "bg-[#E8BB26]" },
  4: { label: "Good", color: "bg-[#96CA43]" },
  5: { label: "Excellent", color: "bg-[#26BC60]" },
};

export default function ColorBadge({ rating }: ColorBadgeProps) {
  const badge = ratingMap[rating as keyof typeof ratingMap];

  if (!badge) return null;

  return (
    <span
      className={`inline-block px-3 py-[0.1rem] mb-2 text-sm font-medium text-white rounded-md ${badge.color}`}
    >
      {badge.label}
    </span>
  );
}
