import React, { useState } from "react";
import Hero from "./components/Hero";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <div className="w-full bg-black h-[100vh] flex">
      <Hero text={`Account verification`} />
      <div className="flex  flex-col items-center justify-center gap-3 bg-[#FFEDCC] w-[64%] ml-[2px] rounded-tl-3xl rounded-bl-3xl">
        {/* Four top divs with white background */}
        <div className="flex items-center justify-center space-x-3">
          <input type="number" className="w-1/5 h-16 bg-white" />
          <input type="number" className="w-1/5 h-16 bg-white" />
          <input type="number" className="w-1/5 h-16 bg-white" />
          <input type="number" className="w-1/5 h-16 bg-white" />
        </div>
        <div className="w-[80%] h-[80%] flex justify-end items-end p-8 flex-col">
          <Link to="/finish">
            <button
              className={`status_default bg-[#8BC965] inline-flex font-bold justify-center items-center h-12 w-36 rounded-[0.625rem] border-2 border-black text-black font-['Inter'] text-md leading-[normal]`}
              //   disabled={!isAuthenticated}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Otp;
