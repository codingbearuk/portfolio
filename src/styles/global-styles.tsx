import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background: ${(props) => props.theme.colors.darkblue}; */
    color: white;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  html {
    font-family: 'Lato', sans-serif;
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  }
  *,*::before, *::after {
    box-sizing: border-box;
  }
`;

export { GlobalStyles };
