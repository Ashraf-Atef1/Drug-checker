import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.bodyBackgroundColor};
    color: ${props => props.theme.mainTextColor};
    padding: 80px 0;
}
a {
    text-decoration: none;
    color: inherit;
}
ul {
    list-style: none;
}
`;

export default GlobalStyle;
