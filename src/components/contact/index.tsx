import React, { useCallback, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaAddressCard, FaAt, FaBookmark, FaEnvelope } from "react-icons/fa";

import View from "./contact.view";

export interface InputType {
  name: "name" | "email" | "subject" | "message";
  title: string;
  type: "text" | "textarea";
  ref: React.Ref<any>;
  icon: IconType;
}

const Contact: React.FC = (p) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const nameRef: React.Ref<HTMLInputElement> = useRef(null);
  const emailRef: React.Ref<HTMLInputElement> = useRef(null);
  const subjectRef: React.Ref<HTMLInputElement> = useRef(null);
  const messageRef: React.Ref<HTMLTextAreaElement> = useRef(null);

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

  const handleButton = useCallback((e: Event) => {
    e.preventDefault();
    setLoading(true);
  }, []);

  return View({ inputs, handleButton, isLoading });
};

export default Contact;
