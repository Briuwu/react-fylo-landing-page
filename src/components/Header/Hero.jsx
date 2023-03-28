import React from "react";
import { motion } from "framer-motion";
import { fadeVariants, container } from "../../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.8 }}
      className="grid gap-9 px-10 text-center"
    >
      <motion.img
        variants={fadeVariants("down", 0.4, 0.8)}
        src="./images/illustration-intro.png"
        alt=""
        className="mx-auto"
        height={534}
        width={720}
      />
      <motion.h1
        variants={fadeVariants("down", 0.6, 0.8)}
        className="mx-auto max-w-3xl font-raleway text-clamp-24-40 font-bold"
      >
        All your files in one secure location, accessible anywhere.
      </motion.h1>
      <motion.p
        variants={fadeVariants("down", 0.8, 0.8)}
        className="mx-auto max-w-[620px] text-clamp-14-20"
      >
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </motion.p>
      <motion.a
        variants={fadeVariants("down", 1, 0.8)}
        href="#"
        className="bg-gradient mx-auto rounded-full px-20 py-4 font-bold md:px-24"
      >
        Get Started
      </motion.a>
    </motion.div>
  );
};

export default Hero;
