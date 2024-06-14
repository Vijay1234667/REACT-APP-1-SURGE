import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExpertisePersonimg from '../Img/ExpertisePersonimg.svg';
import ServicesImage1 from '../Img/ServicesImage1.svg';




function ExpertiseSection() {
    return (
        <section className='Expertise-Section Same-TB-Padding'>
            <Container>
                <div className='Expertise-Body-Content'>
                    <Row className='justify-content-between'>
                        <Col lg={7}>
                            <div className='Expertise-Left-body-content'>
                                <div>
                                    <h6>Our Expertise</h6>
                                    <h2>We have the most <span>professional </span>marketing team.</h2>
                                    <p className='para'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className='Expertise-bottom-section'>
                                    <div className='d-flex'>
                                        <div>
                                            <img className='img-fluid' src={ServicesImage1} alt="ExpertisePersonimg" />
                                        </div>
                                        <div className='ms-3'>
                                            <h5>Professionalism</h5>
                                            <p>
                                                We have the best professional marketing people <br/> across the globe just to work with you.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <img className='img-fluid' src={ServicesImage1} alt="ExpertisePersonimg" />
                                        </div>
                                        <div className='ms-3'>
                                            <h5>Affordable</h5>
                                            <p>
                                            We promise to offer you the best rate we can - at <br/> par with the industry standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Expertise-Portfolio-btn'>
                                    <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">See Our Portfolio</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='img-fluid' src={ExpertisePersonimg} alt="ExpertisePersonimg" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default ExpertiseSection;