import { styled, css } from 'styled-components';

const titleStyle = css`
&:hover {
        h3 {
            color: ${props => props.theme.mainActiveColor};
            border-color: ${props => props.theme.mainActiveColor};
            &::after, &::before {
                background-color: ${props => props.theme.mainActiveColor};
            }
        }
    }
    h3 {
    position: relative;
    transition: color 0.3s, border-color 0.3s;
    font-size: 34px;
    text-transform: capitalize;
    text-align: center;
    border-bottom: 2px solid ${props => props.theme.thirdActiveColor};
    &::after, &::before{
        content: "";
        transition: background-color 0.3s;
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: ${props => props.theme.thirdActiveColor};
        top: 50%;
        border-radius: 50%;
    }
    &::after {
        left: -20px;
    }
    &::before {
        right: -20px;
    }
    }
`;
export const OurMissionContainer = styled.section`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    ${titleStyle}
    p {
        font-size: 18px;
        width: 90%;
    }
`;
export const TeamMembersContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 20px;
${titleStyle}
&>div {
    padding-top: 10px;
}
`;
export const VideoPlayerContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 20px;
${titleStyle}
h3 {
    margin-bottom: 10px;
}
iframe {
    width: 90%;
    height: 400px;
}
`;
