import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 · Built with passion & lots of ☕
        </p>
      </footer>
    </div>
  );
};

export default Index;
