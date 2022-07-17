import Banner from '../../components/Banner';
import InDev from '../../components/InDev';
import {Container} from 'react-bootstrap'

function Blog(){
    return(
        <div>
            <Banner />
            <Container>
                <p> Blog page </p>
                <InDev />
            </Container>
        </div>
    )
}

export default Blog;