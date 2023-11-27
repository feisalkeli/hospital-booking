import React, { useEffect, useState } from "react";
import supabase from "./config/supabaseclient";

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
      <div></div>
    </>
  );
}

export default App;
