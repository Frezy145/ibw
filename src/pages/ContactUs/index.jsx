import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function ContactUs(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Contact us </p>
                <InDev />
            </Container>
        </div>
    )
}

export default ContactUs;