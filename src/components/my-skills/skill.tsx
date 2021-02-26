import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px 30px;
  padding-bottom: 90px;
  border: 1px dotted ${({ theme }) => theme.colors.blue};
  border-radius: 5px;

  img {
    width: 80%;
    max-width: 170px;
    max-height: 110px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.darkblue};
    font-size: 1.3em;
    text-align: center;
    margin: 10px 0;
    position: absolute;
    bottom: 10px;
  }
`;

const Level = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: -25px;
  left: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
`;

interface SkillType {
  title: string;
  imagePath: string;
  level: number;
}

const Skill: React.FC<SkillType> = (p) => {
  return (
    <Container>
      <img src={p.imagePath} alt={`skill-image-${p.title}`} />
      <h2>{p.title}</h2>
      <Level>{p.level}%</Level>
    </Container>
  );
};

export default Skill;
