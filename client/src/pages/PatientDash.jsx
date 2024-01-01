import React from "react";

const PatientDash = ({ patient }) => {
  //destructure the patient prop obj
  const { contactNumber, firstName, lastName, email, gender } = patient;
  return (
    <div className="">
      {/* navigation  */}

      <div className="flex flex-col md:flex-row gap-10">
        {/* patient details */}
        <div className=" ">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src=""
                alt="profile_picture"
                className="object-contain  rounded-full"
                loading="lazy"
              />
            </div>

            <div className="text-center">
              <p>
                {firstName} {lastName}
              </p>
              <p>{email}</p>
              <p>{contactNumber}</p>
              <p>{gender}</p>
            </div>
          </div>
        </div>

        {/* patient tables */}
        <div>
          <p>tables</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDash;
