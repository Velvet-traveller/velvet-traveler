"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonialsData;
  const hasTestimonials = testimonials.length > 0;

  const nextTestimonial = () => {
    if (!hasTestimonials) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!hasTestimonials) return;
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = useMemo(() => {
    if (!hasTestimonials) return [];
    const displayCount = Math.min(2, testimonials.length);
    return Array.from({ length: displayCount }, (_, offset) => {
      const index = (currentIndex + offset) % testimonials.length;
      return testimonials[index];
    });
  }, [currentIndex, testimonials, hasTestimonials]);

  return (
    <section className="py-16 lg:py-24 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Hero gradient banner */}
        <div className="relative mb-12 lg:mb-16">
          <div
            className="rounded-[30px] px-6 sm:px-8 lg:px-32 text-white overflow-visible relative"
            style={{
              backgroundImage: "url(/assets/Testimonybg.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_auto_1.1fr] items-center gap-8 lg:gap-10 relative z-10">
              <div className="flex flex-col items-center lg:items-start text-white/85 gap-3">
                <Image
                  src="/assets/vlogogold.svg"
                  alt="Velvet Traveler logo"
                  width={150}
                  height={70}
                  className="object-contain"
                  priority
                />
                <p className="text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold">
                  The Velvet Traveler
                </p>
              </div>
              <div className="relative w-full h-60 sm:h-64 lg:h-[360px] flex items-end justify-center">
                <div className="relative w-full max-w-[210px] sm:max-w-[250px] lg:max-w-[320px] h-72 sm:h-80 lg:h-[460px]">
                  <img
                    src="/assets/iPhone16Pro.svg"
                    alt="Velvet Traveler mobile"
                    className="w-full h-full object-contain drop-shadow-[0_25px_60px_rgba(6,15,33,0.55)]"
                    style={{ maxHeight: "100%" }}
                  />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <p className="uppercase text-xs sm:text-sm tracking-[0.6em] text-white/70 mb-3 font-semibold">
                  Explore the world smarter
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-3">
                  Explore the World Smarter
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 font-sans leading-relaxed max-w-xl">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm tracking-[0.5em] text-[#b68c3d] uppercase font-semibold mb-4">
            Our testimonials
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900">
            What they are talking about
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_2.15fr] gap-10 items-center">
          <div className="bg-[#ece4ff] rounded-[20px] border border-[#dccffb] p-6 sm:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] h-full w-full max-w-[360px] lg:max-w-[400px] mx-auto">
            <div className="flex items-center justify-between text-[#c8a130] mb-5 text-2xl">
              <span aria-hidden>☺</span>
              <span aria-hidden>✓</span>
              <span aria-label="five star rating">★★★★★</span>
            </div>
            <div className="relative w-full h-80 sm:h-96 rounded-[30px] overflow-hidden border border-white/40">
              <Image
                src="/assets/8ce523189d43d8c1235cd9d4f07e09a654f805e9.png"
                alt="Happy traveler"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative bg-white/95 backdrop-blur rounded-[36px] shadow-[0_45px_90px_rgba(15,23,42,0.08)] p-8 pt-14"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 text-[#f4b400] text-lg mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 text-center sm:text-left">
                    {testimonial.text}
                  </p>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <div className="flex bg-white rounded-[18px] shadow-[0_20px_45px_rgba(15,23,42,0.12)] overflow-hidden">
                <button
                  onClick={prevTestimonial}
                  className="w-14 h-14 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonial"
                  disabled={!hasTestimonials || testimonials.length <= 1}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="w-px bg-[#f1e6d6]" aria-hidden />
                <button
                  onClick={nextTestimonial}
                  className="w-14 h-14 flex items-center justify-center bg-[#b68c3d] text-white hover:bg-[#c99c46] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonial"
                  disabled={!hasTestimonials || testimonials.length <= 1}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
