"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/locationsImg/locationheader2.svg",
    alt: "Paris Eiffel Tower",
  },
  {
    src: "/assets/locationsImg/locationheader1.svg",
    alt: "Disney Castle",
  },
];

export default function LocationHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="pt-16 md:pt-20 pb-0 bg-[#f9f3eb] md:mt-16 md:p-16">
      <div className="w-full px-4 md:px-6">
        {/* Mobile Carousel */}
        <div
          ref={carouselRef}
          className="md:hidden relative overflow-hidden rounded-3xl my-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-48 flex-shrink-0 overflow-hidden rounded-3xl group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-80 lg:h-76 overflow-hidden rounded-3xl group">
            <Image
              src="/assets/locations-hotelImg/locationheader2.svg"
              alt="Paris Eiffel Tower"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="50vw"
            />
          </div>
          <div className="relative w-full h-80 lg:h-76 overflow-hidden rounded-3xl group">
            <Image
              src="/assets/locations-hotelImg/locationheader1.svg"
              alt="Disney Castle"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
