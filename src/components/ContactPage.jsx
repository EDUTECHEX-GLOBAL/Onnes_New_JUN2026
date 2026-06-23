import { useState } from "react";
import {
  Banknote,
  BookOpen,
  Boxes,
  Building2,
  CalendarDays,
  Globe2,
  Landmark,
  Mail,
  RadioTower,
  ShieldCheck,
  Users,
} from "lucide-react";

import api from "../api";
import Header from "./Header.jsx";
import FinalCta from "./FinalCta.jsx";
import Footer from "./Footer.jsx";
import "../styles/contact.css";

import heroImage from "../assets/OrbitalINfra.webp";
import commercialImage from "../assets/CommercialSpace2.webp";
import securityImage from "../assets/NationalSecuritySpace.webp";
import partnersImage from "../assets/IndustryPartners.webp";
import investorsImage from "../assets/Investors.webp";
import missionEarth from "../assets/contact/generated-earth-sunrise.png";
import globalMap from "../assets/generated-global-map.webp";
import careersLab from "../assets/contactcareers.webp";
import investorEarth from "../assets/contact/generated-earth-sunrise.png";
import futureEarth from "../assets/hero-bg.png";

const capabilityItems = [
  ["Global Partnerships", <Globe2 />],
  ["Space & Defense Applications", <ShieldCheck />],
  ["Advanced Infrastructure Platforms", <Building2 />],
  ["Deep Space Mission Enablement", <RadioTower />],
];

const workCards = [
  [
    "Commercial Space",
    "Enabling persistent operations through orbital infrastructure, logistics systems, servicing capabilities, and future space economy platforms.",
    commercialImage,
    <Boxes />,
  ],
  [
    "National Security",
    "Mission-critical infrastructure supporting resilient communications, strategic awareness, and future operational architectures.",
    securityImage,
    <ShieldCheck />,
  ],
  [
    "Industry Partners",
    "Joint development, advanced manufacturing, technology integration, and strategic ecosystem partnerships.",
    partnersImage,
    <Users />,
  ],
  [
    "Investors & Institutions",
    "Partnering with visionary organizations committed to shaping humanity beyond Earth.",
    investorsImage,
    <Landmark />,
  ],
];

const mediaItems = [
  ["Press", "Media inquiries, interviews, and company announcements.", <Mail />],
  ["Events", "Conference participation, speaking opportunities, and strategic forums.", <CalendarDays />],
  ["Research", "Academic collaboration, publications, and future space studies.", <BookOpen />],
];

const defaultForm = {
  firstName: "",
  lastName: "",
  organization: "",
  email: "",
  country: "",
  area: "",
  interest: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("Transmitting...");

    try {
      await api.post("/api/admin-contact", {
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        product: form.area || form.interest,
        mobile: form.country,
        organization: form.organization,
        country: form.country,
        interest: form.interest,
        message: form.message,
      });
      setForm(defaultForm);
      setStatus("Message transmitted.");
    } catch (error) {
      setStatus("Message ready. Please email hello@onnes.in if transmission is unavailable.");
    }
  };

  return (
    <main className="site-shell contact-page">
      <Header />

      <section className="contact-hero" id="contact-top">
        <div className="contact-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="contact-hero-copy">
          <p className="contact-eyebrow">Contact Onnes Aerospace</p>
          <h1>
            Let's Build The Future <span>Beyond Earth.</span>
          </h1>
          <p>
            Whether you're a government agency, commercial space operator, strategic partner, investor, or
            world-class engineer, we're building the infrastructure that will enable humanity's next chapter
            beyond Earth.
          </p>
          <div className="actions">
            <a className="solid-button" href="#mission-brief">
              Partner With Us <span aria-hidden="true">→</span>
            </a>
            <a className="outline-button" href="#careers">
              Explore Careers <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-capabilities" aria-label="Contact categories">
        {capabilityItems.map(([label, icon]) => (
          <article key={label}>
            <span>{icon}</span>
            <strong>{label}</strong>
          </article>
        ))}
      </section>

      <section className="contact-work-section">
        <h2>Who We Work With</h2>
        <div className="contact-work-grid">
          {workCards.map(([title, text, image, icon]) => (
            <article className="contact-work-card" key={title}>
              <div className="contact-work-image" style={{ backgroundImage: `url(${image})` }} />
              <span className="contact-card-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#mission-brief" aria-label={`${title} mission brief`}>
                →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mission-brief" id="mission-brief">
        <aside className="mission-intro" style={{ backgroundImage: `url(${missionEarth})` }}>
          <p className="contact-eyebrow">Start A Mission</p>
          <h2>Transmit Your Mission Brief</h2>
          <span className="contact-rule" />
          <p>
            Whether you're exploring partnership opportunities, technology collaboration, investment
            discussions, or mission concepts, we'd love to hear from you.
          </p>
        </aside>
        <form className="mission-form" onSubmit={submitForm}>
          <div className="field-row">
            <input name="firstName" value={form.firstName} onChange={updateField} placeholder="First Name" required />
            <input name="lastName" value={form.lastName} onChange={updateField} placeholder="Last Name" />
          </div>
          <input name="organization" value={form.organization} onChange={updateField} placeholder="Organization" />
          <div className="field-row">
            <input name="email" type="email" value={form.email} onChange={updateField} placeholder="Email" required />
            <select name="country" value={form.country} onChange={updateField} aria-label="Country">
              <option value="">Country</option>
              <option>United States</option>
              <option>India</option>
              <option>Japan</option>
              <option>Luxembourg</option>
              <option>United Arab Emirates</option>
            </select>
          </div>
          <select name="area" value={form.area} onChange={updateField} aria-label="Area of Interest">
            <option value="">Area of Interest</option>
            <option>Global Partnerships</option>
            <option>Space & Defense Applications</option>
            <option>Advanced Infrastructure Platforms</option>
            <option>Deep Space Mission Enablement</option>
          </select>
          <select name="interest" value={form.interest} onChange={updateField} aria-label="I am interested in">
            <option value="">I am interested in</option>
            <option>Commercial Space</option>
            <option>National Security</option>
            <option>Industry Partnership</option>
            <option>Investment</option>
            <option>Careers</option>
            <option>Media & Speaking</option>
          </select>
          <textarea name="message" value={form.message} onChange={updateField} placeholder="Message" required />
          <div className="form-action-row">
            <button className="solid-button" type="submit">
              Transmit Message <span aria-hidden="true">→</span>
            </button>
            {status && <p>{status}</p>}
          </div>
        </form>
      </section>

      <section className="global-presence">
        <div className="global-copy">
          <p className="contact-eyebrow">Global Presence</p>
          <h2>Infrastructure Nodes Across The World</h2>
          <span className="contact-rule" />
          <p>
            Building the infrastructure layer for humanity's expansion beyond Earth requires global
            collaboration, world-class talent, and strategic partnerships.
          </p>
        </div>
        <div className="global-map" style={{ backgroundImage: `url(${globalMap})` }} aria-hidden="true" />
        <div className="global-locations">
          <h3>United States</h3>
          <p>Austin, TX<br />Washington, D.C.<br />Huntsville, AL</p>
          <h3>India</h3>
          <p>Bengaluru<br />Hyderabad</p>
          <h3>Future Nodes</h3>
          <p>Tokyo, Japan<br />Luxembourg<br />Abu Dhabi, UAE</p>
        </div>
      </section>

      <section className="career-band" id="careers">
        <div className="career-image" style={{ backgroundImage: `url(${careersLab})` }} aria-hidden="true" />
        <div className="career-copy">
          <p className="contact-eyebrow">Careers</p>
          <h2>Build What Comes Next.</h2>
          <p>
            The future beyond Earth will not be built by a single company. It will be built by extraordinary
            people solving humanity's hardest engineering challenges.
          </p>
          <div className="career-actions">
            <a className="solid-button" href="mailto:careers@onnes.in">
              View Open Roles <span aria-hidden="true">→</span>
            </a>
            <a className="outline-button" href="mailto:careers@onnes.in">
              Meet The Team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="media-speaking">
        <p className="contact-eyebrow">Media & Speaking</p>
        <div className="media-grid">
          {mediaItems.map(([title, text, icon]) => (
            <article key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href="mailto:press@onnes.in" aria-label={`${title} inquiry`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}

