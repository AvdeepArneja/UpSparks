'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="pt-48 pb-24 bg-white mt-16">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-[60%] bg-primary-600 rounded-lg px-8 py-12 text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's go all in together.
          </h2>
          
          <motion.a
            href="/apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply here
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
