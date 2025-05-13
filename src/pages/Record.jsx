import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecordImage from '../Img/RecordImage.svg';

function Record() {
    const stats = [
        { value: "2282+", label: "Clients" },
        { value: "3891+", label: "Projects" },
        { value: "1000+", label: "Awards" }
    ];

    return (
        <section className='Record-Section'>
            <Container>
                <Row className='justify-content-between Record-Body-Content'>
                    <Col lg={5} md={5} xs={12} className='mb-2 mb-md-4'>
                        <img className='img-fluid' src={RecordImage} alt="Decorative record chart graphic" />
                    </Col>

                    <Col lg={6} md={5} xs={12} className='mb-2 mb-md-4'>
                        <div className='Record-right-body-content'>
                            <h6>Our Track Record</h6>
                            <h2>
                                We have been doing this since <span>1999.</span>
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <ul className='Record-num-increment d-flex p-0'>
                                {stats.map((item, index) => (
                                    <li key={index} className='me-4'>
                                        <h4>{item.value}</h4>
                                        <h5>{item.label}</h5>
                                    </li>
                                ))}
                            </ul>

                            <div className='record-increment-learn-more-btn'>
                                <a href="#about" className='btn'>Learn More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Record;
