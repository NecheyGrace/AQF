import React from "react";
import ham from "../../assets/ham.png";
import prompt from "../../assets/prompt.png";
import story from "../../assets/story.png";
import profile from "../../assets/profile.png";
function MenuOpen() {
  return (
    <div className="flex flex-col items-end  ">
      <div className="w-[17rem] flex justify-between items-center h-[6.5rem] rounded-tl-lg rounded-bl-lg bg-[#ffd380] pr-[12px] pl-[16px]">
        <div className=" rounded-l-md w-[65px] h-[90px] flex flex-col justify-center items-center">
          <img src={ham} alt="" />
          <p className="text-sm pt-2">Menu</p>
        </div>
        <div>
          <p className="text-xl font-bold">AQF</p>
        </div>
      </div>
      <div className="flex flex-col items-start w-[16rem]">
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#FFA355] bg-[#ffe1aa]">
          <img src={prompt} alt="" />
          <div className=" text-black  font-semibold text-base leading-[normal]">
            Record a story
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#FFA355] bg-[#ffe1aa]">
          <img src={story} alt="" />
          <div className=" text-black  text-base font-semibold leading-[normal]">
            Story library
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 border-b border-b-[#FFA355] bg-[#ffe1aa]">
          <img src={profile} alt="" />
          <div className=" text-black  text-base font-semibold leading-[normal]">
            View profile
          </div>
        </div>
        <div className="flex justify-end items-center gap-2.5 self-stretch py-2 px-4 rounded-bl-lg bg-[#ffe1aa]">
          <div className=" text-[#000]  font-normal text-sm leading-[normal]">
            Acknowledgements
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOpen;
