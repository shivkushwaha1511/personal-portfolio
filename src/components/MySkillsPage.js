import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import { Develope, Web } from "./AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;

  align-items: center;
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 800px) {
    padding-top: 6rem;
    padding-bottom: 7rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;

  @media only screen and (min-width: 800px) {
    width: 30vw;
    height: 60vh;
  }

  @media only screen and (max-width: 800px) {
    width: 55vw;
    height: 40vh;
    margin-left: 3.7rem;
    margin-bottom: 3.5rem;
  }

  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <PowerButton />
      <ParticleComponent theme="light" />
      <Box>
        <Main>
          <Title>
            <Web width={40} height={40} /> Programmer
          </Title>
          <Description>
            I love to write small programs and to solve programming questions
            based on DS Algo.
          </Description>
          <Description>
            <strong>I LIKE TO CODE IN</strong>
            <ul>
              <li>JAVA</li>
              <li>C</li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, EditPlus etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Web Developer
          </Title>
          <Description>
            I like to design simple yet beautiful dynamic websites with a lot of
            functionalities.
          </Description>

          <Description>
            <strong>SKILLS</strong>
            <p>Html, Css, Js, Bootstrap, MERN, NextJs, Heroku etc.</p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github etc.</p>
          </Description>
        </Main>
        <BigTitle
          text="SKILLS"
          top={window.screen.width > 800 ? "78%" : "35%"}
          left={window.screen.width > 800 ? "40%" : "3%"}
        />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
