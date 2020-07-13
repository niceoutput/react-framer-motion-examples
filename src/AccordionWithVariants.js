import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <article onClick={() => setIsToggled((prevState) => !prevState)}>
      <h2 role='button'>The Heading</h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            style={{ overflow: "hidden" }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              amet odio ut quae facilis quos veniam, enim magnam tempora
              corrupti ratione officiis incidunt laboriosam sapiente libero quas
              dolore expedita ad.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
