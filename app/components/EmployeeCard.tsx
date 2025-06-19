import { useStore } from "@/app/store/useStore";
import StarRating from "./StarRating";
import { ViewButton, BookmarkButton, PromoteButton } from "./Buttons";
import { User } from "@/app/types/user";
import { getRating } from "@/app/lib/dataUtils";

interface Props {
  user: User;
  removable?: boolean;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export default function EmployeeCard({
  user,
  removable = false,
  actionButton,
}: Props) {
  const { addBookmark } = useStore();

  const rating = getRating(user.id);

  return (
    <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm mx-auto overflow-hidden text-center flex flex-col">
      {/* Header Image with Bookmark */}
      <div className="relative min-h-[128px] sm:h-25 md:h-35 lg:h-30 bg-cover bg-center bg-[#272727]">
        <div className="absolute top-4 right-4 z-10">
          <BookmarkButton user={user} removable={removable} />
        </div>
        <img
          src={user.image}
          alt="Employee"
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover object-center border-4 border-white absolute top-full left-1/2 transform -translate-1/2 bg-amber-50"
        />
      </div>

      {/* Body */}
      <div className="pt-16 px-4 pb-6 flex flex-col flex-grow justify-between items-center">
        <h2 className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <StarRating value={rating} />
        <hr className="w-full my-3 border-gray-300" />

        {/* User Details */}
        <div className="flex flex-col items-start text-sm w-full space-y-1 text-left">
          <div className="flex items-center gap-1 w-full">
            <span className="font-medium">Email:</span>
            <span
              className="text-gray-500 truncate w-0 flex-1 whitespace-nowrap overflow-hidden"
              title={user.email}
            >
              {user.email}
            </span>
          </div>
          <p>
            <span className="font-medium">Age: </span>
            <span className="text-gray-500">{user.age}</span>
          </p>
          <p>
            <span className="font-medium">Department: </span>
            <span className="text-gray-500">{user.department}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
          {actionButton ? (
            <ViewButton
              userId={user.id}
              label={actionButton.label}
              onClick={actionButton.onClick}
            />
          ) : (
            <ViewButton userId={user.id} />
          )}
          <PromoteButton onClick={() => console.log("Promote", user.id)} />
        </div>
      </div>
    </div>
  );
}
