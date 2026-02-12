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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been in your shoes. We started with whiteboard ideas, grew, and then exited.
            Our goal is to help you do the same.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-primary-100 h-full">
                <div className="text-5xl font-bold text-primary-600 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
