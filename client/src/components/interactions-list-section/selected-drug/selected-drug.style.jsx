import { styled } from 'styled-components';

export const SelectedDrugContainer = styled.li`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
font-weight: bold;
font-size: 16px;
margin: 15px 0;
li p {
    width: calc(100% - 30px);
    margin: 10px 0;
    font-size: 14px;
}
@media (max-width: 768px) {
    font-size: 14px;
    li p {
        font-size: 12px;
    }
}
&:not(:last-of-type){
    border-bottom: 1px solid ${props => props.theme.secondColor};
}
&:not(:last-of-type):hover{
    border-color: ${props => props.theme.secondActiveColor};
}
transition: all 0.3s;
&:hover {
    svg {
        fill: ${props => props.theme.secondActiveColor};
    }
}
`;
export const DrugRemoveButton = styled.button`
width: 20px;
height: 20px;
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
export const ApiMappingContainer = styled.div`
width: 100%;
& > p {
    color: ${props => props.theme.mainColor};
}
ul {
    font-size: 12px;
    width: 100%;
    padding-left: 20px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
}
`;
