import { create } from "zustand";
import { User } from "@/app/types/user";

interface BookmarkEntry {
  user: User;
  timestamp: string;
}

interface StoreState {
  bookmarks: User[];
  bookmarkHistory: BookmarkEntry[];
  departments: string[];
  selectedDepartments: string[];
  addBookmark: (user: User) => void;
  removeBookmark: (id: number) => void;
  getRating: (id: number) => number;
  isBookmarked: (id: number) => boolean;
  toggleBookmark: (user: User, removable?: boolean) => void;
  toggleBookmarkFromHome: (user: User) => void;
  setDepartments: (deps: string[]) => void;
  setSelectedDepartments: (deps: string[]) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  bookmarks: [],
  bookmarkHistory: [],
  departments: [],
  selectedDepartments: [],
  addBookmark: (user) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, user],
      bookmarkHistory: [
        ...state.bookmarkHistory,
        { user, timestamp: new Date().toISOString() },
      ],
    })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((u: User) => u.id !== id),
    })),
  isBookmarked: (id) => get().bookmarks.some((u) => u.id === id),
  toggleBookmark: (user, removable = false) => {
    const isBookmarked = get().isBookmarked(user.id);
    if (removable && isBookmarked) {
      get().removeBookmark(user.id);
    } else if (!isBookmarked) {
      get().addBookmark(user);
    }
  },
  toggleBookmarkFromHome: (user) => {
    const bookmarked = get().isBookmarked(user.id);
    if (!bookmarked) get().addBookmark(user);
  },
  getRating: (id) => Math.floor(Math.random() * 5) + 1,
  setDepartments: (deps) => set({ departments: deps }),
  setSelectedDepartments: (deps) => set({ selectedDepartments: deps }),
}));
