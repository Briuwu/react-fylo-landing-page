import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: errors } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <h4>Get early access today</h4>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generou. If you have any questions our support team would be
          happy to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email@example.com"
        />
        <button type="submit">Get Started For Free</button>
      </form>
    </div>
  );
};

export default Contact;
