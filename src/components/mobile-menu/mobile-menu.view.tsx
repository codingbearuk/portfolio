import React from "react";
import { Link } from "gatsby";

import { Container, Item } from "./mobile-menu.styles";
import menu from "../top-nav/menu";

interface ViewType {
  containerRef: React.Ref<HTMLElement>;
  handleClickOption: (location: string) => void;
}

const View: React.FC<ViewType> = (p) => {
  return (
    <Container ref={p.containerRef}>
      {menu.map((El) => (
        <Link to={El.link} key={El.title}>
          <Item onClick={() => p.handleClickOption(El.link)}>
            <El.icon />
            {El.title}
          </Item>
        </Link>
      ))}
    </Container>
  );
};

export default View;
