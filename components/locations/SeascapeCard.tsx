import Image from "next/image";

interface SeascapeCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function SeascapeCard({
  title,
  description,
  price,
  image,
}: SeascapeCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image on Top */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-lg group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Details on Bottom */}
      <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-sans mb-4">
            {description}
          </p>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Price:</p>
            <p className="text-lg md:text-xl text-gray-900">
              <span className="font-bold">{price}</span>
              <span className="text-sm md:text-base text-gray-600"> per person</span>
            </p>
          </div>
        </div>
        <button className="w-full bg-[#8B6914] hover:bg-[#A67C1A] text-white py-2 px-4 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300">
          Contact us
        </button>
      </div>
    </div>
  );
}
