import React from "react";
import Contact from "./Contact";

const navigations = ["About Us", "Jobs", "Press", "Blog"];

const navigations2 = ["Contact Us", "Terms", "Privacy"];

const socialsLogo = [
  "./images/facebook-f.svg",
  "./images/instagram.svg",
  "./images/twitter.svg",
];
const Footer = () => {
  return (
    <footer className="relative bg-dark-blue-footer">
      <div className="absolute w-full -translate-y-56 lg:-translate-y-36">
        <Contact />
      </div>
      <div className="mx-auto grid max-w-7xl items-start gap-8 p-4 pt-48">
        <img src="./images/logo.svg" alt="Fylo Logo" />

        <div className="grid items-start gap-4 lg:grid-cols-footer">
          <address className="flex items-start gap-4">
            <img src="./images/icon-location.svg" role="presentation" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              delectus quae quam temporibus dignissimos.
            </p>
          </address>
          <div className="grid gap-4 lg:justify-self-center">
            <div className="flex items-center gap-4">
              <img
                src="./images/icon-phone.svg"
                className="h-4"
                role="presentation"
                alt=""
              />
              <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="./images/icon-email.svg"
                className="h-4"
                role="presentation"
                alt=""
              />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </div>
          </div>
          <nav
            aria-label="Footer"
            className="grid items-start pb-8 lg:grid-cols-2"
          >
            <ul className="mb-8 grid gap-2">
              {navigations.map((el) => (
                <li key={el}>
                  <a href="#">{el}</a>
                </li>
              ))}
            </ul>
            <ul className="grid gap-2">
              {navigations2.map((el) => (
                <li key={el}>
                  <a href="#">{el}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social">
            <ul className="flex items-center justify-center gap-4">
              {socialsLogo.map((img, index) => (
                <li key={index} className="rounded-full border p-2">
                  <a href="#">
                    <img
                      className="aspect-square w-4"
                      src={img}
                      alt=""
                      role="presentation"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
