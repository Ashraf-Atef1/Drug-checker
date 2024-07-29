import { styled } from 'styled-components';

export const InteractionCardContainer = styled.div`
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
    span:first-of-type {
        font-weight: bold;
        color: ${props => props.theme.mainColor};
    }
`;
