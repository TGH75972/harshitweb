import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    name: "Mechanical-Keyboard",
    description: "A mechanical keyboard showcase and customization project hosted on GitHub.",
    language: "Web",
    url: "https://github.com/TGH75972/Mechanical-Keyboard",
    stars: 0,
  },
  {
    name: "personal-web2",
    description: "Second iteration of my personal portfolio website with modern design and animations.",
    language: "Web",
    url: "https://github.com/TGH75972/personal-web2",
    stars: 0,
  },
  {
    name: "personal-website",
    description: "My original personal website — the first version of my developer portfolio.",
    language: "CSS",
    url: "https://github.com/TGH75972/personal-website",
    stars: 0,
  },
  {
    name: "Food-Guesser",
    description: "A favorite food guesser made using Python to display the food of your liking!",
    language: "Python",
    url: "https://github.com/TGH75972/Food-Guesser",
    stars: 0,
  },
];

const langColors: Record<string, string> = {
  CSS: "hsl(264, 70%, 55%)",
  Python: "hsl(210, 70%, 55%)",
  Web: "hsl(145, 70%, 50%)",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="terminal-prompt mb-3">
            <span className="text-[hsl(var(--terminal-green))]">┌──(</span>
            <span className="text-[hsl(var(--terminal-green))] font-bold">harshit㉿kali</span>
            <span className="text-[hsl(var(--terminal-green))]">)-[</span>
            <span className="text-[hsl(var(--terminal-blue))]">~/projects</span>
            <span className="text-[hsl(var(--terminal-green))]">]</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Things I've built
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <motion.a
              key={project.name}
              variants={item}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 flex flex-col justify-between gap-4 group transition-all duration-500 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-foreground font-semibold text-lg group-hover:text-[hsl(var(--primary))] transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[hsl(var(--text-dim))] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-[hsl(var(--text-dim))] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-[hsl(var(--text-dim))]">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ background: langColors[project.language] || "hsl(0,0%,40%)" }}
                  />
                  {project.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {project.stars}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/TGH75972"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--text-dim))] hover:text-[hsl(var(--primary))] transition-colors font-mono"
          >
            View all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
