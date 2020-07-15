import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const Colors = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

const Squares = () => {
  const [colorList, setColorList] = useState(Colors);
  return (
    <div>
      <button onClick={() => setColorList(shuffle(colorList))}>Shuffle</button>
      {colorList.map((color) => (
        <motion.div
          key={color}
          positionTransition={{
            damping: 100,
            stiffness: 10,
          }}
          style={{ background: color, height: 100, width: 100 }}
        />
      ))}
    </div>
  );
};

export default Squares;
