import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  let location = useLocation();
  return (
    <footer
      className="mt-10 p-4  text-white overflow-hidden"
      style={{ background: "#1d4ed8" }}
    >
      <div
        className="flex flex-col md:flex-row justify-between"
        data-aos="fade-left"
      >
        {/* About Us Section */}
        <div className="mb-4 md:mb-0 md:mr-8">
          <h1 className="text-xl font-bold mb-2">About Us</h1>
          <ul className="hover:cursor-pointer">
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Appointments</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="mt-4 md:mt-0">
          <h1 className="text-xl font-bold mb-2">Our Services</h1>
          <ul className="hover:cursor-pointer">
            <li>Vaccinations</li>
            <li>Blood Tests</li>
            <li>Diagnostic Tests</li>
            <li>Parental/NewBorn</li>
          </ul>
        </div>

        {/* contact us/Socials */}
        <div className="mb-4 md:mb-0 md:mr-8">
          <h1 className="text-xl font-bold mb-2">Contact Us</h1>
          <ul className="hover:cursor-pointer">
            <li>Twitter</li>
            <li>FaceBook</li>
            <li>Instagram</li>
          </ul>
        </div>
        {/* support section */}
        <div className="mt-4 md:mt-0">
          <h1 className="text-xl font-bold mb-2">Support</h1>
          <ul className="hover:cursor-pointer">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Complaints Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
