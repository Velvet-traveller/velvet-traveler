import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f9f3eb]">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you plan your perfect trip. Get in touch with
              our travel experts today.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-12 md:mb-16 group">
            <Image
              src="/assets/locations-hotelImg/locationheader1.svg"
              alt="Contact us"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      <ScrollIndicator />

      {/* Contact Information Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Left Side - Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 md:mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Have questions about our travel packages? Want to customize
                  your trip? Our team of travel experts is ready to assist you.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're planning a romantic getaway, a family vacation,
                  or a solo adventure, we're here to make your travel dreams
                  come true.
                </p>

                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="bg-[#8B6914] rounded-full p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:booking@velvettraveler.com"
                        className="text-[#8B6914] hover:text-[#A67C1A] text-lg font-semibold transition-colors"
                      >
                        booking@velvettraveler.com
                      </a>
                      <p className="text-sm text-gray-600 mt-2">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative w-full h-64 md:h-full min-h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/assets/locations-hotelImg/locationheader2.svg"
                  alt="Travel consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-12 md:mb-16 text-center">
            How We Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#f9f3eb] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-[#8B6914]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trip Planning
              </h3>
              <p className="text-gray-600">
                Get personalized recommendations and help planning your perfect
                itinerary
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#f9f3eb] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-[#8B6914]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Access exclusive deals and special rates on hotels, cruises, and
                packages
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#f9f3eb] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-[#8B6914]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our team is here to assist you with any questions or concerns
                about your booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 md:mb-6">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our exclusive offers or reach out to us for personalized
            travel planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/locations"
              className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Offers
            </a>
            <a
              href="mailto:booking@velvettraveler.com"
              className="inline-block border-2 border-[#8B6914] text-[#8B6914] hover:bg-[#8B6914] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
