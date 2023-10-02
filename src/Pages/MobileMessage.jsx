import React from "react";
import AQF from "../assets/AQF.png";
import direct from "../assets/direct.png";
import phone from "../assets/phone.png";
import desktop from "../assets/desktop.png";

function MobileMessage() {
  return (
    <div className="flex flex-col justify-center items-center px-[40px] relative w-[390px] h-[844px] bg-[#FFEDCC]">
      <img
        src={AQF}
        alt="Logo"
        className="absolute top-[40px] left-[40px] object-cover"
      />
      <div className="flex flex-col w-[310px] items-start gap-[36px] relative">
        <div className="relative w-fit mt-[-1.00px] font-bold ">
          Hello storyteller!
        </div>
        <p className="relative w-[305px] ">
          It looks like you’re tying to visit our platform with a mobile device.
        </p>
        <p className="relative w-[305px]">
          We hope to develop a mobile version in the near future, but for now
          our platform can only be viewed on larger screens.
        </p>
        <p className="relative w-[305px] font-bold ">
          Please change to a laptop or desktop to access the AQF platform.
        </p>
      </div>
      <div className="flex justify-center items-center gap-[38px] px-[40px] pt-[76px]">
        <img src={phone} alt="" />
        <img src={direct} alt="" />
        <img src={desktop} alt="" />
      </div>
    </div>
  );
}

export default MobileMessage;
