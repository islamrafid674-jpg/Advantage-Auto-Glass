import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
        <img
          src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg"
          alt="Luxury Auto Glass"
          className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <div className="glass px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium text-white/80">
              <ShieldCheck size={16} className="text-white" />
              <span>20+ Years Experience • Est. 2004</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            FLAWLESS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40" style={{ textShadow: '0 0 40px rgba(118,214,169,0.5)' }}>
              PRECISION.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-white/60 max-w-2xl mb-10 font-light leading-relaxed">
            Premium mobile auto glass repair and replacement. We bring 20 years of trusted expertise directly to you in the Valley.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:+1234567890" className="w-full sm:w-auto bg-brand text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-brand/90 active:scale-95 transition-all">
              Call for a FREE Quote
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="w-full sm:w-auto glass px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 hover:text-brand active:scale-95 transition-all">
              DM for Inquiries
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-8 text-sm font-medium text-white/40 uppercase tracking-widest">
            <span>Hemet</span>
            <span className="hidden sm:inline">•</span>
            <span>Menifee</span>
            <span className="hidden sm:inline">•</span>
            <span>Murrieta</span>
            <span className="hidden sm:inline">•</span>
            <span>Temecula</span>
            <span className="hidden sm:inline">•</span>
            <span>Beaumont</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
