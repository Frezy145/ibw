import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap';
import {InlineWidget} from 'react-calendly';

function Contact(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Contact </p>
                <InDev />
                <InlineWidget url ="https://calendly.com/larazounak/web-development?background_color=1c4657&text_color=faf9f9&primary_color=a98625" />
            </Container>
        </div>
    )
}

export default Contact;