import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const liVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -20, opacity: 0 },
};

const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
  closed: {},
};

const links = ["one", "two", "three", "four"];

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial='closed'
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link}>
            <a href='#'>{link}</a>
          </motion.li>
        ))}
      </motion.ul>
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
      margin: 0 0 1rem;
      padding: 0;
      font-size: 2rem;
      display: block;

      a {
        color: white;
        text-decoration: none;
        border-bottom: 2px transparent solid;
        transition: 0.3s ease border;

        &:hover {
          border-bottom: 2px solid var(--blue);
        }
      }
    }
  }
`;

export default Nav;
