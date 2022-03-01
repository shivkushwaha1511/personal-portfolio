import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  position: absolute;

  @media only screen and (max-width: 800px) {
    top: 1rem;
    right: calc(1rem + 2vw);
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }

  @media only screen and (min-width: 800px) {
    top: 2rem;
    right: calc(1rem + 2vw);
    color: ${(props) => props.theme.text};
  }

  text-decoration: none;
  z-index: 1;
`;

const RESUME = styled(NavLink)`
  position: absolute;

  @media only screen and (max-width: 800px) {
    top: 47%;
    right: 0%;
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }

  @media only screen and (min-width: 800px) {
    color: ${(props) => props.theme.text};
    top: 49%;
    right: 1rem;
  }

  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;

  @media only screen and (max-width: 800px) {
    top: 42%;
  }

  @media only screen and (min-width: 800px) {
    left: 3rem;
    top: 43%;
  }
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  @media only screen and (max-width: 800px) {
    color: ${(props) => props.theme.text};
  }

  @media only screen and (min-width: 800px) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }

  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0)
}
to{
  transform: rotate(360deg)
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;

  @media only screen and (min-width: 800px) {
    right: 50%;
    width: ${(props) => (props.click ? "50%" : "0%")};
    height: ${(props) => (props.click ? "100%" : "0%")};
    transition: height 0.5s ease, width 1s ease 0.5s;
  }

  @media only screen and (max-width: 800px) {
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease, height 1s ease 0.5s;
  }

  z-index: 1;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1RExSWMdpb85PPlsmIsI8c0g8OpcaE3qp/view?usp=sharing"
    );
  };

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />

        <SocialIcons
          theme={!click ? "light" : window.screen.width > 800 ? "dark" : null}
        />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? (window.screen.width > 800 ? 120 : 50) : 200}
            height={click ? (window.screen.width > 800 ? 120 : 50) : 200}
            fill="currentColor"
          />
          <h3>Click Here</h3>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:shivkushwaha305@gmail.com" }}
          click={click}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>

        <RESUME to="/" onClick={handleResume} click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.h2>
        </RESUME>

        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About Me
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
