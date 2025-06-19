"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  LucideHome,
  LucideBookmark,
  LucideChartScatter,
} from "lucide-react";

// Utility hook to detect screen width
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const sidebarItems = [
  {
    name: "Home",
    path: "/",
    icon: <LucideHome size={24} />,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <LucideBookmark size={24} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <LucideChartScatter size={24} />,
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse on small screens
  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out h-screen border-r bg-[#292929] p-4 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Menu Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-white mb-6 pl-2"
      >
        <Menu />
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-white/10 text-[#B9FB01] font-semibold"
                  : "text-white hover:bg-white/10 hover:text-[#B9FB01]"
              } ${collapsed ? "flex-col justify-center text-center" : ""}`}
            >
              {item.icon}
              {!collapsed && (
                <span className="whitespace-nowrap">{item.name}</span>
              )}
              {collapsed && <span className="text-xs mt-1">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
