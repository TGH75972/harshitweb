import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialsSection from "@/components/SocialsSection";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const bgHue = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 220, 250, 200, 0]);
  const bgLightness = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 2]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor: useTransform(
          [bgHue, bgLightness],
          ([h, l]) => `hsl(${h}, 10%, ${l}%)`
        ),
      }}
      className="min-h-screen"
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SocialsSection />
    </motion.div>
  );
};

export default Index;
