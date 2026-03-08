import { motion } from "framer-motion";
import { Server, Database, Code2, Terminal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import GitHubGrid from "./GitHubGrid";

const stats = [
  { icon: Server, label: "APIs Built", value: "50+" },
  { icon: Database, label: "Databases Designed", value: "30+" },
  { icon: Code2, label: "Projects Completed", value: "40+" },
  { icon: Terminal, label: "Lines of Code", value: "100K+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
              {"// about"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              Turning ideas into <span className="gradient-text">scalable</span> systems
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate backend developer who loves building robust, scalable server-side
                applications. I specialize in the MERN stack, crafting RESTful APIs, designing
                database architectures, and building microservices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in clean code, solid architecture, and continuous learning.
                Every line of code I write is designed to be maintainable, testable, and production-ready.
              </p>
            </div>
            
            {/* Terminal snippet */}
            <div className="mt-8 bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="font-mono text-[10px] text-muted-foreground ml-2">about.js</span>
              </div>
              <div className="p-4 font-mono text-sm text-muted-foreground">
                <span className="text-primary">const</span> developer = {"{"}<br />
                <span className="ml-4">name: <span className="text-foreground">"Backend Dev"</span>,</span><br />
                <span className="ml-4">focus: <span className="text-foreground">"Server Architecture"</span>,</span><br />
                <span className="ml-4">passion: <span className="text-foreground">"Building at scale"</span>,</span><br />
                <span className="ml-4">coffee: <span className="text-foreground">Infinity</span></span><br />
                {"}"};
              </div>
            </div>
          </motion.div>

          {/* Right - Stats & Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-5 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <AnimatedCounter target={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>

            {/* GitHub Activity Grid */}
            <GitHubGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
