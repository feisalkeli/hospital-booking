import React, { useState } from "react";
import supabase from "../config/supabaseclient";
import background from "../assets/img/shape-01.png";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const authenticateUser = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message);
        console.log(error, "login error");
      }

      const { user } = data;
      if (user.role === "authenticated") {
        console.log("Login successful");
        console.log(data);
        navigate(`/patient/${user.id}`);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all the fields");
      return;
    }

    // Call the authentication function
    authenticateUser();
  };

  const styles = {
    backgroundImage: background,
  };

  return (
    <section
      className=" overflow-hidden mt-10 p-[180px] flex justify-center"
      style={{ background: `url(${background})` }}
    >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className="border-white focus:border-[#1d4ed8]"
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
              className=" border border-grey focus:border-[#1d4ed8]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 bg-[#1d4ed8]" fullWidth type="submit">
            Log In
          </Button>
        </form>
      </Card>
      {/* {error && <p>Fill in the fields</p>} */}
    </section>
  );
};

export default Login;
