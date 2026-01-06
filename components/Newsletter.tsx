"use client";

import { useState } from "react";
import Image from "next/image";
import { sendNewsletterEmail } from "@/utils/email";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendNewsletterEmail(email);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f9f3eb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg order-2 md:order-1 group">
            <Image
              src="/assets/locations-hotelImg/subscrib.svg"
              alt="City skyline"
              fill
              className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
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
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914] focus:border-transparent bg-white"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
