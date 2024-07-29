import { styled } from 'styled-components';

export const MemberContactsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 20px;
    svg {
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.mainTextColor};
    }
    li:hover {
        svg {
            fill: ${props => props.theme.secondActiveColor};
        }
    }
    @media (max-width: 600px) {
        justify-content: center;
    }
`;
