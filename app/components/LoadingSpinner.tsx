import { Loader } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader className="h-8 w-8 animate-spin text-[#B9FB01]" />
    </div>
  );
}
