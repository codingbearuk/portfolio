import styled from "styled-components";

export const Container = styled.div``;

export const Head = styled.header<{ image: string }>`
  width: 100vw;
  height: 80vh;
  background: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    height: 90vh;
  }

  h1 {
    backdrop-filter: blur(8px);
    padding: 20px;
    background: ${({ theme }) => theme.colors.transparentDarkblue};
    border-radius: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
      margin: 5%;
      text-align: center;
    }
  }
`;

export const Date = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  backdrop-filter: blur(8px);
  padding: 20px;
  background: ${({ theme }) => theme.colors.transparentDarkblue};
  border-radius: 8px;
  svg {
    margin-right: 7px;
    position: relative;
    top: 1px;
  }
`;

export const Article = styled.article`
  width: 100vw;
  padding: 20px 20%;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue};
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    padding: 20px 5%;
  }
`;

export const Introduction = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 30px;
  font-weight: 600;
`;

export const Content = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkblue};
  font-weight: 400;
`;

export const LikeContainer = styled.div`
  margin: 20px 0;
`;

export const CommentsBox = styled.div`
  width: 100%;
  z-index: 0;
`;
