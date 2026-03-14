import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLink = "hover:text-foreground transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="prose-editorial flex items-center justify-between py-4 px-6 lg:px-0">
        <Link to="/" className="font-display text-lg font-semibold text-foreground tracking-tight">
          Anchit Som
        </Link>
        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/writing" className={navLink}>Writing</Link>
          <Link to="/experiments" className={navLink}>Experiments</Link>
          <button onClick={() => scrollTo("about")} className={navLink}>About</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
