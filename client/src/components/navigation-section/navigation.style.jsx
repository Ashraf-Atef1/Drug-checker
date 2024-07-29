import { styled, css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as DarkModeSvg } from '../../assets/dark-mode.svg';
import { ReactComponent as LightModeSvg } from '../../assets/light-mode.svg';

export const Header = styled.header`
background-color: ${props => props.theme.backgroundColor};
position: fixed;
z-index: 100;
top: 0;
left: 0;
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
`;
export const NavigationContainer = styled.header`
display: flex;
justify-content: space-evenly;
width: calc(100% - 300px);
padding: 0 20px;
font-size: 14px;
background-color: ${props => props.theme.backgroundColor};
@media (max-width: 768px) {
    font-size: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    box-shadow: 0 -1px 10px 0 rgba(0,0,0,0.1);
}
`;
export const NavigationLogo = styled(Link)`
font-family: "Allerta Stencil", sans-serif;
font-size: 30px;
color: ${props => props.theme.mainActiveColor};
display: flex;
justify-content: center;
align-items: center;
`;
export const AppLogo = styled.img`
fill: ${props => props.theme.mainActiveColor};
height: 30px;
`;
const iconStyles = css`
  height: 30px;
  width: 30px;
  fill: ${props => props.theme.thirdActiveColor};
  transition: fill 0.1s;
  cursor: pointer;
  &:hover {
    fill: ${props => props.theme.mainActiveColor};
  }
`;

export const DarkModeIcon = styled(DarkModeSvg)`
  ${iconStyles}
`;

export const LightModeIcon = styled(LightModeSvg)`
  ${iconStyles}
`;
