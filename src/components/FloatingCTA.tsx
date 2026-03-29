import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <a 
            href="tel:+1234567890"
            className="w-full bg-brand text-black py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(118,214,169,0.3)] active:scale-95 transition-transform"
          >
            <Phone size={20} />
            Call Now for Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
