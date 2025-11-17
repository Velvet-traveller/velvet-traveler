import Link from 'next/link'
import Logo from './Logo'

export default function RequestInfo() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-velvet-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <Logo variant="dark" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6">
            Request More Information
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Lift Media, LLC is a clinical stage healthcare company which is developing a unique platform for personalized travel experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

