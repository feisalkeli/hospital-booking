import React from "react";

const ServiceCard = ({ item }) => {
  console.log(item);
  return (
    <div className="flex justify-center">
      <img src={item.image} alt="card_profile" className="rounded-full mb-4" />
      <div className="mt-7 ">
        <h1 className="text-center font-bold">{item.heading}</h1>
        <p className="text-center">{item.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
