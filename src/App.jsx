import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Vision from "./components/Vision.jsx";
import Platforms from "./components/Platforms.jsx";
import Journey from "./components/Journey.jsx";
import WhyOnnes from "./components/WhyOnnes.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Vision />
      <Platforms />
      <Journey />
      <WhyOnnes />
      <FinalCta />
      <Footer />
    </main>
  );
}
