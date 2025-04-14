'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('formSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.role) {
        throw new Error('Please fill in all required fields');
      }

      // Create new submission with timestamp
      const newSubmission = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };

      // Update submissions in state and localStorage
      const updatedSubmissions = [...submissions, newSubmission];
      setSubmissions(updatedSubmissions);
      localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));

      // Show success message
      toast.success('Thank you! Your information has been saved.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#4BB543',
          color: '#fff',
        }
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        message: ''
      });

    } catch (error) {
      toast.error(error.message || 'Failed to save your information', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#FF3333',
          color: '#fff',
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Toast notifications */}
      <Toaster />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-200 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Dementia Care with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join healthcare professionals and caregivers revolutionizing dementia care through technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-2xl font-bold text-gray-900">Get Started</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested as a *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Caregiver', 'Doctor', 'Investor'].map((role) => (
                      <div key={role} className="relative">
                        <input
                          type="radio"
                          id={role.toLowerCase()}
                          name="role"
                          value={role}
                          checked={formData.role === role}
                          onChange={handleChange}
                          className="absolute opacity-0 h-0 w-0 peer"
                          required
                        />
                        <label
                          htmlFor={role.toLowerCase()}
                          className={`block cursor-pointer text-center py-2 px-3 rounded-lg border transition-all ${formData.role === role ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-blue-300'}`}
                        >
                          {role}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-6 rounded-lg font-medium text-white transition-all ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit Information'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join MemoTag?</h3>
              <ul className="space-y-4">
                {[
                  "AI-powered dementia care monitoring",
                  "Real-time alerts for caregivers",
                  "Clinically validated technology",
                  "Easy-to-use interface",
                  "Privacy-first approach"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Your Information",
                    description: "We'll save your details for when we implement our full system"
                  },
                  {
                    title: "2. Future Updates",
                    description: "You'll be among the first to know when we launch"
                  },
                  {
                    title: "3. No Spam",
                    description: "We respect your privacy and won't share your information"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}