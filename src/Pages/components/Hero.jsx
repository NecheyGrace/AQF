import React from "react";
import Icon from ".././components/Icon";
import { useNavigate } from "react-router-dom";

function Hero({ text, word }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className=" w-[35%] bg-[#FFD1AA] rounded-r-3xl flex justify-center items-center">
        <div className="pt-6" onClick={goBack}>
          <Icon />
        </div>
        <div className=" w-[50%] ">
          <h3 className="text-black font-bold text-3xl ">{text}</h3>
          <p className="pt-4 text-xl font-normal">{word}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
