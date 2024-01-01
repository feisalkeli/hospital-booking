import React from "react";
import Hero from "../Hero";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";
import Booking from "../Booking";
/**
 *
 * @returns the layout of the home page
 */
const HomePageLayout = () => {
  return (
    <section>
      <Hero />
      <OurServices />
      <WhyUs />
      <Booking />
    </section>
  );
};

export default HomePageLayout;
