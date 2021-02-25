import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../store/reducers";

const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 2%;
  background: ${({ theme }) => theme.colors.transparentDarkblue};
  backdrop-filter: blur(8px);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  z-index: 100;
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

  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isScrolled)
    return (
      <Container>
        <div onClick={handleClick} />
        <embed
          src="/images/shuttle.svg"
          type="image/svg+xml"
          title="Icons made by https://www.flaticon.com/"
        />
      </Container>
    );
  else return null;
};

export default RocketJump;
