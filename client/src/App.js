import React, { useEffect, useState } from "react";
import supabase from "./config/supabaseclient";
import Header from "./components/Header";

import Footer from "./components/Footer";
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

        <Footer />
      </div>
    </>
  );
}

export default App;
