'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Initial Pitch',
    description: 'Share your vision and idea with us. We look for founders with big ideas and the determination to execute.',
  },
  {
    step: '02',
    title: 'Deep Dive',
    description: 'We dive deep into your market, team, and product. We ask tough questions and help refine your strategy.',
  },
  {
    step: '03',
    title: 'Decision',
    description: 'If we see a fit, we move fast. We are usually the first ones to commit and wire so you can continue building.',
  },
  {
    step: '04',
    title: 'Partnership',
    description: 'Beyond capital, we become your strategic partners - available 24/7 to help you navigate challenges and opportunities.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
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
            Our Approach
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We&apos;ve been in your shoes. We started with whiteboard ideas, grew, and then exited.
            Our goal is to help you do the same.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative h-full bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Step number with gradient */}
                <div className="relative mb-6">
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                    {step.step}
                  </div>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
              
              {/* Connector arrow */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                >
                  <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
