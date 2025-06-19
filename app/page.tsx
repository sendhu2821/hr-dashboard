"use client";

import { useEffect, useState } from "react";
import { useUsers } from "@/app/hooks/useUsers";
import { useSearch } from "@/app/hooks/useSearch";
import EmployeeCard from "@/app/components/EmployeeCard";
import SearchBar from "@/app/components/SearchBar";
import FilterDropdown from "@/app/components/FilterDropdown";
import { getDepartments } from "@/app/lib/dataUtils";
import LoadingSpinner from "./components/LoadingSpinner";

export default function HomePage() {
  const { users, loading, error } = useUsers();
  const {
    query,
    setQuery,
    filteredUsers: searchFilteredUsers,
  } = useSearch(users);

  const [departments, setDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDepartments() {
      const data = await getDepartments();
      setDepartments(data);
    }
    fetchDepartments();
  }, []);

  // Filter users based on selected departments
  const finalFilteredUsers = searchFilteredUsers.filter(
    (user) =>
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(user.department)
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-stretch sm:items-end">
        <SearchBar query={query} setQuery={setQuery} className="h-full" />
        <FilterDropdown
          departments={departments}
          selected={selectedDepartments}
          setSelected={setSelectedDepartments}
          className="h-full"
        />
      </div>

      {finalFilteredUsers.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">
          No matching employees found.
        </p>
      ) : (
        <div className="grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {finalFilteredUsers.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
