import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contactImg from '../Img/contactImg.svg';
import { Link } from 'react-router-dom';

function ContactUsSection() {
    return (
        <>
        <section className='ContactUs-Section Same-TB-Padding' id='ContactUs'>
            <Container>
                <div className='ContactUs-Body-Content'>
                    <Row className='justify-content-between'>
                        <Col lg={6}>
                            <div className='ContactUs-left-body-content'>
                                <div>
                                    <h6>Contact Us</h6>
                                    <h2>Feel free to <span> get in touch</span> with us.</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className='ContactUs-Btn'>
                                    <input type='text' placeholder='Your Email Address'  />
                                    <Link href="" className='btn ms-2'>Contact Me</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className='img-fluid' src={contactImg} alt="Record" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        </>
    );
}
export default ContactUsSection;