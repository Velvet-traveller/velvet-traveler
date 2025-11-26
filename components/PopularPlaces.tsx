import Image from "next/image";
import locationsData from "@/data/locations.json";

export default function PopularPlaces() {
  // Get specific locations to match design: Fountain City, Rio, Ottawa
  const popularLocations = [
    locationsData.find((loc) => loc.id === 8) || locationsData[7], // Fountain City (left)
    locationsData.find((loc) => loc.id === 2) || locationsData[1], // Rio (middle)
    locationsData.find((loc) => loc.id === 3) || locationsData[2], // Ottawa (right)
  ];

  return (
    <section className="pt-4 md:pt-4 lg:pt-4 pb-12 md:pb-16 lg:pb-24 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-10 md:mb-14 lg:mb-16 max-w-3xl mx-auto">
          <div className="text-velvet-gold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2 font-sans">
            POPULAR PLACES
          </div>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-3xl text-gray-600 max-w-3xl lg:max-w-md font-sans text-center mx-auto">
            Our Most-Loved Getaways{" "}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 items-center">
          {popularLocations.map((location, index) => {
            const heightClasses = [
              "h-[420px] sm:h-[480px] md:h-[520px]",
              "h-[520px] sm:h-[560px] md:h-[640px]",
              "h-[420px] sm:h-[480px] md:h-[520px]",
            ];

            return (
              <div
                key={location.id}
                className={`relative w-full overflow-hidden group cursor-default shadow-[0_35px_70px_rgba(15,23,42,0.25)] ${heightClasses[index]}`}
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  {/* <p className="text-xs uppercase tracking-[0.4em] mb-2 font-sans opacity-80">
                    Top Destination
                  </p> */}
                  <h3 className="text-4xl sm:text-5xl font-semibold mb-3 uppercase tracking-tight font-sans">
                    {location?.name?.split(",")[0] || "Explore"}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg max-w-sm opacity-90 font-sans">
                    {location.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
