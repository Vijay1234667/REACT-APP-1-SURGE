import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Card from 'react-bootstrap/Card';
import TeslaInc from '../Img/TeslaInc.jpeg';


function Portfolio() {
    return (
        <section className='Portfolio-Section Same-TB-Padding' id="Portfolio">
            <Container>
                <div className='Portfolio-Body-Content'>
                    <Row>
                        <Col lg={7}>
                            <Row className='Portfolio-left-body-content'>
                                <Col lg={6} className='mb-3'>
                                    <Card className='Card'>
                                        <div>
                                            <img className='img-fluid' src={TeslaInc} alt="ExpertisePersonimg" />
                                        </div>
                                        <Card.Body className='Card-Body'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h4>Tesla Inc.</h4>
                                                <h6>Ad Campaign</h6>
                                            </div>
                                            <div>
                                                <h3>Personalized Ad Campaign using Google AdWords</h3>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <h6 className='me-4'> <WatchLaterOutlinedIcon/>90 Days Campaign</h6>
                                                <h6  className=''><FmdGoodOutlinedIcon/>New York</h6>
                                            </div>
                                            <div className='Portfolio-btn text-center'>
                                                <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Case Study</a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6} className='mb-3'>
                                    <Card className='Card h-100'>
                                    <div>
                                            <img className='img-fluid' src={TeslaInc} alt="ExpertisePersonimg" />
                                        </div>
                                        <Card.Body className='Card-Body'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <h4>Nestle</h4>
                                                <h6>SEO Marketing</h6>
                                            </div>
                                            <div>
                                                <h3>Ranking #1 for keywords like Chocolate, Snack</h3>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <h6 className='me-4'><WatchLaterOutlinedIcon/>180 Day Campaign</h6>
                                                <h6><FmdGoodOutlinedIcon/> Palo Alto</h6>
                                            </div>
                                            <div className='Portfolio-btn text-center'>
                                                <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Case Study</a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                             
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
                                    <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">View all Projects  <ArrowForwardOutlinedIcon/> </a>
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