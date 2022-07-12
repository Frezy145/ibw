import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/styles/Atoms';
import '../../styles/Banner.css';
import logo from '../../assets/logo/smalllogo.jpg';
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
                    Home
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="error">
                    Error
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="/">
                    Test
                </StyledLink>
            </div>
          
        </div>
    )
}

export default Banner;