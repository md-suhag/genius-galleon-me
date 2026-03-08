import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    text: "Exceptional backend architecture. The API performance improved by 300% after the migration. Truly understands scalable systems.",
    avatar: "SC",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Developer at StartupX",
    text: "One of the best backend developers I've worked with. Clean code, great documentation, and always delivers on time.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Product Manager at CloudBase",
    text: "Built our entire microservices infrastructure from scratch. The system handles millions of requests daily without a hitch.",
    avatar: "EW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// testimonials"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What People Say
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Feedback from clients and colleagues I've had the pleasure of working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 card-hover relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-xs text-primary font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
