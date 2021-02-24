import React from "react";
import { Helmet } from "react-helmet";

import { Layout } from "../components/layout";
import MainHeader from "../components/main-header";
import WhoIAm from "../components/who-i-am";
import MySkills from "../components/my-skills";
import Separatorbar from "../components/separator-bar";

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
    <WhoIAm />
    <Separatorbar />
    <MySkills />
  </Layout>
);

export default App;
