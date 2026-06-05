import {
  Activity,
  Boxes,
  CheckCircle2,
  CircleGauge,
  Cpu,
  Feather,
  Globe2,
  LayoutDashboard,
  Network,
  Orbit,
  Radio,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Zap,
} from "lucide-react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/technology.css";
import heroBg from "../assets/technology-hero-visual.png";
import platformBg from "../assets/technology-platform-visual.png";
import systemsDashboard from "../assets/technology-systems-dashboard.png";
import engineeringOne from "../assets/technology-engineering-materials.png";
import engineeringTwo from "../assets/technology-engineering-precision.png";
import engineeringThree from "../assets/technology-engineering-testing.png";
import engineeringFour from "../assets/technology-engineering-digital.png";
import ctaBg from "../assets/journey-bg.png";

const advantages = [
  ["Mission Critical", "Built for reliability and resilience in the harshest environments.", <CircleGauge />],
  ["Mass Optimized", "Lightweight architectures that maximize payload and efficiency.", <Feather />],
  ["Intelligent By Design", "Embedded intelligence for autonomous operations and decision-making.", <Cpu />],
  ["Modular & Scalable", "Adaptable systems engineered to scale across missions.", <ShieldCheck />],
  ["Interoperable", "Open architectures for seamless integration across ecosystems.", <Globe2 />],
];

const platformBullets = [
  "Modular architecture for maximum flexibility",
  "High-efficiency structural and thermal systems",
  "Advanced materials and components",
  "Rapid integration and mission adaptability",
];

const callouts = [
  ["Structural Modules", "Lightweight, high-strength composite structures"],
  ["Thermal Systems", "Intelligent thermal control and environmental stability."],
  ["Power & Distribution", "High-efficiency power management systems"],
  ["Fluid & Transfer Systems", "Precision fluid management and logistics systems"],
  ["Avionics & Control", "Embedded computing and autonomous control systems"],
];

const systemCards = [
  ["System Health", "98%", "Nominal", <Activity />],
  ["Power Management", "94%", "Optimal", <Zap />],
  ["Thermal Status", "-45°C", "Stable", <CircleGauge />],
  ["Propulsion", "100%", "Ready", <Orbit />],
];

const engineeringCards = [
  ["Advanced Materials", "Next-generation composites and materials for superior strength-to-weight ratios.", engineeringOne],
  ["Precision Engineering", "High-precision manufacturing and assembly for mission-critical components.", engineeringTwo],
  ["Rigorous Testing", "Validated through extreme environment testing and mission qualification.", engineeringThree],
  ["Digital Innovation", "Modeling, simulation, and digital engineering for optimal mission performance.", engineeringFour],
];

function Advantage({ item }) {
  const [title, body, icon] = item;
  return (
    <article className="technology-advantage">
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

function CheckList({ items }) {
  return (
    <ul className="technology-check-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TechnologyPage() {
  return (
    <main className="site-shell technology-page">
      <Header />
      <section className="technology-hero" id="technology-top">
        <div className="technology-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="technology-hero-copy">
          <p className="technology-eyebrow">Our Technology</p>
          <h1>
            Intelligent Technology.
            <br />
            Extreme Environments.
            <br />
            Endless Possibilities.
          </h1>
          <p>
            Onnes Aerospace combines advanced engineering, intelligent systems, and mission-proven architectures
            to build the infrastructure that powers humanity's future beyond Earth.
          </p>
          <a className="solid-button" href="#infrastructure-platform">
            Explore Our Technology <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="technology-advantage-band">
        <p className="technology-eyebrow">Our Technology Advantage</p>
        <div className="technology-advantages">
          {advantages.map((item) => (
            <Advantage item={item} key={item[0]} />
          ))}
        </div>
      </section>

      <section className="technology-platform-panel" id="infrastructure-platform">
        <div className="technology-section-copy">
          <p className="technology-number">01</p>
          <h2>Infrastructure Platform</h2>
          <p>
            A modular, high-performance infrastructure platform engineered for persistent operations across orbit,
            the Moon, and deep space.
          </p>
          <CheckList items={platformBullets} />
          <a href="#infrastructure-platform">Learn More <span aria-hidden="true">→</span></a>
        </div>
        <div className="technology-platform-visual" style={{ backgroundImage: `url(${platformBg})` }}>
          {callouts.map(([title, body], index) => (
            <article className={`technology-callout callout-${index + 1}`} key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-systems-panel" id="intelligent-systems">
        <div className="technology-section-copy">
          <p className="technology-number">02</p>
          <h2>Intelligent Systems</h2>
          <p>
            Intelligent systems that sense, decide, and act, enabling autonomous operations in complex and dynamic
            environments.
          </p>
          <CheckList items={["Autonomous operations & decision-making", "Real-time health monitoring & diagnostics", "Predictive analytics & anomaly detection", "Secure communications & data fusion"]} />
          <a href="#intelligent-systems">Learn More <span aria-hidden="true">→</span></a>
        </div>
        <div className="technology-dashboard">
          <img src={systemsDashboard} alt="" />
        </div>
      </section>

      <section className="technology-engineering-panel" id="advanced-engineering">
        <div className="technology-section-copy">
          <p className="technology-number">03</p>
          <h2>Advanced Engineering</h2>
          <p>Pushing the boundaries of engineering to solve the toughest challenges of space and beyond.</p>
          <CheckList items={["Advanced composites & materials", "Precision manufacturing & testing", "Extreme environment qualification", "Digital engineering & simulation"]} />
          <a href="#advanced-engineering">Learn More <span aria-hidden="true">→</span></a>
        </div>
        <div className="engineering-card-grid">
          {engineeringCards.map(([title, body, image]) => (
            <article className="engineering-card" key={title}>
              <div style={{ backgroundImage: `url(${image})` }} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-cta" style={{ backgroundImage: `url(${ctaBg})` }}>
        <h2>Engineering The Future. Powering Humanity Beyond Earth.</h2>
        <p>Our technology is the foundation for a new era of space infrastructure and limitless exploration.</p>
        <a className="solid-button" href="mailto:hello@onnes.in">
          Partner With Us <span aria-hidden="true">→</span>
        </a>
      </section>

      <Footer />
    </main>
  );
}
