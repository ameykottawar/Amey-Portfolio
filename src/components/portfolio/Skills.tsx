const groups = [
  {
    label: "Product Management",
    featured: true,
    skills: ["Requirement Gathering", "PRDs", "User Stories", "Roadmapping", "Stakeholder Management", "KPI Tracking", "Process Optimization", "Acceptance Criteria"],
  },
  {
    label: "AI & Technical",
    featured: true,
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Python", "SQL", "API Integration", "Automation", "No-Code Tools"],
  },
  {
    label: "Analytics & Research",
    featured: false,
    skills: ["Mixpanel", "PowerBI", "Market Research", "Competitive Analysis", "Customer Insights", "Data-Driven Decision Making"],
  },
  {
    label: "Design & Tools",
    featured: false,
    skills: ["Figma", "Wireframing", "User Trials", "Usability Testing"],
  },
  {
    label: "Leadership",
    featured: false,
    skills: ["Cross-functional Leadership", "Customer-Centric Thinking", "Problem-Solving", "Communication & Collaboration"],
  },
];

const Skills = () => (
  <section id="skills" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">005 — Skills</span>
      <div className="mt-12 space-y-10">
        {groups.map((g) => (
          <div key={g.label} className="reveal">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display font-semibold text-sm text-foreground">{g.label}</span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(50,50,50,0.12)" }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(s => (
                <span
                  key={s}
                  className="font-body text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    g.featured
                      ? { backgroundColor: "#323232", color: "#DDD0C8", border: "1px solid #323232" }
                      : { backgroundColor: "rgba(50,50,50,0.07)", border: "1px solid transparent" }
                  }
                  onMouseEnter={e => { if (!g.featured) (e.target as HTMLElement).style.borderColor = "#323232"; }}
                  onMouseLeave={e => { if (!g.featured) (e.target as HTMLElement).style.borderColor = "transparent"; }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
