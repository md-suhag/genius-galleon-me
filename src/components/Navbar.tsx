import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const sections = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-primary font-bold text-lg hover:text-glow transition-all">
          {"<Dev />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 font-mono text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-mono text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all"
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 bg-primary/10 text-primary border border-primary/20 font-mono text-sm font-medium rounded-lg hover:bg-primary/20 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-2">
          {links.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-primary/10 text-primary border border-primary/20 font-mono text-sm font-medium rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
