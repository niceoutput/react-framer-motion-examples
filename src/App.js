import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Modal from "./Modal";

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(false);

  return (
    <div>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        {/* set open of the Modal through button */}
        <button onClick={() => setToggle(true)}>Open Modal</button>

        <input
          type='range'
          min='-100'
          max='100'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

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
