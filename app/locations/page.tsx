import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationHeader from "@/components/LocationHeader";
import ExclusiveOffersBanner from "@/components/ExclusiveOffersBanner";
import LocationTabs from "@/components/LocationTabs";
import Newsletter from "@/components/Newsletter";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#f9f3eb]">
      <Header />
      <LocationHeader />
      <ExclusiveOffersBanner />
      <LocationTabs />
      <Newsletter />
      <Footer />
    </main>
  );
}
