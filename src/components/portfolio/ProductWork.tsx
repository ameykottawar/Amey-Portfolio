const cards = [
  { tag: "Case Study", title: "AI Chatbot & Knowledge Automation", desc: "Designed and shipped an AI-powered support chatbot with automated knowledge workflows for Frido, reducing support load and improving user self-service at scale." },
  { tag: "PRD", title: "Checkout & Discovery Overhaul", desc: "End-to-end product spec for two key ecommerce features that improved the purchase funnel and product findability — resulting in a 40% conversion lift." },
  { tag: "Research", title: "Arcatron → mobility.myfrido Migration", desc: "Led the full rebranding and platform migration. Conducted competitor benchmarking and user trials to validate the new product architecture." },
  { tag: "Notion", title: "CX Insights Repository", desc: "Synthesized customer feedback, support queries, and usage data into a living insights repo used to drive a 30% improvement in customer experience score." },
  { tag: "Slides", title: "User Trial & Research Framework", desc: "The research playbook used to validate new product ideas at Frido — covering user trials, competitor benchmarking, and acceptance criteria." },
  { tag: "PDF", title: "BhojanBook — SaaS Product Design", desc: "Full product design for a SaaS subscription management platform for mess and tiffin businesses, built for non-technical users." },
];

const ProductWork = () => (
  <section id="work" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">003 — Product Work</span>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="reveal group p-6 rounded-lg relative overflow-hidden transition-all duration-300 hover:border-foreground"
            style={{ backgroundColor: "#D0C4BC", border: "1px solid rgba(50,50,50,0.12)", transitionDelay: `${i * 0.05}s` }}
          >
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            <span className="relative font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(50,50,50,0.07)" }}>
              {c.tag}
            </span>
            <h3 className="relative font-display font-bold text-lg text-foreground mt-4 group-hover:-translate-y-0.5 transition-transform duration-300">
              {c.title}
            </h3>
            <p className="relative font-body text-xs text-warm-muted mt-2 leading-relaxed">{c.desc}</p>
            <a href="#" className="relative inline-block font-body text-xs text-foreground mt-4 group-hover:underline">
              View →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductWork;
