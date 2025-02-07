import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function AppRoutes() {
  const ROUTES = {
    HOME: "/",
    PORTFOLIO: "/portfolio",
    SERVICES: "/services",
    CONTACT: "/contact",
  };

  const navigation = [
    { name: "Home", path: ROUTES.HOME },
    { name: "Portfolio", path: ROUTES.PORTFOLIO },
    { name: "Services", path: ROUTES.SERVICES },
    { name: "Contact", path: ROUTES.CONTACT },
  ];

  

  return (
    <Router>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
