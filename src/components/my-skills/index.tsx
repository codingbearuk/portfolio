import React from "react";

import View from "./my-skills.view";

export interface Skill {
  title: string;
  imagePath: string;
  level: number;
}

const MySkills: React.FC = (p) => {
  const skills: Skill[] = [
    {
      title: "HTML & CSS",
      imagePath: "/images/undraw_static_website_0107.svg",
      level: 100,
    },
    {
      title: "java-script",
      imagePath: "/images/undraw_static_assets_rpm6.svg",
      level: 98,
    },
    {
      title: "type-script",
      imagePath: "/images/undraw_Typing_re_d4sq.svg",
      level: 55,
    },
    {
      title: "React Framework",
      imagePath: "/images/undraw_react_y7wq.svg",
      level: 90,
    },
    {
      title: "React Redux",
      imagePath: "/images/undraw_cloud_files_wmo8.svg",
      level: 80,
    },
    {
      title: "React Router",
      imagePath: "/images/undraw_On_the_way_re_swjt.svg",
      level: 80,
    },
    {
      title: "Next Framework",
      imagePath: "/images/undraw_next_js_8g5m.svg",
      level: 80,
    },
    {
      title: "Gatsby",
      imagePath: "/images/undraw_gatsbyjs_st4g.svg",
      level: 60,
    },
    {
      title: "Node & Express Framework",
      imagePath: "/images/undraw_code_inspection_bdl7.svg",
      level: 80,
    },
    {
      title: "Mongo DB, and other databases",
      imagePath: "/images/undraw_server_q2pb.svg",
      level: 60,
    },
    {
      title: "Linux/Bash environment",
      imagePath: "/images/undraw_hacker_mind_6y85.svg",
      level: 60,
    },
    {
      title: "Deployment",
      imagePath: "/images/undraw_cloud_hosting_aodd.svg",
      level: 60,
    },
  ];

  return View({ skills });
};

export default MySkills;
