const Footer = () => (
  <footer id="footer" className="px-6 md:px-16 py-16" style={{ borderTop: "1px solid rgba(50,50,50,0.12)" }}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div>
        <h2 className="font-display font-bold text-2xl text-foreground">Amey Kottawar</h2>
        <p className="font-body text-xs text-warm-muted mt-1">Product · AI · Builder</p>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://www.linkedin.com/in/amey-kottawar-b8473b211/" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-foreground hover:underline">LinkedIn</a>
        <a href="https://github.com/ameykottawar" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-foreground hover:underline">GitHub</a>
        <a href="mailto:ameykottawar@gmail.com" className="font-body text-xs text-foreground hover:underline">Email</a>
        <a href="tel:+918830509728" className="font-body text-xs text-foreground hover:underline">Phone</a>
      </div>
      <span className="font-body text-[10px] text-warm-muted">© 2025 Amey Kottawar</span>
    </div>
  </footer>
);

export default Footer;
