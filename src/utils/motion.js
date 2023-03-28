export const container = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const fadeVariants = (direction, delay, duration) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay,
      type: "tween",
      ease: "easeOut",
      duration,
    },
  },
});

export const zoomVariants = (delay, duration) => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "-58%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, type: "tween", ease: "easeOut", duration },
  },
});

export const simpleAnimationVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
