import Banner from '../../../components/Banner';
import InDev from '../../../components/InDev';
import {Container} from 'react-bootstrap'

function HealthWellness(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Heath wellness  </p>
                <InDev />
            </Container>
        </div>
    )
}

export default HealthWellness;