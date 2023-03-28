import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { container, zoomVariants } from "../../utils/motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <motion.div
      variants={zoomVariants(0.2, 0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.8 }}
      className="mx-auto grid max-w-[55rem] gap-8 rounded-md bg-dark-blue-intro p-8 pb-10 text-center shadow-lg"
    >
      <div className="mx-auto grid max-w-2xl gap-4 px-4">
        <h4 className=" text-clamp-18-32 font-bold">Get early access today</h4>
        <p className="text-clamp-size">
          It only takes a minute to sign up and our free starter tier is
          extremely generou. If you have any questions our support team would be
          happy to help you.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 lg:grid-cols-contact lg:px-10"
      >
        <div className="relative">
          <input
            className="w-full rounded-full p-4 text-black"
            type="email"
            {...register("email", {
              required: "Please enter a valid email address",
            })}
            placeholder="email@example.com"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="absolute -bottom-7 left-12 text-sm text-light-red">
              {errors.email?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient mt-4 w-full rounded-full p-4 font-bold lg:mt-0"
        >
          Get Started For Free
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
