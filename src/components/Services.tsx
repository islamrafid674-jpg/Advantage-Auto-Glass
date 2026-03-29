import { motion } from 'motion/react';
import { Wrench, Car, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Windshield Replacement",
      desc: "OEM-quality glass replacement with precision installation for perfect fit and safety.",
      icon: <Car size={32} />,
      image: "https://img.freepik.com/premium-photo/mechanics-man-changing-broken-windshield-automobile-windshield-windscreen-replacement-white-car-auto-repair-shop_29285-2340.jpg?semt=ais_incoming&w=740&q=80",
      colSpan: "md:col-span-2",
    },
    {
      title: "Auto Glass Repair",
      desc: "Fast, durable repairs for chips and cracks before they spread.",
      icon: <Wrench size={32} />,
      image: "https://irp.cdn-website.com/b9917932/dms3rep/multi/glass-repair-1920w.webp",
      colSpan: "md:col-span-1",
    },
    {
      title: "Mobile Installation",
      desc: "We come to you. Home, work, or anywhere in our service area.",
      icon: <MapPin size={32} />,
      image: "https://discodetailing.com/wp-content/uploads/2023/09/mobile-car-detailing.jpg",
      colSpan: "md:col-span-3",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative z-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">OUR SERVICES.</h2>
          <p className="text-white/50 text-lg max-w-xl">Uncompromising quality and convenience. We deliver premium auto glass solutions directly to your location.</p>
        </motion.div>

        {/* Desktop Bento Grid / Mobile Carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden min-w-[85vw] md:min-w-0 snap-center h-[400px] md:h-[500px] ${service.colSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
