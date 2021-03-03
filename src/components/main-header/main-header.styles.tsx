import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: url(images/background.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 950px;
    height: 800px;
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      width: 400px;
      height: 343px;
      right: -20px;
      bottom: 20px;
      overflow: hidden;
    }
  }

  h1 {
    position: absolute;
    font-weight: 700;
    font-size: 2.5em;
    top: 200px;
    left: 10%;
    display: flex;
    div {
      position: relative;
      left: 20px;
      bottom: 5px;
    }
    :nth-child(3) {
      top: 250px;
      span {
        color: ${({ theme }) => theme.colors.blue};
        padding-left: 5px;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      font-size: 2em;
      top: 85px;
      :nth-child(3) {
        top: 135px;
      }
    }
  }

  h2 {
    position: absolute;
    top: 400px;
    left: 10%;
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      font-weight: 700;
      font-size: 1.5em;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      top: 200px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    background-size: cover;
    background-position: center;
  }
`;
