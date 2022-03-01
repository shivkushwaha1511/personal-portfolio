import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;

  @media only screen and (min-width: 800px) {
    left: 2rem;
    top: 2rem;
  }

  @media only screen and (max-width: 800px) {
    left: 1rem;
    top: 1rem;
  }

  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <Logo color={props.theme}>SK</Logo>
    </motion.div>
  );
};

export default LogoComponent;
