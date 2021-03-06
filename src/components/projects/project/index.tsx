import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { FaCalendar, FaHeartbeat, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";

import { State } from "../../../../store/reducers";

const Container = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 30px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  transition: 0.4s;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    margin: 0;
  }

  div {
    background: ${({ theme }) => theme.colors.white};
    padding: 10px;
    height: 100%;
    h2 {
      color: ${({ theme }) => theme.colors.darkblue};
    }
  }

  :hover {
    border: 1px solid transparent;
    ${({ theme }) => css`
      box-shadow: inset 0 0 60px transparent,
        inset 10px 10px 50px ${theme.colors.white},
        inset -10px 0 80px ${theme.colors.blue},
        inset 10px 0 100px ${theme.colors.lightblue},
        inset -10px 0 100px ${theme.colors.blue}, 0 0 50px #fff,
        -10px 0 50px ${theme.colors.lightblue}, 10px 0 80px ${theme.colors.blue};
    `};
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      border: 1px solid ${({ theme }) => theme.colors.blue};
      box-shadow: none;
    }
  }
`;

const Thumb = styled.img`
  width: 100%;
`;

const DateComponent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: none !important;
  position: absolute;
  top: 0px;
  right: 0px;

  svg {
    margin-right: 5px;
    position: relative;
    top: 1px;
  }
`;

const Content = styled.article`
  color: ${({ theme }) => theme.colors.blue};
  text-align: justify;
  padding: 15px 0;
`;

const HoveredContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background: ${({ theme }) => theme.colors.transparentDarkblue} !important;
  z-index: 2;
  opacity: 0;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;

const MobileButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  button {
    margin: 0;
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Button = styled.button<{ live?: boolean }>`
  padding: 10px;
  background: ${({ theme, live }) =>
    live ? theme.colors.blue : theme.colors.grey};

  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px;
  svg {
    margin-right: 5px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

interface ProjectInterface {
  Title: string;
  content: string;
  created_at: string;
  date: string | Date;
  id: string;
  live: string;
  git: string;
  mainPictrue: {
    publicURL: string;
  };
}

const Project: React.FC<ProjectInterface> = (p) => {
  const [isHover, setHover] = useState<boolean>(false);
  const device = useSelector((s: State) => s.screen.device);

  const date = new Date(p.created_at);
  const formatedDate = moment(date).format("ll");

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isHover && device === "desktop" && (
        <HoveredContainer>
          <Button live>
            <Link to={p.live}>
              <FaHeartbeat />
              live version
            </Link>
          </Button>
          <Button>
            <Link to={p.git}>
              <FaGithub />
              github
            </Link>
          </Button>
        </HoveredContainer>
      )}
      <Thumb src={p.mainPictrue.publicURL} alt={`image-${p.Title}`} />
      <div>
        <h2>{p.Title}</h2>
        <DateComponent>
          <FaCalendar />
          {formatedDate}
        </DateComponent>
        <Content>{p.content}</Content>
        {device === "mobile" && (
          <MobileButtonsContainer>
            <Button live>
              <Link to={p.live}>
                <FaHeartbeat />
                live version
              </Link>
            </Button>
            <Button>
              <Link to={p.git}>
                <FaGithub />
                github
              </Link>
            </Button>
          </MobileButtonsContainer>
        )}
      </div>
    </Container>
  );
};

export default Project;
