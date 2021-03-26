import React, { useEffect } from "react";
import { PageProps } from "gatsby";

import { Layout } from "../components/layout";
import Seo from "../components/seo";
import ContactComponent from "../components/contact";

const Contact: React.FC<PageProps> = (p) => {
  console.log(p.location);
  return (
    <Layout>
      <Seo title="Contact to Kamil - kamilpieczyk.github.io" />
      <ContactComponent host={`${p.location.protocol}//${p.location.host}`} />
    </Layout>
  );
};

export default Contact;
