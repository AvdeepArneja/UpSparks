'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

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
    description: 'Your startup&apos;s narrative attracts users, employees, and investors. Having done this with 100+ teams, we will help you craft the best possible narrative for your company!',
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
  const { theme } = useTheme();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
          : 'bg-gradient-to-br from-green-600 via-green-700 to-green-600'
      }`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLS45LTItMi0ySDJjLTEuMSAwLTIgLjktMiAydjJjMCAxLjEuOSAyIDIgMmgzMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20 text-center"
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
            We provide more than just funding
          </h2>
          <p className={`text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-medium transition-colors duration-500 ${
            theme === 'dark' ? 'text-white/90' : 'text-white/90'
          }`}>
            We invest <strong className="text-white font-bold">USD 250K to 600K</strong> and lead pre-seed/seed rounds in Indian startups. We are usually the first ones to commit and wire so you can continue building!
          </p>
          <p className={`text-xl font-medium transition-colors duration-500 ${
            theme === 'dark' ? 'text-white/80' : 'text-white/80'
          }`}>
            But beyond that you also get :
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/50' 
                  : 'bg-white/20 border border-white/30 hover:bg-white/30 hover:border-white/50'
              }`}
            >
              <div className="flex items-start gap-8">
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    {prop.icon}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors ${
                    theme === 'dark' ? 'text-white group-hover:text-white' : 'text-white group-hover:text-white'
                  }`}>
                    {prop.title}
                  </h3>
                  <p className={`text-lg md:text-xl leading-relaxed transition-colors ${
                    theme === 'dark' ? 'text-white/90' : 'text-white/90'
                  }`}>
                    {prop.description}
                  </p>
                </div>
              </div>
              
              {/* Hover gradient effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-primary-400/0 via-white/5 to-primary-500/0' 
                    : 'bg-gradient-to-r from-green-400/0 via-white/5 to-green-500/0'
                }`}
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
