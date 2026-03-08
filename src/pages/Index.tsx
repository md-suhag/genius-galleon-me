import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-10 text-center border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="#" className="font-mono text-primary font-bold text-sm">
              {"<Dev />"}
            </a>
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 · Built with passion & lots of ☕
            </p>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
