export default function Loading() {
  return (
    <div className="flex">
      <div className="hidden md:block w-64 min-h-screen border-r border-gray-200 dark:border-gray-800 animate-pulse" />
      <div className="flex-1 p-4 md:p-6 space-y-4">
        <div className="h-6 w-40 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
          <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
