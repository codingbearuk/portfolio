import React from "react";

import { Container } from "./main-header.styles";

interface MainHeaderType {
  refs: {
    hand: React.Ref<HTMLDivElement>;
    carret: React.Ref<HTMLDivElement>;
    text: React.Ref<HTMLSpanElement>;
  };
  state: {};
}

const MainHeader: React.FC<MainHeaderType> = (p) => {
  return (
    <Container>
      <img src="images/desktop.png"></img>
      <h1>
        Hi There! <div ref={p.refs.hand}>✋🏻</div>
      </h1>
      <h1>
        I'M <span>KAMIL PIECZYK</span>
      </h1>
      <h2>
        <span ref={p.refs.text}></span>
        <div ref={p.refs.carret}>|</div>
      </h2>
    </Container>
  );
};

export default MainHeader;
