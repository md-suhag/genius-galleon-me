import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <footer className="py-12 border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="font-mono text-primary font-bold text-lg hover:text-glow transition-all">
                {"<Dev />"}
              </a>
              <span className="h-4 w-px bg-border hidden md:block" />
              <p className="font-mono text-xs text-muted-foreground hidden md:block">
                Backend Developer
              </p>
            </div>

            <div className="flex items-center gap-6">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-muted-foreground/50">
              © 2026 · Designed & built with passion
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/50">
              Made with React + TypeScript + ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
