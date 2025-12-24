import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ataberkyiilmaz',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/atayiilmaz',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:yiilmazataberk@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border border-foreground/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none text-sm"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 text-sm"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">Location</h4>
                <p className="text-muted-foreground text-sm">Istanbul, Turkey</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-medium text-foreground text-sm">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    className="w-12 h-12 glass-card-hover flex items-center justify-center text-muted-foreground hover:text-foreground"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card p-5">
              <h4 className="font-medium text-foreground mb-2 text-sm">
                Prefer a direct approach?
              </h4>
              <p className="text-muted-foreground text-xs mb-3">
                Drop me an email and I'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:yiilmazataberk@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                yiilmazataberk@gmail.com
                <Send className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
