import styled, { css } from "styled-components";

export const Container = styled.section`
  min-height: 80vh;
  width: 100vw;
  a {
    color: ${({ theme }) => theme.colors.darkblue};
    text-decoration: none;
  }
`;

export const PostWrapper = styled.div`
  display: grid;
  grid-template-areas: "head head head" "post post post";
  div {
    grid-area: post;
    display: grid;
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
    padding: 25px 10px;
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      grid-template-columns: 100%;
    }
  }
`;

export const Latest = styled.article<{ image: string }>`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background: url(${({ image }) => image});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: head;
  section {
    width: 50%;
    backdrop-filter: blur(8px);
    background: ${({ theme }) => theme.colors.transparentDarkblue};
    padding: 30px;
    padding-bottom: 80px;
    border-radius: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      width: 90%;
    }

    h2 {
      color: ${({ theme }) => theme.colors.blue};
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkblue};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  cursor: pointer;
  svg {
    margin-right: 6px;
  }
`;

export const Post = styled.article`
  background: ${({ theme }) => theme.colors.lightgrey};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding-bottom: 80px;
  position: relative;
  img {
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blue};
    text-align: center;
    margin: 10px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.darkblue};
    width: 70%;
    margin-bottom: 20px;
  }
`;
