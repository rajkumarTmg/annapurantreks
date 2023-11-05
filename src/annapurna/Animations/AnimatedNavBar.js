import React from "react";
import { motion } from "framer-motion";
import { animationVariantsNavBar } from "./Animations";

const AnimatedNavBar = ({ children }) => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={animationVariantsNavBar}
    >
      {children}
    </motion.div>
  );
};

export default  React.memo(AnimatedNavBar);
