import React from "react";

const Hero = () => {
  return (
    <section className="grid gap-9 px-10 text-center ">
      <img src="./images/illustration-intro.png" alt="" className="mx-auto" />
      <h1 className="mx-auto max-w-3xl font-raleway text-clamp-24-40 font-bold">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="mx-auto max-w-[620px] text-clamp-14-20">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <a
        href="#"
        className="bg-gradient mx-auto rounded-full px-20 py-4 font-bold md:px-24"
      >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
