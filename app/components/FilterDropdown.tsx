"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  departments: string[];
  selected: string[];
  setSelected: (value: string[]) => void;
  className: string;
}

export default function FilterDropdown({
  departments,
  selected,
  setSelected,
  className = "",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSelection = (dept: string) => {
    if (selected.includes(dept)) {
      setSelected(selected.filter((d) => d !== dept));
    } else {
      setSelected([...selected, dept]);
    }
  };

  const clearAll = () => {
    setSelected([]);
  };

  return (
    <div className={`relative ${className} w-64 text-sm`} ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-full px-4 py-2 pr-10 border border-gray-300 rounded-md text-left bg-white dark:bg-[#3b3b3bd5] dark:border dark:border-black dark:text-white  relative"
      >
        {selected.length === 0 ? "Filter by Department" : selected.join(", ")}

        {!open && (
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
        )}
      </button>

      {open && (
        <div className="absolute z-15 mt-2 w-full bg-white dark:bg-[#3b3b3b] border border-gray-200 dark:text-white dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {departments.map((dept) => (
            <label
              key={dept}
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(dept)}
                onChange={() => toggleSelection(dept)}
                className="mr-2"
              />
              {dept}
            </label>
          ))}

          <div className="border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={clearAll}
              className="w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
