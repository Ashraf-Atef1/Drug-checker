import { styled } from 'styled-components';

export const SearchSectionForm = styled.form`
    width: 100%;
`;

export const SearchFormTitle = styled.h2`
    margin-bottom: 10px;
`;
export const SearchInputContainer = styled.div`
    position: relative;
    width: 100%;
`;
export const SearchInput = styled.input`
    color: inherit;
    width: 100%;
    padding: 10px 100px 10px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0 0 0 2px ${props => props.theme.secondColor} inset;
    border-radius: 12px;
    border: none;
    outline: none;
    font-weight: 600;
    caret-color: ${props => props.theme.secondActiveColor};
    &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme.secondActiveColor} inset;
    }
`;
export const SearchButton = styled.button`
    position: absolute;
    width: 80px;
    top: 50%;
    right: 0;
    font-weight: bold;
    transform: translateY(-50%);
    padding: 10px 20px;
    background-color: ${props => props.theme.secondActiveColor};
    color: white;
    border: none;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${props => props.theme.mainActiveColor};
    }
`;
export const SearchWithSection = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin-top: 5px;
    label {
        padding-left: 10px;
        margin-right: 10px;
    }
    select {
        color: inherit;
        background-color: ${props => props.theme.backgroundColor};
        padding: 2px 5px;
        border-radius: 5px;
        outline: none;
        border: 2px solid ${props => props.theme.secondColor};
        transition: border 0.3s;
        &:hover {
            border: 2px solid ${props => props.theme.mainActiveColor};
        }
    }
`;
