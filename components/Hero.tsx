'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';

export default function Hero() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Store arrow ref globally for About component
    if (arrowRef.current) {
      (window as Window & { heroArrowRef?: HTMLDivElement }).heroArrowRef = arrowRef.current;
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-0">
        <div className="text-center relative">
          {/* Animated logo - positioned just above headline */}
          <motion.div
            ref={logoContainerRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center mb-16 md:mb-20"
          >
            <AnimatedLogo />
            {/* Elegant divider line for visual separation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-8"
            />
          </motion.div>

          {/* Text content */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            The future belongs to those<br />
            who ignite it with{' '}
            <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">UpSparks</span>
            .
          </motion.h1>
          
          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto font-light"
          >
            We&apos;re here to back founders who are going all in
          </motion.p>

          {/* Scroll down arrow */}
          <motion.div
            ref={arrowRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 cursor-pointer group"
            onClick={() => {
              // Trigger custom event for About component
              window.dispatchEvent(new CustomEvent('arrow-clicked'));
            }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
