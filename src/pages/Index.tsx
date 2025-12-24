import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
