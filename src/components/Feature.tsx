import { Accordion, Button, Row, Col, Image, Container } from 'react-bootstrap';
import feature from '../assets/images/feature.png';
import '../index.css';

const Feature = () => {
  const features = [
    {
      id: 1,
      title: 'Explore Fly Fishing',
      description:
        'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
      image: feature,
    },
    {
      id: 2,
      title: 'Fly Fishing Experiences',
      description:
        'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
      image: feature,
    },
    {
      id: 3,
      title: 'Gear Up and Catch More',
      description:
        'In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S',
      image: feature,
    },
  ];

  return (
    <Container fluid className="feature-section">
      <h2 className="section-title">Featured options</h2>
      <Accordion className="feature-section">
        {features.map((feature, index) => (
          <Accordion.Item eventKey={String(index)} key={feature.id} className="feature-item">
            <Accordion.Header className="accordion-title">{feature.title}</Accordion.Header>
            <Accordion.Body className="feature-content">
              <Row className="align-items-center">
                <Col md={4} className="feature-image-container d-none d-md-block">
                  <Image src={feature.image} alt={feature.title} fluid />
                </Col>
                <Col md={8} className="feature-text">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <Button variant="primary" className="feature-button">
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Feature;
