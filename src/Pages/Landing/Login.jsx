import React from "react";
import { Link } from "react-router-dom";
import RetroRoundedCorner from "../components/RetroRoundedCorner";
import AQF from "../../assets/AQF.png";
import pexels from "../../assets/pexels.png";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import "../../index.css";

const TextInput = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex my-1 items-center w-[200px]">
        <p className="text-[28px] mr-2">{text}</p>
      </div>
      <input className=" px-4 w-[400px] h-[35px] border border-black rounded-full" />
    </div>
  );
};
function Login() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-full bg-[#000000] flex justify-center overflow-hidden">
      <div className="w-[40%]">
        <img
          className=" rounded-r-3xl object-cover w-full h-full"
          src={pexels}
          alt=""
        />
        <div onClick={goBack}>
          <Icon />
        </div>
      </div>

      <div className="w-[60%]  ml-[2px] flex flex-col justify-center items-start  rounded-tl-3xl rounded-bl-3xl pl-[100px]  font-light  bg-[#FFEDCC]  ">
        <div className="pr-[69px]">
          <img src={AQF} alt="Logo" className="absolute top-0 pt-[41px]" />
          <h3 className=" w-[609px] text-black font-['Readex text-[1.9rem] font-bold leading-[normal] pt-[131px]">
            Welcome back, <br /> Storyteller
          </h3>

          <div className="flex flex-col justify-center items-center mt-5 pb-5">
            <TextInput text={"Email address"} />
            <TextInput text={"Password"} />
          </div>
          <div className="pt-5 space-y-4 flex flex-col items-center">
            <Link to="/login">
              <RetroRoundedCorner name={"Login"} />
            </Link>
            <p className="text-base text-[#000000] underline">
              Forgot Your password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
