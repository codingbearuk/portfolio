import React from "react";
import styled from "styled-components";
import { FaUndo } from "react-icons/fa";

import { Link } from "gatsby";
import Seo from "../components/seo";
import { Layout } from "../components/layout";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 80vh;
  justify-items: center;
  place-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.blue};
    position: relative;
    bottom: 10px;
  }
  h1 {
    color: ${({ theme }) => theme.colors.darkblue};
    font-size: 3em;
  }
  img {
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkblue};
    margin-top: 20px;
    :hover {
      text-decoration: underline;
    }
    svg {
      margin-right: 8px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    margin: 0 5%;
    grid-template-columns: 100%;
    img {
      grid-area: 1;
    }
  }
`;

const NotFoundPage: React.FC = () => (
  <Layout subpage>
    <Container>
      <Seo title="404 Ooops! Page not found :( - kamilpieczyk.github.io" />
      <div>
        <h1>Oops! 404</h1>
        <h3>You just hit a route that doesn&#39;t exist.</h3>
        <Link to="/">
          <FaUndo />
          Go Home
        </Link>
      </div>
      <img src="images/undraw_feeling_blue_4b7q.svg" alt="404 image" />
    </Container>
  </Layout>
);

export default NotFoundPage;
