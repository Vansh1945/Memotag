'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import aiims from '../../public/assets/AIIMS.png';
import who from '../../public/assets/who.svg';
import applo from '../../public/assets/applo.png';
import nimhns from '../../public/assets/Nimhans.png';
import pgi from '../../public/assets/pgi.png';

const partners = [
  { name: "AIIMS", logo: aiims, isSvg: false },
  { name: "Apollo Hospitals", logo: applo, isSvg: false },
  { name: "PGIMER", logo: pgi, isSvg: false },
  { name: "WHO", logo: who, isSvg: true },
  { name: "NIMHANS", logo: nimhns, isSvg: false }
];

export function PartnersSection() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const calculateItemWidth = () => {
      if (!contentRef.current) return;
      
      const firstItem = contentRef.current.children[0];
      if (firstItem) {
        const itemStyle = window.getComputedStyle(firstItem);
        const width = firstItem.offsetWidth + 
                      parseInt(itemStyle.marginLeft) + 
                      parseInt(itemStyle.marginRight);
        setItemWidth(width);
      }
    };

    calculateItemWidth();
    const resizeObserver = new ResizeObserver(calculateItemWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateItemWidth);
    };
  }, []);

  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current || !itemWidth) return;

    const scroller = scrollerRef.current;
    const content = contentRef.current;
    
    // Create clones for seamless infinite scrolling
    const clones = [];
    const visibleItems = Math.ceil(window.innerWidth / itemWidth);
    const cloneCount = visibleItems * 2; // Double for smooth transition
    
    for (let i = 0; i < cloneCount; i++) {
      const clone = content.cloneNode(true);
      scroller.appendChild(clone);
      clones.push(clone);
    }

    const speed = 0.5; // Slower speed for better visibility
    let lastTime = 0;
    let paused = false;

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (!paused) {
        scrollPositionRef.current += (speed * deltaTime) / 16; // Normalize to 60fps
        
        // When we've scrolled one full width, reset position seamlessly
        if (scrollPositionRef.current >= content.scrollWidth) {
          scrollPositionRef.current = 0;
          scroller.style.transition = 'none';
          scroller.style.transform = `translateX(0)`;
          // Force reflow
          scroller.offsetHeight;
        }
        
        scroller.style.transition = 'transform 0.1s linear';
        scroller.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      paused = true;
      scroller.style.transition = 'transform 0.3s ease-out';
    };

    const handleMouseLeave = () => {
      paused = false;
      scroller.style.transition = 'transform 0.1s linear';
    };

    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clones.forEach(clone => scroller.removeChild(clone));
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [itemWidth]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="mb-20 py-12 rounded-xl"
    >
      <h3 className="text-center text-2xl font-semibold text-gray-700 mb-12">
        Trusted by Leading Organizations
      </h3>
      
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden py-4"
      >
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div
          ref={scrollerRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          <div ref={contentRef} className="flex">
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="inline-flex items-center mx-8 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-sm">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {partner.isSvg ? (
                      // Fixed SVG handling with proper aspect ratio
                      <div className="w-full h-full flex items-center justify-center">
                        <Image 
                          src={partner.logo} 
                          alt={partner.name} 
                          width={64}
                          height={64}
                          style={{ width: 'auto', height: 'auto' }}
                          className="object-contain"
                          priority={index < 3}
                        />
                      </div>
                    ) : (
                      <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        width={64}
                        height={64}
                        className="object-contain max-h-full"
                        priority={index < 3}
                      />
                    )}
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}