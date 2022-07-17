import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function FreeTrial(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Free trial page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default FreeTrial;