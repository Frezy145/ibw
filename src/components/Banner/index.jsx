import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/styles/Atoms';
import '../../styles/Banner.css';
import logo from '../../assets/logo/logo.svg';
import { useTheme } from '../../utils/hooks';

function Banner(){
    const {theme} = useTheme();
    
    return (
        <div className='Navbar'>
        
            <Link to="/">
                <img className="Logo" alt="logo" src={logo} />
            </Link>
            
            <div>
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
          
        </div>
    )
}

export default Banner;