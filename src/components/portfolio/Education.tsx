const cards = [
  {
    degree: "B.Tech in Electronics & Telecommunication",
    institution: "Vishwakarma Institute of Information Technology, Pune",
    years: "2021 – 2025",
    cgpa: "CGPA: 8.2",
    desc: "Focused on systems thinking and engineering fundamentals, with extracurriculars in entrepreneurship and product leadership.",
    highlight: false,
  },
];

const Education = () => (
  <section id="education" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">006 — Education</span>
      <div className="mt-12 grid gap-6">
        {cards.map((c) => (
          <div
            key={c.degree}
            className="reveal group p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: c.highlight ? "#323232" : "#D0C4BC",
              border: "1px solid rgba(50,50,50,0.12)",
            }}
          >
            <span className="font-body text-xs" style={{ color: c.highlight ? "#A89C94" : "#7A7068" }}>{c.years}</span>
            <h3 className="font-display font-bold text-lg mt-2" style={{ color: c.highlight ? "#DDD0C8" : "#323232" }}>
              {c.degree}
            </h3>
            <p className="font-body text-xs mt-1" style={{ color: c.highlight ? "#A89C94" : "#7A7068" }}>{c.institution}</p>
            <p className="font-body text-xs mt-4" style={{ color: c.highlight ? "#A89C94" : "#7A7068" }}>{c.cgpa}</p>
            <p className="font-body text-xs mt-4 leading-relaxed" style={{ color: c.highlight ? "rgba(221,208,200,0.8)" : "#7A7068" }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
