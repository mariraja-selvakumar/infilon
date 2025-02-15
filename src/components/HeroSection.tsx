import { Button, Container, Row, Col } from 'react-bootstrap';
import hero from '../assets/images/hero.png';

const HeroSection = () => (
  <Container fluid className="hero-section d-flex align-items-center">
    <Row className="w-100 px-4 px-md-5">
      <Col xs={12} md={6} className="d-flex justify-content-center order-md-2 order-1 mb-4 mb-md-0">
        <img src={hero} alt="Hero" className="hero-image" />
      </Col>

      <Col
        xs={12}
        md={6}
        className="d-flex flex-column justify-content-center order-md-1 order-2 mt-3 mt-md-0"
      >
        <h1 className="hero-title">Central Texas Fly Fishing</h1>
        <p className="hero-subtitle">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum,
          facilisi ac, sed faucibus.
        </p>
        <Button variant="primary" className="hero-button mt-3">
          Get Started
        </Button>
      </Col>
    </Row>
  </Container>
);

export default HeroSection;
