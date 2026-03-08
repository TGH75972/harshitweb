import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/TGH75972" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harshit-yadav-b0020829a/" },
  { icon: Twitter, label: "X", href: "https://twitter.com/harshityadav" },
  { icon: Mail, label: "Email", href: "mailto:darknode369@gmail.com" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const SocialsSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            // connect
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect!
          </h2>
          <p className="text-[hsl(var(--text-dim))] text-lg max-w-md font-mono">
            <span className="text-[hsl(var(--terminal-green))]">$</span> echo "Open to collaborations, freelance work, or just a good conversation about tech."
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-3"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              variants={item}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[hsl(var(--border))] text-[hsl(var(--text-dim))] hover:text-foreground hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 text-sm font-medium group"
            >
              <Icon size={18} className="group-hover:text-[hsl(var(--primary))] transition-colors" />
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-32 text-center font-mono text-sm"
      >
        <span className="text-[hsl(var(--terminal-green))]">harshit@kali</span>
        <span className="text-[hsl(var(--text-dim))]">:</span>
        <span className="text-[hsl(var(--terminal-blue))]">~</span>
        <span className="text-[hsl(var(--text-dim))]">$ </span>
        <span className="text-foreground">Made by Harshit Yadav</span>
        <span className="typing-cursor"></span>
      </motion.footer>
    </section>
  );
};

export default SocialsSection;
