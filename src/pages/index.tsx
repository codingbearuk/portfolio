import React, { useEffect } from "react";

import { setPosition } from "../../store/actions/index-page-positions.actions";
import store from "../../store/store";

import { Layout } from "../components/layout";
import MainHeader from "../components/main-header";
import WhoIAm from "../components/who-i-am";
import MySkills from "../components/my-skills";
import Separatorbar from "../components/separator-bar";
import Seo from "../components/seo";

const App = () => {
  const setSectionsPosition = () => {
    const whoiam: any = document.querySelector("#who-i-am");
    const myskills: any = document.querySelector("#my-skills");
    store.dispatch(setPosition("set-who-i-am-position", whoiam.offsetTop));
    store.dispatch(setPosition("set-my-skills-position", myskills.offsetTop));
  };

  useEffect(setSectionsPosition, []);

  return (
    <Layout>
      <Seo />
      <MainHeader />
      <WhoIAm />
      <Separatorbar />
      <MySkills />
    </Layout>
  );
};

export default App;
