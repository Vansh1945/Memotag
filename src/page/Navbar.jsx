'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import MemoTagLogo from '../components/MemoTagLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  // Track scroll position and active section
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
    updateActiveSection();
  });

  // Update active section based on scroll position
  const updateActiveSection = () => {
    const sections = ['hero', 'problem', 'solution', 'traction', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  // Smooth scroll to section with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close mobile menu
  const handleLinkClick = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'Traction', id: 'traction' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none'
      }}
      transition={{ 
        type: 'spring', 
        damping: 20,
        stiffness: 100,
        backgroundColor: { duration: 0.3 }
      }}
      className="fixed w-full z-50"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo that scrolls to hero section */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 relative"
            aria-label="Scroll to top"
          >
            <div className="w-[160px] h-[45px]">
              <MemoTagLogo />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary-600 bg-primary-50/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Waitlist CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 4px 20px -5px rgba(79, 70, 229, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="ml-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium shadow-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Join Waitlist
                <motion.span
                  animate={{
                    x: [0, 4, -2, 0],
                    transition: { repeat: Infinity, duration: 2 }
                  }}
                  className="ml-1.5 inline-block"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 -mr-2 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.span
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 45, y: 5.5, backgroundColor: '#7C3AED' },
                  closed: { rotate: 0, y: 0, backgroundColor: '#4B5563' }
                }}
                className="absolute h-0.5 w-full block rounded-full origin-center"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
              <motion.span
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 0, x: -10 },
                  closed: { opacity: 1, x: 0 }
                }}
                className="absolute h-0.5 w-[80%] block rounded-full bg-gray-600"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
              <motion.span
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: -45, y: -5.5, backgroundColor: '#7C3AED' },
                  closed: { rotate: 0, y: 0, backgroundColor: '#4B5563' }
                }}
                className="absolute h-0.5 w-[60%] block rounded-full origin-center"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Changed to solid white background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="md:hidden fixed inset-0 z-40 pt-24 px-6 bg-white mobile-menu-container"
          >
            <div className="h-full flex flex-col pb-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, type: 'spring' }}
                  className="border-b border-gray-100"
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      handleLinkClick();
                    }}
                    className={`block py-5 text-xl font-medium w-full text-left ${
                      activeSection === item.id 
                        ? 'text-purple-600' 
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="mobile-nav-underline"
                        className="block w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-2"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 + 0.1 }}
                className="mt-auto"
              >
                <motion.button
                  onClick={() => {
                    scrollToSection('contact');
                    handleLinkClick();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-md"
                >
                  Join Waitlist
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}