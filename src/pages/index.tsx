import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Layout } from "../components/layout";
import MainHeader from "../components/main-header";
import WhoIAm from "../components/who-i-am";
import MySkills from "../components/my-skills";
import Separatorbar from "../components/separator-bar";
import Seo from "../components/seo";

const App = () => {
  const IDs: string[] = ["whoIam", "mySkills"];

  const enterAnimation = (id: string) => {
    gsap.to(id, {
      opacity: 1,
      x: 0,
      duration: 0.5,
    });
  };
  const leaveAnimation = (id: string, index: number) => {
    gsap.to(id, {
      opacity: 0,
      x: index === 0 ? -1500 : 1500,
      duration: 0.4,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    IDs.forEach((ID, index) => {
      gsap.set(`#${ID}`, { opacity: 0, x: index === 0 ? -1500 : 1500 });

      ScrollTrigger.create({
        trigger: `#${ID}`,
        start: "top +300px",
        onEnter: () => enterAnimation(`#${ID}`),
        onEnterBack: () => enterAnimation(`#${ID}`),
        onLeave: () => leaveAnimation(`#${ID}`, index),
        onLeaveBack: () => leaveAnimation(`#${ID}`, index),
        // pin: true,
        // pinSpacing: false,
      });
    });
  }, []);

  return (
    <Layout>
      <Seo />
      <MainHeader />
      <div id={IDs[0]}>
        <WhoIAm />
      </div>
      <div id={IDs[1]}>
        <Separatorbar />
        <MySkills />
      </div>
    </Layout>
  );
};

export default App;
