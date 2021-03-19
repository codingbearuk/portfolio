import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../store/reducers";

import { Container, Loader, TextBox } from "./loading-screen.styles";

const LoadingScreen: React.FC = (p) => {
  const display: boolean = useSelector((s: State) => s.pageLoading);

  if (display)
    return (
      <Container>
        <Loader>
          <div></div>
          <div></div>
        </Loader>
        <TextBox>
          <h1>site content is being loaded</h1>
          <h2>...so let's wait a while</h2>
        </TextBox>
      </Container>
    );
  else return null;
};

export default LoadingScreen;
