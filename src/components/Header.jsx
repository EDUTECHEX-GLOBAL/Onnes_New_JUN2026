import { Link, useLocation } from "react-router-dom";
import onnesWordmark from "../assets/onnes-wordmark.png";

const navItems = [
  ["Platforms", "/#platforms"],
  ["Applications", "/#applications"],
  ["Technology", "/#technology"],
  ["Media", "/#media"],
  ["Contact", "/#contact"],
];

const visionItems = [
  ["Mission", "/vision#mission"],
  ["Future Beyond Earth", "/vision#future-beyond-earth"],
  ["Leadership", "/vision#leadership"],
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isVision = location.pathname === "/vision";

  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="Onnes Aerospace home">
        <img className="brand-logo" src={onnesWordmark} alt="Onnes" />
        <span className="brand-sub">AEROSPACE</span>
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link className={isHome ? "active" : ""} to="/">Home</Link>
        <div className="nav-dropdown">
          <Link className={isVision ? "active" : ""} to="/vision">Vision</Link>
          <div className="nav-menu">
            {visionItems.map(([label, to]) => (
              <Link to={to} key={label}>{label}</Link>
            ))}
          </div>
        </div>
        {navItems.map(([item, to]) => (
          <Link to={to} key={item}>{item}</Link>
        ))}
      </nav>
      <Link className="outline-button small" to="/#contact">
        Partner With Us <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
