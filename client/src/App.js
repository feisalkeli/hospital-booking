import React, { useEffect, useState } from "react";
import supabase from "./config/supabaseclient";
import Header from "./components/Header";
import Login from "./pages/Login";
import Hero from "./pages/Hero";
import HomePageLayout from "./pages/HomePage/HomePageLayout";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurServices from "./pages/OurServices";
/**
 *
 * @returns Page layout
 */
function App() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");

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

  useEffect(() => {
    fetchDoctorsData();
  }, []);
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            {/* <Route path="/" element={<Hero />} /> */}

            <Route path="/" element={<HomePageLayout />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  );
}

export default App;
