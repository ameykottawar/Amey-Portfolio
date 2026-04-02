import traveleaseLogo from "@/assets/travelease-logo.png";
import parkplusLogo from "@/assets/parkplus-logo.png";

interface Card {
  tag: string;
  title: string;
  desc: string;
  link?: string;
  image?: string;
}

const cards: Card[] = [
  {
    tag: "Case Study",
    title: "TravelEase — Accessibility Travel App",
    desc: "End-to-end product case study for a mobile app reimagining travel for people with mobility challenges — covering personas, competitive analysis, feature prioritization, and go-to-market strategy.",
    link: "https://www.notion.so/TravelEase-Accessibility-Travel-App-Product-Case-Study-3360ecde878081aa8e03ff3477b62b8b",
    image: traveleaseLogo,
  },
  {
    tag: "Case Study",
    title: "Park+ — Customer Support, UX & Payments",
    desc: "Analyzed 500+ user reviews to uncover trust and usability issues in Park+'s car ownership super-app — proposing solutions for customer support, home screen clutter, and payment reliability.",
    image: parkplusLogo,
  },
];

const ProductWork = () => (
  <section id="work" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">003 — Product Work</span>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div
            key={i}
            className="reveal group rounded-lg relative overflow-hidden transition-all duration-300 hover:border-foreground flex flex-col"
            style={{ backgroundColor: "#D0C4BC", border: "1px solid rgba(50,50,50,0.12)", transitionDelay: `${i * 0.05}s` }}
          >
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 z-10 pointer-events-none" />
            {c.image && (
              <div className="w-full h-40 flex items-center justify-center bg-[#e8ddd6] rounded-t-lg overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-28 w-28 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <span className="relative font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-full w-fit" style={{ backgroundColor: "rgba(50,50,50,0.07)" }}>
                {c.tag}
              </span>
              <h3 className="relative font-display font-bold text-lg text-foreground mt-4 group-hover:-translate-y-0.5 transition-transform duration-300">
                {c.title}
              </h3>
              <p className="relative font-body text-xs text-warm-muted mt-2 leading-relaxed flex-1">{c.desc}</p>
              <a href={c.link || "#"} target={c.link ? "_blank" : undefined} rel={c.link ? "noopener noreferrer" : undefined} className="relative inline-block font-body text-xs text-foreground mt-4 group-hover:underline">
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductWork;
