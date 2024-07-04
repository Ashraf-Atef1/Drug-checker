import { styled } from 'styled-components';

export const ImageCardContainer = styled.article`
    display: flex;
    border: 2px solid ${props => props.theme.secondColor};
    border-radius: 5px;
    padding: 10px;
    background-color: ${props => props.theme.backgroundColor};
    width: 100%;
    transition: border 0.3s;
    &:hover {
        border: 2px solid ${props => props.theme.secondActiveColor};
    }
    span {
        font-weight: bold;
        color: ${props => props.theme.mainColor};
    }
`;
export const ImageCardImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;
export const InsideImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
`;
export const DrugTitlesContainer = styled.ul`
width: 100%;
padding: 0 10px;
`;
