import { PageProps } from "gatsby";
import React, { SyntheticEvent, useCallback, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaAddressCard, FaAt, FaBookmark, FaEnvelope } from "react-icons/fa";

import View from "./contact.view";

export interface InputType {
  name: "name" | "email" | "subject" | "message";
  title: string;
  type: "text" | "textarea";
  ref: { current: any };
  icon: IconType;
}

const Contact: React.FC<{ host: string }> = (p) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isMessage, setMessage] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const inputs: InputType[] = [
    {
      name: "name",
      title: "full name",
      type: "text",
      ref: nameRef,
      icon: FaAddressCard,
    },
    {
      name: "email",
      title: "email address",
      type: "text",
      ref: emailRef,
      icon: FaAt,
    },
    {
      name: "subject",
      title: "subject",
      type: "text",
      ref: subjectRef,
      icon: FaBookmark,
    },
    {
      name: "message",
      title: "your message",
      type: "textarea",
      ref: messageRef,
      icon: FaEnvelope,
    },
  ];

  const handleClosePopup = () => {
    setMessage(false);
  };

  const handleButton = useCallback(async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const url: string = "https://kamilpieczyk.tk/contact";
    // const url: string = "http://localhost:3000/contact";
    const body = {
      from: "",
      name: "",
      subject: "",
      message: "",
    };

    inputs.forEach((input) => {
      if (input.name === "email") body.from = input.ref.current.value;
      else if (input.name === "name") body.name = input.ref.current.value;
      else if (input.name === "subject") body.subject = input.ref.current.value;
      else if (input.name === "message") body.message = input.ref.current.value;
    });

    let data: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(body),
    });

    if (data.status === 200) {
      setLoading(false);
      setMessage(true);
    }
  }, []);

  return View({
    inputs,
    handleButton,
    isLoading,
    host: p.host,
    isMessage,
    handleClosePopup,
  });
};

export default Contact;
