'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MemoTagLogo from '../components/MemoTagLogo';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Animated background elements */}
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
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full blur-3xl"
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
        className="absolute bottom-1/3 right-10 w-40 h-40 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(219, 234, 254, 0.5)" }}
      />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <MemoTagLogo className="w-48" />
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20"
        >
          {/* 404 number with animation */}
          <motion.div 
            className="text-9xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            404
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Oops! The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.back()}
              className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm hover:shadow-md transition-all"
            >
              ← Go Back
            </motion.button>

            <Link href="/" passHref>
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Return Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          className="mt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="mb-2">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/problem" className="text-purple-600 hover:underline">The Problem</Link>
            <Link href="/solution" className="text-purple-600 hover:underline">Our Solution</Link>
            <Link href="/traction" className="text-purple-600 hover:underline">Traction</Link>
            <Link href="/contact" className="text-purple-600 hover:underline">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}