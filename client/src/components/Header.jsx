import React, { useState, useEffect } from "react";
import Hero from "../pages/Hero";
import supabase from "../config/supabaseclient";
import { Link } from "react-router-dom";
/**
 *
 * @returns Header components
 */
const Header = () => {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserDetails, setCurrentUserDetails] = useState(null);

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

  ///display message for current user

  const setCurrentUserDisplayInfo = async () => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user data:", userError);
        return;
      }

      if (userData) {
        const user = userData.user;
        setCurrentUserDetails(user);
        console.log(currentUserDetails, "myuser");

        // Check if user is not null before accessing its properties
        if (user && user.length > 0) {
          console.log("User details:", user);

          const { data: patientData, error: patientError } = await supabase
            .from("Patients")
            .select()
            .eq("id", user.id);

          if (patientData) {
            setCurrentUserName(patientData[0]?.firstName || "N/A");
            console.log("Patient details:", patientData);
          }

          if (patientError) {
            console.error("Error fetching patient data:", patientError);
          }
        }
      }
    } catch (error) {
      console.error("Error in setCurrentUserDisplayInfo:", error);
    }
  };

  ///handle user logout

  const handleLogOut = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { error } = await supabase.auth.signOut({ scope: "local" });

      if (error) {
        console.log(error);
      }

      if (user) {
        console.log(`signed out sucssefully `, user);
      }
    } catch (error) {
      console.log("Signout error", error);
    }
  };

  useEffect(() => {
    setCurrentUserDisplayInfo();
    handleLogOut();
  }, []);

  return (
    <header className="w-full fixed z-10  items-center">
      <div className="flex flex-1 justify-end mt-4 p-12">
        <div className="flex flex-start">
          {currentUserName &&
            currentUserName.map((detail, index) => (
              <div key={index}>
                <h1>{detail.firstName}</h1>
              </div>
            ))}
        </div>
        <div className="flex hidden md:block " data-aos="fade-left">
          <ul className="flex gap-6">
            <li className="text-black  flex justify-end">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/book">Book</a>
            </li>
            <li>
              <a href="/signup">
                <button>Signup</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button>Login</button>
              </a>
            </li>
            <li>
              <a href="/">
                <button onClick={handleLogOut}>LogOut</button>
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
                <li>
                  <a href="/">
                    <button onClick={handleLogOut}>LogOut</button>
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
