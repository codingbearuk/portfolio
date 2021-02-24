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

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkblue};
  text-transform: uppercase;
  font-size: 1.6em;
  width: 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  margin-top: 30px;
  font-size: 1.2em;
`;
