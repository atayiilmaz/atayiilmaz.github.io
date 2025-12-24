import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Systems Architect',
  'Problem Solver',
  'Software Engineer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        containerRef.current.style.setProperty('--mouse-x', `${x}%`);
        containerRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute inset-0 spotlight" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs text-muted-foreground border border-foreground/10 rounded-full bg-card/50 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1] tracking-tight text-foreground">
            Hi, I'm Ata Berk
            <br />
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
            Computer Engineer & Full Stack Developer specializing in modern web & mobile technologies.
          </p>

          <div className="h-8 mb-10">
            <span className="text-base sm:text-lg text-primary">
              {displayText}
              <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-pulse" />
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium border border-foreground/10 text-muted-foreground rounded-xl hover:text-foreground hover:border-foreground/30 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
