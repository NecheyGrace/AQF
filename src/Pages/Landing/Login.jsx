import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RetroRoundedCorner from "../components/RetroRoundedCorner";
import AQF from "../../assets/AQF.png";
import pexels from "../../assets/pexels.png";
import Icon from "../components/Icon";
import "../../index.css";

const TextInput = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex my-1 items-center w-[200px]">
        <p className="text-[28px] mr-2">{text}</p>
      </div>
      <input
        className="px-4 w-[400px] h-[35px] border border-black rounded-full"
        type="text"
      />
    </div>
  );
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen space-x-1 bg-black">
      <div className="w-[36%]">
        <img
          src={pexels}
          className="rounded-r-3xl object-cover"
          alt="Background"
        />
        <div onClick={goBack}>
          <Icon />
        </div>
      </div>
      <div className="bg-[#FFEDCC] w-[64%] rounded-l-2xl pt-10 pl-16">
        <div className="w-full h-[25%]">
          <img src={AQF} alt="Logo" />
        </div>
        <div className="w-full h-[75%] flex flex-col">
          <h2 className="text-4xl font-bold w-80 leading-[50px]">
            Welcome back, Storyteller
          </h2>
          <div className="w-[90%] mt-16">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-light">Email address</p>
              <input
                type="text"
                className="w-[70%] bg-white h-10 rounded-3xl px-4 outline-none ring-1 ring-black"
              />
            </div>
            <div className="flex items-center justify-between mt-8">
              <p className="text-2xl font-light">Password</p>
              <input
                type={showPassword ? "text" : "password"}
                className="w-[70%] bg-white h-10 rounded-3xl px-4 outline-none ring-1 ring-black"
              />
            </div>
            <div className="flex items-center pl-[200px] mt-2">
              <input
                type="checkbox"
                className="mr-1"
                onClick={toggleShowPassword}
              />
              Show Password
            </div>
            <div className="flex flex-col items-center justify-center w-full pr-16 py-4 mt-2">
              <Link to="/name">
                <RetroRoundedCorner name={"login"} />
              </Link>
              <p className="text-base underline pt-4">Forgot your password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
