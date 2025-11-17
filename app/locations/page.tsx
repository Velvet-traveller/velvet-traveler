import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
              Locations
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              This page is coming soon.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

