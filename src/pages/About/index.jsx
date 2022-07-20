/*
 *Fairly done. It remains the responsive to be well. And also google if needed
 *and the tests
 */

import Banner from '../../components/Banner';
import {BoardWithoutLink} from '../../components/Board';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import {Background, OurValues, SimpleLink, StyledLink, SimpleArrowRight} from '../../utils/styles/Atoms';
import { useTheme } from '../../utils/hooks';

// importing pictures
import aboutpicture from "../../assets/img/aboutpicture.jpg";
import aboutSustainability from "../../assets/img/aboutSustainability.png";
import aboutStewardship from "../../assets/img/aboutStewardship.png";
import aboutClientfocus from "../../assets/img/aboutClientfocus.png";
import aboutPassionate from "../../assets/img/aboutPassionate.png";
import aboutTrustworthy from "../../assets/img/aboutTrustworthy.png";
import aboutDynamic from "../../assets/img/aboutDynamic.png";
import aboutOneteam from "../../assets/img/aboutOneteam.png";

//importing carousel pictures
import carousel1 from "../../assets/img/carousel1.jpg";
import carousel2 from "../../assets/img/carousel2.jpg";
import carousel3 from "../../assets/img/carousel3.jpg";
import carousel4 from "../../assets/img/carousel4.jpg";

function About(){
    
    const {theme} = useTheme();
    
    return(
        <div>
            {/* The bord */}
            <Background image={aboutpicture}>
                <Banner />
                <BoardWithoutLink  label='
                    About Inc Bookkeeping
                    '/>
            </Background>
            
            {/* The content */}
            <Container>
                <Row className="m-4">
                    <Col className="display-6">
                        <p>Our values</p>
                    </Col>
                </Row>
                <Row className="m-4 d-flex justify-content-center">
                    <OurValues alt="Sustainability" src={aboutSustainability} />
                    <OurValues alt="Stewardship" src={aboutStewardship} />
                    <OurValues alt="Clientfocus" src={aboutClientfocus} />
                    <OurValues alt="Passionate" src={aboutPassionate} />
                    <OurValues alt="Trustworthy" src={aboutTrustworthy} />
                    <OurValues alt="Dynamic" src={aboutDynamic} />
                    <OurValues alt="One team" src={aboutOneteam} />
                </Row>
                <hr/>
            </Container>
            
            <Container className="d-flex flex-column align-items-center">
                <Row className="w-75 d-flex justify-content-center">
                    <Col class="col-10 col-md-6">
                        <h3 className="m-4"> We are here to help businesses </h3>
                        <p>
                            BookKeeping Express (BKE) is the leader in full service accounting and bookkeeping for small-
                            and medium-sized businesses. BKE’s technology platform and skilled financial specialists remove
                            the need for businesses owners to spend time on day-to-day accounting tasks-- including accounting
                            system setup, bank account reconciliation, monthly financial reporting, bill pay, payroll and much more. 
                            By combining the best people and technology, BKE simplifies back-office operations for businesses nation-wide.
                        </p> 
                        <p>
                            BKE was founded in California in 1984 to provide professional bookkeeping designed specifically for
                            the needs and budgets of small businesses. We opened the BookKeeping Express Team Center to provide quality
                            outsourced bookkeeping services to our clients throughout the United States. The Team Center allows us to 
                            provide virtual services and explore integration among quality technology applications and business tools,
                            as well as expandour offerings to the business community.
                        </p>
                    </Col>
                    <Col className="col-10 col-md-6">
                        <h3 className="m-4"> Our Team </h3>
                        
                        {/* team carousel*/}
                        <Carousel fade className="m-4">
                            <Carousel.Item>
                                <img className="d-block w-100" alt="Ceo" src={carousel1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" alt="Colab" src={carousel2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" alt="Colab" src={carousel3} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" alt="Colab" src={carousel3} />
                            </Carousel.Item>
                        </Carousel>
                        
                        {/* link to hiring page */}
                        <p className="lead m-4">JOIN OUR TEAM</p>
                        <p className="m-4">
                            <SimpleLink to="/careers">Open positions<SimpleArrowRight /></SimpleLink>
                        </p>
                        <p className="m-4">
                            <StyledLink  $theme={theme} to ="/contact-us" $isFullLink >
                                Contact us
                            </StyledLink>
                        </p>
                    </Col>
                </Row>
                
                <hr/>
            </Container>
            
            
        </div>
    )
}

export default About;