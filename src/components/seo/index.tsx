import React from "react";
import Helmet from "react-helmet";

const Seo: React.FC<{ title?: string }> = (p) => (
  <Helmet>
    <title>{p.title ? p.title : "Kamil Pieczyk Portfolio"}</title>
    <meta
      name="description"
      content="Kamil Pieczyk is a full stack java-script developer."
    />
    <meta
      property="og:image"
      content="http://kamilpieczyk.github.io/images/fb_image.jpg"
    />
  </Helmet>
);

export default Seo;
