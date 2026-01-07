import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Velvet Traveler - your trusted partner in creating unforgettable travel experiences without breaking the bank. Discover our mission, values, and commitment to luxury travel with smart choices.",
  openGraph: {
    title: "About The Velvet Traveler",
    description:
      "Learn about The Velvet Traveler - your trusted partner in creating unforgettable travel experiences without breaking the bank.",
    images: ["/assets/heroimg.png"],
  },
  other: {
    "instagram:title": "About The Velvet Traveler",
    "instagram:description":
      "Learn about The Velvet Traveler - your trusted partner in creating unforgettable travel experiences without breaking the bank.",
    "instagram:url":
      "https://www.instagram.com/the.velvettraveler?igsh=bm04aTR4Yzhna3Bt&utm_source=qr",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9f3eb]">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 md:mb-6">
              About The Velvet Traveler
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences
              without breaking the bank.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-12 md:mb-16 group">
            <Image
              src="/assets/heroimg.png"
              alt="Beautiful travel destination"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      <ScrollIndicator />

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6 md:mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                At The Velvet Traveler, we believe that luxury travel should be
                accessible to everyone. We curate premium trips that match your
                taste and budget, because luxury shouldn't mean breaking the
                bank.
              </p>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Our team of travel experts works tirelessly to find the best
                deals on hotels, cruises, and vacation packages. We partner with
                top-tier providers to bring you exclusive offers and unbeatable
                prices on destinations around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-12 md:mb-16 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1 */}
            <div className="text-center">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6 group">
                <Image
                  src="/assets/locations-hotelImg/paris.svg"
                  alt="Luxury Hotels"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Luxury Hotels
              </h3>
              <p className="text-gray-600">
                Handpicked accommodations that offer comfort, style, and
                exceptional value. From boutique hotels to world-class resorts.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6 group">
                <Image
                  src="/assets/location-seascapeImg/Caribbean.svg"
                  alt="Cruise Packages"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Cruise Packages
              </h3>
              <p className="text-gray-600">
                Exclusive cruise deals to the world's most beautiful
                destinations. Sail in style with our carefully selected cruise
                lines.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6 group">
                <Image
                  src="/assets/location-weeksimg/dubai.svg"
                  alt="Travel Planning"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Travel Planning
              </h3>
              <p className="text-gray-600">
                Personalized trip planning services to help you create the
                perfect itinerary tailored to your preferences and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8 md:mb-12 text-center">
              Why Choose The Velvet Traveler?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Exclusive Deals
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to special rates and promotions not available to the
                  general public. We negotiate directly with providers to bring
                  you the best prices.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Expert Curation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team carefully selects each destination and accommodation
                  to ensure quality and value. We've done the research so you
                  don't have to.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Personalized Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every traveler is unique. We work with you to understand your
                  preferences and create a travel experience that's perfectly
                  tailored to you.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Smart Choices
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We help you make informed decisions about your travel
                  investments, ensuring you get maximum value for every dollar
                  spent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#6B4C93]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our exclusive offers and discover your next dream
            destination.
          </p>
          <a
            href="/locations"
            className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-8 py-2 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            View Our Offers
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
