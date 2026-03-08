import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

const phrases = [
  "Node.js Developer",
  "Express.js Expert",
  "MongoDB Specialist",
  "TypeScript Enthusiast",
  "MERN Stack Developer",
  "API Architect",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
          if (displayText.length === phrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(phrase.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 noise-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(142 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 70% 45%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Floating dots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-2 h-2 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-20 w-1.5 h-1.5 rounded-full bg-primary/20"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              Available for hire
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-foreground leading-[0.95]">
            I'm a{" "}
            <span className="gradient-text">Backend</span>
            <br />Developer
          </h1>

          <div className="h-10 flex items-center justify-center mb-2">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="text-primary animate-blink">▊</span>
            </span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mt-6 font-body leading-relaxed">
            Crafting robust server architectures, scalable APIs, and 
            high-performance backend systems that power modern applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:brightness-110 transition-all border-glow"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground font-mono text-sm font-semibold rounded-lg hover:border-primary/40 hover:text-primary transition-all bg-card/50"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Tech logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
        >
          {["Node.js", "Express", "MongoDB", "TypeScript", "React"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about">
            <ChevronDown className="w-6 h-6 text-primary/50 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
