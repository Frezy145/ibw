/*
 *The footer component. Use in the src/index.jsx
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FooterBackground, BeforeFooterBackground, WhiteLink, WhiteText,
    TwitterIcon, FacebookIcon, LinkedinIcon, CopyrightIcon
} from '../../utils/styles/Atoms';

import {Container, Row, Col} from 'react-bootstrap';

function Footer(){
    return(
        <div>
        <BeforeFooterBackground>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <a href=""><TwitterIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                        <a href="https://www.linkedin.com/in/larazouna-f-kabissa-ba1679163/"><LinkedinIcon /></a>
                    </Col>
                </Row>
            </Container>
        </BeforeFooterBackground>
        <FooterBackground>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <p className="text-light fs-5 p-2">(00228)934 484 73</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <p className="text-light fs-5 p-2">Willing to get in touch with us ? Email us if needed ! You will be welcome !</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <WhiteLink to="/about">ABOUT INC</WhiteLink> <p className="text-light fs-5 p-2">|</p>
                        <WhiteLink to="/faq">FAQ</WhiteLink> <p className="text-light fs-5 p-2">|</p>
                        <WhiteLink to="/careers">CAREER</WhiteLink> <p className="text-light fs-5 p-2">|</p>
                        <a className="text-light fs-5 p-2" href="mailto:larazounak@gmail.com">EMAIL US</a>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <CopyrightIcon /><p className="text-light fs-5 p-2">2022 Inc Bookkeeping Express</p> <p className="text-light fs-5 p-2">|</p>
                        <WhiteLink to="/privacy-policy">Privacy Policy</WhiteLink> <p className="text-light fs-5 p-2">|</p>
                        <WhiteLink to="/industry-solutions">Inc Bookkeeping Insight</WhiteLink>
                        
                    </Col>
                </Row>
            </Container>
        </FooterBackground>
        </div>
    )
}

export default Footer;