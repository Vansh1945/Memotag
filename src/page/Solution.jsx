'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';  // Import hooks from React
import { FiActivity, FiAlertTriangle, FiHeart, FiSmartphone, FiBarChart2, FiBell } from 'react-icons/fi';

// RealTimeDashboard component
function RealTimeDashboard() {
  const [vitals, setVitals] = useState({
    heartRate: '--',
    oxygenLevel: '--',
    activityLevel: '--',
    status: 'Normal',
    lastUpdated: 'Just now'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const simulatedData = {
          heartRate: Math.floor(Math.random() * 40) + 60,
          oxygenLevel: Math.floor(Math.random() * 5) + 95,
          activityLevel: ['Low', 'Moderate', 'High'][Math.floor(Math.random() * 3)],
          status: ['Normal', 'Warning', 'Critical'][Math.floor(Math.random() * 3)],
          lastUpdated: new Date().toLocaleTimeString()
        };
        setVitals(simulatedData);
      } catch (error) {
        console.error('Error fetching vitals:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = vitals.status === 'Normal' 
    ? 'text-green-300' 
    : vitals.status === 'Warning' 
      ? 'text-yellow-300' 
      : 'text-red-400';

  return (
    <div className="w-48 h-80 md:w-64 md:h-96 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border-2 border-white border-opacity-30 shadow-lg flex items-center justify-center">
      <div className="text-center p-4 w-full">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiHeart className="w-8 h-8 text-white" />
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-xs text-blue-100">Heart Rate</p>
            <p className="text-white font-medium">{vitals.heartRate} bpm</p>
          </div>
          <div>
            <p className="text-xs text-blue-100">Oxygen</p>
            <p className="text-white font-medium">{vitals.oxygenLevel}%</p>
          </div>
          <div>
            <p className="text-xs text-blue-100">Activity</p>
            <p className="text-white font-medium">{vitals.activityLevel}</p>
          </div>
          <div>
            <p className="text-xs text-blue-100">Status</p>
            <p className={`font-medium ${statusColor}`}>{vitals.status}</p>
          </div>
        </div>
        <p className="text-white text-opacity-70 text-xs mt-2">
          Last updated: {vitals.lastUpdated}
        </p>
      </div>
    </div>
  );
}

// Main SolutionSection component
export default function SolutionSection() {
  const steps = [
    {
      title: "Wear the Smart Device",
      description: "Elderly patients wear the comfortable MemoTag smart wearable that collects health data 24/7.",
      icon: <FiActivity className="w-8 h-8 text-blue-500" />,
      color: "from-blue-100 to-blue-50"
    },
    {
      title: "AI Analysis",
      description: "Our proprietary AI analyzes movement patterns, vitals, and cognitive markers in real-time.",
      icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
      color: "from-purple-100 to-purple-50"
    },
    {
      title: "Instant Alerts",
      description: "Caregivers receive immediate notifications about potential concerns through the MemoTag app.",
      icon: <FiBell className="w-8 h-8 text-teal-500" />,
      color: "from-teal-100 to-teal-50"
    }
  ];

  const features = [
    {
      title: "Activity Tracking",
      description: "Monitors movement patterns to detect unusual behavior or wandering tendencies.",
      icon: <FiActivity className="w-6 h-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Cognitive Alerts",
      description: "Identifies potential cognitive decline markers through daily interaction patterns.",
      icon: <FiAlertTriangle className="w-6 h-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Health Monitoring",
      description: "Tracks vital signs and sleep quality for comprehensive health insights.",
      icon: <FiHeart className="w-6 h-6 text-white" />,
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How MemoTag Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our AI-powered solution provides proactive dementia care through continuous monitoring and smart alerts.
          </motion.p>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mr-4">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-800">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block relative h-2 mt-8"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <div className="mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Comprehensive Monitoring Features
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 ${feature.color}`}></div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Visualization */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Real-time Monitoring Dashboard</h3>
              <p className="text-blue-100 mb-6">
                Caregivers access a simple dashboard showing health metrics, activity patterns, and alert status.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium shadow-md"
              >
                See Demo Dashboard
              </motion.button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 bg-blue-400 bg-opacity-20 flex items-center justify-center">
            <motion.div 
              animate={{
                y: [0, -10, 0],
                transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute"
            >
              <FiSmartphone className="w-32 h-32 text-white opacity-30" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="relative z-10"
            >
              <RealTimeDashboard />
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}