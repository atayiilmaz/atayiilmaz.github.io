import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-foreground/5">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-xs">
            © {currentYear} <span className="text-foreground">Ata Berk Yılmaz</span>
          </p>
          <p className="text-muted-foreground text-xs">
            Made with React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
