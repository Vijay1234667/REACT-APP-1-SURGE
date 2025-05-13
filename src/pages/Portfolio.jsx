import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import TeslaInc from '../Img/TeslaInc.jpeg'; // Placeholder for all images

const portfolioProjects = [
  {
    company: 'Tesla Inc.',
    type: 'Ad Campaign',
    title: 'Personalized Ad Campaign using Google AdWords',
    duration: '90 Days Campaign',
    location: 'New York',
    image: TeslaInc,
    alt: 'Tesla advertising campaign',
    link: 'https://www.mongodb.com/'
  },
  {
    company: 'Nestle',
    type: 'SEO Marketing',
    title: 'Ranking #1 for keywords like Chocolate, Snack',
    duration: '180 Day Campaign',
    location: 'Palo Alto',
    image: TeslaInc, // Replace with actual Nestle image
    alt: 'Nestle SEO campaign',
    link: 'https://www.mongodb.com/'
  }
];

function Portfolio() {
  return (
    <section className='Portfolio-Section Same-TB-Padding' id='Portfolio'>
      <Container>
        <div className='Portfolio-Body-Content'>
          <Row>
            <Col lg={7}>
              <Row className='Portfolio-left-body-content'>
                {portfolioProjects.map((project, index) => (
                  <Col lg={6} className='mb-3' key={index}>
                    <Card className='Card h-100'>
                      <div>
                        <img className='img-fluid w-100' src={project.image} alt={project.alt} />
                      </div>
                      <Card.Body className='Card-Body'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h4>{project.company}</h4>
                          <h6>{project.type}</h6>
                        </div>
                        <div>
                          <h3>{project.title}</h3>
                        </div>
                        <div className='d-flex justify-content-center'>
                          <h6 className='me-4'><WatchLaterOutlinedIcon />{project.duration}</h6>
                          <h6><FmdGoodOutlinedIcon />{project.location}</h6>
                        </div>
                        <div className='Portfolio-btn text-center'>
                          <a href={project.link} className='btn' target='_blank' rel='noopener noreferrer'>
                            Read Case Study
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={5}>
              <div className='Portfolio-right-body-content'>
                <div>
                  <h6>Our Portfolio</h6>
                  <h2>We've done some <span>amazing projects.</span></h2>
                  <p className='para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
                  </p>
                </div>
                <div className='Portfolio-btn'>
                  <a href='https://www.mongodb.com/' className='btn' target='_blank' rel='noopener noreferrer'>
                    View all Projects <ArrowForwardOutlinedIcon />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
