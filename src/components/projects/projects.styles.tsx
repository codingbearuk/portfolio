import styled from "styled-components";

export const Container = styled.section`
  min-height: 80vh;
  width: 100vw;
  h1 {
    color: ${({ theme }) => theme.colors.darkblue};
    width: 100%;
    text-align: center;
    padding-top: 30px;
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    width: 100%;
    text-align: center;
  }
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  width: 100%;
  padding: 60px 10%;

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    grid-template-columns: 100%;
  }
`;
