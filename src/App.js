import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(1);

  return (
    <div>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <AnimatePresence>
          {isToggled && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ x: value + "px", opacity: isToggled }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        {/* set toggle of the title through button */}
        <button onClick={() => setToggle((prevValue) => (prevValue ? 0 : 1))}>
          Toggle
        </button>

        {/* animate the value from the range input */}
        <input
          type='range'
          min='-100'
          max='100'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </div>
  );
}

export default App;
