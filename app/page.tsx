import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularPlaces from "@/components/PopularPlaces";
import ExploreBookingsButton from "@/components/ExploreBookingsButton";
import TopDestinations from "@/components/TopDestinations";
import Testimonials from "@/components/Testimonials";
import RequestInfo from "@/components/RequestInfo";
import ScrollToTop from "@/components/ScrollToTop";

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
