import { StyledLink } from '../../utils/styles/Atoms';
import '../../styles/Board.css'

function Board({placeholder, link, label}){
    
    return(
        <div className='Board'>
            <div className='Label'>
                {label}
            </div>
            <StyledLink to="{link}" $isFullLink>
                {placeholder}
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