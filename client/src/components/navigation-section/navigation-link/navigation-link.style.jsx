import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationButton = styled(Link)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-weight: 500;
transition: all 0.3s;
&:hover, &.active {
    color: ${props => props.theme.mainActiveColor};
    svg {
    fill: ${props => props.theme.mainActiveColor};
    }
    span {
    border-color: ${props => props.theme.mainActiveColor};
    }
}
span {
    position: absolute;
    padding: 2px;
    min-width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    right: 25px;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.mainActiveColor};
    font-size: 12px;
    font-weight: bold;
    border-radius: 50px;
    border: 2px solid ${props => props.theme.thirdActiveColor};
    @media (max-width: 768px) {
        right: 18px;
        top: 10px;
    }
}
`;
export const NavigationIcon = styled.img`
transition: 50ms;
height: 25px;
fill: ${props => props.theme.thirdActiveColor};
`;
