import onnesWordmark from "../assets/onnes-wordmark.png";

const navItems = ["Home", "Vision", "Platforms", "Applications", "Technology", "Media", "Contact"];

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Onnes Aerospace home">
        <img className="brand-logo" src={onnesWordmark} alt="Onnes" />
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
