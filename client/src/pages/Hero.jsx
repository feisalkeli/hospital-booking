import React from "react";
import backgroundImage from "../assets/img/bg/home-13-banner.png";
import HeroImage from "../assets/img/blog/blog-02.jpg";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className=" ">
      <div className="w-full relative  bg-cover bg-no-repeat md:bg-contain bg-opacity-65 brightness-75 ">
        <img src={backgroundImage} alt="" className="object-contain w-full " />

        {/* Hero Card */}

        <div className=" flex flex-col md:flex-row gap-[150px] absolute top-[120px] ml-6 md:top-[120px] md:p-[120px] items-center">
          {/* Hero Text */}
          <div className=" flex flex-col " data-aos="fade-right">
            <h1 className="font-bold italic text-md md:text-[50px]">
              Your Health is Our Priority
            </h1>
            <p className="max-w-[320px] mt-6 md:text-[30px] md:max-w-[500px]">
              Book appointments with ease and take control of your well-being.
            </p>
            {/*  */}
            <div className="mt-3 items-center">
              <Button title="Book Now" />
            </div>
          </div>
          {/* Hero Image */}
          <div className="hidden xl:block " data-aos="fade-left">
            <img
              src={HeroImage}
              alt="hero Image"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
