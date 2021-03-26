import React, { SyntheticEvent } from "react";
import { FaAt, FaMobile, FaPaperPlane } from "react-icons/all";

import {
  Container,
  ContentContainer,
  FormContainer,
  DetaildContainer,
  InputBox,
  Button,
  Photo,
} from "./contact.style";
import { InputType } from "./";
import Popup from "./popup";

interface ContactType {
  inputs: InputType[];
  isLoading: boolean;
  host: string;
  isMessage: boolean;
  handleClosePopup: () => void;
  handleButton: (e: SyntheticEvent) => void;
}

const Contact: React.FC<ContactType> = (p) => {
  return (
    <Container host={p.host}>
      <ContentContainer>
        <h1>
          Contact to <span>Kamil</span> <FaPaperPlane />
        </h1>
        <section>
          <FormContainer>
            {p.inputs.map((inp) => (
              <InputBox
                key={inp.name}
                title={inp.title}
                textarea={inp.type === "textarea" ? true : false}
              >
                <inp.icon title={inp.title} />
                {inp.type === "textarea" ? (
                  <textarea
                    name={inp.name}
                    ref={inp.ref}
                    placeholder={inp.title}
                  />
                ) : (
                  <input
                    type={inp.type}
                    name={inp.name}
                    ref={inp.ref}
                    placeholder={inp.title}
                  />
                )}
              </InputBox>
            ))}
            <Button onClick={p.handleButton} active={p.isLoading}>
              {p.isLoading ? <img src="/images/294.svg" /> : "send message"}
            </Button>
          </FormContainer>
          <DetaildContainer>
            <Photo>
              <img src="/images/portfolio-photo.jpg" alt="photo" />
            </Photo>
            <h2>Kamil Pieczyk</h2>
            <h3>full stack web developer</h3>
            <div>
              <FaAt /> kamil.pieczyk@gmail.com
            </div>
            <div>
              <FaMobile /> +44 7593706457
            </div>
          </DetaildContainer>
        </section>
      </ContentContainer>
      {p.isMessage && <Popup close={p.handleClosePopup} />}
    </Container>
  );
};

export default Contact;
