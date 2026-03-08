import { motion } from "framer-motion";
import { Zap, Shield, Rocket, RefreshCw, Code2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "API Development",
    desc: "High-performance RESTful & GraphQL APIs with clean architecture and comprehensive documentation.",
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    desc: "OAuth2, JWT, role-based access control, and security-first backend architecture.",
  },
  {
    icon: Rocket,
    title: "Cloud Deployment",
    desc: "AWS, Docker, CI/CD pipelines, and infrastructure-as-code for reliable deployments.",
  },
  {
    icon: RefreshCw,
    title: "Microservices",
    desc: "Event-driven microservice architectures with message queues and service mesh.",
  },
  {
    icon: Code2,
    title: "Database Design",
    desc: "Schema design, query optimization, migrations, and multi-database strategies.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    desc: "Caching strategies, query optimization, load balancing, and monitoring solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// services"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What I Do
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Specialized backend services to bring your product vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-xl p-6 card-hover relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
