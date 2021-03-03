import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Layout } from "../components/layout";
import ContactComponent from "../components/contact";

const Contact: React.FC = (p) => {
  console.log(p);
  return (
    <Layout>
      <Helmet>
        <title>Contact - Kamil Pieczyk Portfolio</title>
        <meta
          name="description"
          content="Kamil Pieczyk is a full stack java-script developer."
        />
      </Helmet>
      <ContactComponent />
    </Layout>
  );
};

export default Contact;
