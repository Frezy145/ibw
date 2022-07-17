import {Offcanvas, Button} from 'react-bootstrap';
import {useState} from 'react';
import {StyledLink, BlackWhiteMenu} from '../../utils/styles/Atoms';
import { useTheme } from '../../utils/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';


function OffCanv(){
    const {theme} = useTheme();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        <Button variant="white" className="d-lg-none" onClick={handleShow}>
          <BlackWhiteMenu />
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement='end' responsive="lg">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>MENU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='d-flex flex-column'>
                    <StyledLink $theme={theme} to ="/free-trial">
                        INC BOOKKEPPING INSIGHT
                    </StyledLink>
                    
                    <StyledLink  $theme={theme} to ="/industry-solutions">
                        WHO WE WORK WITH
                    </StyledLink>
                    
                    <StyledLink  $theme={theme} to ="/pricing">
                        PRICING
                    </StyledLink>
                    
                    <StyledLink  $theme={theme} to ="/why-inc-bookkeeping">
                        WY INC
                    </StyledLink>
                    
                    <StyledLink  $theme={theme} to ="/blog">
                        BLOG
                    </StyledLink>
                    
                    <StyledLink  $theme={theme} to ="/contact" $isFullLink >
                        CONCTACT
                    </StyledLink> 
                </div>
            </Offcanvas.Body>
        </Offcanvas>
      </>
    );

}

export default OffCanv;