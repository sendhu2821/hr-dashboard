import Link from "next/link";
import { useStore } from "@/app/store/useStore";
import { User } from "@/app/types/user";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

// ViewButton
export function ViewButton({
  userId,
  label = "View",
  onClick,
}: {
  userId: number;
  label?: string;
  onClick?: () => void;
}) {
  const buttonStyles =
    "w-full sm:w-auto text-sm px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition text-center";

  return onClick ? (
    <button onClick={onClick} className={buttonStyles}>
      {label}
    </button>
  ) : (
    <Link href={`/employee/${userId}`} className="w-full sm:w-auto">
      <button className={buttonStyles}>{label}</button>
    </Link>
  );
}

//BookMarkButton
export function BookmarkButton({
  user,
  removable = false,
}: {
  user: User;
  removable?: boolean;
}) {
  const { isBookmarked, toggleBookmark } = useStore();

  const bookmarked = isBookmarked(user.id);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (removable) {
      setShowModal(true);
    } else {
      toggleBookmark(user);
    }
  };

  const confirmRemove = () => {
    toggleBookmark(user, true);
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleClick}>
        {bookmarked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.33301 4.16675C3.33301 3.50371 3.5964 2.86782 4.06524 2.39898C4.53408 1.93014 5.16997 1.66675 5.83301 1.66675H14.1663C14.8294 1.66675 15.4653 1.93014 15.9341 2.39898C16.4029 2.86782 16.6663 3.50371 16.6663 4.16675V17.5234C16.6663 18.5401 15.5163 19.1318 14.6897 18.5409L9.99967 15.1909L5.30967 18.5409C4.48217 19.1326 3.33301 18.5409 3.33301 17.5242V4.16675Z"
              fill="#B9FB01"
            />
            <path d="M4.5 3V18L10 14L15.5 17.5V3H4.5Z" fill="#B9FB01" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.3335 4.16666C3.3335 3.50362 3.59689 2.86773 4.06573 2.39889C4.53457 1.93005 5.17045 1.66666 5.8335 1.66666H14.1668C14.8299 1.66666 15.4658 1.93005 15.9346 2.39889C16.4034 2.86773 16.6668 3.50362 16.6668 4.16666V17.5233C16.6668 18.54 15.5168 19.1317 14.6902 18.5408L10.0002 15.1908L5.31016 18.5408C4.48266 19.1325 3.3335 18.5408 3.3335 17.5242V4.16666ZM5.8335 3.33332C5.61248 3.33332 5.40052 3.42112 5.24424 3.5774C5.08796 3.73368 5.00016 3.94564 5.00016 4.16666V16.7142L9.2735 13.6617C9.48552 13.5102 9.73958 13.4287 10.0002 13.4287C10.2607 13.4287 10.5148 13.5102 10.7268 13.6617L15.0002 16.7142V4.16666C15.0002 3.94564 14.9124 3.73368 14.7561 3.5774C14.5998 3.42112 14.3878 3.33332 14.1668 3.33332H5.8335Z"
              fill="white"
            />
          </svg>
        )}
      </button>

      {showModal && (
        <ConfirmModal
          title="Remove Bookmark"
          message="Are you sure you want to remove the bookmark?"
          approve="Remove"
          decline="Not Now"
          onCancel={() => setShowModal(false)}
          onConfirm={confirmRemove}
        />
      )}
    </>
  );
}

// PromoteButton
export function PromoteButton({ onClick }: { onClick: () => void }) {
  const [promoted, setPromoted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePromote = () => setShowModal(true);
  const confirmPromote = () => {
    setPromoted(true);
    onClick();
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handlePromote}
        className={`w-full sm:w-auto text-sm px-4 py-2 rounded-md transition text-center ${
          promoted
            ? "bg-green-500 text-white"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {promoted ? "Promoted" : "Promote"}
      </button>

      {showModal && (
        <ConfirmModal
          title="Promote Employee"
          message="Are you sure you want to promote?"
          approve="Promote"
          decline="Not Now"
          onCancel={() => setShowModal(false)}
          onConfirm={confirmPromote}
        />
      )}
    </>
  );
}
