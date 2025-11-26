import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularPlaces from "@/components/PopularPlaces";
import ExploreBookingsButton from "@/components/ExploreBookingsButton";
import TopDestinations from "@/components/TopDestinations";
import Testimonials from "@/components/Testimonials";
import RequestInfo from "@/components/RequestInfo";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Travel That Feels Like a Dream, Not a Bill. The Velvet Traveler curates premium trips that match your taste and budget. Explore luxury travel destinations, exclusive hotel deals, and unforgettable cruise packages.",
  openGraph: {
    title: "The Velvet Traveler - Luxury Travel. Smart Choices. Beautiful Experiences.",
    description:
      "Travel That Feels Like a Dream, Not a Bill. The Velvet Traveler curates premium trips that match your taste and budget.",
    images: ["/assets/heroimg.png"],
  },
  twitter: {
    title: "The Velvet Traveler - Luxury Travel. Smart Choices. Beautiful Experiences.",
    description:
      "Travel That Feels Like a Dream, Not a Bill. The Velvet Traveler curates premium trips that match your taste and budget.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TopDestinations />
      <PopularPlaces />
      <ExploreBookingsButton />
      <Testimonials />
      {/* <RequestInfo /> */}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
