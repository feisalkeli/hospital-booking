import React, { useEffect, useState } from "react";
import supabase from "./config/supabaseclient";
import Header from "./components/Header";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import HomePageLayout from "./pages/HomePage/HomePageLayout";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import OurServices from "./pages/OurServices";

/**
 *
 * @returns Page layout
 */
function App() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");

  // use useLocation hoook to state the state of whether to display foooter or not
  const [showFooter, setShowFooter] = useState(true);
  //initialize useLocation
  let location = useLocation();

  const fetchDoctorsData = async () => {
    const { data, error } = await supabase.from("Doctors").select();
    console.log(data);

    if (error) {
      setError("failed to fetch");
      console.log(error);
    }

    if (data) {
      setDoctors(data);
    }
  };
  //Footer is shown only in the home page
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowFooter(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchDoctorsData();
  }, []);
  return (
    <>
      <div>
        <Header />

        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}

          <Route path="/" element={<HomePageLayout doctors={doctors} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="patient/:patientId" element={<Patient />} />
        </Routes>

        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
