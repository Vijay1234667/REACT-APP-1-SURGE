import Container from 'react-bootstrap/Container';

import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestiImg1 from '../Img/TestiImg1.jpeg';
import TestiImgRoundedImg1 from '../Img/TestiImgRoundedImg1.jpeg';
import TestiImgRoundedImg2 from '../Img/TestiImgRoundedImg2.jpeg';

function Testimonials() {
    return (
        <section className='Testimonials-Section Same-TB-Padding'>
            <Container>
                <div className='Testimonials-Body-Content'>
                    <Row className='justify-content-between'>
                        <Col lg={7}>
                            <div className='Testimonials-Left-body-content'>
                                <div>
                                    <h6>Testimonials</h6>
                                    <h2>Our Clients <span>Love Us. </span></h2>
                                    <p className='para'>
                                        Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')} >
                                    <SwiperSlide>
                                        <p className='review-text'>
                                            <FormatQuoteOutlinedIcon/>Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                                        </p>
                                        <div className='d-flex align-items-center review-body'>
                                            <div>
                                                <img className='img-fluid review-person' src={TestiImgRoundedImg1} alt="ExpertisePersonimg" />
                                            </div>
                                            <div className='ms-4'>
                                                <h3>Adam Cuppy</h3>
                                                <span>Founder, Nestle</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <p className='review-text'>
                                    <FormatQuoteOutlinedIcon/>Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                                        </p>
                                        <div className='d-flex align-items-center review-body'>
                                            <div>
                                                <img className='img-fluid review-person' src={TestiImgRoundedImg2} alt="ExpertisePersonimg" />
                                            </div>
                                            <div className='ms-4'>
                                                <h3>Adam Cuppy</h3>
                                                <span>Founder, Nestle</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className=''>
                                <img className='img-fluid rounded' src={TestiImg1} alt="ExpertisePersonimg" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
export default Testimonials;



