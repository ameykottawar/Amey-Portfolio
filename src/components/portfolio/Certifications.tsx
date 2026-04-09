const certs = [
  { 
    icon: "◈", 
    name: "Google Data Analytics", 
    issuer: "Google", 
    year: "2024",
    url: "https://www.coursera.org/account/accomplishments/specialization/Y3Y4ZXMTTUYZ" // Add your credential URL
  },
  { 
    icon: "⬡", 
    name: "Google Project Management", 
    issuer: "Google", 
    year: "2024",
    url: "https://www.coursera.org/account/accomplishments/..." // Add your credential URL
  },
  { 
    icon: "◉", 
    name: "GenAI", 
    issuer: "Outskill", 
    year: "2024",
    url: "https://drive.google.com/file/d/13r5asjY2SgCDtwGE4JA3OXEqgw-HDFTT/view?usp=sharing" // Add your credential URL
  },
   { 
    icon: "◈", 
    name: "Claude 101", 
    issuer: "Anthropic", 
    year: "2026",
    url: "https://drive.google.com/file/d/1A_WgDfNCUZngimufOfpH_HccChddSOSb/view?usp=sharing"
  },
  { 
    icon: "⬟", 
    name: "Industry & PR Head", 
    issuer: "EDC VIIT", 
    year: "2023"
  },
  { 
    icon: "◈", 
    name: "Sales & Business Associate", 
    issuer: "Vishwapreneur'23", 
    year: "2023"
  },
];

const Certifications = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">007 — Certifications</span>
    </div>
    <div className="mt-12 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, #DDD0C8, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, #DDD0C8, transparent)" }} />
      <div className="ticker-track flex w-max gap-6">
        {[...certs, ...certs, ...certs, ...certs].map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 rounded-lg shrink-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: "#D0C4BC", border: "1px solid rgba(50,50,50,0.12)", minWidth: 280 }}
          >
            <span className="text-2xl text-foreground">{c.icon}</span>
            <div>
              <div className="font-display font-semibold text-sm text-foreground">{c.name}</div>
              <div className="font-body text-xs text-warm-muted">{c.issuer} — {c.year}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
