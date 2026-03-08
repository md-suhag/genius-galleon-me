import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(142 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 70% 45%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary mb-4 text-sm tracking-widest uppercase">
            {">"} Hello World
          </p>
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-foreground">
            I'm a <span className="text-primary text-glow">Backend</span>
            <br />Developer
          </h1>
          <div className="h-10 flex items-center justify-center">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="text-primary animate-blink">▊</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:brightness-110 transition-all border-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary/30 text-primary font-mono text-sm font-semibold rounded-md hover:bg-primary/10 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
