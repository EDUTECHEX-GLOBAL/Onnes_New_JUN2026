import { ArrowUpRight, Play } from "lucide-react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/media.css";
import heroBg from "../assets/media-hero.png";
import featuredNews from "../assets/media-featured-news1.png";
import newsThumb1 from "../assets/media-news-thumb-1.png";
import newsThumb2 from "../assets/media-news-thumb-2.png";
import newsThumb3 from "../assets/media-news-thumb-3.png";
import newsThumb4 from "../assets/media-news-thumb-4.png";
import featuredVideo from "../assets/media-featured-video.png";
import videoThumb1 from "../assets/media-video-thumb-1.png";
import videoThumb2 from "../assets/media-video-thumb-2.png";
import videoThumb3 from "../assets/media-video-thumb-3.png";
import insight1 from "../assets/media-insight-1.png";
import insight2 from "../assets/media-insight-2.png";
import insight3 from "../assets/media-insight-3.png";
import insight4 from "../assets/media-insight-4.png";
import newsletterBg from "../assets/media-newsletter-bg.png";

const newsItems = [
  ["May 06, 2025", "Advancing Lunar Logistics: Onnes Aerospace Partners on Robotic Surface Operations", newsThumb1],
  ["Apr 28, 2025", "Onnes Aerospace Selected for Phase II SBIR Contract to Advance Deep Space Systems", newsThumb2],
  ["Apr 18, 2025", "Building the Backbone: Why Infrastructure Defines the Future of Space", newsThumb3],
  ["Apr 02, 2025", "Onnes Aerospace Expands Leadership Team to Accelerate Global Growth", newsThumb4],
];

const videos = [
  ["02:18", "Lunar Infrastructure for a Sustainable Future", "Enabling long-term human presence and operations on the Moon.", videoThumb1],
  ["02:55", "Deep Space Logistics Reimagined", "Autonomous systems that extend human reach to Mars and beyond.", videoThumb2],
  ["02:31", "Autonomous Space Ecosystems: The Next Operational Paradigm", "Self-operating infrastructure for a resilient and adaptive space economy.", videoThumb3],
];

const insights = [
  ["May 12, 2025", "The New Space Economy Requires a New Infrastructure Layer", "Why infrastructure is the next trillion-dollar opportunity in space.", insight1],
  ["May 01, 2025", "Modular by Design: Building Systems for an Uncertain Future", "How modular architectures enable flexibility, resilience, and rapid adaptation.", insight2],
  ["Apr 21, 2025", "Sustaining Life Beyond Earth: The Role of Intelligent Systems", "Intelligent, autonomous systems are the foundation of sustainable exploration.", insight3],
  ["Apr 07, 2025", "Beyond Orbit: Preparing for Humanity's Next Great Leap", "Deep space missions demand a new era of engineering and endurance.", insight4],
];

function TextLink({ children }) {
  return (
    <a className="media-link" href="#news">
      {children} <ArrowUpRight />
    </a>
  );
}

function PlayMark() {
  return (
    <span className="media-play" aria-hidden="true">
      <Play />
    </span>
  );
}

export default function MediaPage() {
  return (
    <main className="site-shell media-page">
      <Header />

      <section className="media-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="media-hero-copy">
          <p className="media-eyebrow">Media</p>
          <h1>Stories From The Frontier Of Humanity's Next Era</h1>
          <p>
            The latest news, mission updates, expert insights, and perspectives from Onnes Aerospace and the
            industries shaping the future beyond Earth.
          </p>
        </div>
      </section>

      <section className="media-tabs" id="news">
        <nav aria-label="Media sections">
          <a className="active" href="#news">News</a>
          <a href="#videos">Videos</a>
          <a href="#insights">Insights</a>
        </nav>
        <TextLink>View All News</TextLink>
      </section>

      <section className="media-news-grid">
        <article className="media-feature-card">
          <div className="media-card-image" style={{ backgroundImage: `url(${featuredNews})` }}>
            <span>Featured</span>
          </div>
          <div className="media-card-copy">
            <p className="media-date">May 15, 2025</p>
            <h2>Onnes Aerospace Announces Next-Generation Orbital Infrastructure Platform</h2>
            <p>A modular, intelligent infrastructure platform designed to enable persistent operations across orbit, the Moon, and deep space.</p>
            <TextLink>Read More</TextLink>
          </div>
        </article>

        <div className="media-news-list">
          {newsItems.map(([date, title, image]) => (
            <article className="media-list-item" key={title}>
              <div style={{ backgroundImage: `url(${image})` }} />
              <div>
                <p className="media-date">{date}</p>
                <h3>{title}</h3>
                <TextLink>Read More</TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="media-video-section" id="videos">
        <div className="media-section-head">
          <p className="media-eyebrow">Featured Video</p>
          <TextLink>View All Videos</TextLink>
        </div>
        <div className="media-video-grid">
          <article className="media-video-feature" style={{ backgroundImage: `url(${featuredVideo})` }}>
            <PlayMark />
            <div>
              <p className="media-date">03:42 min</p>
              <h2>The Infrastructure that Powers Humanity Beyond Earth</h2>
              <p>A vision for the future of persistent operations across orbit, the Moon, and deep space.</p>
            </div>
          </article>
          <div className="media-video-list">
            {videos.map(([time, title, body, image]) => (
              <article className="media-video-item" key={title}>
                <div style={{ backgroundImage: `url(${image})` }}>
                  <PlayMark />
                </div>
                <div>
                  <p className="media-date">{time}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="media-insights" id="insights">
        <div className="media-section-head">
          <p className="media-eyebrow">Latest Insights</p>
          <TextLink>View All Insights</TextLink>
        </div>
        <div className="media-insight-grid">
          {insights.map(([date, title, body, image]) => (
            <article className="media-insight-card" key={title}>
              <div style={{ backgroundImage: `url(${image})` }} />
              <p className="media-date">{date}</p>
              <h3>{title}</h3>
              <p>{body}</p>
              <TextLink>Read Insight</TextLink>
            </article>
          ))}
        </div>
      </section>

      <section className="media-newsletter" style={{ backgroundImage: `url(${newsletterBg})` }}>
        <div>
          <p className="media-eyebrow">Stay Connected</p>
          <h2>Get The Latest News And Insights</h2>
          <p>Delivered to your inbox.</p>
        </div>
        <form>
          <input aria-label="Email address" placeholder="Enter your email" type="email" />
          <button type="button">Subscribe <ArrowUpRight /></button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
