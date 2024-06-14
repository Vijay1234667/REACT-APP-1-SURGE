import Container from 'react-bootstrap/Container';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import BlogImg1 from '../Img/BlogImg1.avif';
import BlogImg2 from '../Img/BlogImg2.avif';
import BlogImg3 from '../Img/BlogImg3.avif';



function BlogSection() {
    return (
        <section className='Blog-Section Same-TB-Padding'>
            <Container>
                <div className='Blog-top-heading text-center mb-5'>
                    <h6>Blog</h6>
                    <h2>We Love <span> Writing.</span></h2>
                    <p className='para'>
                        Some amazing blog posts that are written by even <br/> more amazing people.
                    </p>
                </div>
                <div className='Blog-Body-Content'>
                    <Row>
                        <Col lg={4} className='mb-3'>
                            <Card className='Card'>
                                <div>
                                    <img className='img-fluid' src={BlogImg1} alt="ExpertisePersonimg" />
                                </div>
                                <Card.Body className='Card-Body'>
                                    <div className='d-flex'>
                                        <h6><PersonOutlineOutlinedIcon/>Adam Wathan</h6>
                                        <h6 className='ms-4'> <CreateOutlinedIcon/>SEO</h6>
                                    </div>
                                    <div>
                                        <h5>Optimizing your website for your main keyword</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className='Blog-btn'>
                                        <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Post</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Card className='Card'>
                                <div>
                                    <img className='img-fluid' src={BlogImg2} alt="ExpertisePersonimg" />
                                </div>
                                <Card.Body className='Card-Body'>
                                <div className='d-flex'>
                                        <h6><PersonOutlineOutlinedIcon/>Adam Wathan</h6>
                                        <h6 className='ms-4'> <CreateOutlinedIcon/>SEO</h6>
                                    </div>
                                    <div>
                                        <h5>Creating The perfect advertisement campaign</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className='Blog-btn'>
                                        <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Post</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className='mb-3'>
                            <Card className='Card'>
                                <div>
                                    <img className='img-fluid' src={BlogImg3} alt="ExpertisePersonimg" />
                                </div>
                                <Card.Body className='Card-Body'>
                                <div className='d-flex'>
                                        <h6><PersonOutlineOutlinedIcon/>Adam Wathan</h6>
                                        <h6 className='ms-4'> <CreateOutlinedIcon/>SEO</h6>
                                    </div>
                                    <div>
                                        <h5>Efficient management of your social media assets</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className='Blog-btn'>
                                        <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Post</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    );
}
export default BlogSection;