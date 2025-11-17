import Image from 'next/image'
import Link from 'next/link'
import locationsData from '@/data/locations.json'

export default function TopDestinations() {
  // Get 3 locations for top destinations
  const topDestinations = locationsData.slice(0, 3)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 lg:mb-12">
          <div className="text-velvet-gold text-lg sm:text-xl md:text-2xl font-serif mb-2">VELVET TRAVELER</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3 md:mb-4">
            Top Destination
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left side - single large image */}
          <div className="lg:col-span-1">
            {topDestinations[0] && (
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={topDestinations[0].image}
                  alt={topDestinations[0].name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right side - two stacked images */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {topDestinations.slice(1, 3).map((destination) => (
              <div
                key={destination.id}
                className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="/locations"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Explore more travels
          </Link>
        </div>
      </div>
    </section>
  )
}

