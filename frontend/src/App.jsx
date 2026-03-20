import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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






        </Routes>
      </BrowserRouter>

      <Footer />

    </>
  );
}

export default App;
