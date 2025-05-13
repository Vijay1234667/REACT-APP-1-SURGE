import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavScrollExample() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuIcon = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { to: '/', label: "Home" },
    { to: '/blog', label: "Blog" },
    { to: '/record', label: "Record" },
    { to: '/contact', label: "Contact" },
    { to: '/services', label: "Services" },
    { to: '/portfolio', label: "Portfolio" },
    { to: '/expertise', label: "Expertise" },
  ];

  return (
    <Navbar expand="md" className="Navbar py-3 fixed-top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://ik.imagekit.io/gku4adhog/gagga-removebg-preview.png?updatedAt=1730893719699"
            width={160}
            height={30}
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-0"
          onClick={toggleMenuIcon}
        >
          {menuOpen ? <CloseIcon className="text-white" /> : <MenuIcon className="text-white" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-lg-0" navbarScroll>
            {navLinks.map(({ to, label }) => (
              <Nav.Link
                as={Link}
                to={to}
                key={to}
                onClick={() => setMenuOpen(false)}
                className="Nav-link"
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="nav-btn text-center">
            <Link to="/" className="btn">Learn More</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
