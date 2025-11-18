"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <Logo variant="light" className="z-50" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-velvet-gold">
          <Link
            href="/"
            className="hover:text-velvet-gold transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/locations"
            className="hover:text-velvet-gold transition-colors duration-300"
          >
            Locations
          </Link>
          <Link
            href="/about"
            className="hover:text-velvet-gold transition-colors duration-300"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="hover:text-velvet-gold transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md md:hidden pt-20 pb-8">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-velvet-gold hover:text-white transition-colors duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/locations"
                className="text-velvet-gold hover:text-white transition-colors duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-velvet-gold hover:text-white transition-colors duration-300 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="text-velvet-gold hover:text-white transition-colors duration-300 py-2 text-lg"
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
