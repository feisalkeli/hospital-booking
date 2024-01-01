import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseclient";
import bookingicon from "../assets/img/icons/atom-bond2.svg";
import DoctorCard from "./DoctorCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Carousel } from "@material-tailwind/react";

import background from "../assets/img/cloud-bg.png";
const Booking = () => {
  const [doctors, setDoctors] = useState([]); ///set the initial doctors state
  const [error, setError] = useState("");

  ///fetch doctors from supabase
  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase.from("Doctors").select();

      //handle error

      if (error) {
        console.log("error fetching doctors", error);
      }

      ///handle if doctors are true

      if (data) {
        setDoctors(data);
        console.log(doctors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  ///fetch doctors once component mounts

  useEffect(() => {
    fetchDoctors();
    return () => {};
  }, []);
  return (
    <section className="p-10 " style={{ background: `url(${background})` }}>
      <div
        className="items-center flex justify-center gap-7 mb-9"
        data-aos="fade-up"
      >
        <img src={bookingicon} alt="icon" />
        <h1 className="text-2xl font-bold">
          Book an Appointment with Our Doctors
        </h1>
      </div>

      {/* Map through doctors array */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-2">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <Skeleton count={10} className="flex justify-center items-center" />
        )}
      </div>

      <p>{error && error}</p>
    </section>
  );
};

export default Booking;
