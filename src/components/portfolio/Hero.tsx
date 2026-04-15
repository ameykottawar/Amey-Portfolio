const Hero = () => (
  <section id="hero" className="min-h-screen flex flex-col justify-center relative hero-grid px-6 md:px-16 pt-14">
    <div className="max-w-7xl mx-auto w-full">
      <div className="hero-line">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-muted">​</span>
      </div>
      <h1 className="hero-line font-display font-[800] text-foreground leading-[0.92] mt-6"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
        Amey
      </h1>
      <h1 className="hero-line font-display font-[800] text-foreground leading-[0.92]"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
        Kottawar
      </h1>
      <p className="hero-line font-serif italic text-warm-muted mt-6"
         style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
        Aspiring Product Manager turning user problems into scalable, high-impact solutions.
      </p>
      <div className="hero-line flex gap-4 mt-10">
        <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground font-body text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity">
          View My Work
        </a>
        <a href="https://drive.google.com/file/d/1xwwlfSfCoHR1NgmROVawNzULiCX5JdPs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-body text-sm tracking-wide rounded-full hover:bg-foreground hover:text-primary-foreground transition-colors">
          Download CV
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2">
      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-muted">Scroll</span>
      <div className="w-px h-10 bg-foreground/30 overflow-hidden">
        <div className="w-full h-full bg-foreground scroll-indicator-line" />
      </div>
    </div>
  </section>
);

export default Hero;
