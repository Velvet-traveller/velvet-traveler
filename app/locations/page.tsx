import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationHeader from "@/components/locations/LocationHeader";
import ExclusiveOffersBanner from "@/components/ExclusiveOffersBanner";
import LocationTabs from "@/components/locations/LocationTabs";
import Newsletter from "@/components/Newsletter";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations & Destinations",
  description:
    "Explore our exclusive travel destinations. Browse luxury hotels, cruise packages, and vacation deals. Plan your perfect trip with The Velvet Traveler's curated selection of premium destinations.",
  openGraph: {
    title: "Locations & Destinations - The Velvet Traveler",
    description:
      "Explore our exclusive travel destinations. Browse luxury hotels, cruise packages, and vacation deals.",
    images: ["/assets/locations-hotelImg/locationheader1.svg"],
  },
  twitter: {
    title: "Locations & Destinations - The Velvet Traveler",
    description:
      "Explore our exclusive travel destinations. Browse luxury hotels, cruise packages, and vacation deals.",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#f9f3eb]">
      <Header />
      <LocationHeader />
      <ExclusiveOffersBanner />
      <LocationTabs />
      <Newsletter />
      <Footer />
      <ScrollIndicator />
      <ScrollToTop />
    </main>
  );
}
