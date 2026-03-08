import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen, ChevronDown } from "lucide-react";

const allSections = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Show first 4 directly, rest in "More" dropdown
const visibleSections = allSections.slice(0, 4);
const overflowSections = allSections.slice(4);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass =
    "px-3 py-2 font-mono text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-primary/5 transition-all";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-primary font-bold text-lg hover:text-glow transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          {"<Dev />"}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {isHome ? (
            <>
              {visibleSections.map((s) => (
                <a key={s.label} href={s.href} className={linkClass}>
                  {s.label}
                </a>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`${linkClass} flex items-center gap-1`}
                >
                  More
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {moreOpen && (
                  <div className="absolute top-full right-0 mt-2 w-44 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-xl shadow-background/50 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {overflowSections.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2.5 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/" className={linkClass}>
              Home
            </Link>
          )}

          <Link
            to="/blog"
            className={`px-3 py-2 font-mono text-sm rounded-md transition-all flex items-center gap-1.5 ${
              location.pathname.startsWith("/blog")
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Blog
          </Link>

          <a
            href={isHome ? "#contact" : "/"}
            className="ml-3 px-5 py-2 bg-primary/10 text-primary border border-primary/20 font-mono text-sm font-medium rounded-lg hover:bg-primary/20 transition-all"
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
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-1">
          {!isHome && (
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          )}
          {isHome &&
            allSections.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
              >
                {s.label}
              </a>
            ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className={`px-4 py-3 font-mono text-sm rounded-md transition-all flex items-center gap-2 ${
              location.pathname.startsWith("/blog")
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Blog
          </Link>
          <a
            href={isHome ? "#contact" : "/"}
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
