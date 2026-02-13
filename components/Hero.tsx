'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Store arrow ref globally for About component
    if (arrowRef.current) {
      (window as Window & { heroArrowRef?: HTMLDivElement }).heroArrowRef = arrowRef.current;
    }
  }, []);

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-24 overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
        : 'bg-gradient-to-br from-green-50 via-white to-green-50'
    }`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
            theme === 'dark' ? 'bg-primary-600/30' : 'bg-green-600/20'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
            theme === 'dark' ? 'bg-primary-700/20' : 'bg-green-700/20'
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center relative">
          {/* Animated logo - positioned just above headline */}
          <motion.div
            ref={logoContainerRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center mb-20 md:mb-24"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedLogo />
            </motion.div>
            {/* Elegant divider line for visual separation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className={`w-32 h-0.5 bg-gradient-to-r from-transparent to-transparent mt-10 transition-colors duration-500 ${
                    theme === 'dark' ? 'via-primary-500' : 'via-green-500'
                  }`}
            />
          </motion.div>

          {/* Text content */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight transition-colors duration-500 -mt-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 800,
            }}
          >
            The future belongs to those<br />
            who ignite it with{' '}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className={`relative z-10 bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500' 
                  : 'bg-gradient-to-r from-green-500 via-green-600 to-green-500'
              }`}>
                UpSparks
              </span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-primary-500/20 blur-xl rounded-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
            .
          </motion.h1>
          
          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className={`text-xl md:text-2xl mt-8 max-w-3xl mx-auto font-medium leading-relaxed transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We&apos;re here to back founders who are going all in
          </motion.p>

          {/* Scroll down arrow */}
          <motion.div
            ref={arrowRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-24 cursor-pointer group"
            onClick={() => {
              // Trigger custom event for About component
              window.dispatchEvent(new CustomEvent('arrow-clicked'));
            }}
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
              className="flex flex-col items-center gap-3"
            >
              <span className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>Scroll</span>
              <motion.div
                whileHover={{ scale: 1.15, y: 5 }}
                className={`relative p-4 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border border-white/20 group-hover:bg-white/20' 
                    : 'bg-gray-100 border border-gray-200 group-hover:bg-gray-200'
                }`}
              >
                <motion.svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
