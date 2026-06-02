export default function Hero() {
  return (
    <section className="hero section-bg" id="home">
      <div className="hero-copy">
        <p className="eyebrow">The Next-Generation Deep Space Infrastructure Company</p>
        <h1>Shaping Humanity Beyond Earth</h1>
        <p>
          Onnes Aerospace is engineering the infrastructure systems that enable persistent orbital
          operations, lunar logistics, autonomous space ecosystems, and deep-space missions.
        </p>
        <div className="actions">
          <a className="solid-button" href="#vision">
            Explore Our Vision <span aria-hidden="true">↗</span>
          </a>
          <a className="outline-button" href="#media">
            <span className="play-dot" aria-hidden="true">▶</span> Watch Vision Film
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#vision" aria-label="Scroll to explore">
        <span></span> Scroll To Explore
      </a>
    </section>
  );
}
