import Image from "next/image";
import Link from "next/link";
import locationsData from "@/data/locations.json";

export default function TopDestinations() {
  // Get 3 locations for top destinations - using specific ones to match design
  // Top-left: city skyline at dusk/dawn, Top-right: aerial city at dusk/night (taller), Bottom-left: waterfront with fountain
  const topDestinations = [
    locationsData.find((loc) => loc.id === 5) || locationsData[4], // Las Vegas - city at dusk (top-left)
    locationsData.find((loc) => loc.id === 6) || locationsData[5], // Orlando - aerial city (top-right, taller)
    locationsData.find((loc) => loc.id === 8) || locationsData[7], // Fountain City - waterfront (bottom-left)
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 lg:mb-12">
          <div className="text-velvet-gold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 font-sans">
            VELVET TRAVELER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3 md:mb-4">
            Top Destination
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl font-sans">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 items-stretch md:min-h-[520px] lg:min-h-[620px]">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 h-full">
            {/* Top-left: horizontal city skyline at dusk */}
            {topDestinations[0] && (
              <div className="relative h-64 sm:h-72 md:flex-1 rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={topDestinations[0].image}
                  alt={topDestinations[0].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xs sm:text-sm md:text-base opacity-90 font-sans">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom-left: horizontal waterfront with fountain */}
            {topDestinations[2] && (
              <div className="relative h-64 sm:h-72 md:flex-1 rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={topDestinations[2].image}
                  alt={topDestinations[2].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xs sm:text-sm md:text-base opacity-90 font-sans">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: vertical aerial city at dusk/night */}
          {topDestinations[1] && (
            <div className="relative h-64 sm:h-80 md:h-full md:min-h-[520px] lg:min-h-[620px] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src={topDestinations[1].image}
                alt={topDestinations[1].name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <p className="text-xs sm:text-sm md:text-base opacity-90 font-sans">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <Link
            href="/locations"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Explore Available Bookings →
          </Link>
        </div>
      </div>
    </section>
  );
}
