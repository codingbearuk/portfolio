import React from "react";
import menu from "./menu";

import View from "./top-nav.view";

interface NavType {}

const Nav: React.FC<NavType> = (p) => {
  return View({ menu });
};

export default Nav;
