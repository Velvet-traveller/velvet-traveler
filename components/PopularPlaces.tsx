import Image from 'next/image'
import locationsData from '@/data/locations.json'

export default function PopularPlaces() {
  // Get first 5 locations for popular places
  const popularLocations = locationsData.slice(0, 5)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-3 md:mb-4">
            Popular Places
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* First two landscape cards */}
          {popularLocations.slice(0, 2).map((location) => (
            <div
              key={location.id}
              className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Lorem Ipsum.</h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-2">
                  Protect your data, identity, and systems with smart, real-time defense.
                </p>
              </div>
            </div>
          ))}

          {/* Middle portrait card */}
          {popularLocations[2] && (
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1 lg:row-span-2">
              <Image
                src={popularLocations[2].image}
                alt={popularLocations[2].name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Lorem Ipsum.</h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-2">
                  Protect your data, identity, and systems with smart, real-time defense.
                </p>
              </div>
            </div>
          )}

          {/* Last two landscape cards */}
          {popularLocations.slice(3, 5).map((location) => (
            <div
              key={location.id}
              className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-2">Lorem Ipsum.</h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-2">
                  Protect your data, identity, and systems with smart, real-time defense.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

