import Container from 'react-bootstrap/Container';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import BlogImg2 from '../Img/BlogImg2.avif';
import { Link } from 'react-router-dom';

function BlogSection() {
    
    const BlogData = [
        {
            blogImg: "",
            blogauth1: "blog1",
            blogauth2: " SEO",
            bloghead: "Website for your main keyword",
            blogText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            blogImg: "",
            blogauth1: " blog2",
            blogauth2: " SEO",
            bloghead: "Optimizing your website for your main keyword",
            blogText: " dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            blogImg: "",
            blogauth1: "Cdam Wathan",
            blogauth2: " SEO",
            bloghead: "keyword",
            blogText: " Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ]
    return (
        <>
            <section className='Blog-Section' id='Blog'>
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
                            {BlogData.map((blogdt, index) => (
                                <Col lg={4} md={6} xs={12} key={index} className='mb-4'>
                                    <Card className='Card h-100'>
                                        <Card.Body className='Card-Body'>
                                            <img className='img-fluid mb-2 w-100' src={BlogImg2} alt="ExpertisePersonimg" />
                                            <div className='d-flex  justify-content-between align-items-center'>
                                                <h6><PersonOutlineOutlinedIcon />{blogdt.blogauth1}</h6>
                                                <h6><CreateOutlinedIcon />{blogdt.blogauth2}</h6>
                                            </div>
                                            <h5>{blogdt.bloghead}</h5>
                                            <p>
                                                {blogdt.blogText}
                                            </p>
                                            <div className='Blog-btn'>
                                                <Link to="/" className='btn'>Read Post</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </Container>
            </section>
        </>
    );
}
export default BlogSection;