import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function About(){
    return(
        <div>
            <Banner />
            <Container>
                <p> About Inc Bookkeeping </p>
                <InDev />
            </Container>
        </div>
    )
}

export default About;