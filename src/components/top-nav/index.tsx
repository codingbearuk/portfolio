import React from "react";
import { useSelector, useDispatch } from "react-redux";

import menu from "./menu";
import View from "./top-nav.view";
import { State } from "../../../store/reducers";
import { navigate } from "gatsby";

interface NavType {
  subpage?: boolean;
}

const Nav: React.FC<NavType> = (p) => {
  const device: "mobile" | "desktop" = useSelector(
    (s: State) => s.screen.device
  );
  const isPageScrolled: boolean = useSelector((s: State) => s.screen.scrolled);

  const dispatch = useDispatch();

  const handleCloseMobileMenu = (navTo: string) => {
    navigate(navTo);
  };

  return View({
    menu,
    handleCloseMobileMenu,
    state: { device, isPageScrolled, subpage: p.subpage },
  });
};

export default Nav;
