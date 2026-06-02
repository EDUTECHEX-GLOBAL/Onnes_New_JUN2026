const platforms = [
  ["Orbital Infrastructure", "Enabling persistent operations, in-space logistics, and orbital servicing at scale.", "✣"],
  ["Lunar Infrastructure", "Logistics, habitats, and surface systems for long-duration lunar operations.", "▣"],
  ["Deep Space Systems", "Infrastructure for deep-space logistics, long-duration missions, and interplanetary travel.", "◈"],
  ["Autonomous Space Ecosystems", "Intelligent, self-operating systems that power the future space economy.", "⬡"],
];

export default function Platforms() {
  return (
    <section className="platforms section-pad" id="platforms">
      <div className="platforms-head">
        <div>
          <p className="eyebrow">Our Platforms</p>
          <h2>Infrastructure For Every Frontier</h2>
        </div>
        <p>
          Modular. Intelligent. Autonomous.
          <br />
          Built for the harshest environments.
          <br />
          Designed for the longest missions.
        </p>
      </div>
      <div className="platform-grid">
        {platforms.map(([title, body, icon], index) => (
          <article className={`platform-card platform-${index + 1}`} key={title}>
            <div className="platform-image"></div>
            <div className="icon-ring">{icon}</div>
            <h3>{title}</h3>
            <p>{body}</p>
            <a className="text-link" href="#applications">
              Explore <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
