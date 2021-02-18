import React from "react";
import { useSelector } from "react-redux";

import menu from "./menu";
import View from "./top-nav.view";
import { State } from "../../../store/reducers";

interface NavType {}

const Nav: React.FC<NavType> = (p) => {
  const device: "mobile" | "desktop" = useSelector(
    (s: State) => s.screen.device
  );

  return View({ menu, state: { device } });
};

export default Nav;
