'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Team from './Team';
import PartnerNetwork from './PartnerNetwork';
import ValueProps from './ValueProps';
import Portfolio from './Portfolio';
import CTA from './CTA';
import Footer from './Footer';

export default function About() {
  const overlayRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isOverlappingRef = useRef(false);
  const animatingRef = useRef(false);
  const [isOverlapping, setIsOverlapping] = useState(false);
  
  // Sync ref with state
  const updateOverlapping = (value: boolean) => {
    // Prevent duplicate animations
    if (animatingRef.current && value === isOverlappingRef.current) return;
    
    // Set animation lock
    if (value) {
      animatingRef.current = true;
      setTimeout(() => {
        animatingRef.current = false;
      }, 1000);
    }
    
    // Update ref and state
    isOverlappingRef.current = value;
    setIsOverlapping(value);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    // Handle arrow click event
    const handleArrowClick = () => {
      if (!animatingRef.current && !isOverlappingRef.current) {
        updateOverlapping(true);
      }
    };

    // Listen for arrow click custom event
    window.addEventListener('arrow-clicked', handleArrowClick);
    
    const checkScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Show overlay when scrolling down from Hero section
      // Trigger on any scroll down when in Hero area (even small scrolls)
      if (!isOverlappingRef.current && !animatingRef.current && scrollingDown && scrollDelta > 0 && currentScrollY < window.innerHeight * 2.5) {
        updateOverlapping(true);
      }
      
      // Hide overlay when at the very top
      if (currentScrollY <= 5 && isOverlappingRef.current && !animatingRef.current) {
        animatingRef.current = true;
        updateOverlapping(false);
        setTimeout(() => {
          animatingRef.current = false;
        }, 1000);
      }
      
      lastScrollY = currentScrollY;
    };

    // Handle wheel events for more immediate response
    const handleWheel = (e: WheelEvent) => {
      // Only handle if overlay is not visible
      if (isOverlappingRef.current) {
        // Handle hiding overlay when scrolling up at top
        const overlayElement = sectionRef.current as HTMLElement;
        if (overlayElement && e.deltaY < 0 && overlayElement.scrollTop <= 20 && !animatingRef.current) {
          animatingRef.current = true;
          updateOverlapping(false);
          setTimeout(() => {
            animatingRef.current = false;
          }, 1000);
        }
        return;
      }
      
      // Show overlay when scrolling down - trigger immediately
      if (!animatingRef.current && e.deltaY > 0) {
        const currentScrollY = window.scrollY;
        // Trigger if we're in the Hero section area
        if (currentScrollY < window.innerHeight * 2.5) {
          updateOverlapping(true);
        }
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('arrow-clicked', handleArrowClick);
    };
  }, []);

  // Handle overlay scroll when it's visible
  useEffect(() => {
    if (!isOverlapping) return;
    
    const overlayElement = sectionRef.current as HTMLElement;
    if (!overlayElement) return;
    
    const handleOverlayWheel = (e: WheelEvent) => {
      // Hide overlay when scrolling up at the top
      if (!animatingRef.current && e.deltaY < 0 && overlayElement.scrollTop <= 20) {
        animatingRef.current = true;
        updateOverlapping(false);
        setTimeout(() => {
          animatingRef.current = false;
        }, 1000);
      }
    };
    
    overlayElement.addEventListener('wheel', handleOverlayWheel, { passive: true });
    
    return () => {
      overlayElement.removeEventListener('wheel', handleOverlayWheel);
    };
  }, [isOverlapping]);

  return (
    <>
      {/* Overlapping version - slides up from below with all content */}
      <AnimatePresence mode="wait">
        {isOverlapping && (
          <motion.section 
            id="about-section-overlay" 
            ref={sectionRef}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            onAnimationStart={() => {
              // Reset scroll position when overlay appears
              if (sectionRef.current) {
                sectionRef.current.scrollTop = 0;
              }
            }}
          >
            <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-12 my-4 sm:my-6 lg:my-8 bg-gray-200 rounded-lg min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
              <motion.div 
                className="min-h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                {/* About Section - Mission Statement Format */}
                <div className="max-w-5xl mx-auto px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40 relative">
                  <motion.div
                    ref={overlayRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                    className="relative z-10"
                  >
                    {/* First Paragraph with Icon - Left */}
                    <div className="relative mb-16 md:mb-20 lg:mb-24">
                      {/* Icon - Left side */}
                      <div className="absolute -left-16 top-0 hidden lg:block">
                        <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <p className="text-base md:text-lg text-gray-900 leading-relaxed text-center max-w-xl mx-auto px-6 sm:px-8" style={{ maxWidth: "28rem" }}>
                        From Elon Musk risking everything on Tesla to the Wright brothers flying in obscurity before the world took notice — history has shown that building something truly original demands absolute commitment.
                      </p>
                    </div>

                    {/* Second Paragraph with Icon - Right */}
                    <div className="relative mb-16 md:mb-20 lg:mb-24">
                      <p className="text-base md:text-lg text-gray-900 leading-relaxed text-center max-w-xl mx-auto px-6 sm:px-8" style={{ maxWidth: "28rem" }}>
                        World-changing companies are never built halfway. They require time, capital, resilience, and the courage to move forward when belief is scarce.
                      </p>
                      {/* Icon - Right side */}
                      <div className="absolute -right-16 top-0 hidden lg:block">
                        <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Third Paragraph with Icon - Left */}
                    <div className="relative mb-16 md:mb-20 lg:mb-24">
                      {/* Icon - Left side */}
                      <div className="absolute -left-16 top-0 hidden lg:block">
                        <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </div>
                      <p className="text-base md:text-lg text-gray-900 leading-relaxed text-center max-w-xl mx-auto px-6 sm:px-8" style={{ maxWidth: "28rem" }}>
                        At <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent font-semibold">UpSparks</span>, we respect the conviction it takes for a founder to begin. Starting a company is a leap few dare to take.
                      </p>
                    </div>

                    {/* Fourth Paragraph with Icon - Right */}
                    <div className="relative mb-16 md:mb-20 lg:mb-24">
                      <p className="text-base md:text-lg text-gray-900 leading-relaxed text-center max-w-xl mx-auto px-6 sm:px-8" style={{ maxWidth: "28rem" }}>
                        That is why <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent font-semibold">UpSparks</span> commits alongside you — with our capital, our time, and our network — backing founders who are ready to build with full conviction.
                      </p>
                      {/* Icon - Right side */}
                      <div className="absolute -right-16 top-0 hidden lg:block">
                        <svg className="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                      </div>
                    </div>

                    {/* Final Statement */}
                    <div className="text-center mt-20">
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed">
                        When you choose to build boldly,<br />
                        <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">UpSparks</span> stands with you.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* All other sections - lazy loaded when overlay appears */}
                {isOverlapping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Team />
                    <PartnerNetwork />
                    <ValueProps />
                    <Portfolio />
                    <CTA />
                    <Footer />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
