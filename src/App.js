import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Record from "./pages/Record";
import Services from "./pages/Services";
import Expertise from "./pages/Expertise";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Footer from "./layout/Footer";
import Banner from "./pages/Banner";
import ContactUsSection from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/record" element={<Record />} />
          <Route path="/contact" element={<ContactUsSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
