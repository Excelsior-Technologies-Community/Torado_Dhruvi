import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/Home";

function ConditionalFooter() {
  const location = useLocation();
  const hideFooterRoutes = ["/admin", "/admin-login"];
  if (hideFooterRoutes.includes(location.pathname)) return null;
  return <Footer />;
}
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer"
import PortfolioDetails from "./pages/PortfolioDetails";
import OnlyServices from "./pages/onlyServices";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TeamDetails from "./pages/TeamDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="/onlyservices" element={<OnlyServices />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/team-details" element={<Navigate to="/" replace />} />
          <Route path="/team-details/:id" element={<TeamDetails />} />
          <Route path="/team-details/*" element={<Navigate to="/" replace />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />


        </Routes>
        <ConditionalFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
