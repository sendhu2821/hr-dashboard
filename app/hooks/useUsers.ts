import { useEffect, useState } from "react";
import { User } from "@/app/types/user";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.users.map((user: any) => ({
          ...user,
          department: user.company?.department || "General",
          image: user.image,
        }));
        setUsers(enriched);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}
