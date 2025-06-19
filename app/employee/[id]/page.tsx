// app/employee/[id]/page.tsx (server component)
import { notFound } from "next/navigation";
import { User } from "@/app/types/user";
import { getRating } from "@/app/lib/dataUtils";
import EmployeeDetailsTab from "@/app/components/EmployeeDetailsTab";

async function fetchUser(id: number): Promise<User | null> {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function EmployeeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await fetchUser(Number(params.id));
  if (!user) return notFound();

  const rating = getRating(user.id);

  return <EmployeeDetailsTab user={user} rating={rating} />;
}
