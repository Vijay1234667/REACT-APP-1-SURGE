import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ServicesImage1 from '../Img/ServicesImage1.svg';
import ServicesImage2 from '../Img/ServicesImage2.svg';
import ServicesImage3 from '../Img/ServicesImage3.svg';
import ServicesImage4 from '../Img/ServicesImage4.svg';
import ServicesImage5 from '../Img/ServicesImage5.svg';
import ServicesImage6 from '../Img/ServicesImage5.svg';



function ServicesSection() {
 
    return (
        <section className='Services-Section Same-TB-Padding'>
            <Container>
                <div className='Services-head'>
                    <h2 className='text-center mb-5'>Our Professional<span> Services</span></h2>
                </div>
                <Row>
                 
                    <Col lg={4} className='mb-3 mb-md-5'>
                        <Card className='Card'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage1} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>Ads Management</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='Card mb-3'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage2} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>Video Marketing</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='Card mb-3'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage3} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>Customer Relation</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='Card mb-3'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage4} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>Product Outreach</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='Card mb-3'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage5} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>PR Campaign</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='Card'>
                            <div className='text-center'>
                                <img className='img-fluid imgborder' src={ServicesImage6} alt="Record" />
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title className='Card-Title'>Product Expansion</Card.Title>
                                <Card.Text className='Card-Text'>
                                    We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ServicesSection;