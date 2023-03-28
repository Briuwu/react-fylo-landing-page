import React from "react";
import { motion } from "framer-motion";
import { container, simpleAnimationVariants } from "../../utils/motion";

const Navbar = () => {
  const listItems = ["Features", "Team", "Sign in"];
  return (
    <nav
      aria-label="navbar"
      className="mx-auto flex max-w-[1440px] items-center justify-between p-clamp-nav"
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, threshold: 0.8 }}
        src="./images/logo.svg"
        alt=""
        className="w-clamp-logo"
      />

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.8 }}
        className=" flex gap-clamp-list text-clamp-size"
      >
        {listItems.map((el) => (
          <motion.li
            variants={simpleAnimationVariants}
            className="hover:font-bold hover:underline"
            key={el}
          >
            <a href="#">{el}</a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
