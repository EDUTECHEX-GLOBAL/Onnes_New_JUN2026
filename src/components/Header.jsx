import { Link, useLocation } from "react-router-dom";
import onnesWordmark from "../assets/onnes-wordmark.png";
import "../styles/header.css";

const navItems = [
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

const platformItems = [
  ["Orbital Infrastructure", "/platforms#orbital-infrastructure"],
  ["Lunar Infrastructure", "/platforms#lunar-infrastructure"],
  ["Deep Space Systems", "/platforms#deep-space-systems"],
  ["Autonomous Space Ecosystems", "/platforms#autonomous-space-ecosystems"],
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isVision = location.pathname === "/vision";
  const isPlatforms = location.pathname === "/platforms";

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
        <div className="nav-dropdown platform-nav-dropdown">
          <Link className={isPlatforms ? "active" : ""} to="/platforms">Platforms</Link>
          <div className="nav-menu">
            {platformItems.map(([label, to]) => (
              <Link to={to} key={label}>{label}</Link>
            ))}
          </div>
        </div>
        {navItems.map(([item, to]) => (
          <Link className={item === "Platforms" && isPlatforms ? "active" : ""} to={to} key={item}>{item}</Link>
        ))}
      </nav>
      <Link className="outline-button small" to="/#contact">
        Partner With Us <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
