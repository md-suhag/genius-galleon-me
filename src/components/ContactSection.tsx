import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", handle: "@username" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "in/username" },
  { icon: Twitter, label: "Twitter", href: "#", handle: "@username" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", handle: "hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// contact"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Let's Build Something <span className="gradient-text">Together</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl card-hover group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <social.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">{social.label}</p>
                <p className="text-muted-foreground text-xs font-mono">{social.handle}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:brightness-110 transition-all border-glow"
          >
            <Send className="w-4 h-4" />
            Send me a message
          </a>

          <div className="mt-10 font-mono text-sm text-muted-foreground bg-card border border-border rounded-lg px-6 py-4 inline-block">
            <span className="text-primary">const</span> status ={" "}
            <span className="text-foreground">"Open to work"</span>;{" "}
            <span className="text-muted-foreground/50">// Let's talk!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
