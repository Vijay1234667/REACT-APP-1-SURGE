import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Banner() {
    return (
        <section className="Banner-Section" id='About'>
            <div className='banner-background-color'></div>
            <Container>
                <Row className='Banner-Body-Content'>
                    <Col lg={6}>
                        <div>
                            <h6 className='text-white'><span className='span-line me-2 '></span>We have now launched operations in Europe.</h6>
                            <h1 className='mb-5 text-white fw-bold'>Hire the best<span className='d-block'>Marketing Team.</span> </h1>
                            <div className='banner-btn'>
                                <a href="https://treact.owaiskhan.me/components/landingPages/AgencyLandingPage" className='btn bg-white' target="_blank" rel="noopener noreferrer">Read Customer Stories</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card className='Card bg-dark'>
                            <Card.Body className='text-center text-white'>
                                <Card.Title>Sign in to Vimeo to watch this video</Card.Title>
                                <Card.Text>
                                    You may need to allow cookies first. If asked, select
                                </Card.Text>
                                <Button variant="info">Sign In</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;