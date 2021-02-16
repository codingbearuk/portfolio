import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  width: 100%;
  padding: 20px 10%;
  display: grid;
  grid-template-columns: 10% 90%;
`;

export const Logo = styled.img`
  width: 50px;
  height: 27px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  a {
    font-weight: 100;
    position: relative;
    font-size: 1.3em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    display: flex;
    align-items: center;
    ::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${({ theme }) => theme.colors.blue};
      transition-duration: 0.2s;
    }
    svg {
      margin-right: 5px;
      transition-duration: 0.2s;
    }
    :hover {
      svg {
        color: ${({ theme }) => theme.colors.blue};
      }
      ::before {
        width: 100%;
      }
    }
  }
`;
