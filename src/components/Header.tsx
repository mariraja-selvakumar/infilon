import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import burger from '../assets/icons/burger.png';
import moon from '../assets/icons/moon.png';
import logo from '../assets/icons/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleSelect = (link: string) => {
    setActiveLink(link);
    setExpanded(false);
  };

  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <img src={logo} alt="logo" width={70} height={40} className="me-3" />
          <span className="primary-font d-none d-md-block">Central Texas Fly Fishing</span>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-3">
              {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                <Nav.Link
                  key={link}
                  className={`primary-font ${activeLink === link ? 'active-link' : ''}`}
                  href="#"
                  onClick={() => handleSelect(link)}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>

          {/* Hide Moon Icon in Mobile View */}
          <img
            src={moon}
            alt="theme-icon"
            width={25}
            height={25}
            className="me-3 cursor-pointer d-none d-md-block"
            style={{ cursor: 'pointer' }}
          />

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="border-0"
          >
            <img src={burger} alt="burger-icon" width={30} height={30} />
          </Navbar.Toggle>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
