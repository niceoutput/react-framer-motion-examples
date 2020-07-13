import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial='closed'
      animate={isNavOpen ? "open" : "closed"}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <ul>
        <li>
          <a href='#'>One</a>
        </li>
        <li>
          <a href='#'>Two</a>
        </li>
        <li>
          <a href='#'>Three</a>
        </li>
        <li>
          <a href='#'>Four</a>
        </li>
      </ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0;
      padding: 0;
      font-size: 2rem;
      display: block;

      a {
        color: white;
      }
    }
  }
`;

export default Nav;
