import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import johnsStory from '../assets/images/johns-story.png';
import theJourney from '../assets/images/the-journey.png';
import catchDay from '../assets/images/catch-day.png';
import troutTales from '../assets/images/trout-tales.png';

const items = [
  {
    id: 1,
    image: johnsStory,
    title: 'John’s Story',
    description:
      'Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ',
  },
  {
    id: 2,
    image: theJourney,
    title: 'The Journey',
    description:
      'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
  },
  {
    id: 3,
    image: catchDay,
    title: 'Catch Day',
    description:
      'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
  },
  {
    id: 4,
    image: troutTales,
    title: 'Trout Tales',
    description:
      'Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed',
  },
];

const Story = () => (
  <Container fluid className="story-container px-5">
    <h2 className="text-center mb-4 story-title">Member stories</h2>
    <Row className="g-4">
      {items.map((item) => (
        <Col xs={12} sm={6} md={6} className="d-flex" key={item.id}>
          <div className="d-flex flex-column flex-md-row align-items-md-center border p-3 rounded w-100">
            <Image
              src={item.image}
              alt={item.title}
              className="me-md-3 mb-2 mb-md-0 flex-shrink-0"
              fluid
            />
            <div className="flex-grow-1">
              <h5 className="story-sub-title">{item.title}</h5>
              <p className="story-content">{item.description}</p>
              <Button variant="primary" className="mt-2 story-button">
                Read More
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Story;
