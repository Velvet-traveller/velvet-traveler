import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationHeader from "@/components/locations/LocationHeader";
import ExclusiveOffersBanner from "@/components/ExclusiveOffersBanner";
import LocationTabs from "@/components/locations/LocationTabs";
import Newsletter from "@/components/Newsletter";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";

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
