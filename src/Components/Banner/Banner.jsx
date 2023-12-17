import React from "react";
import ban from "/src/assets/ban.jpeg";

const Banner = () => {
  return (
    <div className="relative">
      <img src={ban} alt="" className="w-full h-60 " />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Your Tasks, Your Way</h1>
        <p className="text-lg text-center max-w-md">
          Streamline your day with our TODO app. Stay organized and focused on
          what matters most.
        </p>
      </div>
    </div>
  );
};

export default Banner;
