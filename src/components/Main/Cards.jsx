import React from "react";

const cardsData = [
  {
    id: 1,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    img: "./images/icon-access-anywhere.svg",
  },
  {
    id: 2,
    title: "Security you can trust",
    description:
      "2-factory authentication and user-controlled encryption are just couple of the security features we allow to help secure your files.",
    img: "./images/icon-security.svg",
  },
  {
    id: 3,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    img: "./images/icon-collaboration.svg",
  },
  {
    id: 4,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    img: "./images/icon-any-file.svg",
  },
];

const cardsElements = cardsData.map((el) => {
  return (
    <div key={el.id} className="grid max-w-sm gap-5">
      <img className="mx-auto" src={el.img} alt={el.title} />
      <h2 className="text-lg font-bold">{el.title}</h2>
      <p>{el.description}</p>
    </div>
  );
});

const Cards = () => {
  return (
    <section className="mx-auto grid max-w-4xl grid-flow-row place-items-center gap-24 text-center md:grid-cols-2">
      {cardsElements}
    </section>
  );
};

export default Cards;
