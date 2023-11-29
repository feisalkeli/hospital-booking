import React from "react";
import servicesicon from "../assets/img/icons/atom-bond2.svg";

const WhyUs = () => {
  return (
    <section className="p-[80px]">
      <div
        className="items-center flex justify-center gap-7 mb-9"
        data-aos="fade-up"
      >
        <img src={servicesicon} alt="icon" />
        <h1 className="text-2xl font-bold">Why Choose Us?</h1>
      </div>
      <div className="flex md:flex-row-reverse justify-center items-center">
        <div className="">
          <img src="" alt="choose us" />
        </div>
        <div className="">text</div>
      </div>
    </section>
  );
};

export default WhyUs;
