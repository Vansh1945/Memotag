'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Priya from '../../public/assets/T1.jpg';
import Ramesh from '../../public/assets/T2.avif';
import Ananya from '../../public/assets/T4.avif';
import Vikram from '../../public/assets/T3.avif';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'Neurologist, AIIMS Delhi',
    content: 'MemoTag has revolutionized how we monitor dementia patients. The AI alerts help us intervene before crises occur.',
    rating: 5,
    avatar: Priya
  },
  {
    id: 2,
    name: 'Ramesh Patel',
    role: 'Caregiver',
    content: 'As someone caring for my father with dementia, MemoTag gives me peace of mind. The real-time alerts are lifesavers.',
    rating: 5,
    avatar: Ramesh
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Geriatric Specialist',
    content: 'The clinical accuracy of MemoTag is impressive. It complements our care protocols beautifully.',
    rating: 4,
    avatar: Ananya
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    role: 'Investor, HealthTech Ventures',
    content: 'MemoTag represents the future of dementia care technology. The team has built something truly transformative.',
    rating: 5,
    avatar: Vikram
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, currentIndex]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset autoplay timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted by Caregivers & Clinicians
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who've transformed dementia care with MemoTag
          </p>
        </motion.div>

        <div 
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: `${(index - currentIndex) * 100}%`
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center justify-center px-4 ${index === currentIndex ? 'z-10' : 'z-0'}`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start">
                        <FaQuoteLeft className="text-blue-200 text-3xl mr-3 mt-1" />
                        <p className="text-lg text-gray-700 italic">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="mt-6">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-blue-600 text-xl" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-blue-600 text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}