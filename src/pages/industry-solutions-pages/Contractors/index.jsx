import Banner from '../../../components/Banner';
import InDev from '../../../components/InDev';
import {Container} from 'react-bootstrap'

function Contractors(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Here are our contractors </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Contractors;