import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function IndustrySolutions(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Industry solutions </p>
                <InDev />
            </Container>
        </div>
    )
}

export default IndustrySolutions;