import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="flex-col md:flex-row  items-center">
      <div className="flex justify-center">
        <img
          src={item.image}
          alt="card_profile"
          className="rounded-full object-contain "
        />
      </div>

      <div className="mt-7 text-center">
        <h1 className=" font-bold">{item.heading}</h1>
        <p className="">{item.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
