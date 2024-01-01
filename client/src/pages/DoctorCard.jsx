import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import supabase from "../config/supabaseclient";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  ///check for the logged in user if true navigate to user dash else navigate to signup/login
  const handleBooking = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      navigate(`/patient/${user.id}`);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="items-center">
        <Card className="mt-6 w-92 md:w-96  ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={doctor.Profile}
              alt="doctor"
              className="object-contain overflow-hidden"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {doctor.first_name} {doctor.last_name}
            </Typography>
            <Typography variant="h5" className="mb-2">
              Specialization:{doctor.specialization}
            </Typography>
            <Rating value={doctor.Rating} readonly />
          </CardBody>
          <CardFooter className="pt-0">
            <Button className=" bg-blue-700" onClick={handleBooking}>
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DoctorCard;
