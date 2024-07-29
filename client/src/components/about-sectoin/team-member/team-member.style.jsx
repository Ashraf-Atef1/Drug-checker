import { styled } from 'styled-components';

export const TeamMemberContainer = styled.article`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.secondColor};
    border-radius: 5px;
    padding: 10px;
    background-color: ${props => props.theme.backgroundColor};
    width: 100%;
    transition: border 0.3s;
    margin-bottom: 10px;
    &:hover {
        border: 2px solid ${props => props.theme.secondActiveColor};
        div::after {
            background-color: ${props => props.theme.secondActiveColor};
        }
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
export const TeamMemberImageContainer = styled.div`
    min-width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 10px;
    padding-right: 20px;
    position: relative;
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 3px;
        background-color: ${props => props.theme.secondColor};
        transform-origin: right;
        transform: rotate(-90deg) translateX(-30px);
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
    h4 {
        text-align: center;
        margin-top: 5px;
        max-width: 150px;
    }
    @media (max-width: 600px) {
        margin: 0;
        padding: 10px 0;
        &::after {
            width: 90%;
            transform: none;
            top: initial;
            bottom: 0;
            left: 5%;
        }
    }
`;
export const TeamMemberInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    h5 {
        font-size: 20px;
        text-transform: capitalize;
        color : ${props => props.theme.mainActiveColor};
    }
    p {
        font-size: 16px;
    }
    @media (max-width: 600px) {
        margin: 20px auto;
        max-width: 90%;
    }
`;
