import React, { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", {
        email: trimmedEmail,
      });

      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Emails ending with @ez.works are not allowed.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#16425f] via-[#091627] to-[#16425f] p-5 text-white flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold text-center">Suite Of Business Support Services</h1>
      <h1 className="my-8 text-2xl font-light text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, odio aliquid id minima dolorum beatae quae sint?
      </h1>
      
      <div className="lg:w-[40%] md:w-[50%] w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full ">
          <div className="flex flex-col gap-1 relative ">
            <input
              type="text"
              className="bg-white text-black border-none h-full px-2 py-1.5 w-full rounded-md"
              placeholder="Abz@Xyz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm absolute -bottom-5">{error}</p>}
            {message && <p className="text-green-500 text-sm absolute -bottom-5">{message}</p>}
          </div>

          <button
            className="bg-[#EA7B2C] w-full px-2 py-1.5  rounded-md cursor-pointer hover:bg-[#d26a23] transition-all duration-300 font-medium text-[15px]"
            type="submit"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
