import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/Me.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  @media only screen and (min-width: 800px) {
    width: 65vw;
    height: 55vh;
    background: linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        top;

    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid ${(props) => props.theme.body};
    border-right: 2px solid ${(props) => props.theme.text};
  }

  @media only screen and (max-width: 800px) {
    height: 0;
    width: 65vw;
    border-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    );
    border-image-slice: 1;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid;
    border-right: 2px solid;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }

  z-index: 1;
`;

const SubBox = styled.div`
  @media only screen and (min-width: 800px) {
    width: 50%;
    .pic {
      position: absolute;
      bottom: 0.5%;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 75%;
      height: auto;
    }
  }

  @media only screen and (max-width: 800px) {
    height: 50%;
    .pic {
      position: absolute;
      bottom: 0.5%;
      height: 110%;
      width: auto;
      top: 90%;
      right: 1.5rem;
    }
  }

  position: relative;
  display: flex;
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &>*: last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: window.screen.width > 800 ? "55vh" : "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Shiv Kushwaha</h3>
          <h6>
            I design simple yet beautiful dynamic websites and like coding.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
