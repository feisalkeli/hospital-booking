import React, { useState, useEffect } from "react";
import Hero from "../pages/Hero";

import { Link } from "react-router-dom";
/**
 *
 * @returns Header components
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  ///Sets state when Humberger icon is clicked
  const handleOpen = () => {
    setIsOpen(true);
    console.log("clicked");
  };
  //Sets state when humberger icon is closed
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed z-10 right-0 items-center">
      <div className="flex flex-1 justify-end mt-4 p-12">
        <div className="flex hidden md:block " data-aos="fade-up">
          <ul className="flex gap-6">
            <li className="text-black  flex justify-end">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Book</a>
            </li>
            <li>
              <a href="">
                <button>Signup</button>
              </a>
            </li>
            <li>
              <a href="/login">
                <button>Login</button>
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger icon */}
        {!isOpen && (
          <div className="block md:hidden " onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}

        {/* Modal */}
        {isOpen && (
          <div className="flex justify-end  block md:hidden ">
            <div>
              <ul className="flex flex-col mb-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Book</a>
                </li>
                <li>
                  <a href="">
                    <button>Signup</button>
                  </a>
                </li>
                <li>
                  <a href="/login">
                    <button>Login</button>
                  </a>
                </li>
                <div className="" onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
