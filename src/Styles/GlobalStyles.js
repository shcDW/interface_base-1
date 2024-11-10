import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Helvetica', Arial, sans-serif;
    margin: 0;
    background-color: #000;
    color: #fff;
  }

  h1, h2, h3, h4 {
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;