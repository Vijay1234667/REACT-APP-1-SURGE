import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DiamondIcon from '@mui/icons-material/Diamond';
import {  Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand className='Logo' href="https://treact.owaiskhan.me/components/landingPages/AgencyLandingPage"><DiamondIcon /><img src="https://ik.imagekit.io/gku4adhog/mobavenue/resources/Surge_Logo_purple.png?updatedAt=1716378588439" width={110} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='Nav-link' to="/">Banner</Link>
            <Link className='Nav-link' to="blog">Blog</Link>
            <Link className='Nav-link' to="Record">Record</Link>
            <Link className='Nav-link' to="contact">Contact Us</Link>
            <Link className='Nav-link' to="services">Services</Link>
            <Link className='Nav-link' to="portfolio">Portfolio</Link>
            <Link className='Nav-link' to="expertise">Expertise</Link>
          </Nav>
          <div className='nav-btn'>
            <a href="https://treact.owaiskhan.me/components/landingPages/AgencyLandingPage" className='btn' target="_blank" rel="noopener noreferrer">Sign Up</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;