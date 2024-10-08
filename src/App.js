

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Component/Navbar';
import Banner from '../src/Component/Banner'
import Record from '../src/Component/Record';
import Services from '../src/Component/Services';
import Expertise from '../src/Component/Expertise';
import Portfolio from '../src/Component/Portfolio';
import Blog from '../src/Component/Blog';
import ContactUs from '../src/Component/ContactUs';
import Footer from '../src/Component/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/record" element={<Record />} />
        <Route path="/contact" element={<ContactUs />} />
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
