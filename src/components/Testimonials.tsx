import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Michael R.",
      location: "Temecula, CA",
      text: "Marco and Ricardo are true professionals. They came to my office and replaced my windshield in under an hour. Flawless work and great communication.",
    },
    {
      name: "Sarah T.",
      location: "Murrieta, CA",
      text: "I had a massive crack in my windshield. Advantage Auto Glass gave me the best quote and the service was incredibly fast. Highly recommend their mobile service!",
    },
    {
      name: "David L.",
      location: "Menifee, CA",
      text: "20 years of experience really shows. They handled my luxury SUV with extreme care. The glass looks factory new. Don't go anywhere else.",
    },
  ];

  return (
    <section id="reviews" className="py-32 px-6 bg-black relative z-20 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">TRUSTED BY LOCALS.</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">Don't just take our word for it. See what our clients in the Valley have to say.</p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 min-w-[85vw] md:min-w-0 snap-center flex flex-col"
            >
              <Quote className="text-white/20 mb-6" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-white text-white" />
                ))}
              </div>
              <p className="text-lg text-white/90 leading-relaxed mb-8 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-white/50">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
