import React from "react";

import { Container, SkillsContainer } from "./my-skills.styles";
import { Title } from "../who-i-am/who-i-am.styles";
import { Skill as SkillType } from "./";
import Skill from "./skill";

interface ViewType {
  skills: SkillType[];
}

const View: React.FC<ViewType> = (p) => {
  return (
    <Container id="my-skills">
      <Title>My skills 👩🏻‍💻</Title>
      <SkillsContainer>
        {p.skills.map((skill) => (
          <Skill
            key="name"
            title={skill.title}
            imagePath={skill.imagePath}
            level={skill.level}
          />
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default View;
