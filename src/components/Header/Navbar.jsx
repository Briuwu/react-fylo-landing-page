import React from "react";

const Navbar = () => {
  const listItems = ["Features", "Team", "Sign in"];
  return (
    <nav className="mx-auto flex max-w-[1440px] items-center justify-between p-clamp-nav">
      <img src="./images/logo.svg" alt="" className="w-clamp-logo" />

      <ul className=" flex gap-clamp-list text-clamp-size">
        {listItems.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
