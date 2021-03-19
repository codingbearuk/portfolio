import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "gatsby";

import menu from "./menu";
import View from "./top-nav.view";
import { State } from "../../../store/reducers";
import { pageLoadingSwitch } from "../../../store/actions/page-loading.action";

interface NavType {
  subpage?: boolean;
}

const Nav: React.FC<NavType> = (p) => {
  const device: "mobile" | "desktop" = useSelector(
    (s: State) => s.screen.device
  );
  const isPageScrolled: boolean = useSelector((s: State) => s.screen.scrolled);

  const dispatch = useDispatch();

  const handleLink = (navTo: string) => {
    dispatch(pageLoadingSwitch("on"));
    navigate(navTo).then(() => {
      dispatch(pageLoadingSwitch("off"));
    });
  };

  return View({
    menu,
    handleLink,
    state: { device, isPageScrolled, subpage: p.subpage },
  });
};

export default Nav;
