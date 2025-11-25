"use client";

import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden order-2 md:order-1">
            <Image
              src="/assets/locationsImg/subscrib.svg"
              alt="City skyline"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 md:mb-6">
              Don't miss a great deal
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 font-sans">
              Stay one step ahead. Find the best value travel with the latest
              deals and update.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
