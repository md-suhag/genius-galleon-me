import { motion } from "framer-motion";
import { Server, Database, Code2, Terminal } from "lucide-react";

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
            
            {/* Terminal-style snippet */}
            <div className="mt-8 bg-card border border-border rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">const</span> developer = {"{"}<br />
                <span className="ml-4">name: <span className="text-foreground">"Backend Dev"</span>,</span><br />
                <span className="ml-4">focus: <span className="text-foreground">"Server Architecture"</span>,</span><br />
                <span className="ml-4">passion: <span className="text-foreground">"Building at scale"</span></span><br />
                {"}"};
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-mono text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Experience timeline mini */}
            <div className="mt-6 bg-card border border-border rounded-xl p-6 relative line-decoration">
              <h4 className="font-mono text-primary text-sm font-semibold mb-4 pl-4">Experience</h4>
              <div className="space-y-4 pl-4">
                {[
                  { role: "Senior Backend Developer", period: "2024 – Present" },
                  { role: "Full Stack Developer", period: "2022 – 2024" },
                  { role: "Junior Developer", period: "2020 – 2022" },
                ].map((exp) => (
                  <div key={exp.role}>
                    <p className="text-foreground text-sm font-medium">{exp.role}</p>
                    <p className="text-muted-foreground text-xs font-mono">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
