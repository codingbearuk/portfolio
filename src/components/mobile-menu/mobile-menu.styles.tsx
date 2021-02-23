import styled from "styled-components";

export const Container = styled.nav`
  width: 90%;
  height: 0px;
  opacity: 0;
  margin: 0 5%;
  padding: 20px;
  z-index: 100;
  background: ${({ theme }) => theme.colors.transparent};
  backdrop-filter: blur(5px);
  border-radius: 5px;
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dotted ${({ theme }) => theme.colors.blue};
  overflow: hidden;
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: 100;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  font-size: 1.3em;
  svg {
    margin-right: 10px;
  }
`;
