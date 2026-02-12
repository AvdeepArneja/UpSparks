'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

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
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left side - MENU */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-800 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </motion.button>

            {/* Right side - APPLY */}
            <Link href="/apply">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer inline-block"
              >
                APPLY
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-50 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                  <motion.button
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
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
                          className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
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
