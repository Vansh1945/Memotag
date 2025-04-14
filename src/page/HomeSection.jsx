'use client'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* Elderly person */}
            <circle cx="150" cy="150" r="40" fill="#8B5CF6" />
            <circle cx="150" cy="135" r="15" fill="#F3F4F6" />
            <path d="M150 170 Q160 190 140 190" stroke="#F3F4F6" strokeWidth="2" fill="none" />
            
            {/* Caregiver */}
            <circle cx="350" cy="150" r="40" fill="#3B82F6" />
            <circle cx="350" cy="135" r="15" fill="#F3F4F6" />
            <path d="M350 170 Q360 190 340 190" stroke="#F3F4F6" strokeWidth="2" fill="none" />
            
            {/* Connection */}
            <path d="M190,150 Q270,120 350,150" stroke="#4F46E5" strokeWidth="3" fill="none" strokeLinecap="round" />
            <motion.path
              d="M270,140 Q275,130 280,140 Q285,150 270,155 Q255,150 260,140 Q265,130 270,140 Z"
              fill="#EC4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            />
            
            {/* Wearable device */}
            <motion.rect
              x="120" y="200" width="60" height="30" rx="15"
              fill="#EC4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            />
            
            {/* AI visualization */}
            <motion.path
              d="M450,100 Q500,150 450,200 Q400,250 450,300"
              stroke="#10B981"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </motion.g>
        </svg>
      </div>
    )
  }
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/30 to-purple-50/20 px-4 pt-24 md:pt-16">
      {/* Floating background elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full blur-xl md:blur-3xl"
        style={{ backgroundColor: "rgba(233, 213, 255, 0.5)" }}
      />
      
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full blur-xl md:blur-3xl"
        style={{ backgroundColor: "rgba(219, 234, 254, 0.5)" }}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 py-8 md:py-16">
        {/* Text content with left margin for desktop */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 order-2 lg:order-1 lg:ml-16 xl:ml-24 2xl:ml-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-3 md:mb-4"
          >
            Revolutionizing Dementia Care
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            <span className="block">Transforming</span>
            <TypeAnimation
              sequence={[
                'Dementia Care',
                2000,
                'Memory Support',
                2000,
                'Cognitive Health',
                2000,
                'Aging with Dignity',
                2000
              ]}
              wrapper="span"
              speed={30}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md md:max-w-lg"
          >
            <span className="font-medium text-gray-800">MemoTag</span> is an AI-powered platform that enhances quality of life for dementia patients while providing peace of mind for caregivers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md md:max-w-lg"
          >
            <span className="font-medium text-gray-800">How it works:</span> Wearable technology combined with advanced AI analytics delivers personalized care insights in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium md:font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z" clipRule="evenodd" />
              </svg>
              Request Demo
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: "white" }}
              className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-gray-700 font-medium md:font-semibold text-sm md:text-base border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Join Waitlist
            </motion.button>
          </motion.div>
        </div>

        {/* Animation section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
          >
            <LottiePlayer
              src="https://assets10.lottiefiles.com/packages/lf20_h4th9ofg.json"
              background="transparent"
              speed={1}
              style={{ width: '100%', height: '100%' }}
              loop
              autoplay
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.span
          className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2"
          animate={{
            opacity: [0.6, 1, 0.6],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          Discover More
        </motion.span>
        <motion.div
          animate={{
            y: [0, 8, 0],
            transition: {
              duration: 2,
              repeat: Infinity
            }
          }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 4, 0],
              opacity: [1, 0.5, 1],
              transition: {
                duration: 2,
                repeat: Infinity
              }
            }}
            className="w-1 h-2 md:h-3 rounded-full mt-1 md:mt-2"
            style={{ background: "linear-gradient(to bottom, #3B82F6, #8B5CF6)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}