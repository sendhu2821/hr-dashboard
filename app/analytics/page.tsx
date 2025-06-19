import { BookmarkTrendsChart } from "../components/BookMarkTrends";
import { DepartmentRatingChart } from "../components/DepartmentRatingChart";

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className="p-4 space-y-6 ">
      <h1 className="text-3xl font-bold mb-6 dark:text-emerald-50">
        Analytics Dashboard
      </h1>
      <DepartmentRatingChart />
      <BookmarkTrendsChart />
    </div>
  );
};
export default page;
