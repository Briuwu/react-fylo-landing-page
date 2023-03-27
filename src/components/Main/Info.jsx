import React from "react";

const Info = () => {
  return (
    <section className="mx-auto my-32 grid max-w-[1440px] place-items-center px-16 md:grid-cols-2">
      <img
        src="./images/illustration-stay-productive.png"
        alt="Stay productive Image"
      />
      <div className="grid max-w-xl gap-4">
        <h3 className=" max-w-md text-clamp-24-40 font-bold">
          Stay productive, wherever you are
        </h3>
        <p className="text-clamp-size">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="text-clamp-size">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className="link relative flex items-center gap-2 text-cyan">
          See how Fylo works <img src="./images/icon-arrow.svg" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Info;
