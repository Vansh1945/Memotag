'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Stats data
const stats = [
  { value: '55M', label: 'Global dementia cases (2023)' },
  { value: '10M', label: 'New cases annually' },
  { value: '4.1M', label: 'Estimated cases in India' },
  { value: '70%', label: 'Undiagnosed in developing nations' }
];

// Problems data
const problems = [
  {
    title: "Delayed Diagnosis",
    description: "Average diagnosis takes 2-3 years after symptoms appear, missing critical early intervention window.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Caregiver Burnout",
    description: "80% of caregivers report severe stress, with 50% developing depression from constant care demands.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Aging Population",
    description: "India's elderly population (60+) will double by 2050, dramatically increasing dementia prevalence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

// Projection data
const projectionData = [
  { year: '2023', cases: 5.3, color: 'bg-blue-400' },
  { year: '2030', cases: 7.6, color: 'bg-blue-500' },
  { year: '2040', cases: 10.2, color: 'bg-purple-500' },
  { year: '2050', cases: 14.3, color: 'bg-purple-600' }
];

export default function ProblemSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Calculate max height for scaling
  const maxCases = Math.max(...projectionData.map(item => item.cases));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      ref={ref}
      id='problem'
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-100/50 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
          >
            The Growing Challenge
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understanding the Dementia Crisis
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Dementia presents complex challenges for patients, families, and healthcare systems worldwide.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Problems cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
              </div>
              <p className="text-gray-600">{problem.description}</p>
              
              {/* Animated pulse effect - fixed to use style prop */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundColor: 'rgba(219, 234, 254, 0.3)' }}
                className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Dementia Projections in India */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-200/20 blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            >
              Dementia Projections in India
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Animated Bar Chart */}
              <div>
                <div className="h-60 md:h-80 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="flex justify-between items-end h-full">
                    {projectionData.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ height: 0 }}
                        animate={inView ? { 
                          height: `${(item.cases / maxCases) * 80}%`,
                          transition: { 
                            duration: 0.8, 
                            delay: 0.3 + index * 0.1,
                            type: 'spring'
                          }
                        } : {}}
                        className={`w-12 md:w-16 ${item.color} rounded-t-lg relative flex flex-col items-center`}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={inView ? { 
                            opacity: 1,
                            transition: { delay: 0.8 + index * 0.1 }
                          } : {}}
                          className="absolute -top-8 whitespace-nowrap text-sm font-medium text-gray-700"
                        >
                          {item.cases}M
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={inView ? { 
                            opacity: 1,
                            transition: { delay: 0.9 + index * 0.1 }
                          } : {}}
                          className="absolute bottom-0 transform translate-y-8 text-xs text-gray-500"
                        >
                          {item.year}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.3 }}
                    className="text-center text-sm text-gray-500 mt-10"
                  >
                    Projected number of people with dementia (in millions)
                  </motion.p>
                </div>
              </div>
              
              {/* Key Facts */}
              <div>
                <motion.ul 
                  initial="hidden"
                  animate={inView ? "visible" : {}}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  className="space-y-4"
                >
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: '#3B82F6',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      ></div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">Current Burden:</span> ~5.3 million Indians living with dementia (2023)
                    </p>
                  </motion.li>
                  
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: '#8B5CF6',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.2s'
                        }}
                      ></div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">Rapid Growth:</span> Cases will nearly triple by 2050 due to aging population
                    </p>
                  </motion.li>
                  
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: '#EC4899',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.4s'
                        }}
                      ></div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">Diagnosis Gap:</span> Only 1 in 10 receive proper diagnosis due to stigma and lack of awareness
                    </p>
                  </motion.li>
                  
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: '#14B8A6',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.6s'
                        }}
                      ></div>
                    </div>
                    <p className="ml-3 text-gray-700">
                      <span className="font-semibold">Care Challenges:</span> 70% of care provided by family members with little support
                    </p>
                  </motion.li>
                </motion.ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <button className="px-6 py-3 rounded-full bg-white text-gray-800 font-medium shadow-sm hover:shadow-md transition-all border border-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Full Report
                  </button>
                  
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-sm hover:shadow-lg transition-all flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Learn About Solutions
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add global styles for pulse animation */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}