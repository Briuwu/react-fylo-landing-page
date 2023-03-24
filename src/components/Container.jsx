import React from "react";

const Container = ({ children, customStyle }) => {
  return (
    <div className={`container mx-auto px-16 ${customStyle}`}>{children}</div>
  );
};

export default Container;
