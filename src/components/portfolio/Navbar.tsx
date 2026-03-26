import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md" style={{ backgroundColor: "rgba(221,208,200,0.85)", borderBottom: "1px solid rgba(50,50,50,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#hero" className="font-display font-bold text-foreground tracking-tight text-lg">AK</a>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-foreground transition-transform" style={mobileOpen ? { transform: "rotate(45deg) translateY(3px)" } : {}} />
          <span className="block w-5 h-px bg-foreground transition-opacity" style={mobileOpen ? { opacity: 0 } : {}} />
          <span className="block w-5 h-px bg-foreground transition-transform" style={mobileOpen ? { transform: "rotate(-45deg) translateY(-3px)" } : {}} />
        </button>
        <div className={`${mobileOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-14 left-0 right-0 md:top-auto bg-background md:bg-transparent gap-1 md:gap-6 p-4 md:p-0 border-b md:border-0`} style={{ borderColor: "rgba(50,50,50,0.12)" }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-xs tracking-wider uppercase py-2 md:py-0 transition-colors ${active === l.href ? "text-foreground" : "text-warm-muted hover:text-foreground"}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
