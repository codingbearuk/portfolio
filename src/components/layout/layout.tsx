import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
// Components
import TopNav from "../top-nav";

const Container = styled.main`
  margin: 0;
  max-width: 1080px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        {/* <CSSDebugger /> */}
        <TopNav />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
