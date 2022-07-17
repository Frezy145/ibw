import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function WhyIB(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Why Inc Bookkeeping </p>
                <InDev />
            </Container>
        </div>
    )
}

export default WhyIB;