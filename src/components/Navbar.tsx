import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/40' : 'bg-transparent border-transparent'}`}>
            <a href="#" className="flex-shrink-0 py-1">
              <img 
                src="https://i.imgur.com/WTETu2O.png" 
                alt="Advantage Auto Glass" 
                className="h-10 md:h-14 w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 text-white/70 hover:text-brand transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:+1234567890" className="bg-brand text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand/90 transition-all duration-300 flex items-center gap-2 active:scale-95">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-white active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <button
              className="absolute top-8 right-8 p-2 text-white/70 hover:text-white active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl font-bold tracking-tighter text-white/90 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-16 flex flex-col space-y-4"
            >
              <a href="tel:+1234567890" className="bg-brand text-black px-8 py-4 rounded-full text-center font-bold text-lg active:scale-95 transition-transform">
                Call for Quote
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="glass px-8 py-4 rounded-full text-center font-bold text-lg active:scale-95 transition-transform hover:text-brand">
                DM for Inquiries
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
