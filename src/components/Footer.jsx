import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import onnesWordmark from "../assets/onnes-wordmark.png";

const groups = [
  ["Company", "Vision", "Mission", "Leadership", "Careers", "Contact"],
  ["Platforms", "Orbital Infrastructure", "Lunar Infrastructure", "Deep Space Systems", "Autonomous Space Ecosystems"],
  ["Applications", "Commercial Space", "National Security Space", "Deep Space Exploration"],
  ["Technology", "Infrastructure Platform", "Intelligent Systems", "Advanced Engineering"],
  ["Media", "News", "Videos", "Insights"],
];

const socialLinks = [
  ["X", <FaXTwitter />],
  ["LinkedIn", <FaLinkedinIn />],
  ["YouTube", <FaYoutube />],
  ["Instagram", <FaInstagram />],
];

export default function Footer() {
  return (
    <footer className="footer" id="media">
      <div className="footer-brand">
        <img className="brand-logo footer-logo" src={onnesWordmark} alt="Onnes" />
        <span className="brand-sub">AEROSPACE</span>
        <p>The next-generation deep space infrastructure company shaping humanity beyond Earth.</p>
        <div className="socials" aria-label="Social links">
          {socialLinks.map(([label, icon]) => (
            <a href={`#${label.toLowerCase()}`} aria-label={label} key={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      {groups.map(([title, ...items]) => (
        <div className="footer-group" key={title}>
          <h3>{title}</h3>
          {items.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      ))}
      <div className="legal">
        <span>© 2026 Onnes Aerospace. All rights reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
    </footer>
  );
}
