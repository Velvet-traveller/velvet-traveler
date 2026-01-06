import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-velvet-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Name, Tagline, Button */}
        <div className="py-12 md:py-16 text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Logo variant="dark" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 md:mb-6">
            The Velvet Traveler
          </h2>
          <p className="text-base md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto">
            Luxury Travel. Smart Choices. Beautiful Experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-2 md:px-8 md:py-2 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Email - Left */}
            <div className="flex items-center text-velvet-gold order-2 md:order-1">
              <img
                src="/assets/gmail.svg"
                alt="Email icon"
                className="w-5 h-5 mr-2 flex-shrink-0"
              />
              <a
                href="mailto:bookings@velvettraveler.com"
                className="hover:text-white transition text-sm sm:text-base break-all"
              >
                bookings@velvettraveler.com
              </a>
            </div>

            {/* Social Media Icons - Center */}
            <div className="flex space-x-3 sm:space-x-4 order-1 md:order-2">
              <a
                href="#"
                className="text-velvet-gold hover:text-white transition w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-velvet-gold hover:text-white transition w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            {/* Copyright - Right */}
            <div className="text-sm sm:text-base text-velvet-gold order-3 md:order-3 text-center md:text-right">
              © 2025 The Velvet Traveler. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
