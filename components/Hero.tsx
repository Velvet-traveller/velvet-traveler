import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/heroimg.jpg"
          alt="Beautiful coastal city with airplane"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 md:mb-6 leading-tight">
            Your Ticket to Affordable Adventures Starts Here.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Fly to your dream destinations at unbeatable prices. Simple booking, exclusive deals, and stress-free service, making every journey affordable, smooth, and unforgettable.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

