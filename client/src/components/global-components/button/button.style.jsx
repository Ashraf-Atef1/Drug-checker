import { styled } from 'styled-components';

export const MainButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 12px;
    color: ${props => props.theme.secondTextColor};
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.theme.secondActiveColor};
    transition:  background-color 0.3s;
    &:hover {
        background-color: ${props => props.theme.mainActiveColor};
    }
    &.w-100 {
        width: 100%;
    }
    &.w-50 {
        margin: auto;
        width: 50%;
    }
    &.back, &.next {
        display: flex;
        align-items: center;
        background-color: transparent;
        color: inherit;
        transition: filter 0.3s;
        padding: 0;
        svg {
            width: 30px;
            height: 30px;
            fill: ${props => props.theme.mainTextColor};
        }
        &:hover {
            svg {
                fill: ${props => props.theme.secondActiveColor};
            }
            color: ${props => props.theme.secondActiveColor};
        }
    }
    &.next{
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        width: 80px;
        height: 80px;
        font-size: 18px;
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: ${props => props.theme.backgroundColor};
            z-index: -2;
            opacity: 0.4;
        }
        &:hover {
        color: ${props => props.theme.tutorialSecondColor};
        svg {
            fill: ${props => props.theme.tutorialSecondColor};
        }
    }
    }
    &.blur {
        margin-bottom: 20px;
        align-self: flex-end;
        position: relative;
        background-color: transparent;
        color: ${props => props.theme.secondActiveColor};
        font-size: 20px;
        &::after {
            content: '';
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: ${props => props.theme.backgroundColor};
            z-index: -2;
            opacity: 0.4;
        }
    }
    &.tutorial {
        color: ${props => props.theme.tutorialSecondColor};
    }
`;
