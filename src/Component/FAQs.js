import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FaqImg from '../Img/FaqImg.svg';



function FaqSection() {
    return (
        <section className='Faq-Section Same-TB-Padding'>
            <Container>
                <div className='Faq-Body-Content'>
                    <Row className='justify-content-between'>
                        <Col lg={6} className='mt-auto'>
                            <div>
                                <img className='img-fluid' src={FaqImg} alt="ExpertisePersonimg" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='Faq-Right-body-content'>
                                <div>
                                    <h6>FAQs</h6>
                                    <h2>Do you have<span> Questions ? </span></h2>
                                    <p className='para'>
                                        Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.
                                    </p>
                                </div>
                                <div className='Accordion-Body-section'>
                                    <Accordion >
                                        <Accordion.Item eventKey="0" className='border-0'>
                                            <Accordion.Header className='Accordion-Question'>Is lunch provided free of cost ?</Accordion.Header>
                                            <Accordion.Body className='accordion-answer'>
                                                Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.
                                            </Accordion.Body>
                                        </Accordion.Item >
                                        <Accordion.Item eventKey="1"className='border-0'> 
                                            <Accordion.Header>Do you have 2 Bedroom suites ?</Accordion.Header>
                                            <Accordion.Body className='accordion-answer'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2" className='border-0'>
                                            <Accordion.Header>Are Wi-Fi costs included in the price ?</Accordion.Header>
                                            <Accordion.Body className='accordion-answer'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" className='border-0'>
                                            <Accordion.Header>Where can I reach you for support ?</Accordion.Header>
                                            <Accordion.Body className='accordion-answer'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default FaqSection;