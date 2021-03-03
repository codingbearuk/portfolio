import React from "react";
import styled, { css } from "styled-components";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link } from "gatsby";

const Container = styled.footer`
  width: 100vw;

  a {
    color: ${({ theme }) => theme.colors.darkblue};
    margin: 0 20px;
    padding: 5px;
    svg {
      font-size: 3em;
    }
    :hover {
      color: ${({ theme }) => theme.colors.blue};
      ${({ theme }) => css`
        box-shadow: inset 0 0 60px transparent,
          inset 50px 10px 100px ${theme.colors.white},
          inset -20px 0 80px ${theme.colors.blue},
          inset 20px 0 300px ${theme.colors.lightblue},
          inset -20px 0 300px ${theme.colors.blue}, 0 0 50px #fff,
          -10px 0 80px ${theme.colors.lightblue},
          10px 0 80px ${theme.colors.blue};
      `};
    }
  }
  div {
    background: ${({ theme }) => theme.colors.lightgrey};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  footer {
    background: ${({ theme }) => theme.colors.darkblue};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: 100;
    padding: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      text-align: center;
      font-size: 0.9em;
    }
  }
`;

const Footer: React.FC = (p) => {
  return (
    <Container id="footer">
      <div>
        <Link to="https://github.com/kamilpieczyk/portfolio">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/kamil-pieczyk-b21401167/">
          <FaLinkedinIn />
        </Link>
        <Link to="https://www.facebook.com/CodingBearUK/">
          <FaFacebook />
        </Link>
      </div>
      <footer>
        Copyright © 2021 || portfolio designed and developed by Kamil Pieczyk
      </footer>
    </Container>
  );
};

export default Footer;
