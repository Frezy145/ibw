import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/styles/Atoms';
import '../../styles/Banner.css';
import logo from '../../assets/logo/logo.svg';
import { useTheme } from '../../utils/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffCanv from '../OffCanv'

function Banner(){
    const {theme} = useTheme();
    
    return (
        <div className='Navbar'>
        
            <Link to="/">
                <img className="Logo" alt="logo" src={logo} />
            </Link>
            
            <div className="d-none d-lg-block">
                <StyledLink $theme={theme} to ="/">
                    INC BOOKKEPPING INSIGHT
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="error">
                    WHO WE WORK WITH
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="/">
                    PRICING
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="error" $isFullLink >
                    CONCTACT
                </StyledLink>
            </div>
            
            <OffCanv />
          
        </div>
    )
}

export default Banner;