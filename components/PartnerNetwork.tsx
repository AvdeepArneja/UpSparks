'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Vidit Aatrey', role: 'Founder, Meesho', company: 'meesho', companyColor: 'text-pink-600' },
  { name: 'Aprameya Radhakrishna', role: 'Founder, Koo & TFS', company: 'Koo', companyColor: 'text-yellow-600' },
  { name: 'Srikrishnan Ganesha', role: 'Founder, Rocketlane', company: 'rocketlane', companyColor: 'text-blue-600' },
  { name: 'Farooq Adam', role: 'Founder, Fynd', company: 'Fynd', companyColor: 'text-pink-600' },
  { name: 'Shubh Malhotra', role: 'Founder, Mobile Premier League', company: 'MPL', companyColor: 'text-red-600' },
  { name: 'Harsh Shah', role: 'Founder, Fynd', company: 'Fynd', companyColor: 'text-pink-600' },
  { name: 'Harpreet Grover', role: 'Founder, Co Cubes', company: 'CoCubes', companyColor: 'text-blue-600' },
  { name: 'Pravin Jadav', role: 'Founder, DhanApp', company: 'dhan', companyColor: 'text-green-600' },
  { name: 'Pawan Gupta', role: 'Founder, Fashinza', company: 'FASHINZA', companyColor: 'text-pink-600' },
  { name: 'Deepak Diwakar', role: 'Co-founder, Mindtickle', company: 'MindTickle!', companyColor: 'text-blue-600' },
  { name: 'Gireesh Subramanium', role: 'CPO, Zeta', company: 'zeta', companyColor: 'text-blue-600' },
  { name: 'Varun Sadana', role: 'Founder, SuperTails', company: 'supertails', companyColor: 'text-green-600' },
];

export default function PartnerNetwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            And of course, <span className="underline">our partner network</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full mb-2 overflow-hidden">
                {/* Placeholder for partner photo */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
                  Photo
                </div>
              </div>
              {/* Company logo placeholder */}
              <div className={`text-xs md:text-sm font-semibold ${partner.companyColor} mb-1`}>
                {partner.company}
              </div>
              <div className="font-semibold text-gray-900 text-sm md:text-base">{partner.name}</div>
              <div className="text-xs md:text-sm text-gray-600">{partner.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
