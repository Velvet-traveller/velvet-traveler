import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PopularPlaces from '@/components/PopularPlaces'
import TopDestinations from '@/components/TopDestinations'
import Testimonials from '@/components/Testimonials'
import RequestInfo from '@/components/RequestInfo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PopularPlaces />
      <TopDestinations />
      <Testimonials />
      <RequestInfo />
      <Footer />
    </main>
  )
}

