import React, { useState } from "react";
import supabase from "../config/supabaseclient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authenticateUser = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message);
      }

      if (user) {
        console.log("Login successful");
        // You can redirect the user to another page upon successful login
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

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="shadow-xl p-8 bg-white rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="email">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </section>
  );
};

export default Login;
