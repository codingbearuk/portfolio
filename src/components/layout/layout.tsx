import React, { useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
import { Provider } from "react-redux";
// store
import store from "../../../store/store";
// Components
import TopNav from "../top-nav";
// actions
import screen from "../../../store/actions/screen.actions";

const Container = styled.main`
  margin: 0;
  max-width: 1080px;
`;

const Layout: React.FC = ({ children }) => {
  const handleDeviceResolution = useCallback((screenWidth: number) => {
    if (screenWidth > 678) {
      store.dispatch(screen("set-device-type", "desktop"));
    } else {
      store.dispatch(screen("set-device-type", "mobile"));
    }
  }, []);

  useEffect(() => {
    let screenWidth: number = window.innerWidth;
    handleDeviceResolution(screenWidth);
    window.addEventListener("resize", () => {
      screenWidth = window.innerWidth;
      handleDeviceResolution(screenWidth);
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <Container>
          <GlobalStyles />
          {/* <CSSDebugger /> */}
          <TopNav />
          {children}
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export { Layout };
