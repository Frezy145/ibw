import Banner from '../../../components/Banner';
import InDev from '../../../components/InDev';
import {Container} from 'react-bootstrap'

function Professionals(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Here is the professionals page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Professionals;