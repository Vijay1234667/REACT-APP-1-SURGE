import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ServicesImage1 from '../Img/ServicesImage1.svg';
import ServicesImage2 from '../Img/ServicesImage2.svg';
import ServicesImage3 from '../Img/ServicesImage3.svg';
import ServicesImage4 from '../Img/ServicesImage4.svg';
import ServicesImage5 from '../Img/ServicesImage5.svg';
import ServicesImage6 from '../Img/ServicesImage5.svg'; // Possibly a mistake – same as Image5?

const servicesData = [
    {
        title: 'Web Dev',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage1,
        alt: 'Web Development Service'
    },
    {
        title: 'Video Marketing',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage2,
        alt: 'Video Marketing Service'
    },
    {
        title: 'Customer Relation',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage3,
        alt: 'Customer Relationship Service'
    },
    {
        title: 'Product Outreach',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage4,
        alt: 'Product Outreach Service'
    },
    {
        title: 'PR Campaign',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage5,
        alt: 'PR Campaign Service'
    },
    {
        title: 'Product Expansion',
        description: 'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
        image: ServicesImage6,
        alt: 'Product Expansion Service'
    }
];

function Services() {
    return (
        <section className='Services-Section Same-TB-Padding'>
            <Container>
                <div className='Services-head'>
                    <h2 className='text-center mb-5'>
                        Our Professional <span>Services</span>
                    </h2>
                </div>
                <Row>
                    {servicesData.map((service, index) => (
                        <Col key={index} lg={4} md={6} className='mb-3 mb-md-5'>
                            <Card className='Card h-100'>
                                <div className='text-center'>
                                    <img className='img-fluid imgborder' src={service.image} alt={service.alt} />
                                </div>
                                <Card.Body className='text-center'>
                                    <Card.Title className='Card-Title'>{service.title}</Card.Title>
                                    <Card.Text className='Card-Text'>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
