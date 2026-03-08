import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, Calendar, MessageSquare } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#", handle: "@username", color: "group-hover:bg-foreground/10" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "in/username", color: "group-hover:bg-blue-500/10" },
  { icon: Twitter, label: "Twitter", href: "#", handle: "@username", color: "group-hover:bg-sky-500/10" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", handle: "hello@example.com", color: "group-hover:bg-primary/10" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-5xl mx-auto relative z-10">
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
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Quick actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Send me an email</p>
                <p className="text-muted-foreground text-sm">hello@example.com</p>
              </div>
            </a>

            <a
              href="#"
              className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Schedule a call</p>
                <p className="text-muted-foreground text-sm">Book a 30-min meeting</p>
              </div>
            </a>

            <a
              href="#"
              className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Quick chat on Discord</p>
                <p className="text-muted-foreground text-sm">Usually respond within hours</p>
              </div>
            </a>
          </motion.div>

          {/* Right - Socials & Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-xl card-hover`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all`}>
                    <social.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-foreground font-medium text-sm">{social.label}</p>
                    <p className="text-muted-foreground text-xs font-mono">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status card */}
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-sm text-primary">Currently Available</span>
              </div>
              <div className="font-mono text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">
                <span className="text-primary">const</span> status = {"{"}<br />
                <span className="ml-3">available: <span className="text-primary">true</span>,</span><br />
                <span className="ml-3">timezone: <span className="text-foreground">"UTC+5:30"</span>,</span><br />
                <span className="ml-3">response: <span className="text-foreground">"&lt; 24 hours"</span></span><br />
                {"}"};
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
