const bullets = [
  "Drove delivery of 15+ product launches collaborating with engineering, design, marketing, and operations teams",
  "Built and launched 2 key features improving checkout and product discovery, increasing sales conversion by 40%",
  "Designed and implemented an AI-powered chatbot and automated knowledge workflows, reducing support load",
  "Led rebranding and migration of Arcatron to mobility.myfrido, improving product discovery and simplifying the customer journey",
  "Analyzed customer feedback and usage data to identify friction points, improving customer experience score by 30%",
];

const Experience = () => (
  <section id="experience" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">002 — Experience</span>
      <div className="mt-12 relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-foreground/10" />
        {/* Entry */}
        <div className="reveal relative">
          {/* Dot */}
          <div className="absolute -left-5 md:-left-7 top-2 w-4 h-4 rounded-full bg-foreground timeline-dot" />
          <div className="pb-4">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-display font-bold text-xl text-foreground">Frido</h3>
              <span className="font-body text-xs text-warm-muted">Pune</span>
            </div>
            <p className="font-display font-semibold text-sm text-foreground mt-1">Product Management Associate</p>
            <p className="font-body text-xs text-warm-muted mt-0.5">Dec 2024 – Present</p>
            <p className="font-body text-sm text-warm-muted mt-4 leading-relaxed">
              Driving end-to-end product delivery across Frido's mobility ecommerce platform, working at the intersection of AI, engineering, and growth.
            </p>
            <ul className="mt-4 space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="font-body text-sm text-warm-muted leading-relaxed flex gap-2">
                  <span className="text-foreground mt-0.5 shrink-0">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
