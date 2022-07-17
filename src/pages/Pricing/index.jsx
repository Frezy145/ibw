import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function Pricing(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Pricing page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Pricing;