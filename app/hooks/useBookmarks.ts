import { useStore } from "@/app/store/useStore";

export function useBookmarks() {
  const { bookmarks, addBookmark, removeBookmark } = useStore();
  return { bookmarks, addBookmark, removeBookmark };
}
