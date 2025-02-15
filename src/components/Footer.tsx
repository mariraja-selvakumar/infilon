import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/icons/logo.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="d-none d-md-flex justify-content-between align-items-center mb-3">
          <Col md={6} className="d-flex align-items-center">
            <img src={logo} alt="Logo" height={40} className="me-3 icon-white" />
            <nav>
              <a href="#" className="text-light mx-2 text-decoration-none">
                FAQ
              </a>
              <a href="#" className="text-light mx-2 text-decoration-none">
                Privacy
              </a>
              <a href="#" className="text-light mx-2 text-decoration-none">
                Support
              </a>
              <a href="#" className="text-light mx-2 text-decoration-none">
                Contact
              </a>
            </nav>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <img src={facebookIcon} alt="Facebook" height={30} className="mx-2 icon-white" />
            <img src={instagramIcon} alt="Instagram" height={30} className="mx-2 icon-white" />
            <img src={linkedinIcon} alt="LinkedIn" height={30} className="mx-2 icon-white" />
          </Col>
        </Row>

        <Row className="d-flex d-md-none text-center mb-3">
          <Col xs={12} className="mb-3">
            <img src={logo} alt="Logo" height={40} />
          </Col>
          <Col xs={12} className="mb-3">
            <nav className="d-flex flex-row justify-content-evenly">
              <a href="#" className="text-light d-block">
                FAQ
              </a>
              <a href="#" className="text-light d-block">
                Privacy
              </a>
              <a href="#" className="text-light d-block">
                Support
              </a>
              <a href="#" className="text-light d-block">
                Contact
              </a>
            </nav>
          </Col>
          <Col xs={12} className="mb-3">
            <img src={facebookIcon} alt="Facebook" height={30} className="mx-2" />
            <img src={instagramIcon} alt="Instagram" height={30} className="mx-2" />
            <img src={linkedinIcon} alt="LinkedIn" height={30} className="mx-2" />
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="text-center">
            <p className="mb-0 copyright">© 2024 Central Texas Fly Fishing All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
