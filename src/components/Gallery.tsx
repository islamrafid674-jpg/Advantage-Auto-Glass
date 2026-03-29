import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/656562988_17959233789064359_6149786435401807872_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzg2MTY2NzE4NzM0NTQyMTQ5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=4HALZEdwa3AQ7kNvwF-xpbn&_nc_oc=AdpdEg2UMto3NH_qm51tFpwVb0jXxGjh-BxMsS1okKoGO8TEW0Mov3Bv8fayNd_tFV0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=MP2LFCdxIseakn8JM3VOVw&_nc_ss=7a32e&oh=00_AfxwiMmmZmZ7JDTxpqPaoe1VgY5TlBjGhzSr6CxSuR-uYg&oe=69CF4B61",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/608354793_17949375573064359_8211013930723371754_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=Mzc5OTUwODA3MjUxNjU4MTYzMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=Iod0E0oZDrEQ7kNvwFJq8yb&_nc_oc=AdrnKg4KGQI_t93tZCkt1xsZs9gLs8KrxOoSlLZLMiIH2cw4SFgKReTIz7_e3hXTgtI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=gHUhV57u4wiTYRFHf7VFiQ&_nc_ss=7a32e&oh=00_AfyWP8OJWe7Vp2t3Gy8fbGThGBhdktDJjd2hfoc5zpTFqA&oe=69CF2ECE",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.75761-15/465147437_17900877042064359_3755622540521025619_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzQ5MDQxNzg5NTczMjIwNDk4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=5UysEc589yUQ7kNvwFpbIg5&_nc_oc=Adp_pyZRgh3ZMsx_NqecGy_CPrJLYdbZn0JykPs8dJB62nWinqMneDAYUPG8for7Ta8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=gHUhV57u4wiTYRFHf7VFiQ&_nc_ss=7a32e&oh=00_Afzv5a-gJsyPp-Ti0b0saHmmdMBRcKVX3So_vXJYn4M5oQ&oe=69CF462F",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/488518747_17920083705064359_8728933951922469806_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzYwNTIwOTg0ODc3NzgyMDM0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MjA5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=JZV4A-UR80sQ7kNvwEnuNDj&_nc_oc=AdoLaIEZ2yFNFBxa2IfN0rGCdaxygluDcH4Y5r6MMkeUOnsuFhc_OwPfFqH87vyHt8w&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=gHUhV57u4wiTYRFHf7VFiQ&_nc_ss=7a32e&oh=00_AfyiKUkXerjEhxpHD5-YAnT7yk8RimFpfVSLZ1_KJRnsvw&oe=69CF445A",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t39.30808-6/454524614_17889932868064359_9179663018560093733_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=MzQyOTAwOTc1MjMxODMwNjAzNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=RoIJvSPJ5oMQ7kNvwGLZ_lC&_nc_oc=AdqPqETuJ8lP0gcfjcVTbPhAVaAaHwGJTYjEdqXSkSnqnYBuHPMvbEybIcxt916fN-E&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=gHUhV57u4wiTYRFHf7VFiQ&_nc_ss=7a32e&oh=00_Afzt7n6Y9AUB1wWy5oeFAPFUAxoueVN4nAqDIoU9i85ybw&oe=69CF4DDD",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/656289017_18068130572298386_3836908919710460286_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzIxODIzNTE0NTE4OTE5MjUxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=yZHnBR5P2GEQ7kNvwEeiM6i&_nc_oc=AdrrTGj4dVmpL8IXC4UciPI9uH9lFqnH5iTkmKzMLeBylSfCIfPaUJvALYfjEPjyAVE&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=qSmcsHOGRBNnx-tr5IfcBQ&_nc_ss=7a32e&oh=00_AfzcSRTTqtIkdhuEYPOX71IQxQo5hJIQD9Ge8PcxDWBu4A&oe=69CF58E2",
  "https://instagram.fdac2-1.fna.fbcdn.net/v/t51.82787-15/623212634_18035554208768741_3510782344050654136_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzE4NzU0MzcwNDc2MDUxMTYwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FlyjdRM4kTQQ7kNvwH7A9up&_nc_oc=AdoVx29AZ9p6DIsKDTDZkLEjQXAtt9lU3i-DC9gBDV68hD3l7Kw63FFM0Qle56QAzBs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=qSmcsHOGRBNnx-tr5IfcBQ&_nc_ss=7a32e&oh=00_Afxadq-SESeHZAixbG2Ud7ceSg19MosPVyGGWFqUzM7vlw&oe=69CF40FF",
  "https://instagram.fdac2-2.fna.fbcdn.net/v/t51.82787-15/624848336_18113966872623507_7851055507101507962_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzE4NjMwODA1MDkyMjEzOTAyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=ZmtfTKrZ1l0Q7kNvwF1y54e&_nc_oc=AdrHo-RjHrEEOFfFE8bWBWGmpunrSXVFHBM1YSgn-P6F2MdW4rS_xLma6u2dWHsEXPs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=YIobb8UU3ZQSx2u0lyW4GA&_nc_ss=7a32e&oh=00_AfwZH5Yj5ln8lF_9pmjWmfrbPGfqayAno3hrr1K3qV8dUw&oe=69CF625A"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      next();
    } else if (swipe > 50) {
      prev();
    }
  };

  return (
    <section id="gallery" className="py-32 px-6 bg-black relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">THE WORK.</h2>
            <p className="text-white/50 text-lg max-w-xl">Precision in every detail. Swipe through our recent installations and repairs.</p>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-brand border-b border-white/30 hover:border-brand pb-1 transition-all inline-block w-fit">
            Follow on Instagram
          </a>
        </motion.div>

        {/* 3D Swipeable Carousel */}
        <div 
          className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center mt-12"
          style={{ perspective: '1200px' }}
        >
          <AnimatePresence initial={false}>
            {images.map((src, i) => {
              // Calculate shortest distance for infinite wrap-around effect
              let offset = i - currentIndex;
              if (offset > images.length / 2) offset -= images.length;
              if (offset < -images.length / 2) offset += images.length;

              // Only render the closest 5 items for performance and visual clarity
              if (Math.abs(offset) > 2) return null;

              const isCenter = offset === 0;
              // Adjust positioning based on offset
              const x = offset * 60; // percentage
              const z = -Math.abs(offset) * 150; // push back
              const rotateY = offset * -20; // rotate towards center
              const scale = 1 - Math.abs(offset) * 0.15;
              const opacity = 1 - Math.abs(offset) * 0.3;
              const zIndex = 10 - Math.abs(offset);

              return (
                <motion.div
                  key={i}
                  className="absolute w-[280px] sm:w-[350px] md:w-[400px] h-[400px] md:h-[550px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl border border-white/10"
                  style={{ zIndex }}
                  initial={false}
                  animate={{
                    x: `${x}%`,
                    z: z,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (offset > 0) next();
                    if (offset < 0) prev();
                  }}
                >
                  <img
                    src={src}
                    alt={`Auto Glass Work ${i + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay for non-center items to enhance depth */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-500" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 translate-y-12 md:translate-y-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:justify-between md:px-4 pointer-events-none z-30">
            <button 
              onClick={prev} 
              className="glass p-3 rounded-full hover:text-brand hover:border-brand transition-colors pointer-events-auto active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              className="glass p-3 rounded-full hover:text-brand hover:border-brand transition-colors pointer-events-auto active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
