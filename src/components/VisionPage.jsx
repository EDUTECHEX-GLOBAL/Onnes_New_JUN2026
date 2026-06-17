import { FaLinkedinIn } from "react-icons/fa";
import {
  Boxes,
  CircuitBoard,
  Crosshair,
  Cuboid,
  Gauge,
  Infinity,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Header from "./Header";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import "../styles/vision.css";

import futureEarth from "../assets/OrbitalInfra.png";
import futureLunar from "../assets/LunarInfra2.png";
import futureDeep from "../assets/DeepSpace3.png";
import futureHumanity from "../assets/NationalSecuritySpace.jpeg";
import ramImage from "../assets/vision-page/founder-ram.png";
import vikramImage from "../assets/vision-page/founder-vikram.png";
import rajeshImage from "../assets/vision-page/founder-rajesh.png";

const heroPillars = [
  ["Persistent Operations", <Target />],
  ["Autonomous Systems", <Cuboid />],
  ["Humanity Beyond Earth", <Users />],
  ["Limitless Potential", <Infinity />],
];

const visionPoints = [
  ["Enable persistent operations across orbit and beyond", <Rocket />],
  ["Support a sustainable lunar and deep space economy", <Cuboid />],
  ["Build autonomous ecosystems that scale", <Gauge />],
  ["Unlock humanity's limitless potential in space", <Crosshair />],
];

const missionSteps = [
  ["Design", "Advanced infrastructure for the harshest environments.", <Boxes />],
  ["Develop", "Intelligent systems with autonomy at the core.", <CircuitBoard />],
  ["Deliver", "Mission-critical capabilities that create real-world impact.", <Cuboid />],
];

const futureCards = [
  ["Earth Orbit", "Persistent infrastructure and logistics networks powering a vibrant orbital economy and commercial space.", futureEarth, <CircuitBoard />],
  ["Lunar Frontier", "Enabling a sustainable human presence through logistics, habitats, and resource utilization.", futureLunar, <Gauge />],
  ["Deep Space", "Autonomous systems and logistics networks that extend human reach to Mars and beyond.", futureDeep, <Rocket />],
  ["Humanity's Future", "A multi-planetary civilization connected by intelligent infrastructure and limitless opportunity.", futureHumanity, <Users />],
];

const founders = [
  ["Ram", "CEO & Co-Founder", "Visionary leader with a passion for building transformative companies that solve some of the world's most complex challenges. Ram drives the strategic direction and partnerships that position Onnes Aerospace at the forefront of the new space economy.", ramImage],
  ["Vikram", "CTO & Co-Founder", "Deep technology innovator and systems architect focused on advanced engineering, autonomy, and next-generation space systems. Vikram leads the technology strategy, R&D, and engineering excellence that power our infrastructure platforms.", vikramImage],
  ["Rajesh", "CSO & Co-Founder", "Strategic leader with extensive experience in defense, space systems, and global markets. Rajesh leads strategic initiatives, government partnerships, and market expansion across commercial and national security space.", rajeshImage],
];

const values = [
  ["Courage To Build", "We take on the hardest problems in space and engineer solutions that create lasting impact.", <ShieldCheck />],
  ["Engineering Excellence", "We pursue perfection in design, testing, and execution to deliver unmatched performance.", <Target />],
  ["Mission First", "Every decision is guided by our mission to build infrastructure that enables humanity beyond Earth.", <Rocket />],
  ["One Team, One Future", "We collaborate with partners, customers, and each other to achieve extraordinary outcomes.", <Users />],
  ["Endless Exploration", "We are driven by curiosity and the belief that the universe holds infinite opportunities.", <Infinity />],
];

export default function VisionPage() {
  return (
    <main className="site-shell vision-page">
      <Header />
      <section className="vision-hero" id="vision">
        <div className="vision-hero-copy">
          <p className="eyebrow">Our Vision</p>
          <h1>A Future Where Humanity Thrives Beyond Earth</h1>
          <p>We envision a humanity that is multi-planetary, sustained by intelligent infrastructure spanning orbit, the Moon, and deep space.</p>
          <p>Onnes Aerospace is building the operational backbone that makes this future possible.</p>
          <div className="actions">
            {/* <a className="solid-button" href="#film"><span className="play-dot" aria-hidden="true">▶</span> Watch Our Vision Film</a> */}
            <a className="outline-button" href="#mission">Explore Our Vision <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-pillar-list">
          {heroPillars.map(([label, icon]) => (
            <div className="hero-pillar" key={label}>
              <span>{icon}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="vision-mission-split" id="mission">
        <article className="vision-statement-panel">
          <p className="eyebrow">Our Vision</p>
          <h2>Infrastructure For A New <span>Space Civilization</span></h2>
          <p>We are building the foundation for a future where humanity lives, works, and explores across the cosmos. A future that is sustainable, autonomous, and driven by innovation.</p>
          <div className="vision-point-list">
            {visionPoints.map(([text, icon]) => (
              <div className="vision-point" key={text}>
                <span>{icon}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="mission-panel">
          <p className="eyebrow">Our Mission</p>
          <h2>To Engineer The Infrastructure That Enables Humanity's Expansion <span>Beyond Earth</span></h2>
          <p>Onnes Aerospace develops intelligent, resilient, and autonomous infrastructure systems that empower the world's most ambitious space and defense missions.</p>
          <div className="mission-step-list">
            {missionSteps.map(([title, text, icon]) => (
              <div className="mission-step" key={title}>
                <span>{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="future-section" id="future-beyond-earth">
        <div className="future-head">
          <p className="eyebrow">Our Future Beyond Earth</p>
          <h2>Building The Next Era Of Humanity</h2>
          <p>Earth orbit, lunar frontier, deep space, humanity's future.</p>
        </div>
        <div className="future-card-grid">
          {futureCards.map(([title, text, image, icon]) => (
            <article className="future-card" key={title}>
              {/* CHANGED: using <img> instead of background-image for perfect fit */}
              <div className="future-card-image">
                <img src={image} alt={title} />
              </div>
              <div className="future-card-body">
                <span>{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="leadership-section" id="leadership">
        <div className="leadership-intro">
          <p className="eyebrow">Our Leadership</p>
          <h2>Three Founders. One Shared Vision.</h2>
          <p>Complementary expertise. Unified purpose. Building the infrastructure for humanity's future in space.</p>
        </div>
        <div className="founder-grid">
          {founders.map(([name, role, text, image]) => (
            <article className="founder-card" key={name}>
              <div className="founder-image" style={{ backgroundImage: `url(${image})` }} />
              <div className="founder-content">
                <h3>{name}</h3>
                <strong>{role}</strong>
                <p>{text}</p>
                <a href="#linkedin" aria-label={`${name} LinkedIn`}><FaLinkedinIn /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="values-section">
        <p className="eyebrow">Our Values</p>
        <div className="values-grid">
          {values.map(([title, text, icon]) => (
            <article className="value-item" key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
      <Footer />
    </main>
  );
}