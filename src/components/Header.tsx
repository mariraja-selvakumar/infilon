import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import burger from '../assets/icons/burger.png';
import moon from '../assets/icons/moon.png';
import logo from '../assets/icons/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <img src={logo} alt="logo" width={70} height={40} className="me-5" />
          <span className="primary-font">Central Texas Fly Fishing</span>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-3">
              <Nav.Link className="primary-font" href="#" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link className="primary-font" href="#" onClick={() => setExpanded(false)}>
                About Us
              </Nav.Link>
              <Nav.Link className="primary-font" href="#" onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>
              <Nav.Link className="primary-font" href="#" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <img
            src={moon}
            alt="theme-icon"
            width={25}
            height={25}
            className="me-3 cursor-pointer"
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
