import { styled } from 'styled-components';

export const ImageUploaderContainer = styled.div`
padding: 10px;
width: 400px;
max-width: 100%;
height: 210px;
border: 2px dashed ${props => props.theme.thirdColor};
border-radius: 6px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin: 20px auto;
font-weight: bold;
color: ${props => props.theme.secondActiveColor};
&.active{
    border-color: ${props => props.theme.secondActiveColor};
}
`;
export const ImageUploaderButton = styled.button`
width: 30%;
border: none;
background: none;
font-weight: bold;
color: ${props => props.theme.mainTextColor};
cursor: pointer;
`;
export const UploaderButtonsContainer = styled.div`
width: 100%;
height: 50%;
margin-bottom: 25px;
display: flex;
justify-content: space-evenly;
svg{
    height: 100%;
    width: 100%;
    fill: ${props => props.theme.secondActiveColor};
}
`;
