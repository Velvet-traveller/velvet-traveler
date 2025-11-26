import Link from "next/link";

export default function ExploreBookingsButton() {
  return (
    <div className="flex justify-center py-8 md:py-12 bg-[#f9f3eb] mb-12">
      <Link
        href="/locations"
        className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 animate-breathe"
      >
        Explore more →
      </Link>
    </div>
  );
}

