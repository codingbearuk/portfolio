import React from "react";
import { Link } from "gatsby";

import { Container, Logo, Menu } from "./top-nav.styles";
import { MenuEl } from "./menu";

interface NavType {
  menu: MenuEl[];
}

const Nav: React.FC<NavType> = (p) => {
  return (
    <Container>
      <Logo src="images/logo.png" alt="kamilpieczyk logo" />
      <Menu>
        {p.menu.map((El) => (
          <Link key={El.title} title={El.title} to={El.link}>
            <El.icon />
            {El.title}
          </Link>
        ))}
      </Menu>
    </Container>
  );
};

export default Nav;
