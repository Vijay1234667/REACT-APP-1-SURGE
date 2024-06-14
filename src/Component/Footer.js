import Container from 'react-bootstrap/Container';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DiamondIcon from '@mui/icons-material/Diamond';


function ContactUsSection() {
    return (
        <section className='Footer-Section Same-TB-Padding text-white'>
            <Container>
                <div className='Footer-Body-Content text-center'>
                    <div className='mb-5'>
                        <h3><DiamondIcon/><img src="https://ik.imagekit.io/gku4adhog/mobavenue/resources/Surge_Logo_purple.png?updatedAt=1716378588439" width={110} alt="" /></h3>
                    </div>
                    <div>
                        <ul className='Footer-Nav-links d-flex justify-content-center mb-5'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                            <li>Reviews</li>
                        </ul>
                        <ul className='footer-social-icon d-flex justify-content-center mb-5'>
                            <li><FacebookOutlinedIcon/></li>
                            <li><TwitterIcon/></li>
                            <li><YouTubeIcon/></li>
                        </ul>
                        <div className='Copyright'>
                            <p>
                                © Copyright 2020, Treact Inc. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
export default ContactUsSection;