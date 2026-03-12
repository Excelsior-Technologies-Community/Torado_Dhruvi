import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";

import Footer from "./pages/Footer"

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/about" element={<About/>}/>


        
      </Routes>
    </BrowserRouter>

            <Footer />

    </>
  );
}

export default App;
