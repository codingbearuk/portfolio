import React, { useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../styles";
import { Provider } from "react-redux";
// store
import store from "../../../store/store";
// Components
import TopNav from "../top-nav";
import MobileMenu from "../mobile-menu";
import RocketJump from "../rocket-jump";
import Footer from "../footer";
// actions
import screen from "../../../store/actions/screen.actions";

const Container = styled.main`
  margin: 0;
  max-width: 1080px;
`;

const Layout: React.FC<{ subpage?: boolean }> = ({ children, subpage }) => {
  const handleDeviceResolution = useCallback((screenWidth: number) => {
    if (screenWidth > 678) {
      store.dispatch(screen("set-device-type", "desktop"));
    } else {
      store.dispatch(screen("set-device-type", "mobile"));
    }
  }, []);

  const handleScrollValue = useCallback(() => {
    let scrollValue: number = window.scrollY;
    store.dispatch(screen("set-scroll-value", scrollValue));
    scrollValue >= 400
      ? store.dispatch(screen("set-page-scrolled", true))
      : store.dispatch(screen("set-page-scrolled", false));
    window.addEventListener("scroll", function () {
      scrollValue = window.scrollY;
      scrollValue >= 400
        ? store.dispatch(screen("set-page-scrolled", true))
        : store.dispatch(screen("set-page-scrolled", false));
      store.dispatch(screen("set-scroll-value", scrollValue));
    });
  }, []);

  useEffect(() => {
    let screenWidth: number = window.innerWidth;
    handleDeviceResolution(screenWidth);
    window.addEventListener("resize", () => {
      screenWidth = window.innerWidth;
      handleDeviceResolution(screenWidth);
    });
  }, []);

  useEffect(() => {
    handleScrollValue();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme()}>
        <Container>
          <GlobalStyles />
          {/* <CSSDebugger /> */}
          <TopNav subpage={subpage} />
          <MobileMenu />
          <RocketJump />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export { Layout };
