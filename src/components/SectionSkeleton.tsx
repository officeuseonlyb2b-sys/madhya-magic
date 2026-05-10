// Shimmer skeleton fallback shown while lazy-loaded sections fetch their chunks.
// Replaces blank/spinner gaps with a polished, branded loading state.
interface SectionSkeletonProps {
  variant?: "default" | "hero" | "grid" | "slider" | "compact";
}

const SectionSkeleton = ({ variant = "default" }: SectionSkeletonProps) => {
  const heightClass =
    variant === "hero"
      ? "min-h-[70vh]"
      : variant === "compact"
      ? "min-h-[30vh]"
      : "min-h-[55vh]";

  return (
    <section
      aria-hidden="true"
      className={`${heightClass} w-full px-4 md:px-8 py-10 md:py-16`}
    >
      <div className="container mx-auto">
        {/* Title shimmer */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="shimmer h-3 w-24 rounded-full" />
          <div className="shimmer h-8 md:h-10 w-2/3 max-w-md rounded-lg" />
          <div className="shimmer h-3 w-1/2 max-w-sm rounded-full" />
        </div>

        {/* Body shimmer */}
        {variant === "slider" ? (
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="shimmer aspect-[9/14] w-[180px] sm:w-[220px] rounded-2xl shrink-0"
              />
            ))}
          </div>
        ) : variant === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="shimmer h-56 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="shimmer h-4 w-full rounded" />
              <div className="shimmer h-4 w-11/12 rounded" />
              <div className="shimmer h-4 w-10/12 rounded" />
              <div className="shimmer h-4 w-9/12 rounded" />
              <div className="shimmer h-32 w-full rounded-xl mt-4" />
            </div>
            <div className="shimmer h-72 w-full rounded-2xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionSkeleton;
