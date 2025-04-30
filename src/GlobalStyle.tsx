import { createGlobalStyle } from 'styled-components';

import 'styled-components';



export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  input, button, textArea, select {
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fontSizes['textM']};
    color: ${(props) => props.theme.colors['base-text']};
  }

`;
