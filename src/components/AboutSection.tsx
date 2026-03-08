import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS",
  "Tailwind CSS", "Node.js", "Python", "Java",
  "LLM Development", "Prompt Engineering", "AI/ML", "Git",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tag = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-prompt mb-3">
            <span className="text-[hsl(var(--terminal-green))]">┌──(</span>
            <span className="text-[hsl(var(--terminal-green))] font-bold">harshit㉿kali</span>
            <span className="text-[hsl(var(--terminal-green))]">)-[</span>
            <span className="text-[hsl(var(--terminal-blue))]">~/about</span>
            <span className="text-[hsl(var(--terminal-green))]">]</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Crafting the web,<br />
            <span className="text-[hsl(var(--text-dim))]">one component at a time.</span>
          </h2>
          <p className="text-[hsl(var(--text-dim))] text-lg leading-relaxed mb-6">
            I'm <span className="text-foreground font-medium">Harshit Yadav</span> — a developer 
            who lives at the crossroads of modern front-end frameworks and cutting-edge AI. I work 
            with React, Next.js, TypeScript, and the whole JavaScript ecosystem to ship fast, 
            accessible, and pixel-perfect interfaces.
          </p>
          <p className="text-[hsl(var(--text-dim))] text-lg leading-relaxed mb-14">
            Beyond the front-end, I'm deep into LLM development — building intelligent applications 
            that leverage large language models, prompt engineering, and AI pipelines. I love turning 
            complex ideas into simple, elegant solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <motion.span key={skill} variants={tag} className="skill-tag">
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
