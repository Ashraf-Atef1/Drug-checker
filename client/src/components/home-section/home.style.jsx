import { styled } from 'styled-components';

export const SectionBreak = styled.hr`
margin: 10px auto;
width: 70%;
font-weight: bold;
border: 1px solid ${props => props.theme.secondActiveColor};
border-radius: 5px;
`;
export const DrugCardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
grid-gap: 10px;
`;
