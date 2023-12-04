import React from "react";
import Hero from "../Hero";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";
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
    </section>
  );
};

export default HomePageLayout;
