import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Backend Developer",
    company: "TechFlow Inc.",
    period: "2024 – Present",
    description: "Leading backend architecture for microservices handling 2M+ daily requests. Designed real-time event processing pipeline.",
    tech: ["Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupX",
    period: "2022 – 2024",
    description: "Built and maintained RESTful APIs, implemented OAuth2 authentication, and optimized MongoDB query performance by 60%.",
    tech: ["Express", "MongoDB", "React", "Redis"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Technology",
    period: "2018 – 2022",
    description: "Focused on distributed systems, algorithms, and software engineering. Graduated with honors.",
    tech: ["Algorithms", "Data Structures", "OS", "Networks"],
  },
  {
    type: "work",
    title: "Backend Developer Intern",
    company: "CloudBase",
    period: "2021 – 2022",
    description: "Developed internal tools and automated deployment pipelines. Reduced CI/CD build time by 40%.",
    tech: ["Python", "Docker", "CI/CD", "Linux"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// experience"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            My Journey
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A timeline of my professional experience and education
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-[16px] h-[16px] rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="bg-card border border-border rounded-xl p-5 card-hover">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.type === "work" ? (
                        <Briefcase className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      )}
                      <span className="font-mono text-xs text-primary">{exp.period}</span>
                    </div>
                    <h4 className="font-display text-foreground font-semibold mb-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] text-primary/70 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
