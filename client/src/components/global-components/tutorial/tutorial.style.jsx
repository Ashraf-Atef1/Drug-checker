import { styled } from 'styled-components';

export const TutorialContainer = styled.div`
background-color: ${props => props.theme.tutorialMainColor};
/* margin: 20px; */
padding: 20px;
position: absolute;
z-index: 150;
font-size: 20px;
font-weight: bold;
max-width: 400px;
border-radius: 10px;
&.top {
    top: ${props => props.dimensions.top + window.scrollY}px;
}
&.bottom {
    bottom: ${props => props.dimensions.bottom - window.innerHeight + 120 - window.scrollY}px;
}
&.bottom-static {
    bottom: initial;
    top: ${props => 2000 - props.dimensions.top}px;
}
left: ${props => {
    if (!props.dimensions.indentation) {
        return 20;
    } else if (props.dimensions.left < window.innerWidth - props.dimensions.indentation) {
        return Math.abs(props.dimensions.left - 20);
    } else {
        return window.innerWidth - props.dimensions.indentation;
    }
}}px;
&::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 200;
}

@media (max-width: 768px) {
    max-width: 300px;
}
`;
export const ArrowContainre = styled.div`
    svg {
        @keyframes arrow {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
            100% {
                transform: translateY(0);
            }
        }
        animation: arrow 1s infinite;
        width: 50px;
        height: 50px;
        fill: ${props => props.theme.tutorialMainColor};
    }
    position: absolute;
    left: ${props => {
        if (!props.dimensions.indentation) {
            return props.dimensions.left - 20;
        } else if (props.dimensions.left < window.innerWidth - props.dimensions.indentation) {
            return 20;
        } else {
            return props.dimensions.left - (window.innerWidth - props.dimensions.indentation);
        }
    }}px;
    &.top {
        bottom: 100%;
        transform: rotateY(180deg);
    }
    &.bottom {
        top: 100%;
        transform: rotate(180deg);
    }
`;
export const NextStopContainer = styled.div`
div {
    position: fixed;
    z-index: 300;
    right: 20px;
}
div:first-of-type {
    top: 70px;
}
div:last-of-type {
    top: 50vh;
    @keyframes allert {
        0% {
            color: ${props => props.theme.mainTextColor};
            transform: translateX(0);
            transform: scale(1);
            fill: ${props => props.theme.mainTextColor};
        }
        50% {
            color:  ${props => props.theme.tutorialSecondColor};
            transform: translateX(10px);
            transform: scale(1.2);
            fill:  ${props => props.theme.tutorialSecondColor};
        }
        100% {
            color: ${props => props.theme.mainTextColor};
            transform: translateX(0);
            transform: scale(1);
            fill: ${props => props.theme.mainTextColor};
        }
    }
    &.active button{
        animation: allert 1s infinite;
    }
    &.active svg {
        animation: allert 1s infinite;
    }
}
`;
export const TuturialInfoContainer = styled.div`
font-size: 20px;
margin-top: 20px;
font-weight: normal;
span {
    font-weight: bold;
}
ul {
    margin: 10px 0;
    li {
        margin: 10px 0;
    }
}
`;
export const Note = styled.p`
    margin-top: 20px;
    font-size: 16px;
`;
