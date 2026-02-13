'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { theme } = useTheme();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
          : 'bg-gradient-to-br from-green-600 via-green-700 to-green-600'
      }`}>
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative flex justify-center px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-3xl px-10 md:px-16 py-16 md:py-20 text-center border border-white/10 shadow-2xl"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-primary-600/20 to-primary-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-tight">
              Let&apos;s go all in together.
            </h2>
            
            <Link href="/apply">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className={`relative bg-white px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-colors shadow-2xl ${
                  theme === 'dark' 
                    ? 'text-primary-600 hover:bg-red-50' 
                    : 'text-green-600 hover:bg-green-50'
                }`}>
                  Apply here
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
