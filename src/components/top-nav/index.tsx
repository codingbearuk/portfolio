import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "gatsby";
import gsap from "gsap";

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

  useEffect(() => {
    if (isPageScrolled) {
      gsap.set("#top-navigation", {
        y: -200,
        opacity: 0,
      });
      gsap.to("#top-navigation", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "bounce",
      });
    } else {
      gsap.set("#top-navigation", {
        y: 0,
        opacity: 1,
      });
    }
  }, [isPageScrolled]);

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
