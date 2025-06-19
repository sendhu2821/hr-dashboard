"use client";

import { useState } from "react";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useBookmarks } from "@/app/hooks/useBookmarks";
import EmployeeCard from "@/app/components/EmployeeCard";
import { User } from "../types/user";

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const handleAssignClick = (user: User) => {
    setSelectedUser(user);
    setShowAssignModal(true);
  };

  const confirmAssign = () => {
    if (selectedUser) {
      console.log("Assigned to project:", selectedUser.firstName);
    }
    setShowAssignModal(false);
    setSelectedUser(null);
  };

  const cancelAssign = () => {
    setShowAssignModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 dark:text-emerald-50">
        Bookmarked Employees
      </h1>
      {bookmarks.length === 0 ? (
        <p className="dark:text-emerald-50">No bookmarks yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {bookmarks.map((user) => (
            <EmployeeCard
              key={user.id}
              user={user}
              removable={true}
              actionButton={{
                label: "Assign to Project",
                onClick: () => handleAssignClick(user),
              }}
            />
          ))}
        </div>
      )}

      {showAssignModal && selectedUser && (
        <ConfirmModal
          title="Assign to Project"
          message={`Are you sure you want to assign ${selectedUser.firstName} to a project?`}
          approve="Yes"
          decline="No"
          onCancel={cancelAssign}
          onConfirm={confirmAssign}
        />
      )}
    </div>
  );
}
