interface RatingProps {
  value: number;
}

export default function StarRating({ value }: RatingProps) {
  return (
    <div className="flex text-xl py-1 mb-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= value ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
