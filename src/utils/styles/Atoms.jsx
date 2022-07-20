import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'
import {ArrowRight} from '@styled-icons/bootstrap'
import {Menu} from '@styled-icons/boxicons-regular';
import {Facebook} from '@styled-icons/boxicons-logos'
import {Linkedin} from '@styled-icons/boxicons-logos'
import {Twitter} from '@styled-icons/boxicons-logos'
import {Copyright} from '@styled-icons/material'

export const OurValues = styled.img`
     max-width: 150px;
`

export const CopyrightIcon = styled(Copyright)`
     color: white;
     width: 30px;
`

export const FacebookIcon = styled(Facebook)`
     color: black;
     width: 30px;
     marging: 20px;
`
export const LinkedinIcon = styled(Linkedin)`
     color: black;
     width: 30px;
     marging: 20px;
`
export const TwitterIcon = styled(Twitter)`
     color: black;
     width: 30px;
     marging: 20px;
`

export const BlackWhiteMenu = styled(Menu)`
     color: black;
     width: 40px;
`

export const SimpleArrowRight = styled(ArrowRight)`
     width: 20px;
`

export const WhiteArrowRight = styled(ArrowRight)`
     color: white;
     width: 30px;
`

const rotate = keyframes`
        from {
                transform: rotate(0deg);
        }
        to {
                transform: rotate(360deg);
        }
`

export const Loader = styled.div`
        padding: 10px;
        border: 6px solid ${colors.primary};
        border-bottom-color: transparent;
        border-radius: 22px;
        animation: ${rotate} 1s infinite linear;
        height: 0;
        width: 0;
`

export const SimpleLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
`
/*Used in the Footer component*/
export const WhiteLink = styled(Link)`
    padding: 10px 15px;
    color:#ffffff;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
`

export const StyledLink = styled(Link)`
        padding: 10px 15px;
        color: ${({ $theme }) => ($theme === 'light' ? '#00CCFF' : '#ffffff')};
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        ${(props) =>
                props.$isFullLink &&
                `color: white; 
                border-radius: 30px; 
                background-color: ${colors.primary};`}
`
/* Backgroud in Banner */
export const Background = styled.div`
        justify-content: center;
        background-image:url(${(props) => props.image});
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;
`
/* FooterBackgroud in Footer */
export const BeforeFooterBackground = styled.div`
     justiy-content: center;
     background-color: #808387;
`
/* FooterBackgroud in Footer */
export const FooterBackground = styled.div`
     justiy-content: center;
     background-color: #1B1D1F;
`
/* FooterBackgroud in Footer */
export const WhiteText = styled.div`
    padding: 10px 15px;
    font-size: 18px;
    color: white;
    text-align: center;
`

export const Content = styled.div`
        justify-content: center;
        background-color: #8186a0;
        text-align: center;
`