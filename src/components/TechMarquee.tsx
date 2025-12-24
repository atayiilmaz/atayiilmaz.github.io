import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'React Native', icon: '/tech-icons/reactnative.svg' },
  { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'Python', icon: '/tech-icons/python.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
  { name: 'AWS', icon: '/tech-icons/aws.svg' },
  { name: 'Git', icon: '/tech-icons/git.svg' },
  { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/tech-icons/mongodb.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'Tailwind', icon: '/tech-icons/tailwind.svg' }
];

const TechMarquee = () => {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-12 border-y border-foreground/5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Tech Stack
        </span>
      </motion.div>

      <div className="relative">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />

        <div className="flex animate-marquee">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 px-5 py-2.5 mx-2 bg-card/50 backdrop-blur-sm border border-foreground/5 rounded-xl min-w-max"
            >
              <img src={tech.icon} alt={tech.name} className="w-5 h-5 brightness-0 invert" />
              <span className="text-foreground text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
