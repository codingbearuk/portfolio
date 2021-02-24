import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 1px;
    width: 60%;
    background: ${({ theme }) => theme.colors.lightgrey};
  }
`;

const SeparationBar: React.FC = (p) => {
  return (
    <Container>
      <div />
    </Container>
  );
};

export default SeparationBar;
