"use client";

import { useState } from "react";
import LocationCard from "./LocationCard";
import EmptyState from "./EmptyState";

const hotelsData = [
  {
    city: "PARIS",
    region: "Ile-de-france, France",
    price: "$300.40",
    image: "/assets/locations-hotelImg/paris.svg",
  },
  {
    city: "ORLANDO",
    region: "Florida, United States of America",
    price: "$300.40",
    image: "/assets/locations-hotelImg/orlando.svg",
  },
  {
    city: "CHICAGO",
    region: "Illinois, United States of America",
    price: "$300.40",
    image: "/assets/locations-hotelImg/chicago.svg",
  },
  {
    city: "LOS ANGELES",
    region: "California, United States of America",
    price: "$300.40",
    image: "/assets/locations-hotelImg/losangeles.svg",
  },
  {
    city: "MADRID",
    region: "Spain",
    price: "$300.40",
    image: "/assets/locations-hotelImg/madrid.svg",
  },
  {
    city: "ZURICH",
    region: "Switzerland",
    price: "$300.40",
    image: "/assets/locations-hotelImg/zurich.svg",
  },
];

const tabs = [
  { id: "hotels", label: "Hotels" },
  { id: "weeks", label: "Weeks" },
  { id: "access-activities", label: "Access Activities" },
  { id: "access-seascape", label: "Access Seascape" },
];

export default function LocationTabs() {
  const [activeTab, setActiveTab] = useState("hotels");

  return (
    <section className="py-8 md:py-12 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 text-base md:text-lg font-semibold transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-[#8B6914] border-b-2 border-[#8B6914]"
                  : "text-gray-600 hover:text-[#8B6914]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {hotelsData.map((hotel, index) => (
                <LocationCard
                  key={index}
                  city={hotel.city}
                  region={hotel.region}
                  price={hotel.price}
                  image={hotel.image}
                />
              ))}
            </div>
          )}

          {(activeTab === "weeks" ||
            activeTab === "access-activities" ||
            activeTab === "access-seascape") && <EmptyState />}
        </div>
      </div>
    </section>
  );
}

