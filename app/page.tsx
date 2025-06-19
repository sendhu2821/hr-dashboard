"use client";

import { useEffect, useState } from "react";
import { useUsers } from "@/app/hooks/useUsers";
import { useSearch } from "@/app/hooks/useSearch";
import EmployeeCard from "@/app/components/EmployeeCard";
import SearchBar from "@/app/components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";

export default function HomePage() {
  const { users, loading, error } = useUsers();
  const { query, setQuery, filteredUsers } = useSearch(users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <div className="flex">
        <SearchBar query={query} setQuery={setQuery} />
        {/* <ThemeToggle /> */}
      </div>
      <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
        {filteredUsers.map((user) => (
          <EmployeeCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
