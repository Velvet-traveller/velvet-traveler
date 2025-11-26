"use client";

import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  variant?: "light" | "dark";
}

export default function ScrollIndicator({ variant = "light" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        // Hide when within 200px of footer
        setIsVisible(scrollPosition < footerTop - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const textColor = variant === "dark" ? "text-white" : "text-white";

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-breathe">
      <div className="bg-[#8B6914] hover:bg-[#A67C1A] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
        <svg
          className={`w-6 h-6 ${textColor} animate-bounce`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

