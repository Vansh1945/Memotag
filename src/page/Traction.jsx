'use client';
import { motion } from 'framer-motion';
import {
    FiAward,
    FiUsers,
    FiShoppingCart,
    FiHeart
} from 'react-icons/fi';
// Note: FiHandshake might not be available in react-icons/fi
// Using FiUserCheck as alternative for partnerships icon
import { FiUserCheck } from 'react-icons/fi';
import { PartnersSection } from '../components/OurPartners';

export default function TractionSection() {
    const stats = [
        {
            value: "Shark Tank",
            label: "Featured on",
            icon: <FiAward className="w-6 h-6 text-indigo-500" />,
            description: "Selected for investment on India's premier startup show"
        },
        {
            value: "1,200+",
            label: "Pre-orders",
            icon: <FiShoppingCart className="w-6 h-6 text-teal-500" />,
            description: "From caregivers and healthcare institutions"
        },
        {
            value: "15+",
            label: "Partnerships",
            icon: <FiUserCheck className="w-6 h-6 text-purple-500" />, // Changed from FiHandshake
            description: "With senior care homes and hospitals"
        },
        {
            value: "3,500+",
            label: "Elders helped",
            icon: <FiUsers className="w-6 h-6 text-blue-500" />,
            description: "Improved quality of life through early detection"
        }
    ];


    return (
        <section id="traction" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our Impact
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Transforming dementia care through technology and compassion
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                        >
                            <div className="flex items-start mb-4">
                                <div className="p-2 rounded-lg bg-white shadow-sm mr-4">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-lg font-medium text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                            <p className="text-gray-600">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* partners */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-8"
                    >
                        Our Partners in Care
                    </motion.h3>
                    <PartnersSection />
                </div>
            </div>
        </section>
    );
}