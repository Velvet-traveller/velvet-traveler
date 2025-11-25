export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <div className="mb-6">
        <svg
          className="w-24 h-24 md:w-32 md:h-32 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-gray-600 font-sans">
        No data available at the moment
      </p>
    </div>
  );
}

