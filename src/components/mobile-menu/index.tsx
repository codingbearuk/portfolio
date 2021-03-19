import React, { useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";

import View from "./mobile-menu.view";
import { State } from "../../../store/reducers/index";
import { mobileMenuSwitch } from "../../../store/actions/mobile-menu.actions";
import { pageLoadingSwitch } from "../../../store/actions/page-loading.action";
import { PageProps } from "gatsby";

interface MobileMenuType extends PageProps {}

const MobileMenu: React.FC<MobileMenuType> = (p) => {
  const screenType: "mobile" | "desktop" = useSelector(
    (state: State) => state.screen.device
  );
  const isMenuOpen: boolean = useSelector((state: State) => state.mobileMenu);

  const containerRef = useRef(null);

  const dispatch = useDispatch();

  const enterMotion = useCallback(() => {
    const containerEl = containerRef.current;
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.to(containerEl, {
      height: "auto",
      opacity: 1,
      duration: 0.3,
    });
  }, []);

  const leaveMotion = useCallback(() => {
    const containerEl = containerRef.current;
    const tl = gsap.timeline({ repeat: 0, delay: 0 });
    tl.to(containerEl, {
      height: 0,
      opacity: 0,
      duration: 0.3,
    });
  }, []);

  const handleClickOption = useCallback((location: string) => {
    dispatch(mobileMenuSwitch("off"));
    dispatch(pageLoadingSwitch("on"));
    p.navigate(location).then(() => {
      dispatch(pageLoadingSwitch("off"));
    });
  }, []);

  useEffect(() => {
    isMenuOpen && enterMotion();
    return () => {
      leaveMotion();
    };
  }, [isMenuOpen]);

  if (isMenuOpen && screenType === "mobile")
    return View({ containerRef, handleClickOption });
  else return null;
};

export default MobileMenu;
