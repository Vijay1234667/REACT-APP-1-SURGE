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
        <>

            <section className='Blog-Section Same-TB-Padding' id='Blog'>
                <Container>
                    <div className='Blog-top-heading text-center mb-5'>
                        <h6>Blog</h6>
                        <h2>We Love <span> Writing.</span></h2>
                        <p className='para'>
                            Some amazing blog posts that are written by even <br /> more amazing people.
                        </p>
                    </div>
                    <div className='Blog-Body-Content'>
                        <Row>
                            <Col lg={4}>
                                <Card className='Card'>
                                    <Card.Body className='Card-Body'>
                                        <img className='img-fluid' src={BlogImg2} alt="ExpertisePersonimg" />
                                        <div className='d-flex  justify-content-between align-items-center'>
                                            <h6><PersonOutlineOutlinedIcon />Adam Wathan</h6>
                                            <h6><CreateOutlinedIcon />SEO</h6>
                                        </div>
                                        <h5>Optimizing your website for your main keyword</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className='Blog-btn'>
                                            <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Post</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className='Card'>
                                    <Card.Body className='Card-Body'>
                                        <img className='img-fluid' src={BlogImg2} alt="ExpertisePersonimg" />
                                        <div className='d-flex  justify-content-between align-items-center'>
                                            <h6><PersonOutlineOutlinedIcon />Adam Wathan</h6>
                                            <h6><CreateOutlinedIcon />SEO</h6>
                                        </div>
                                        <h5>Optimizing your website for your main keyword</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className='Blog-btn'>
                                            <a href="https://www.mongodb.com/" className='btn' target="_blank" rel="noopener noreferrer">Read Post</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className='Card'>
                                    <Card.Body className='Card-Body'>
                                        <img className='img-fluid' src={BlogImg2} alt="ExpertisePersonimg" />
                                        <div className='d-flex  justify-content-between align-items-center'>
                                            <h6><PersonOutlineOutlinedIcon />Adam Wathan</h6>
                                            <h6><CreateOutlinedIcon />SEO</h6>
                                        </div>
                                        <h5>Optimizing your website for your main keyword</h5>
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
        </>
    );
}
export default BlogSection;