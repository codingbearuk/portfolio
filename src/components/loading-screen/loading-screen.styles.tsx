import styled from "styled-components";

export const Container = styled.div`
  z-index: 100000000;
  background: ${({ theme }) => theme.colors.semiTransparentDarkblue};
  backdrop-filter: blur(16px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const TextBox = styled.div`
  position: relative;
  h1 {
  }
  h2 {
    font-weight: 100;
    position: absolute;
    top: 30px;
    right: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    h1 {
      font-size: 0.9em;
    }
    h2 {
      font-size: 0.7em;
      top: 15px;
    }
  }
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 8px;
  right: 10px;

  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
