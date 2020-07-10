import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <article onClick={() => setIsToggled((prevState) => !prevState)}>
      <h2 role='button'>The Heading</h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
