import React, { useEffect } from "react";

import { Layout } from "../components/layout";
import Seo from "../components/seo";
import ContactComponent from "../components/contact";

const Contact: React.FC = (p) => {
  console.log(p);
  return (
    <Layout>
      <Seo title="Contact to Kamil - kamilpieczyk.github.io" />
      <ContactComponent />
    </Layout>
  );
};

export default Contact;
