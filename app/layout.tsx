import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://velvettraveler.com"), // Update with your actual domain
  title:
    "The Velvet Traveler - Luxury Travel. Smart Choices. Beautiful Experiences.",
  description:
    "Luxury travel that doesn't break the bank. The Velvet Traveler curates premium trips, exclusive hotel deals, and unforgettable cruise packages. Experience luxury travel with smart choices and beautiful experiences.",
  keywords: [
    "luxury travel",
    "affordable luxury",
    "travel deals",
    "hotel bookings",
    "cruise packages",
    "travel planning",
    "luxury vacations",
    "premium travel",
    "travel discounts",
    "exclusive travel deals",
  ],
  authors: [{ name: "The Velvet Traveler" }],
  creator: "The Velvet Traveler",
  publisher: "The Velvet Traveler",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/vlogogold.svg",
    apple: "/assets/vlogogold.svg",
    shortcut: "/assets/vlogogold.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velvettraveler.com", // Update with your actual domain
    siteName: "The Velvet Traveler",
    title:
      "The Velvet Traveler - Luxury Travel. Smart Choices. Beautiful Experiences.",
    description:
      "Luxury travel that doesn't break the bank. The Velvet Traveler curates premium trips, exclusive hotel deals, and unforgettable cruise packages.",
    images: [
      {
        url: "https://velvettraveler.com/assets/heroimg.png", // Use absolute URL for social sharing
        width: 1200,
        height: 630,
        alt: "The Velvet Traveler - Luxury Travel Experiences",
      },
      {
        url: "https://velvettraveler.com/assets/vlogogold.svg", // Logo for social sharing
        width: 512,
        height: 512,
        alt: "The Velvet Traveler Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Velvet Traveler - Luxury Travel. Smart Choices. Beautiful Experiences.",
    description:
      "Luxury travel that doesn't break the bank. Premium trips, exclusive deals, and unforgettable experiences.",
    images: [
      "https://velvettraveler.com/assets/heroimg.png",
      "https://velvettraveler.com/assets/vlogogold.svg",
    ],
    creator: "@velvettraveler", // Update with your Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://velvettraveler.com",
  },
  other: {
    "theme-color": "#8B6914",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Velvet Traveler",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
