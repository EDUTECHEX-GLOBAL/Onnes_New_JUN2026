const groups = [
  ["Company", "Vision", "Mission", "Leadership", "Careers", "Contact"],
  ["Platforms", "Orbital Infrastructure", "Lunar Infrastructure", "Deep Space Systems", "Autonomous Space Ecosystems"],
  ["Applications", "Commercial Space", "National Security Space", "Deep Space Exploration"],
  ["Technology", "Infrastructure Platform", "Intelligent Systems", "Advanced Engineering"],
  ["Media", "News", "Videos", "Insights"],
];

export default function Footer() {
  return (
    <footer className="footer" id="media">
      <div className="footer-brand">
        <span className="brand-mark">ONNES</span>
        <span className="brand-sub">AEROSPACE</span>
        <p>The next-generation deep space infrastructure company shaping humanity beyond Earth.</p>
        <div className="socials" aria-label="Social links">
          <a href="#x">X</a>
          <a href="#in">in</a>
          <a href="#yt">▶</a>
          <a href="#ig">◎</a>
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
