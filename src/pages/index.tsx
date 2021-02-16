import React from "react";
import { Helmet } from "react-helmet";

import { Layout } from "../components/layout";
import MainHeader from "../components/main-header";

const App = () => (
  <Layout>
    <Helmet>
      <title>Kamil Pieczyk Portfolio</title>
      <meta
        name="description"
        content="Kamil Pieczyk is a full stack java-script developer."
      />
    </Helmet>
    <MainHeader />
  </Layout>
);

export default App;
