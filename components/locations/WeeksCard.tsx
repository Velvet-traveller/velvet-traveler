"use client";

import { useState } from "react";
import Image from "next/image";
import PlanTripFormModal from "@/components/modals/PlanTripFormModal";

interface WeeksCardProps {
  city: string;
  region: string;
  image: string;
}

export default function WeeksCard({ city, region, image }: WeeksCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        {/* Image on Top */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-lg group">
          <Image
            src={image}
            alt={city}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        {/* Details on Bottom */}
        <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
              {city}
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-sans">
              {region}
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#8B6914] hover:bg-[#A67C1A] text-white py-2 px-4 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300"
          >
            Plan my trip
          </button>
        </div>
      </div>

      <PlanTripFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={city}
        region={region}
      />
    </>
  );
}

