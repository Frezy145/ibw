import { StyledLink, WhiteArrowRight } from '../../utils/styles/Atoms';
import '../../styles/Board.css';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Board({placeholder, link, label}){
    
    return(
        <div className='Board'>
            <Container className='text-center
                                text-white
                                m-5
                                display-4'>
                <Row className='row justify-content-center'>
                    <div className='col-8'>
                        {label}
                    </div>
                </Row>
            </Container>
            <StyledLink to={link} $isFullLink>
                {placeholder} <WhiteArrowRight />
            </StyledLink>
        </div>
    )
}

export default Board;

export function BoardWithoutLink({label}){
    
    return(
        <div className='Board'>
            <div className='Label'>
                {label}
            </div>
        </div>
    )
};