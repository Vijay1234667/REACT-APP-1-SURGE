import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecordImage from '../Img/RecordImage.svg';



function Record() {
    return (
        <section className='Record-Section Same-TB-Padding'>
            <Container>
                <div className='Record-Body-Content'>
                    <Row  className='justify-content-between'>
                        <Col lg={5}>
                            <div>
                            <img className='img-fluid' src={RecordImage} alt="Record" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='Record-right-body-content'>
                                <div>
                                    <h6>Our Track Record</h6>
                                    <h2>We have been doing this since <span>1999.</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <ul className='Record-num-increment d-flex p-0'>
                                    <li>
                                        <h4>2282+</h4>
                                        <h5>Clients</h5>
                                    </li>
                                    <li>
                                        <h4>3891+</h4>
                                        <h5>Projects</h5>
                                    </li>
                                    <li>
                                        <h4>1000+</h4>
                                        <h5>Awards</h5>
                                    </li>
                                </ul>
                                <div className='record-increment-learn-more-btn'>
                                    <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Learn More</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default Record;