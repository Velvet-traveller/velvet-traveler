'use client'

import { useState } from 'react'
import Image from 'next/image'
import testimonialsData from '@/data/testimonials.json'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = testimonialsData

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <button className="bg-[#8B6914] hover:bg-[#A67C1A] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 mb-4 md:mb-6">
            More about our features
          </button>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#8B6914] uppercase tracking-wide mb-2">
            OUR TESTIMONIALS
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 font-bold">
            What they are talking about
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Featured testimonial (left) */}
          <div className="md:col-span-1">
            <div className="bg-purple-100 border-2 border-velvet-gold rounded-xl p-4 sm:p-6 md:p-8 h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-4 sm:mb-6 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-velvet-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-velvet-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex space-x-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-velvet-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/assets/8ce523189d43d8c1235cd9d4f07e09a654f805e9.png"
                  alt="Featured testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Regular testimonials (right) */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-velvet-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end mt-6 sm:mt-8 gap-3 sm:gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B6914] hover:bg-[#A67C1A] rounded-lg flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

