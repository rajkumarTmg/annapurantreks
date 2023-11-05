import React from "react";
import { motion } from "framer-motion";
import { animationVariantsMainContent } from "./Animations";
const AnimatedMainContent = ({ children }) => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={animationVariantsMainContent}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(AnimatedMainContent);
