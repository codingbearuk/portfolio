import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: url(images/background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    background-size: cover;
    background-position: center;
  }
`;
