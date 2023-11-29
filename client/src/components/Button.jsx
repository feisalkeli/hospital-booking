import React from "react";

const Button = ({ title }) => {
  return (
    <div className=" rounded-lg bg-blue-600 p-4 max-w-[180px] items-center">
      <button className="text-white text-center">{title}</button>
    </div>
  );
};

export default Button;
