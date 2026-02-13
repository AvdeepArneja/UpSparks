'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function AnimatedLogo() {
  // Split "UPSPARKS" into letters for subtle animation
  const letters = ['U', 'P', 'S', 'P', 'A', 'R', 'K', 'S'];
  const { theme } = useTheme();
  
  return (
    <motion.div
      className="relative inline-flex items-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minWidth: 'fit-content' }}
    >
      {/* Logo letters with subtle professional animation */}
      <div className="flex items-center gap-0.5 relative z-10" style={{ minWidth: 'fit-content' }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{
              opacity: { duration: 0.4, delay: index * 0.05, ease: "easeOut" },
              y: { duration: 0.4, delay: index * 0.05, ease: "easeOut" },
            }}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      
      {/* Subtle underline accent with gentle animation */}
      <motion.div
        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: 1,
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          scaleX: { duration: 0.8, delay: 0.5, ease: "easeOut" },
          opacity: {
            duration: 2.5,
            delay: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        style={{
          transformOrigin: 'left center',
          backgroundSize: '200% 100%',
        }}
      />
      
      
        {/* Minimal professional rocket animation */}
        <motion.div
          className="relative ml-3 md:ml-4 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1 },
            x: { duration: 0.6, delay: 1 },
            y: {
              duration: 2.5,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          style={{
            zIndex: 15,
          }}
        >
        {/* Minimal rocket icon */}
        <motion.svg
               className={`w-6 h-6 md:w-7 md:h-7 drop-shadow-lg transition-colors duration-500 ${
                 theme === 'dark' ? 'text-primary-600' : 'text-green-600'
               }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          animate={{
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Rocket body - minimal design */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3L9 6h6l-3-3zM9 6v12M15 6v12M9 18l-2 3h10l-2-3"
          />
        </motion.svg>
        
        {/* Red fire exhaust trail - perfectly centered */}
        <motion.div
          className="w-1.5 h-7 rounded-full"
          style={{
            background: 'linear-gradient(to top, rgba(220, 38, 38, 0.9), rgba(239, 68, 68, 0.7), rgba(248, 113, 113, 0.5), rgba(254, 202, 202, 0.3), transparent)',
            marginTop: '2px',
          }}
          animate={{
            scaleY: [0.9, 1.3, 0.9],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
