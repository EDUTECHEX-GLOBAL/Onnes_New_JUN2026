import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Vision from "./components/Vision.jsx";
import Platforms from "./components/Platforms.jsx";
import Journey from "./components/Journey.jsx";
import WhyOnnes from "./components/WhyOnnes.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

// Lazy admin imports
const AdminLogin = lazy(() => import("./AdminDashboard/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./AdminDashboard/pages/AdminDashboard"));
const PrivateRoute = lazy(() => import("./AdminDashboard/components/PrivateRoute"));
const HomeDashboard = lazy(() => import("./AdminDashboard/components/Home"));
const ContactList = lazy(() => import("./AdminDashboard/components/ContactList"));
const SubscriptionList = lazy(() => import("./AdminDashboard/components/SubscriptionList"));
const VisitorsList = lazy(() => import("./AdminDashboard/components/VisitorsList"));

function HomePage() {
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

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin-dashboard" element={<PrivateRoute />}>
          <Route element={<AdminDashboard />}>
            <Route index element={<HomeDashboard />} />
            <Route path="admin-home" element={<HomeDashboard />} />
            <Route path="admin-contact" element={<ContactList />} />
            <Route path="admin-subscribe" element={<SubscriptionList />} />
            <Route path="admin-visitors" element={<VisitorsList />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}