"use client";

import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  className?: string;
}

export default function SearchBar({
  query,
  setQuery,
  className = "",
}: SearchBarProps) {
  return (
    <div className={`w-full max-w-full mx-auto ${className} `}>
      <input
        type="text"
        placeholder="Search by name, email, or department..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-full px-4 py-2 dark:bg-[#3b3b3bd5] dark:border dark:border-black dark:placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
