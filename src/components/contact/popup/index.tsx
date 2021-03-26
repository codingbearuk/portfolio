import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 30000000;
`;

const Popup = styled.div`
  background: ${({ theme }) => theme.colors.transparentDarkblue};
  backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.blue};
    border: none;
    padding: 15px;
    margin-top: 30px;
  }
`;

const PopupComponent: React.FC<{ close: () => void }> = (p) => (
  <Container>
    <Popup>
      <h1>Thank you for sending me a message</h1>
      <p style={{ color: "greenyellow" }}>Your e-mail has been send 🚀</p>
      <p>From some reasons my response e-mails may land into your inbox spam</p>
      <p>so please check this section</p>
      <button onClick={p.close}>close this message</button>
    </Popup>
  </Container>
);

export default PopupComponent;
