const navItems = ["Home", "Vision", "Platforms", "Applications", "Technology", "Media", "Contact"];

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Onnes Aerospace home">
        <span className="brand-mark">ONNES</span>
        <span className="brand-sub">AEROSPACE</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={item === "Home" ? "active" : ""} href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="outline-button small" href="#contact">
        Partner With Us <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
