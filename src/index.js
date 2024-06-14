import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/Sass/sass.scss';
import Navbar from '../src/Component/Navbar';
import Banner from '../src/Component/Banner'
import reportWebVitals from './reportWebVitals';
import Record from '../src/Component/Record';
import Services from '../src/Component/Services';
import Expertise from '../src/Component/Expertise';
import Portfolio from '../src/Component/Portfolio';
import Testimonials from '../src/Component/Testimonials';
import FAQs from '../src/Component/FAQs';
import Blog from '../src/Component/Blog';
import ContactUs from '../src/Component/ContactUs';
import Footer from '../src/Component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Banner/>
    <Record/>
    <Services/>
    <Expertise/>
    <Portfolio/>
    <Testimonials/>
    <FAQs/>
    <Blog/>
    <ContactUs/>
    <Footer/>

  </React.StrictMode>
);


reportWebVitals();
