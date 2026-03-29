import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">GET A FREE QUOTE.</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              Ready for flawless auto glass service? Contact Marco and Ricardo today. We'll come to you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="glass p-4 rounded-full text-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-widest">Call Us</p>
                  <a href="tel:+1234567890" className="text-2xl font-bold hover:text-white/80 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="glass p-4 rounded-full text-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-widest">Email Us</p>
                  <a href="mailto:info@advantageautoglass.com" className="text-xl font-medium hover:text-white/80 transition-colors">info@advantageautoglass.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="glass p-4 rounded-full text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-widest">Service Area</p>
                  <p className="text-lg font-medium text-white/90">Hemet, Menifee, Murrieta,<br/>Temecula, Beaumont</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="glass p-4 rounded-full text-brand">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1 uppercase tracking-widest">Hours</p>
                  <p className="text-lg font-medium text-white/90">Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Name"
                  required
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Phone"
                  required
                />
                <label htmlFor="phone" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80">
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  id="vehicle"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Vehicle"
                  required
                />
                <label htmlFor="vehicle" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80">
                  Vehicle Year, Make & Model
                </label>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                  placeholder="Message"
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white/80">
                  How can we help?
                </label>
              </div>

              <button type="submit" className="w-full bg-brand text-black py-4 rounded-full font-bold text-lg hover:bg-brand/90 active:scale-95 transition-all mt-8">
                Request Quote
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
