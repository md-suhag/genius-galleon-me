import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    description: "Full-featured REST API with authentication, payment integration, and order management built with Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    description: "WebSocket-powered messaging platform with rooms, file sharing, and message persistence using Socket.io and Redis.",
    tech: ["Socket.io", "Redis", "React", "TypeScript", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description: "Microservices-based project management tool with role-based access, notifications, and CI/CD pipeline.",
    tech: ["NestJS", "PostgreSQL", "GraphQL", "Docker", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform API",
    description: "Headless CMS with markdown support, image optimization, caching layer, and full-text search capabilities.",
    tech: ["Express", "MongoDB", "Redis", "Cloudinary", "Elasticsearch"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// projects"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-12">
            Featured Work
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all border-glow"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded">
                    {t}
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

export default ProjectsSection;
