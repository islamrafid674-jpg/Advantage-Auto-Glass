import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function TrustMarquee() {
  const items = [
    "20+ YEARS EXPERIENCE",
    "MOBILE SERVICE",
    "TRUSTED LOCAL EXPERTS",
    "ESTABLISHED 2004",
    "FLAWLESS INSTALLATION",
    "WE COME TO YOU",
  ];

  return (
    <div className="py-8 border-y border-white/10 bg-black overflow-hidden flex whitespace-nowrap relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xl md:text-2xl font-bold tracking-widest text-white/80 uppercase">
              {item}
            </span>
            <Star className="text-white/30" size={24} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
