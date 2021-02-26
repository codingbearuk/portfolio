import React, { useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";

import View from "./who-i-am.view";
import { State } from "../../../store/reducers";

const WhoIAm: React.FC = (p) => {
  const [animated, setAnimated] = useState<boolean>(false);

  const scrollPosition: number = useSelector(
    (s: State) => s.screen.scrollValue
  );
  const sectionPosition: number = useSelector(
    (s: State) => s.indexPagePositions.whoIAm - 350
  );

  const motion = useCallback(() => {
    const target = document.getElementById("who-i-am");
    const tl = gsap.timeline();
    tl.to(target, {
      opacity: 1,
      duration: 2,
    }).then(() => {
      setAnimated(true);
    });
  }, []);
  const reverseMotion = useCallback(() => {
    const target = document.getElementById("who-i-am");
    const tl = gsap.timeline();
    tl.to(target, {
      opacity: 0,
      duration: 1,
    }).then(() => {
      setAnimated(false);
    });
  }, []);

  useEffect(() => {
    const scrollListen = () => {
      if (scrollPosition === 0) null;
      // else if (animated && scrollPosition < sectionPosition) reverseMotion();
      else if (!animated && scrollPosition >= sectionPosition) motion();
    };
    document.addEventListener("scroll", scrollListen);
    return () => {
      document.removeEventListener("scroll", scrollListen);
    };
  }, [scrollPosition]);

  return View({});
};

export default WhoIAm;
