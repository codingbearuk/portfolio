import React from "react";

import { Container, Title, Text } from "./who-i-am.styles";

const View: React.FC = (p) => {
  return (
    <Container id="who-i-am">
      <Title>Who I am? 👱🏻‍♂️</Title>
      <Text>
        Let me introduce myself - my name is Kamil and I'm full stack web
        developer. Coding with java-script makes me happy - It's not only a job
        I've got a lot of fun 🤹🏻‍♂️
      </Text>
      <Text>
        At the beginning of my journey with programming, I went to an IT school
        based in a Polish city - Bytom. The school gave me widely understood
        knowledge about computer science, programming, databases, and some
        graphic design basics. I didn't get any java-script knowledge at school
        but I have a strongly rooted object-oriented programming paradigm (C++).
        I also got knowledge about web development languages: HTML, CSS and PHP.
        Nowadays everything has changed and javascript is undisputed king of
        web. Everything that I know about this language I've learned on my own
        spending many hours (or rather years) in VS Code.
      </Text>
      <Text>
        For the time being, I know a lot about JS by itself, node.js, and
        react.js and use them on daily basis. In the javascript environment,
        word gets every day a new library or framework. I cannot say that I know
        everything - no one knows and this is impossible but I'm trying to get
        more all the time. In this profession - if you would like to be good -
        you absolutely have to learn new things.
      </Text>
      <Text>
        If I'm away from the computer I like jiu-jitsu, MMA, and bodybuilding. I
        used to train jiu-jitsu and MMA and even had some successes, but now I'm
        too old 👨🏻‍🦳
      </Text>
    </Container>
  );
};

export default View;
