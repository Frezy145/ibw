import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'
import {ArrowRight} from '@styled-icons/bootstrap'
import {Menu} from '@styled-icons/boxicons-regular';

export const BlackWhiteMenu = styled(Menu)`
     color: black;
     width: 40px;
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

export const StyledLink = styled(Link)`
        padding: 10px 15px;
        color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        ${(props) =>
                props.$isFullLink &&
                `color: white; 
                border-radius: 30px; 
                background-color: ${colors.primary};`}
`
export const Background = styled.div`
        justify-content: center;
        background-image:url(${(props) => props.image});
        background-repeat:no-repeat;
        background-size: cover;
        background-position: center;
`

export const Content = styled.div`
        justify-content: center;
        background-color: #8186a0;
        text-align: center;
`