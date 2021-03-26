import styled from "styled-components";

export const Container = styled.section<{ host: string }>`
  padding-top: 80px;
  width: 100vw;
  height: 100vh;
  background-image: ${({ host }) => `url(${host}/images/background.png)`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 600;
    margin-bottom: 15px;
    span {
      font-weight: 100;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    height: auto;
    padding-bottom: 80px;
  }
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.transparentDarkblue};
  backdrop-filter: blur(8px);
  border-radius: 8px;
  padding: 30px;
  width: 50vw;
  section {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 0 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    width: 90vw;
    section {
      grid-template-columns: 100%;
    }
  }
`;

export const FormContainer = styled.form``;

export const InputBox = styled.div<{ textarea?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 10px;

  svg {
    color: ${({ theme }) => theme.colors.darkblue};
    margin-left: 5px;
    margin-top: 5px;
  }

  input,
  textarea {
    background: none;
    border: none;
    outline: none;
    caret-color: ${({ theme }) => theme.colors.darkblue};
    color: ${({ theme }) => theme.colors.darkblue};
    text-align: center;
    width: 100%;
  }

  textarea {
    height: 200px;
    width: 100%;
    resize: none;
    ::-webkit-scrollbar {
      width: 5px;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background: none;
    border: none;
    outline: none;
    caret-color: ${({ theme }) => theme.colors.darkblue};
    color: ${({ theme }) => theme.colors.darkblue};
    text-align: center;
    width: 100%;
    border-radius: 8px;
  }
`;

export const DetaildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-weight: 100;
    position: relative;
    top: -10px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    :nth-child(4) {
      margin-top: 20px;
    }
    svg {
      margin-right: 8px;
      font-size: 1.3em;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints[1]}px) {
    grid-row: 1;
    margin-bottom: 30px;
  }
`;

export const Photo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid ${({ theme }) => theme.colors.blue};
  img {
    position: relative;
    top: 20px;
  }
`;

export const Button = styled.button<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme, active }) => (active ? "none" : theme.colors.blue)};
  border-radius: 8px;
  border: 2px solid
    ${({ theme, active }) => (active ? theme.colors.blue : "transparent")};
  font-weight: 100;
  font-size: 1.2em;
  outline: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.blue : theme.colors.white};
`;
