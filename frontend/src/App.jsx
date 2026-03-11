import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";

import Footer from "./pages/Footer"

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetails />} />


        
      </Routes>
    </BrowserRouter>

            <Footer />

    </>
  );
}

export default App;
