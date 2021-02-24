import styled from "styled-components";

export const Container = styled.section`
  padding: 30px 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    padding: 30px 5%;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-top: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    grid-template-columns: 100%;
  }
`;
