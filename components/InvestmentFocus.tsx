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
    <section id="approach" className="py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Investment Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We back ambitious founders building technology-enabled startups across these sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-primary-100"
            >
              <div className="text-4xl mb-3">{sector.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{sector.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">Pre-Seed</div>
              <div className="text-gray-600">to</div>
              <div className="text-4xl font-bold text-primary-600 mb-2 mt-2">Seed</div>
              <p className="text-sm text-gray-500 mt-2">Investment Stage</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">$250K</div>
              <div className="text-gray-600">to</div>
              <div className="text-4xl font-bold text-primary-600 mb-2 mt-2">$1M</div>
              <p className="text-sm text-gray-500 mt-2">Check Size</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">India</div>
              <div className="text-gray-600">Focused</div>
              <p className="text-sm text-gray-500 mt-2">Geographic Focus</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
