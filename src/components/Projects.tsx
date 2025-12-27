import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  appStore?: string;
  playStore?: string;
  size: 'large' | 'medium' | 'small';
}

const projects: Project[] = [
  {
    title: 'Reflex Dash: Reaction Test',
    description: 'Reflex Dash is a fast-paced reaction time test and reflex training game designed to help you improve your speed, focus, and attention. Complete lightning-fast challenges, test your tapping skills, and track your progress as you train your brain.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/aa/80/84/aa808408-d476-be75-c10e-a02b3e865e8a/Placeholder.mill/1024x1024bb.png',
    tags: ['React Native Expo', 'TypeScript', 'Firebase'],
    appStore: 'https://apps.apple.com/us/app/reflex-dash-reaction-test/id6753911702',
    playStore: 'https://play.google.com/store/apps/details?id=com.ata.reflexdash',
    size: 'large',
  },
  {
    title: 'Portfolio Site',
    description: 'My personal portfolio showcasing my projects and skills',
    image: '/src/assets/portfolio.png',
    tags: ['React', 'Vite', 'TypeScript'],
    github: 'https://github.com/atayiilmaz/atayiilmaz.github.io',
    demo: 'https://atayiilmaz.github.io/',
    size: 'medium',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-xl border border-foreground/10 hover:border-foreground/30 hover:scale-[1.02] transition-all duration-300 ${
                project.size === 'large' 
                  ? 'lg:col-span-2 lg:row-span-2' 
                  : project.size === 'medium' 
                  ? 'lg:col-span-2' 
                  : 'lg:col-span-1'
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    className="p-2.5 bg-foreground/10 backdrop-blur-sm rounded-xl text-foreground border border-foreground/20 hover:border-foreground/40 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target='_blank'
                    className="p-2.5 bg-foreground/10 backdrop-blur-sm rounded-xl text-foreground border border-foreground/20 hover:border-foreground/40 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target='_blank'
                    className="h-10 w-10 bg-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden border border-foreground/20 hover:border-foreground/40 transition-colors flex items-center justify-center"
                    aria-label="Download on App Store"
                  >
                    <img
                      src="/store-badges/app-store.png"
                      alt="Download on the App Store"
                      className="h-2/4 w-auto object-contain"
                    />
                  </a>
                )}
                {project.playStore && (
                  <a
                    href={project.playStore}
                    target='_blank'
                    className="h-10 w-10 bg-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden border border-foreground/20 hover:border-foreground/40 transition-colors flex items-center justify-center"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      src="/store-badges/play-store.png"
                      alt="Get it on Google Play"
                      className="h-2/4 w-auto object-contain"
                    />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className={`text-muted-foreground text-sm mb-4 leading-relaxed ${
                  project.size === 'small' ? 'line-clamp-1' : 'line-clamp-2'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, project.size === 'small' ? 2 : 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-foreground/5 text-muted-foreground rounded-md border border-foreground/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
