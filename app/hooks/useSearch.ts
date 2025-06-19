import { useState } from "react";
import { User } from "@/app/types/user";

export function useSearch(users: User[]) {
  const [query, setQuery] = useState("");
  const filteredUsers = users.filter((user) => {
    const target =
      `${user.firstName} ${user.lastName} ${user.email} ${user.department}`.toLowerCase();
    return target.includes(query.toLowerCase());
  });
  return { query, setQuery, filteredUsers };
}
