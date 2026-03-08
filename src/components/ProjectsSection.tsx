import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    description: "Full-featured REST API with authentication, payment integration, and order management built with Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description: "WebSocket-powered messaging platform with rooms, file sharing, and message persistence using Socket.io and Redis.",
    tech: ["Socket.io", "Redis", "React", "TypeScript", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management System",
    description: "Microservices-based project management tool with role-based access, notifications, and CI/CD pipeline.",
    tech: ["NestJS", "PostgreSQL", "GraphQL", "Docker", "AWS"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Blog Platform API",
    description: "Headless CMS with markdown support, image optimization, caching layer, and full-text search capabilities.",
    tech: ["Express", "MongoDB", "Redis", "Cloudinary", "Elasticsearch"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// projects"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Work
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of projects that showcase my expertise in backend development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 card-hover relative overflow-hidden"
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider rounded-full border border-primary/20">
                    Featured
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h4>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-primary/70 bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a href={project.github} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
