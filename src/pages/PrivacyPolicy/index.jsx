import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function PrivacyPolicy(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Privacy policy page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default PrivacyPolicy;