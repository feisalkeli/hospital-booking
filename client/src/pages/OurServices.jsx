import React from "react";

import servicesicon from "../assets/img/icons/atom-bond2.svg";
import service1 from "../assets/img/clinic/service-1.jpg";
import service2 from "../assets/img/clinic/service-2.jpg";
import service3 from "../assets/img/clinic/service-3.jpg";
import service4 from "../assets/img/clinic/service-4.jpg";
import service5 from "../assets/img/clinic/service-5.jpg";
import service6 from "../assets/img/clinic/service-5.jpg";

import ServiceCard from "./ServiceCard";

const services = [
  {
    image: service1,
    heading: "Prenatal/New-Born",
    text: "lorem ipsum dolor",
  },
  {
    image: service2,
    heading: "NewBorn Examinations",
    text: "lorem ipsum dolor",
  },
  {
    image: service3,
    heading: "Vaccinations",
    text: "lorem ipsum dolor",
  },
  {
    image: service4,
    heading: "Blood Tests",
    text: "lorem ipsum dolor",
  },
  {
    image: service5,
    heading: "Diagnostic Tests",
    text: "lorem ipsum dolor",
  },
  {
    image: service4,
    heading: "Home Visits",
    text: "lorem ipsum dolor",
  },
];

const OurServices = () => {
  return (
    <section className="p-[40px] mt-[150px]  ">
      <div
        className="items-center flex justify-center gap-7"
        data-aos="fade-left"
      >
        <img src={servicesicon} alt="icon_servces" />
        <h1 className="text-black font-bold text-2xl">Our Services</h1>
      </div>
      {/* Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-3  justify-center gap-2 p-10 items-center w-full md:max-w-[1900px] ">
        {services.map((item, index) => (
          <div key={index} className=" hover:shadow-xl  ">
            <ServiceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
