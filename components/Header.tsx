"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center relative">
          {/* Left Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-white font-bold hover:opacity-80 transition-opacity duration-300"
            >
              Home
            </Link>
            <Link
              href="/locations"
              className="text-white font-bold hover:opacity-80 transition-opacity duration-300"
            >
              Locations
            </Link>
          </div>

          {/* Mobile Menu Button - Left */}
          <button
            className="md:hidden text-velvet-gold z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none md:flex-1 md:flex md:justify-center">
            <Logo variant="light" className="z-50" />
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              href="/about"
              className="text-white font-bold hover:opacity-80 transition-opacity duration-300"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-white font-bold hover:opacity-80 transition-opacity duration-300"
            >
              Contact us
            </Link>
          </div>

          {/* Spacer for mobile to balance logo */}
          <div className="md:hidden w-6"></div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md md:hidden pt-20 pb-8">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-white font-bold hover:opacity-80 transition-opacity duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/locations"
                className="text-white font-bold hover:opacity-80 transition-opacity duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-white font-bold hover:opacity-80 transition-opacity duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="text-white font-bold hover:opacity-80 transition-opacity duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
