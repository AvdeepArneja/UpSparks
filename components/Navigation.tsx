'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Show navigation immediately (matching Hero timing)
    setIsVisible(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [menuOpen]);

  const menuItems = [
    { label: 'Home', href: '/', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); } },
    { label: 'Portfolio', href: '/portfolio', action: () => setMenuOpen(false) },
    { label: 'Apply', href: '/apply', action: () => setMenuOpen(false) },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-lg transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-black/80 border-white/10 shadow-black/50' 
            : 'bg-white/95 border-green-100 shadow-green-50/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-24 gap-4">
            {/* Left side - MENU */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'text-white bg-white/10 hover:bg-white/20 border border-white/20' 
                  : 'text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 shadow-green-100/50'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="relative z-10">{menuOpen ? 'CLOSE' : 'MENU'}</span>
              <motion.div
                className={`absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-primary-500/10 to-primary-600/10' 
                    : 'bg-gradient-to-r from-green-500/10 to-green-600/10'
                }`}
                layoutId="menuBg"
              />
            </motion.button>

            {/* Center - Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'text-white bg-white/10 hover:bg-white/20 border border-white/20' 
                  : 'text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 shadow-green-100/50'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <motion.div
                key={theme}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-xs">LIGHT</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="text-xs">DARK</span>
                  </>
                )}
              </motion.div>
            </motion.button>

            {/* Right side - APPLY */}
            <Link href="/apply">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-8 py-3.5 rounded-full font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden group ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-700 hover:via-primary-600 hover:to-primary-700 shadow-primary-500/50' 
                    : 'bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 shadow-green-500/50'
                }`}
              >
                <span className="relative z-10">APPLY</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className={`fixed inset-0 backdrop-blur-sm z-40 transition-colors duration-500 ${
                theme === 'dark' ? 'bg-black/50' : 'bg-black/30'
              }`}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 left-0 bottom-0 w-full sm:w-80 shadow-2xl z-50 overflow-y-auto transition-colors duration-500 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white border-r border-green-100'
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className={`flex items-center justify-between p-6 border-b transition-colors duration-500 ${
                  theme === 'dark' ? 'border-gray-700' : 'border-green-100'
                }`}>
                  <h2 className={`text-2xl font-bold transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-green-900'
                  }`}>Menu</h2>
                  <motion.button
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                      theme === 'dark' 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-green-50 hover:bg-green-100'
                    }`}
                    aria-label="Close menu"
                  >
                    <svg
                      className={`w-6 h-6 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-green-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={item.action}
                          className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                            theme === 'dark' 
                              ? 'text-gray-300 hover:text-primary-400 hover:bg-gray-800' 
                              : 'text-green-700 hover:text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    UpSparks Capital
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
