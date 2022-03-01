// Home Button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const Power = styled.button`
  position: fixed;

  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;

  @media only screen and (max-width: 800px) {
    top: 1rem;
    width: 2rem;
    height: 2rem;
  }

  @media only screen and (min-width: 800px) {
    top: 2rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn
          width={window.screen.width > 800 ? 30 : 20}
          height={window.screen.width > 800 ? 30 : 20}
          fill="currentColor"
        />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
