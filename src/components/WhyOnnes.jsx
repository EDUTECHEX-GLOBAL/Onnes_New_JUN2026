const reasons = [
  ["Mass Efficiency", "Lightweight structures and systems that unlock more payload and performance.", "♧"],
  ["Mission Endurance", "Built for long-duration operations in the harshest environments.", "♢"],
  ["Autonomous Intelligence", "Embedded intelligence for autonomous monitoring, control, and decision making.", "▣"],
  ["Built For The Future", "Infrastructure designed to scale with the future of the space economy.", "◎"],
];

export default function WhyOnnes() {
  return (
    <section className="why section-pad" id="applications">
      <div className="why-copy">
        <p className="eyebrow">Why Onnes</p>
        <h2>Engineered For What Comes Next</h2>
        <p>Onnes Aerospace is building the infrastructure that empowers humanity to thrive beyond Earth.</p>
      </div>
      <div className="reason-grid">
        {reasons.map(([title, body, icon]) => (
          <article className="reason" key={title}>
            <div className="reason-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
