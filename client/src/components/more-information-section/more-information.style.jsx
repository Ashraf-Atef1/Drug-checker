import { styled } from 'styled-components';

export const MoreInformationContainer = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: auto;
grid-gap: 15px;
span {
    font-weight: bold;
    color: ${props => props.theme.mainColor};
}
`;
