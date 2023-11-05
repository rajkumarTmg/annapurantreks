import React from "react";
import { motion } from "framer-motion";

const AnimateNavSubItems = ({ children }) => {
  const animationVariantsNavSubItems = {
    hidden: {
      opacity: -50,
      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
    visible: {
      opacity: 50,

      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    exit: {
      opacity: -50,

      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={animationVariantsNavSubItems}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(AnimateNavSubItems);
