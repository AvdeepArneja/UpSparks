'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const sectors = [
  { name: 'DeepTech', icon: '🔬' },
  { name: 'B2B SaaS', icon: '💼' },
  { name: 'FinTech', icon: '💳' },
  { name: 'AI/ML', icon: '🤖' },
  { name: 'Consumer Tech', icon: '📱' },
  { name: 'Web3', icon: '⛓️' },
];

export default function InvestmentFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="approach" className="relative py-32 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-primary-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Our Investment Focus
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            We back ambitious founders building technology-enabled startups across these sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.1, y: -8, rotate: [0, -2, 2, 0] }}
              className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center overflow-hidden"
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {sector.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ y: -5 }}
          className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-red-50/50"></div>
          
          <div className="relative grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-3">
                Pre-Seed
              </div>
              <div className="text-gray-500 font-medium mb-3">to</div>
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-4">
                Seed
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Investment Stage</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-3">
                $250K
              </div>
              <div className="text-gray-500 font-medium mb-3">to</div>
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-4">
                $1M
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Check Size</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-3">
                India
              </div>
              <div className="text-gray-500 font-medium mb-4">Focused</div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Geographic Focus</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
