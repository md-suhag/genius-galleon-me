import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight, Terminal, MapPin } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 noise-bg overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(142 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 70% 45%) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Floating elements */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-20 w-2 h-2 rounded-full bg-primary/30" />
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 left-20 w-1.5 h-1.5 rounded-full bg-primary/20" />
      <motion.div animate={{ x: [0, 10, 0], y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 right-32 w-1 h-1 rounded-full bg-primary/25" />

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          {/* Main content */}
          <div className="text-center lg:text-left">
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

              <p className="font-mono text-sm md:text-base text-muted-foreground/70 mb-3 tracking-wide">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 text-foreground leading-[0.95]">
                <span className="gradient-text">Abdus Salam</span>
                <br />
                <span className="gradient-text">Suhag</span>
              </h1>
              <p className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground/80 mb-4">
                Backend Developer
              </p>

              <div className="h-10 flex items-center justify-center lg:justify-start mb-2">
                <span className="font-mono text-xl md:text-2xl text-muted-foreground">
                  {">"} {displayText}
                  <span className="text-primary animate-blink">▊</span>
                </span>
              </div>

              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mt-6 font-body leading-relaxed">
                Crafting robust server architectures, scalable APIs, and 
                high-performance backend systems that power modern applications.
              </p>

              <div className="flex items-center gap-3 justify-center lg:justify-start mt-4 text-muted-foreground/60">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-mono text-xs">Remote · Worldwide</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span className="font-mono text-xs">3+ Years Experience</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
          </div>

          {/* Right side - Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="w-[320px] bg-card border border-border rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="font-mono text-xs text-muted-foreground ml-2">terminal</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">~</span> node server.js
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-primary/70"
                >
                  ✓ Connected to MongoDB
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-primary/70"
                >
                  ✓ Redis cache initialized
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="text-primary/70"
                >
                  ✓ Auth middleware loaded
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="text-primary"
                >
                  🚀 Server running on :3000
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-muted-foreground flex items-center gap-1"
                >
                  <span className="text-primary">~</span> 
                  <span className="animate-blink">▊</span>
                </motion.div>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-4 grid grid-cols-2 gap-3"
            >
              <div className="bg-card/80 border border-border rounded-lg p-3 text-center">
                <p className="font-mono text-lg font-bold text-primary">99.9%</p>
                <p className="font-mono text-[10px] text-muted-foreground">Uptime</p>
              </div>
              <div className="bg-card/80 border border-border rounded-lg p-3 text-center">
                <p className="font-mono text-lg font-bold text-primary">&lt;50ms</p>
                <p className="font-mono text-[10px] text-muted-foreground">Avg Response</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex items-center justify-center gap-8 flex-wrap"
        >
          <span className="text-xs text-muted-foreground/30 font-mono uppercase tracking-widest">Tech I use</span>
          <div className="h-px w-8 bg-border" />
          {["Node.js", "Express", "MongoDB", "TypeScript", "React", "Docker", "AWS"].map((tech) => (
            <span key={tech} className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest hover:text-primary/60 transition-colors cursor-default">
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
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="font-mono text-[10px] text-muted-foreground/40 group-hover:text-primary/60 transition-colors uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 text-primary/40 animate-bounce group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
