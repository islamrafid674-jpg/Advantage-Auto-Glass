import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="h-[60vh] md:h-[80vh] relative overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-125"
      >
        <img 
          src="https://images.unsplash.com/photo-1503376712341-ea71601004b4?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Car Detail" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-glow"
        >
          WE COME TO YOU.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto"
        >
          Serving Hemet, Menifee, Murrieta, Temecula, and Beaumont with unparalleled mobile service.
        </motion.p>
      </div>
    </section>
  );
}
