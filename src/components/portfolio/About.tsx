import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Product Launches" },
  { value: 40, suffix: "%", label: "Sales Conversion Lift" },
  { value: 30, suffix: "%", label: "CX Score Improvement" },
  { value: 2, suffix: "", label: "AI Features Shipped" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => (
  <section id="about" className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted reveal">001 — About</span>
      <div className="mt-12 grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="reveal">
          <div className="aspect-[3/4] w-full max-w-md rounded-lg overflow-hidden relative" style={{ backgroundColor: "#D0C4BC" }}>
            <div className="absolute inset-0 flex items-center justify-center font-body text-sm text-warm-muted">
              [ Photo ]
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-foreground" />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <p className="font-body text-sm leading-relaxed text-warm-muted">
           I’m a product builder focused on turning real user problems into scalable, high-impact solutions.
Currently driving end-to-end product development—from discovery to launch and iteration—while working closely with data and customer insights.
I blend product thinking with AI tools, automation, and no-code to move faster and smarter.
Strong believer in building, measuring, and continuously refining products that actually deliver value.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s) => (
              <div key={s.label} className="p-5 rounded-lg" style={{ backgroundColor: "#D0C4BC" }}>
                <div className="font-display font-bold text-3xl text-foreground">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="font-body text-xs text-warm-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
