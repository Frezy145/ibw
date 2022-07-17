import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function Faq(){
    return(
        <div>
            <Banner />
            <Container>
                <p> FAQ page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Faq;