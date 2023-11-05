import React from "react";
import { motion } from "framer-motion";
import { animateVariantsDescriptionSection } from "./Animations";
const AnimateDescriptionSection = ({ children }) => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={animateVariantsDescriptionSection}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(AnimateDescriptionSection);
