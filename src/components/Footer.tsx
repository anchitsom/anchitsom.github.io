const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-0 border-t border-border">
      <div className="prose-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Anchit Som</span>
        <div className="flex items-center gap-6">
          <a href="mailto:anchit.som@gmail.com" className="hover:text-foreground transition-colors duration-200">
            Email
          </a>
          <a href="https://linkedin.com/in/anchitsom" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
