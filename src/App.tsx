import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Services from './components/Services';
import ParallaxBreak from './components/ParallaxBreak';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white">
      <Cursor />
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Services />
      <ParallaxBreak />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
