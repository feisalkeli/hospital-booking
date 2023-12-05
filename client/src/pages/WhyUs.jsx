import React from "react";
import servicesicon from "../assets/img/icons/atom-bond2.svg";
import doctorImage from "../assets/img/bg/doctor-bg.jpg";
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
      <div className="flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="mb-5" data-aos="fade-right">
          <div className="mb-4 xl:mb-10">
            <h1 className="font-bold text-lg italic">
              Comprehensive Services:
            </h1>
            <p className="font-medium">
              From prenatal care to vaccinations and diagnostics, we cover all
              your health needs
            </p>
          </div>
          <div className="mb-4 xl:mb-10">
            <h1 className="font-bold text-lg italic">
              Personalized Attention:
            </h1>
            <p className="font-medium">
              Tailored treatments focused on your unique health goals.
            </p>
          </div>
          <div className="mb-4 xl:mb-10">
            <h1 className="font-bold text-lg italic">
              Patient-Centric Environment:
            </h1>
            <p className="font-medium">
              our comfort and well-being are our priorities.
            </p>
          </div>
          <div className="mb-4 xl:mb-10">
            <h1 className="font-bold text-lg italic">Community Trust:</h1>
            <p className="font-mediumt">
              Join a community that values your health and builds lasting trust.
            </p>
          </div>
        </div>
        <div className="mr-5">
          <img
            src={doctorImage}
            alt="choose us"
            className="rounded-lg"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
