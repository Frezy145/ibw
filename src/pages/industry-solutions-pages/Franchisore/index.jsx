import Banner from '../../../components/Banner';
import InDev from '../../../components/InDev';
import {Container} from 'react-bootstrap'

function Franchisore(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Here is the franchisore page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Franchisore;