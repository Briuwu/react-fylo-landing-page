import React from "react";
import { motion } from "framer-motion";
import { container, fadeVariants } from "../../utils/motion";

const reviewsData = [
  {
    id: 1,
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    avatar: "./images/profile-1.jpg",
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    avatar: "./images/profile-2.jpg",
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 3,
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    avatar: "./images/profile-3.jpg",
    review:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

const Reviews = () => {
  const reviewsElements = reviewsData.map((el) => (
    <motion.figure
      variants={fadeVariants("down", 0.2 * el.id, 0.8)}
      key={el.id}
      className="grid grid-cols-cards items-center gap-y-4 gap-x-2 rounded-md bg-dark-blue-testimonials px-6 pt-12 pb-4"
    >
      <figcaption>
        <img src={el.avatar} alt={el.name} className="w-6 rounded-full" />
      </figcaption>
      <div>
        <p className="font-bold">{el.name}</p>
        <p>{el.role}</p>
      </div>
      <blockquote className="col-span-2 row-span-full">
        <p>{el.review}</p>
      </blockquote>
    </motion.figure>
  ));

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.8 }}
      className="quote relative mx-auto my-40 grid max-w-6xl gap-10 px-10 lg:grid-cols-3 lg:px-0"
    >
      {reviewsElements}
    </motion.section>
  );
};

export default Reviews;
