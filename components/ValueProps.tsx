'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const valueProps = [
  {
    title: '100+ Founder community',
    description: 'Find early users and ask for any help. Learn from the experience of our founding partners',
        icon: (
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {/* Cap with sunglasses - simplified line art */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-3 0-5 2-5 5v2c0 3 2 5 5 5s5-2 5-5V9c0-3-2-5-5-5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 9h10" />
            <circle cx="9" cy="11" r="1.5" fill="currentColor" />
            <circle cx="15" cy="11" r="1.5" fill="currentColor" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h1M16 11h1" />
          </svg>
        ),
  },
  {
    title: 'VC Intros & Connections',
    description: 'Warm intros to every fund across the globe and connections for anything you need help with - from product to marketing',
        icon: (
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {/* Handshake - simplified */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5L3 12l4.5 3.5M16.5 8.5L21 12l-4.5 3.5M12 12h-4.5M12 12h4.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.5c0-1.5 1-2.5 2.5-2.5M16.5 8.5c0-1.5-1-2.5-2.5-2.5" />
          </svg>
        ),
  },
  {
    title: 'Narrative is King',
    description: 'Your startup\'s narrative attracts users, employees, and investors. Having done this with 100+ teams, we will help you craft the best possible narrative for your company!',
        icon: (
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {/* Crown - simplified */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14M5 20V8l7-5 7 5v12M5 8h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8M8 16h8" />
            <circle cx="7" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="3" r="1" fill="currentColor" />
            <circle cx="17" cy="5" r="1" fill="currentColor" />
          </svg>
        ),
  },
];

export default function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-primary-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We provide more than just funding
          </h2>
          <p className="text-lg text-white mb-8">
            We invest <strong className="text-white font-bold">USD 250K to 600K</strong> and lead pre-seed/seed rounds in Indian startups. We are usually the first ones to commit and wire so you can continue building!
          </p>
          <p className="text-lg text-white mb-8">
            But beyond that you also get :
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                {prop.icon}
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-base md:text-lg text-white leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
