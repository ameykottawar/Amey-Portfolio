const projects = [
  {
    num: "01",
    name: "BhojanBook",
    desc: "SaaS platform for mess & tiffin businesses to manage subscriptions, meal tracking, and billing.",
    tags: ["SaaS", "Product Design", "Non-technical Users"],
    githubUrl: "https://github.com/ameykottawar/bhojanbook.git",
    liveUrl: "https://bhojanbook.vercel.app/",
  },
  {
    num: "02",
    name: "AskData",
    desc: "Natural language data querying interface for non-technical users to extract business insights.",
    tags: ["Python", "SQL", "NLP", "Backend"],
  },
];

const Projects = () => (
  <section id="projects" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">004 — Projects</span>
      <div className="mt-12 space-y-0">
        {projects.map((p) => (
          <div
            key={p.num}
            className="reveal group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b transition-all duration-300 hover:pl-4"
            style={{ borderColor: "rgba(50,50,50,0.12)" }}
          >
            <span className="font-body text-xs text-warm-muted w-8 shrink-0">{p.num}</span>
            <h3 className="font-display font-bold text-xl text-foreground group-hover:text-black transition-colors shrink-0 w-40">
              {p.name}
            </h3>
            <p className="font-body text-xs text-warm-muted flex-1 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 shrink-0">
              {p.tags.map(t => (
                <span key={t} className="font-body text-[10px] px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(50,50,50,0.07)" }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-foreground hover:underline">GH</a>
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-foreground hover:underline">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
