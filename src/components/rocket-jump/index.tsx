import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../store/reducers";
import gsap from "gsap";

const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  background: ${({ theme }) => theme.colors.transparentDarkblue};
  backdrop-filter: blur(8px);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  z-index: 10000000;
  display: flex;
  justify-content: center;
  align-items: center;
  embed {
    width: 40px;
    svg {
      opacity: 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    right: 7%;
  }
  div {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`;

const RocketJump: React.FC = (p) => {
  const isScrolled: boolean = useSelector((s: State) => s.screen.scrolled);

  const containerRef: React.Ref<HTMLDivElement> = useRef(null);
  const rocketRef: React.Ref<HTMLEmbedElement> = useRef(null);

  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const motion = useCallback(() => {
    const tl = gsap.timeline();
    tl.to(
      containerRef.current,
      {
        background: "transparent",
        duration: 0.4,
      },
      1
    );
    tl.to(
      rocketRef.current,
      {
        rotate: "-45deg",
        duration: 0.4,
      },
      1
    );
    tl.to(containerRef.current, {
      top: "0px",
      duration: 0.8,
    }).then(() => handleClick());
  }, []);

  if (isScrolled)
    return (
      <Container ref={containerRef}>
        <div onClick={motion} />
        <embed
          ref={rocketRef}
          src="/images/shuttle.svg"
          type="image/svg+xml"
          title="Icons made by https://www.flaticon.com/"
        />
      </Container>
    );
  else return null;
};

export default RocketJump;
