import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    30deg,
    rgba(0, 44, 132, 1) 37%,
    rgba(0, 215, 255, 1) 100%
  );
  div {
    width: 100%;
    height: 100%;
    background-image: url(images/bg.png);
    background-size: 200% 300%;
    background-position: center;
    position: absolute;
    opacity: 0.2;
  }

  @media (max-width: 800px) {
    background: linear-gradient(
      75deg,
      rgba(0, 44, 132, 1) 25%,
      rgba(0, 215, 255, 1) 100%
    );
    div {
      background-size: 400% 200%;
    }
  }
`;
