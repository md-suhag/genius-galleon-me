import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
            {"// contact"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-6">
            Let's Connect
          </h3>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out!
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">const</span> status ={" "}
            <span className="text-foreground">"Open to work"</span>;
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
