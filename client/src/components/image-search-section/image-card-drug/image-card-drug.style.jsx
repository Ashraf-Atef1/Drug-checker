import { styled } from 'styled-components';

export const ImageCardDrugContainer = styled.li`
width: 100%;
display: flex;
/* flex-wrap: wrap; */
align-items: center;
justify-content: space-between;
font-weight: bold;
p {
    width: calc(100% - 25px);
    margin: 10px 0;
}
@media (max-width: 768px) {
    font-size: 12px;
}
&:not(:last-of-type){
    border-bottom: 1px solid ${props => props.theme.secondColor};
}
transition: all 0.3s;
&:not(:last-of-type):hover{
    border-color: ${props => props.theme.secondActiveColor};
}
&:hover svg{
    fill: ${props => props.theme.secondActiveColor};
}
`;
export const DrugRemoveButton = styled.button`
width: 15px;
height: 15px;
margin-left: 10px;
border: none;
background: none;
font-weight: bold;
cursor: pointer;
svg {
    fill: ${props => props.theme.mainTextColor};
    transition: fill 50ms;
}
`;
