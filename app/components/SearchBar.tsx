"use client";

import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search by name, email, or department..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
