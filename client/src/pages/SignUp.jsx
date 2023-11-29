import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseclient";
import background from "../assets/img/shape-02.png";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState("");

  // Authenticate the user first

  const handleUserAuth = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // handle error

    if (error) {
      setError(error);
    }

    ///destructure the user from the data obj
    const { user } = data;

    ///create a user entry in the db with other user parameters

    const { data: dbData, error: dbError } = await supabase
      .from("patients")
      .upsert(
        [
          {
            user_id: user.id,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            contactNumber: contactNumber,
          },
        ],
        { onConflict: ["user_id"] }
      );

    if (dbError) {
      console.error("Error creating user entry in the database:", dbError);
      return null;
    }
    return user; // Return the authenticated user
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUserAuth();
  };
  return (
    <section
      className="mt-10 p-[180px] flex justify-center "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your First Name
              </Typography>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size="lg"
                placeholder="First_Name"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Last Name
              </Typography>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size="lg"
                placeholder="Last_Name"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                placeholder="name@mail.com"
                type="email"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Gender
              </Typography>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size="lg"
                placeholder="Gender"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Contact Number
              </Typography>
              <Input
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                type="number"
                size="lg"
                placeholder="0700 000 000"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="lg"
                placeholder="********"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button className="mt-6 bg-blue-600" fullWidth type="submit">
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-gray-900">
                Log In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default SignUp;
