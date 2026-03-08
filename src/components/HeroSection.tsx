import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import harshitAvatar from "@/assets/harshit-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="terminal-window inline-block">
            <div className="terminal-header flex items-center gap-2 px-3 py-2 border-b border-[hsl(var(--border))]">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-2 text-xs text-[hsl(var(--text-dim))] font-mono">harshit@kali: ~</span>
            </div>
            <div className="px-4 py-3 font-mono text-sm">
              <span className="text-[hsl(var(--terminal-green))]">harshit@kali</span>
              <span className="text-[hsl(var(--text-dim))]">:</span>
              <span className="text-[hsl(var(--terminal-blue))]">~</span>
              <span className="text-[hsl(var(--text-dim))]">$ </span>
              <span className="text-foreground">status --availability</span>
              <div className="mt-1 flex items-center gap-2">
                <div className="glow-dot" />
                <span className="text-[hsl(var(--terminal-green))]">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 w-28 h-28 rounded-full overflow-hidden border-2 border-[hsl(var(--terminal-green)/0.5)] shadow-[0_0_20px_hsl(120_100%_50%/0.2)]"
        >
          <img src={harshitAvatar} alt="Harshit Yadav" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Hi There!</span>
          <br />
          <span className="text-foreground">I'm </span>
          <span className="gradient-text">Harshit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-[hsl(var(--text-dim))] max-w-xl mb-12 leading-relaxed"
        >
          A front-end developer & LLM enthusiast who builds fast, 
          beautiful, and intelligent web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium text-sm hover:opacity-90 transition-opacity"
          >
            About me
            <ChevronDown size={16} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(var(--border))] text-foreground font-medium text-sm hover:border-[hsl(var(--primary)/0.5)] transition-colors"
          >
            View projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
