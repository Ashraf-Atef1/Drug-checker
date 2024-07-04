import { styled } from 'styled-components';

export const LoadingSpinnerContainer = styled.div`
    display: flex;
    z-index: 200;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    svg {
        width: 200px;
        height: 200px;
        fill: ${props => props.theme.secondActiveColor};
    }
`;
