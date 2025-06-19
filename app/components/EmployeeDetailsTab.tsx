"use client";
import React, { JSX } from "react";
import { User } from "@/app/types/user";
import StarRating from "@/app/components/StarRating";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ColorBadge from "./ColorBadge";
import { employeeDetailsSets } from "@/app/lib/dataUtils";

// Define tab ID type
type TabId = "tab1" | "tab2" | "tab3";

export default function EmployeeDetailTab({
  user,
  rating,
}: {
  user: User;
  rating: number;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("tab1");

  const tabs: { id: TabId; label: string }[] = [
    { id: "tab1", label: "Overview" },
    { id: "tab2", label: "Projects" },
    { id: "tab3", label: "Feedback" },
  ];

  const detailSet = employeeDetailsSets[user.id % employeeDetailsSets.length];

  const tabContent: Record<TabId, JSX.Element> = {
    tab1: <p>{detailSet.overview}</p>,
    tab2: (
      <ul className="list-disc list-inside space-y-1">
        {detailSet.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    ),
    tab3: <p>{detailSet.feedback}</p>,
  };

  return (
    <div className="flex flex-col gap-4 px-4 sm:px-10 lg:px-32 mt-12">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-700 dark:text-emerald-50 hover:underline"
      >
        <ArrowLeft />
        <h1 className="font-bold">Back to Dashboard</h1>
      </Link>

      <div className="flex gap-4 flex-wrap dark:text-emerald-50">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-32 h-32 object-cover rounded-full border-4 bg-gray-200 border-gray-200 mt-4"
        />
        <div className="flex-1 pt-6">
          <h2 className="text-xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <div className="flex justify-items-center items-center gap-2">
            <StarRating value={rating} />
            <ColorBadge rating={rating} />
          </div>
          <hr className="w-full h-0.5 border-gray-400" />
          <div className="mt-4 space-y-2">
            <p>
              Email:{" "}
              <span className="text-gray-500 dark:text-gray-200">
                {user.email}
              </span>
            </p>
            <p>
              Phone:{" "}
              <span className="text-gray-500 dark:text-gray-200">
                {user.phone}
              </span>
            </p>
            <p>
              Department:{" "}
              <span className="text-gray-500 dark:text-gray-200">
                {user.company?.department || "N/A"}
              </span>
            </p>
            <p>
              Age:{" "}
              <span className="text-gray-500 dark:text-gray-200">
                {user.age}
              </span>
            </p>
            <p>
              Address:{" "}
              <span className="text-gray-500 dark:text-gray-200">
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}, {user.address.postalCode},{" "}
                {user.address.country}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-[#EBECE7] dark:bg-[#383938] p-6 sm:p-8 shadow-xl space-y-5">
        <div className="flex flex-wrap border-b ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold dark:text-emerald-50 ${
                activeTab === tab.id
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-900 hover:text-green-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pt-4 dark:text-emerald-50">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}
