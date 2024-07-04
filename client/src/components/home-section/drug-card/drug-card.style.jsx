import { styled } from 'styled-components';

export const DrugCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 10px;
    grid-gap: 10px;
    a button {
        width: 100%;
        height: 100%;
    }
`;
export const DrugCardTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 16px;
`;
export const DrugCardDescription = styled.p`
    word-break: break-all;
    font-size: 14px;
`;
