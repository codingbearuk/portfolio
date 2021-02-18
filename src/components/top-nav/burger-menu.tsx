import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
`;

const Middle = styled.div`
  width: 70%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 11px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 22px;
`;

const BurgerMenu: React.FC = (p) => {
  const top = useRef(null);
  const bottom = useRef(null);
  const middle = useRef(null);

  const handleOpenAnimation = () => {
    const tl = gsap.timeline({ delay: 0, repeat: 0, yoyo: false });
    tl.to(middle.current, {
      width: "1px",
      duration: 0.3,
    })
      .to(middle.current, {
        opacity: 0,
        duration: 0.1,
      })
      .to(top.current, {
        top: "11px",
        duration: 0.2,
      })
      .to(bottom.current, {
        top: "11px",
        duration: 0.1,
      })
      .to(
        top.current,
        {
          rotate: "45deg",
          duration: 0.3,
        },
        1
      )
      .to(
        bottom.current,
        {
          rotate: "-45deg",
          duration: 0.3,
        },
        1
      );
  };

  return (
    <Container onClick={handleOpenAnimation}>
      <Top ref={top} />
      <Middle ref={middle} />
      <Bottom ref={bottom} />
    </Container>
  );
};

export default BurgerMenu;
