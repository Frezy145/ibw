import Banner from '../../../components/Banner';
import InDev from '../../../components/InDev';
import {Container} from 'react-bootstrap'

function MultiUnit(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Multi unit page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default MultiUnit;