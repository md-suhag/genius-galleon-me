import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Runtime",
    skills: ["JavaScript", "TypeScript", "Node.js", "Python"],
  },
  {
    title: "Frameworks",
    skills: ["Express.js", "NestJS", "Next.js", "Fastify"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "AWS", "CI/CD"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    title: "Concepts",
    skills: ["REST APIs", "GraphQL", "Microservices", "WebSockets"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// skills"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-12">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h4 className="font-mono text-primary text-sm font-semibold mb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground font-mono text-xs rounded border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
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
