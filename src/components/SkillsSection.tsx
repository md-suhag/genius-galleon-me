import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Runtime",
    icon: "{ }",
    skills: ["JavaScript", "TypeScript", "Node.js", "Python"],
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: ["Express.js", "NestJS", "Next.js", "Fastify"],
  },
  {
    title: "Databases",
    icon: "🗄",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    skills: ["Docker", "Git", "AWS", "CI/CD"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Concepts",
    icon: "📐",
    skills: ["REST APIs", "GraphQL", "Microservices", "WebSockets"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// skills"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tech Stack
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">{category.icon}</span>
                <h4 className="font-mono text-primary text-sm font-semibold">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground font-mono text-xs rounded-md border border-border group-hover:border-primary/20 hover:text-primary hover:border-primary/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
