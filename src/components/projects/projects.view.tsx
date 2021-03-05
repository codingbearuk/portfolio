import React from "react";

import { Container, ProjectContainer } from "./projects.styles";
import Project from "./project";

interface ViewInterface {
  projects: {
    node: {
      Title: string;
      content: string;
      created_at: string;
      date: string | Date;
      id: string;
      live: string;
      git: string;
      mainPictrue: {
        publicURL: string;
      };
    };
  }[];
}

const View: React.FC<ViewInterface> = (p) => {
  return (
    <Container>
      <h1>
        My Recent <span>Works</span>
      </h1>
      <p>this is a place where you can find my recent projects</p>
      <ProjectContainer>
        {p.projects.map((project) => (
          <Project {...project.node} />
        ))}
      </ProjectContainer>
    </Container>
  );
};

export default View;
