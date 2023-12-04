import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseclient";
import { useParams } from "react-router-dom";
/**
 *
 * @returns A single Patient Data once the Patient is
 * Authenticated from the Login Page
 */
const Patient = () => {
  const [patientData, setPatientData] = useState([]); ///sets state of patient data

  const { patientId } = useParams();

  ///fetch patient details based on user id
  const fetchPatientDetails = async () => {
    const { data, error } = await supabase
      // fetch patient data based on userId
      .from("Patients")
      .select("*")
      .eq("id", patientId);
    //Handle error
    if (error) {
      console.log(error);
    }
    //Handle if data is true
    if (data && data.length > 0) {
      setPatientData(data);
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, []);
  return (
    <section className=" mt-10 p-[180px] ">
      {/* map through patientdata */}
      {patientData &&
        patientData.map((patient, index) => (
          <div key={index}>{patient.firstName}</div>
        ))}
    </section>
  );
};

export default Patient;
