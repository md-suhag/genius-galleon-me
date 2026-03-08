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
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// about"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-8">
            Who I Am
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            I'm a passionate backend developer who loves building robust, scalable server-side
            applications. I specialize in the MERN stack, crafting RESTful APIs, designing
            database architectures, and building microservices. I believe in clean code,
            solid architecture, and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors border-glow"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-mono text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
