import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import View from "./main-header";

gsap.registerPlugin(TextPlugin);

interface MainHeaderType {}

const MainHeader: React.FC<MainHeaderType> = (p) => {
  const handRef = useRef(null);
  const carretRef = useRef(null);
  const textRef = useRef(null);

  const handMotion = () => {
    const hand = handRef.current;
    const timeline = gsap.timeline({ repeat: -1, delay: 0, yoyo: true });
    timeline
      .to(hand, {
        rotate: "-45deg",
        duration: 1,
        transformOrigin: "50% 90%",
      })
      .to(hand, {
        rotate: "45deg",
        duration: 1,
        transformOrigin: "50% 90%",
      })
      .to(hand, {
        rotate: "-45deg",
        duration: 1,
        transformOrigin: "50% 90%",
      });
  };

  const carretMotion = () => {
    const carret = carretRef.current;
    const tl = gsap.timeline({ repeat: -1, delay: 0 });
    tl.to(carret, {
      opacity: 0,
      duration: 0.4,
    }).to(carret, {
      opacity: 1,
      duration: 0.4,
    });
  };

  const wordMotion = () => {
    const textValues: string[] = [
      "react developer",
      "node.js developer",
      "full stack javascript developer",
      "frontend developer",
      "backend developer",
    ];
    const text = textRef.current;

    const masterTl = gsap.timeline({ delay: 0, repeat: -1 });
    textValues.forEach((word) => {
      const tl = gsap.timeline({ delay: 1, repeat: 1, yoyo: true });
      tl.to(text, {
        text: {
          value: word.toUpperCase(),
          delimiter: "",
        },
        duration: 2,
      });
      masterTl.add(tl);
    });
  };

  useEffect(handMotion, []);
  useEffect(carretMotion, []);
  useEffect(wordMotion, []);

  return View({
    refs: { hand: handRef, carret: carretRef, text: textRef },
    state: {},
  });
};

export default MainHeader;
