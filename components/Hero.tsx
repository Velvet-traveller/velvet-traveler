import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/heroimg.png"
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
            Travel That Feels Like a Dream, Not a Bill.{" "}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            We curate premium trips that match your taste and budget, because
            luxury shouldn’t mean breaking the bank.
          </p>
          <Link
            href="/locations#weeks"
            className="inline-block bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300"
          >
            Plan my trip
          </Link>
        </div>
      </div>
    </section>
  );
}
