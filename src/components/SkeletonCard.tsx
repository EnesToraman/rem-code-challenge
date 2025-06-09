export default function SkeletonCard() {
  return (
    <div className="flex flex-col p-4 sm:flex-row w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 animate-pulse">
      <div className="flex-shrink-0 rounded-md sm:w-32 md:h-auto w-full aspect-video bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex flex-col justify-between flex-1 ml-4 gap-2">
        <div className="flex justify-between items-center">
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="flex flex-wrap gap-2 mt-10">
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
