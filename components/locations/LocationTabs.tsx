"use client";

import { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import WeeksCard from "./WeeksCard";
import SeascapeCard from "./SeascapeCard";
import EmptyState from "../EmptyState";

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
    image: "/assets/locations-hotelImg/locationheader1.svg",
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

const weeksData = [
  {
    city: "Paris",
    region: "Ile-de-france, France",
    image: "/assets/location-weeksimg/pariss.svg",
  },
  {
    city: "Dubai",
    region: "Dubai, United Arab Emirate",
    image: "/assets/location-weeksimg/dubai.svg",
  },
  {
    city: "Las Vegas",
    region: "Nevada, United State of America",
    image: "/assets/location-weeksimg/lasvegas.svg",
  },
  {
    city: "Beijing",
    region: "Beijing, China",
    image: "/assets/location-weeksimg/beijgn.svg",
  },
  {
    city: "Chicago",
    region: "Illinios, United State of America",
    image: "/assets/locations-hotelImg/chicago.svg",
  },
  {
    city: "Orlando",
    region: "Florida, United State of America",
    image: "/assets/locations-hotelImg/locationheader1.svg",
  },
  {
    city: "Madrid",
    region: "Madrid, Spain",
    image: "/assets/locations-hotelImg/madrid.svg",
  },
  {
    city: "Zurich",
    region: "Zurich, Switzerland.",
    image: "/assets/locations-hotelImg/zurich.svg",
  },
  {
    city: "Los Angeles",
    region: "California, United State of America",
    image: "/assets/locations-hotelImg/losangeles.svg",
  },
];

const seascapeData = [
  {
    title: "Central America",
    description: "10 - Night sailing, April 2026 Oceania cruises",
    price: "$300.40",
    image: "/assets/location-seascapeImg/Central America.svg",
  },
  {
    title: "Alaska",
    description: "7 - Night sailing, July 2026 Norwegian cruise line.",
    price: "$300.40",
    image: "/assets/location-seascapeImg/Alaska.svg",
  },
  {
    title: "Caribbean",
    description:
      "4 - Night sailing, October 2026 Royal Caribbean international",
    price: "$300.40",
    image: "/assets/location-seascapeImg/Caribbean.svg",
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

  // Check for hash in URL on mount and when hash changes
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (
      hash &&
      ["hotels", "weeks", "access-activities", "access-seascape"].includes(hash)
    ) {
      setActiveTab(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (
        newHash &&
        ["hotels", "weeks", "access-activities", "access-seascape"].includes(
          newHash
        )
      ) {
        setActiveTab(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

          {activeTab === "weeks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {weeksData.map((week, index) => (
                <WeeksCard
                  key={index}
                  city={week.city}
                  region={week.region}
                  image={week.image}
                />
              ))}
            </div>
          )}

          {activeTab === "access-activities" && (
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

          {activeTab === "access-seascape" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {seascapeData.map((seascape, index) => (
                <SeascapeCard
                  key={index}
                  title={seascape.title}
                  description={seascape.description}
                  price={seascape.price}
                  image={seascape.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
