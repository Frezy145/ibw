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
                <div className='Logo' src={logo} />
            </Link>
            
            <div>
                <StyledLink $theme={theme} to ="/">
                    Home
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="/">
                    Profil
                </StyledLink>
                
                <StyledLink  $theme={theme} to ="/">
                    Test
                </StyledLink>
            </div>
          
        </div>
    )
}

export default Banner;