import Image from "next/image";

interface LocationCardProps {
  city: string;
  region: string;
  price: string;
  image: string;
}

export default function LocationCard({
  city,
  region,
  price,
  image,
}: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
      {/* Image on Left */}
      <div className="relative w-full md:w-1/2 h-48 md:h-auto rounded-t-lg md:rounded-t-none md:rounded-l-lg flex-shrink-0 p-4">
        <div className="relative w-full h-full overflow-hidden rounded-lg group">
          <Image
            src={image}
            alt={city}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      {/* Details on Right */}
      <div className="p-4 md:p-6 md:pl-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight pb-2">
            {city}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 font-sans">
            {region}
          </p>
          <div className="border-b border-gray-300 mb-4"></div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Price:</p>
            <p className="text-lg md:text-xl font-bold text-gray-900">
              {price}
            </p>
          </div>
        </div>
        <button className="w-full md:w-32 bg-[#8B6914] hover:bg-[#A67C1A] text-white py-2 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300">
          Book now
        </button>
      </div>
    </div>
  );
}

