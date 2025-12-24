import { motion } from 'framer-motion';
import { Code2, Cpu, Palette, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and well-documented code.',
  },
  {
    icon: Cpu,
    title: 'Systems Thinking',
    description: 'Approaching problems with analytical precision.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive user experiences.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary uppercase tracking-widest mb-4 block">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              <div className="glass-card overflow-hidden w-full h-full">
                <img 
                  src={profilePhoto} 
                  alt="Ata Berk Yılmaz" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Engineering graduate</span> with
              a passion for building digital solutions that make a difference. Currently working in the
              private sector, I specialize in full-stack development.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              My journey in tech started during university, where I completed multiple internships
              that shaped my understanding of real-world software development. I believe in continuous
              learning and staying up-to-date with the latest technologies.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies or contributing to
              open-source projects.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card-hover p-4"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-medium text-foreground mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
