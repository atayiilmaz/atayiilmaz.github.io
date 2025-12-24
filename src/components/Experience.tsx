import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
  type: 'full-time' | 'internship';
  role: string;
  company: string;
  date: string;
  description: string;
}

const experiences: TimelineItem[] = [
  {
    type: 'full-time',
    role: 'Software Engineer',
    company: 'Roasy AI',
    date: '2023 — Present',
    description: 'Building a marketing optimization platform called Roasy. Roasy AI is an AI-powered ad optimization platform optimizing mobile app campaigns across Meta and Google in real time.',
  },
  {
    type: 'full-time',
    role: 'Software Engineer',
    company: 'PEAX Growth Marketing Solutions',
    date: 'May 2025 — Present',
    description: 'Developed and maintained multiple mobile app projects. Collaborated with cross-functional teams to deliver high-quality software.',
  },
  {
    type: 'internship',
    role: 'Backend Development Intern',
    company: 'Jotform',
    date: 'August 2023 - September 2023',
    description: 'Mandatory internship — Worked on backend API development using PHP.',
  },
  {
    type: 'internship',
    role: 'Software Development Intern',
    company: 'Teknasyon',
    date: 'August 2022 - September 2022',
    description: 'Mandatory internship — Created responsive web interfaces and learned modern backend frameworks.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary uppercase tracking-widest mb-4 block">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[9px] top-6 bottom-0 w-px bg-foreground/10" />
              )}

              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-1 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                  exp.type === 'full-time'
                    ? 'bg-primary border-primary'
                    : 'bg-background border-primary'
                }`}
              >
                {exp.type === 'full-time' ? (
                  <Briefcase className="w-2.5 h-2.5 text-primary-foreground" />
                ) : (
                  <GraduationCap className="w-2.5 h-2.5 text-primary" />
                )}
              </div>

              {/* Content */}
              <div className="glass-card-hover p-5 ml-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                      exp.type === 'full-time'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'bg-foreground/5 text-muted-foreground border border-foreground/10'
                    }`}
                  >
                    {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                  </span>
                  <span className="text-xs text-muted-foreground">{exp.date}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1 tracking-tight">{exp.role}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
