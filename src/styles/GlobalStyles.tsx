import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    margin: 0;
  }
`;

export default GlobalStyle;
