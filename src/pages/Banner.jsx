import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="Banner-Section" id='About'>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className='Banner-Body-Content'>
                            <h6 className='text-white d-md-block d-none'><span className='span-line me-2 '></span>We have now launched operations in Europe.</h6>
                            <h1 className='mb-2 text-white fw-bold'>Lorem the best</h1>
                            <h2 className='mb-3'>Subscribe</h2>
                            <div className='banner-btn'>
                                <Link to="/" className='btn bg-white'>Read Customer Stories</Link>
                            </div>
                        </div>
                    </Col>
                    
                    <Col lg={6} md={6} className='Banner-Body-Content'>
                        <Card className='Card bg-dark py-3'>
                            <Card.Body className='text-center text-white'>
                                <Card.Title>Sign in to Vimeo to watch this video</Card.Title>
                                <Card.Text>
                                    You may need to allow cookies first. If asked, select
                                </Card.Text>
                                <Link to="/" className='btn btn-primary px-4'>Sign In</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;