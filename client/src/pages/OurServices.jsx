import React from "react";

import servicesicon from "../assets/img/icons/atom-bond2.svg";

const OurServices = () => {
  return (
    <section className="p-[40px] mt-[150px]">
      <div className="items-center flex justify-center gap-9">
        <img src={servicesicon} alt="icon_servces" />
        <h1 className="text-black font-bold text-2xl">Our Services</h1>
      </div>
    </section>
  );
};

export default OurServices;
