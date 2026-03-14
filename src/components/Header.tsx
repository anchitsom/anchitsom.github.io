const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="prose-editorial flex items-center justify-between py-4 px-6 lg:px-0">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-lg font-semibold text-foreground tracking-tight">
          Anchit Som
        </button>
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("writing")} className="hover:text-foreground transition-colors duration-200">Writing</button>
          <button onClick={() => scrollTo("about")} className="hover:text-foreground transition-colors duration-200">About</button>
          <button onClick={() => scrollTo("newsletter")} className="hover:text-foreground transition-colors duration-200">Newsletter</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
