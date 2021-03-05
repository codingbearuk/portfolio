import React from "react";

import View from "./projects.view";

interface ProjectsInterface {
  projects: {
    node: {
      Title: string;
      content: string;
      created_at: string;
      date: string | Date;
      live: string;
      git: string;
      id: string;
      mainPictrue: {
        publicURL: string;
      };
    };
  }[];
}

const Projects: React.FC<ProjectsInterface> = (p) => {
  const projects = [...p.projects].sort((a, b) =>
    new Date(a.node.date) > new Date(b.node.date) ? -1 : 1
  );

  console.log(projects);

  return View({ projects });
};

export default Projects;
