import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import onnesWordmark from "../assets/onnes-wordmark.png";
import "../styles/header.css";

const navItems = [["Contact", "/#contact"]];

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

const applicationItems = [
  ["Commercial Space", "/applications#commercial-space"],
  ["National Security Space", "/applications#national-security-space"],
  ["Space Enabled Air, Ground, Water Systems", "/applications#space-enabled-air-ground-water-systems"],
  ["Deep Space Exploration", "/applications#deep-space-exploration"],
];

const technologyItems = [
  ["Infrastructure Platform", "/technology#infrastructure-platform"],
  ["Intelligent Systems", "/technology#intelligent-systems"],
  ["Advanced Engineering", "/technology#advanced-engineering"],
];

const mediaItems = [
  ["News", "/media#news"],
  ["Videos", "/media#videos"],
  ["Insights", "/media#insights"],
];

export default function Header() {
  const location = useLocation();
  const [closedDropdown, setClosedDropdown] = useState(null);
  const isHome = location.pathname === "/";
  const isVision = location.pathname === "/vision";
  const isPlatforms = location.pathname === "/platforms";
  const isApplications = location.pathname === "/applications";
  const isTechnology = location.pathname === "/technology";
  const isMedia = location.pathname === "/media";

  const closeDropdown = (name) => {
    setClosedDropdown(name);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const resetDropdown = (name) => {
    if (closedDropdown === name) {
      setClosedDropdown(null);
    }
  };

  return (
    <header className="header">
      <Link className="brand" to="/" aria-label="Onnes Aerospace home">
        <img className="brand-logo" src={onnesWordmark} alt="Onnes" />
        <span className="brand-sub">AEROSPACE</span>
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link className={isHome ? "active" : ""} to="/">Home</Link>
        <div
          className={`nav-dropdown${closedDropdown === "vision" ? " dropdown-closed" : ""}`}
          onMouseLeave={() => resetDropdown("vision")}
        >
          <Link className={isVision ? "active" : ""} to="/vision">Vision</Link>
          <div className="nav-menu">
            {visionItems.map(([label, to]) => (
              <Link to={to} key={label} onClick={() => closeDropdown("vision")}>{label}</Link>
            ))}
          </div>
        </div>
        <div
          className={`nav-dropdown platform-nav-dropdown${closedDropdown === "platforms" ? " dropdown-closed" : ""}`}
          onMouseLeave={() => resetDropdown("platforms")}
        >
          <Link className={isPlatforms ? "active" : ""} to="/platforms">Platforms</Link>
          <div className="nav-menu">
            {platformItems.map(([label, to]) => (
              <Link to={to} key={label} onClick={() => closeDropdown("platforms")}>{label}</Link>
            ))}
          </div>
        </div>
        <div
          className={`nav-dropdown application-nav-dropdown${closedDropdown === "applications" ? " dropdown-closed" : ""}`}
          onMouseLeave={() => resetDropdown("applications")}
        >
          <Link className={isApplications ? "active" : ""} to="/applications">Applications</Link>
          <div className="nav-menu">
            {applicationItems.map(([label, to]) => (
              <Link to={to} key={label} onClick={() => closeDropdown("applications")}>{label}</Link>
            ))}
          </div>
        </div>
        <div
          className={`nav-dropdown technology-nav-dropdown${closedDropdown === "technology" ? " dropdown-closed" : ""}`}
          onMouseLeave={() => resetDropdown("technology")}
        >
          <Link className={isTechnology ? "active" : ""} to="/technology">Technology</Link>
          <div className="nav-menu">
            {technologyItems.map(([label, to]) => (
              <Link to={to} key={label} onClick={() => closeDropdown("technology")}>{label}</Link>
            ))}
          </div>
        </div>
        <div
          className={`nav-dropdown media-nav-dropdown${closedDropdown === "media" ? " dropdown-closed" : ""}`}
          onMouseLeave={() => resetDropdown("media")}
        >
          <Link className={isMedia ? "active" : ""} to="/media">Media</Link>
          <div className="nav-menu">
            {mediaItems.map(([label, to]) => (
              <Link to={to} key={label} onClick={() => closeDropdown("media")}>{label}</Link>
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
