export const animationVariantsNavBar = {
  hidden: {
    opacity: 0,
    y: -1000,
    transition: {
      type: "twin",
      duration: 0.5,
      delay: 0.2,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "twin",
      duration: 0.6,
      delay: 0.5,
      when: "afterChildren",
      ease: "easeInOut",
    },
  },
};

export const animationVariantsMainContent = {
  hidden: {
    opacity: -50,
    transition: {
      type: "twin",
      duration: 0.5,
      delay: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "twin",
      duration: 1,
      delay: 0.5,
      when: "afterChildren",
      ease: "easeInOut",
    },
  },
};

export const animateVariantsDescriptionSection = {
  hidden: {
    opacity: -50,
    y: 15,
    transition: {
      type: "twin",
      duration: 0.2,
      delay: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "twin",
      duration: 0.5,
      delay: 0.1,
      when: "afterChildren",
      ease: "easeInOut",
    },
  },
};
